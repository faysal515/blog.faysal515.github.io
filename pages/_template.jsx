import React from 'react';
/* eslint-disable */
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import { config } from 'config';
/* eslint-enable */
import FontFaceObserver from 'fontfaceobserver';

export default class Index extends React.Component {

  static propTypes = {
    children: React.PropTypes.shape().isRequired
  }

  componentDidMount() {
    new FontFaceObserver('Roboto').load().then(() => {
      document.documentElement.classList.add('Roboto--loaded');
      // eslint-disable-next-line
      console.log('Load Font Roboto successful.');
    }, () => {
      // eslint-disable-next-line
      console.log('Load Font Roboto failed.');
    });
  }

  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    );
  }

}