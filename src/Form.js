import React, { Component } from "react";

// Mount,updating, unmount

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      bio: "",
      fruit: "",
      agreed: false,
      areYouSure: false,
    }; // setState
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleBioChange = this.handleBioChange.bind(this);
    // this.handleFavChange = this.handleFavChange.bind(this);
    console.log("this is in constructor");
    this.handleChange = this.handleChange.bind(this);

    // not to do any ajax
  }
  // this
  // controlled

  // event.target.name

  // get DerivedState From Props;
  static getDerivedStateFromProps(props, state) {
    // state is dep on props
    // this.
    // state
    // return state || null;
  }

  handleChange(event) {
    // console.log(event);
    let { name, value, type, checked = null } = event.target;
    value = checked !== null ? event.target.checked : value;
    this.setState({ [name]: value });
  }

  /*
  handleNameChange(event) {
    console.log(event.target.name);
    this.setState({ name: event.target.value });
  }

  handleBioChange(event) {
    this.setState({ bio: event.target.value });
  }

  handleFavChange(event) {
    this.setState({ fruit: event.target.value });
  }*/

  // SyntheticEvent or HTML Event

  handleSubmit = (event) => {
    // console.log("name", this.state.name);
    this.props.submitHandler(this.state);
    event.preventDefault();
  };

  componentDidMount() {
    console.log("this is did mount");
    // mounting over
    // dom ->
    // api fetching - ajax
    // this.getUserDetails();
  }

  getUserDetails() {
    fetch("https://randomuser.me/api");
  }

  componentWillUnmount() {
    console.log("wil unmount");
  }

  render() {
    // valid JSX || null
    // UI
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
                name="firstName"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <textarea
              value={this.state.bio}
              name="bio"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <select
              value={this.state.fruit}
              name="fruit"
              onChange={this.handleChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div>
            <label>do you agree?</label>
            <input
              type="radio"
              name="areYouSure"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>do you agree?</label>
            <input type="checkbox" name="agreed" onChange={this.handleChange} />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
