import React, { Component } from "react";

// Mount,updating, unmount

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      bio: "",
      fruit: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleFavChange = this.handleFavChange.bind(this);
    console.log("this is in constructor");
  }
  // this

  handleNameChange(event) {
    // console.log(event);
    this.setState({ name: event.target.value });
  }

  handleBioChange(event) {
    this.setState({ bio: event.target.value });
  }

  handleFavChange(event) {
    this.setState({ fruit: event.target.value });
  }

  // SyntheticEvent or HTML Event

  handleSubmit = (event) => {
    console.log("name", this.state.name);
    event.preventDefault();
  };

  componentDidMount() {
    console.log("this is did mount");
  }

  componentWillUnmount() {
    console.log("wil unmount");
  }

  render() {
    // JSX
    console.log("in render");
    return (
      <div>
        {this.state.bio}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleNameChange}
              />
            </label>
          </div>
          <div>
            <textarea
              value={this.state.bio}
              onChange={this.handleBioChange}
            ></textarea>
          </div>
          <div>
            <select value={this.state.fruit} onChange={this.handleFavChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
