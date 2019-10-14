import { Record, List } from "immutable";
import {
  ADD_SEAT_TO_ORDER,
  REMOVE_SEAT_FROM_ORDER,
  RESERVE_ORDER,
  BUY_ORDER
} from "../config/actionconst";

// const SeatModel = Record({

// });

export const SeatModel = Record({
  row_id: null,
  seat_id: null,
  row: null,
  seat: null,
  price: null
});

const ReducerState = Record({
  seats: List([], SeatModel)
});

const defaultOrder = new ReducerState();

export default (order = defaultOrder, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SEAT_TO_ORDER:
      return order.mergeIn(["seats"], payload);

    case REMOVE_SEAT_FROM_ORDER:
      return order.updateIn(["seats"], seats => {
        return seats.filter(
          seat =>
            !(
              seat.row_id === payload.row_id && seat.seat_id === payload.seat_id
            )
        );
      });

    case RESERVE_ORDER:
      return order.removeIn(["seats"]);

    case BUY_ORDER:
      return order.removeIn(["seats"]);

    default:
      return order;
  }
};
