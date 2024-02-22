import { fetchUsersBegin, fetchUsersSuccess, fetchUsersFailure } from './actions';

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return fetch(" https://development-api.codedesign.app/react-test-01/users")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUsersSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchUsersFailure(error)));
  };
}

// Helper function for error handling
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}