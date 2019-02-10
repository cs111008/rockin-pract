import { userConstants } from './actionTypes';
import userService from '../utils/userService';
// import { history } from '../_helpers';

function login(username, password, deviceId, _history) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password, deviceId)
      .then(res => {
        const { data } = res.data;
        console.log('Login=====>', data);
        if (typeof window !== 'undefined' && window) {
          localStorage.setItem('uid', data.user_id);
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          _history.push('/app');
        }
        dispatch(success(data));
      }).catch(err => {
        console.log('=====>', err);
        dispatch(failure(err.toString()));
      });
    // .then(
    //   user => {
    //     dispatch(success(user));
    //     // history.push('/');
    //   },
    //   error => {
    //     dispatch(failure(error.toString()));
    //   }
    // );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}


const userActions = {
  login,
  logout,
};
export default userActions;
