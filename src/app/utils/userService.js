import ApiClient from './../../helpers/ApiClient';
import { API_BASE_URL } from './../../app/constants';

const client = new ApiClient();
function login(username, password, deviceId) {
  const userData = {
    email: username,
    password,
    device_id: deviceId
  };

  return client.post(`${API_BASE_URL}/login`, {
    data: userData
  });
  // .then(res => {
  //   const { data } = res.data;
  //   console.log('Login=====>', data);
  //   if (typeof window !== 'undefined' && window) {
  //     localStorage.setItem('uid', data.user_id);
  //     localStorage.setItem('token', data.token);
  //     localStorage.setItem('role', data.role);
  //   }
  //   return data;
  // }).catch(err => {
  //   console.log('=====>', err);
  // });
}

function logout() {
  // remove user from local storage to log user out
  if (typeof window !== 'undefined' && window) {
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}


// function handleResponse(response) {
//   return response.text().then(text => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       if (response.status === 401) {
//         // auto logout if 401 response returned from api
//         logout();
//         location.reload(true);
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }

const userService = {
  login,
  logout
};
export default userService;
