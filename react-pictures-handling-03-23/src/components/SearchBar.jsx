import React, { Component } from "react";

class Searchbar extends Component {
    state = { term: '' }

onFormSubmit = (e) => {
e.preventDefault()
this.props.onSubmit(this.state.term)
}

  render() {
    return (
      <div
        style={{ width: "80%", margin: "20px auto" }}
        className="ui inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ color: "white" }}>Image search</label>
            <input value={this.state.term} onChange={e => this.setState({ term: e.target.value})} type="text" placeholder="Enter car name"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
