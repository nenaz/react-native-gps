import * as React from 'react';
import { map } from 'lodash';
import { IUser, TFollowUserParams } from './receiver-page-types';
import { View, Text } from 'react-native';
import { ReceiverPageRow } from './receiver-page-row';

interface IReceiverPage {
  usersOnline: IUser[],
  handleObserveUser: (params: TFollowUserParams) => void,
};

export class ReceiverPage extends React.PureComponent<IReceiverPage> {
  render() {
    const { usersOnline, handleObserveUser } = this.props;

    return(
      <View style={{
        position: 'relative',
      }}>
        {map(usersOnline, (user: IUser) => (
          <View key={user._id}>
            <ReceiverPageRow
              user={user}
              handleObserveUser={handleObserveUser}
            />
          </View>
        ))}
      </View>
    );
  }
}
