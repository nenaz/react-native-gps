import io from 'socket.io-client';
// import { getCurrentAuthorizationToken } from '../modules/auth';
import { deployMode } from '../config';
// import { Socket } from 'net';

// export const wsConnect = () => {

interface IWsConnection {
  // socket: any,
  wsConnect: Function,
};

export class WsConnection<IWsConnection> {
  socket: any;

  wsConnect = (userTag: string) => {
    console.log('wsConnect');
    const serverUrl = deployMode
      ? 'https://agile-everglades-37267.herokuapp.com'
      : 'http://localhost:3002';
    return io(serverUrl, {
      agent: '-',
      cert: '-',
      ca: '-',
      ciphers: '-',
      // perMessageDeflate: false,
      pfx: '-',
      key: '-',
      passphrase: '-',
      rejectUnauthorized: false,
    });
  };

  wsOnmessage = (fromUser: string, message: Object) => {
    const webToken = 'ttt';
    console.log('wsOnmessage');
    const mes = JSON.stringify({
      ...message, 
      authorization: webToken,
    });
    console.log('mes', mes);
    this.socket.send(fromUser, mes);
    this.socket.emit('user-new-coord', { ... message });
  };

  wsDisconnect = (socket: any) => {
    return socket.close();
  };
};

export const wsConnection = new WsConnection();
