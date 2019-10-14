import { Record } from "immutable";
import {
  FAILED,
  LOAD_SESSION,
  START,
  SUCCESS,
  SELECT_SEAT,
  DESELECT_SEAT,
  RESERVE_ORDER,
  BUY_ORDER
} from "../config/actionconst";

// const SeatModel = Record({
//   number: null,
//   skip: 0,
//   span: 0,
//   isSelected: false,
//   isReserved: false,
//   isPurchased: false
// });
//
// const RowModel = Record({
//   number: null,
//   type: '__default_row_type__',
//   seats: []
// });

const HallModel = Record({
  name: "__default_hall_name__",
  rows: []
});

const SessionModel = Record({
  hallTitle: "",
  movieTitle: "",
  timestamp: null,
  place: {
    country: "",
    city: "",
    name: ""
  },
  hall: new HallModel()
});

const ReducerState = Record({
  entities: new SessionModel(),
  loading: false,
  loaded: false
});

const defaultSession = new ReducerState();

export default (session = defaultSession, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_SESSION + START:
      return session.set("loading", true).set("loaded", false);

    case LOAD_SESSION + SUCCESS:
      return session
        .update("entities", entities => entities.mergeDeep(payload))
        .set("loading", false)
        .set("loaded", true);

    case LOAD_SESSION + FAILED:
      return session;

    case SELECT_SEAT:
      return session.updateIn(
        ["entities", "hall", "rows", payload.row_id, "seats", payload.seat_id],
        value => ({
          ...value,
          isSelected: true
        })
      );

    case DESELECT_SEAT:
      return session.updateIn(
        ["entities", "hall", "rows", payload.row_id, "seats", payload.seat_id],
        value => ({
          ...value,
          isSelected: false
        })
      );

    case RESERVE_ORDER:
      return session.setIn(
        ["entities", "hall", "rows"],
        session.entities.hall.rows.map(row => ({
          ...row,
          seats: row.seats.map(seat =>
            seat.isSelected
              ? {
                  ...seat,
                  isReserved: seat.isSelected,
                  isSelected: false
                }
              : { ...seat }
          )
        }))
      );

    case BUY_ORDER:
      return session.setIn(
        ["entities", "hall", "rows"],
        session.entities.hall.rows.map(row => ({
          ...row,
          seats: row.seats.map(seat =>
            seat.isSelected
              ? {
                  ...seat,
                  isPurchased: seat.isSelected,
                  isSelected: false
                }
              : { ...seat }
          )
        }))
      );

    default:
      return session;
  }
};
