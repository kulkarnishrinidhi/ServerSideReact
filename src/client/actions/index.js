import axios from 'axios'

export const FETCH_USERS = 'fetch_users';

//dispatch is provided by redux thunk
export const fetchUsers = () => async dispatch => {
  const request = await axios.get('https://react-ssr-api.herokuapp.com/users')

  dispatch({
    type: FETCH_USERS,
    payload: request
  })
};