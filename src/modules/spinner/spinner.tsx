import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { LoadSpinner } from '../../components/loadSpinner';
import { getSpinnerVisible } from './spinner-selectors';

interface ISpinner {};

// class Spinner extends React.PureComponent<ISpinner> {
//   render() {
//     return (
//       <LoadSpinner visible={this.props.visible} />
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  visible: getSpinnerVisible,
});

const mapDispatchToProps = {};

export const SpinnerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadSpinner);
