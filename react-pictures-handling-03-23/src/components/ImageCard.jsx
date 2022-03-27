import React from 'react';

export default class imageCard extends React.Component {
  render() {
    return (
      <div>
      <img src={this.props.image.urls.regular} alt={this.props.image.description} />
      </div>
    )
  }
}
