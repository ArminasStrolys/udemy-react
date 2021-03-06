import React, { Component } from "react";

export default class SearchBar extends Component {
    state = { term: '' }
    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
}

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}


// AIzaSyA0SJ4xTG19yEyFwZKJP8H1zm5yTLqvUM8