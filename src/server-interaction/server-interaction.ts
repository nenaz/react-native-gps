// import { getAuthToken } from '@/modules/auth';
// import { createF7Alert } from '@/modules/alert';
import { deployMode } from '../config';
// import { setAuthToken } from '../modules/auth';

export const Send = (name: string, params = {}, type = 'POST') => {
  const serverUrl = deployMode
    ? 'https://gps-mongo-server.herokuapp.com/'
    : 'http://127.0.0.1:5000/';
  return fetch(`${serverUrl}${name}`, {
      method: type,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    .then((response: any) => response.json())
    .then((responseJson: any) => {
      // setAuthToken(responseJson.token);
      return responseJson;
    })
    .catch((error: any) => {
      console.log('error', error);
    });
};

// export const Send = (name: string, params = {}, type = 'POST') => {
//   const serverUrl = deployMode
//     ? 'https://gps-mongo-server.herokuapp.com/'
//     : 'http://127.0.0.1:5000/';
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(type, serverUrl + name, true);
//     xhr.onprogress = (event) => { }
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     const webToken = getAuthToken();
//     if (name !== 'newUser' && name !== 'authUser' && name !== 'setPass' && webToken) {
//       console.log('webToken', webToken)
//       xhr.setRequestHeader('Authorization', webToken);
//     }
//     xhr.timeout = 15000;
//     xhr.onload = function () {
//       if (this.status === 200) {
//         resolve(JSON.parse(this.response));
//       } else if (this.status === 401) {
//         const obj = {
//           result: false,
//           statusText: this.statusText,
//           status: this.status
//         }
//         resolve(obj);
//       } else {
//         const error = new Error(this.statusText);
//         reject(error);
//       }
//     };
//     xhr.ontimeout = function () {
//       const obj = {
//         result: false,
//         statusText: "Time out error",
//         status: this.status || 504,
//       }
//       resolve(obj);
//     }
//     xhr.onerror = function (error: any) {
//       // createF7Alert(error.type, 'Error xhr');
//       reject(console.log('error', error));
//     };
//     xhr.send(JSON.stringify(params));
//   });
// }
