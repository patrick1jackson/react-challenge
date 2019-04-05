/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import LuckyNumberDisplay from 'components/LuckyNumberDisplay/LuckyNumberDisplay';

import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  
  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  // Get values from Redux store
  // find better way to get state
  const stateObject = state.get(CONTAINER_KEY)[0];
  const stateLuckyNumber = Object.values(stateObject)[0];
  const stateUsername = Object.values(stateObject)[1];

  return { 
    luckyNumber: stateLuckyNumber,
    username: stateUsername
   }

};

export default connect(mapStateToProps)(LuckyNumber);
