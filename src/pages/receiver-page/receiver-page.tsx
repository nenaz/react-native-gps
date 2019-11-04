import * as React from 'react';
import { map } from 'lodash';
// import { Page } from '@/components/page';
import { IUser, TFollowUserParams } from './receiver-page-types';
import { View, Text } from 'react-native';
// import styles from './receiver-page.module.scss';
// import { ReceiverPageRow } from './receiver-page-row';

interface IReceiverPage {
  // users: IUser[],
  // handlefollowUser: (params: TFollowUserParams) => void,
};

export class ReceiverPage extends React.PureComponent<IReceiverPage> {
  render() {
    // const { users, handlefollowUser } = this.props;
    // // console.log('users', users);
    // // if (users) {
    //   return(
    //     <Page>
    //       {
    //         map(users, (user: IUser) => (
    //           <div key={user._id} className={styles.rowBlock}>
    //             <ReceiverPageRow
    //               user={user}
    //               handlefollowUser={handlefollowUser}
    //             />
    //           </div>
    //         ))
    //       }
    //     </Page>
    //   );
    // // }
    return(
      <View><Text>ReceiverPage</Text></View>
    );
  }
}
