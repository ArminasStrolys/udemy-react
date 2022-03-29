import React, { Component } from "react";
import SearchBar from "../searchBar/SearchBar";
import Youtube from "../../apis/Youtube";
import VideoList from "../videoList/VideoList";

class App extends Component {
state = { videos: [] }

  onTermSubmit = async (e) => {
  const response = await Youtube.get("/search", {
      params: {
        q: e,
      },
    });

    this.setState({videos: response.data.items})
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
       <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
