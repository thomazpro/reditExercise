import fetchRedit from "../services";

export const ERRO = 'ERRO';
export const REQUEST = 'REQUEST';
export const RESP = 'RESP';

const errorAction = (payload) => ({ type: ERRO, payload });
const respAction = (payload) => ({ type: RESP, payload });
const reqAction = () => ({ type: REQUEST });

const fetchList = (topic) => async (dispatch) => {
  dispatch(reqAction());
  try {
    const x = await fetchRedit(topic);
    dispatch(respAction(x));
  } catch(error) { dispatch(errorAction(error)) }
}

export default fetchList;
