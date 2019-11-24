import * as React from 'react';
import { get } from 'lodash';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { IUser, TFollowUserParams } from './receiver-page-types';

interface IReceiverPageRow {
  user: IUser,
  handleObserveUser: (params: TFollowUserParams) => void,
};

export class ReceiverPageRow extends React.PureComponent<IReceiverPageRow> {
  handlefollowUser = () => {
    const { user } = this.props;
    const params: TFollowUserParams = {
      _id: get(user, '_id'),
      login: get(user, 'login', ''),
      username: get(user, 'username'),
      coordinates: {
        latitude: user.coordinates.lat,
        longitude: user.coordinates.lon,
      },
    };

    this.props.handleObserveUser(params);
  }

  render() {
    const { user } = this.props;
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View>
          <Text>{user.username}{user.status}</Text>
        </View>
        <View>
          <Text>{`${user.coordinates.lat}, ${user.coordinates.lon}`}</Text>
        </View>
        <View>
          <Button
            onPress={this.handlefollowUser}
            title="Отслеживать"
          />
        </View>
      </View>
    );
  }
}