import {
  LOAD_SESSION,
  START,
  SUCCESS,
  SELECT_SEAT,
  DESELECT_SEAT
} from "../config/actionconst";
import sessionMockData from "../mock/sessionMockData";

export const loadSessionStart = () => dispatch => {
  dispatch({
    type: LOAD_SESSION + START
  });
};

export const loadSessionSuccess = () => dispatch => {
  const res = {
    status: 200,
    data: { ...sessionMockData }
  };

  dispatch({
    type: LOAD_SESSION + START
  });

  setTimeout(() => {
    dispatch({
      type: LOAD_SESSION + SUCCESS,
      payload: res.data
    });
  }, 1500);
};

export const toggleSeat = (row_id, seat_id, isSelected) => dispatch => {
  dispatch({
    type: isSelected ? DESELECT_SEAT : SELECT_SEAT,
    payload: {
      row_id,
      seat_id
    }
  });
};
