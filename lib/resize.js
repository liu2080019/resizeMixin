import React, { Component } from 'react';

export default function(Target) {
  class Wrapper extends Component {
    render() {
      return React.createElement(Target, this.props, this.props.children);
    }
  }

  Wrapper.prototype.componentDidMount = function() {
    Wrapper.onresize = () =>
      requestAnimationFrame(() => {
        this.forceUpdate();
      });
    window.addEventListener('resize', Wrapper.onresize, false);
  };

  Wrapper.prototype.componentWillUnmount = function() {
    window.removeEventListener('resize', Wrapper.onresize, false);
  };

  return Wrapper;
};

