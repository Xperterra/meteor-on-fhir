import React from 'react';
import ReactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

import createReactClass from 'create-react-class';


//const Spacer = React.createClass({
const Spacer = createReactClass({
    getMeteorData() {
    let data = {
      style: {}
    };
    if (this.props && this.props.style) {
      data.style = this.props.style;
    }
    data.style.height = '3.2rem';
    return data;
  },
  render () {
    return(
      <div className="spacer" style={ this.data.style }></div>
    );
  }
});
export default Spacer;


ReactMixin(Spacer.prototype, ReactMeteorData);
