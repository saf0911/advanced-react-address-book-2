import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers.js";
import PropTypes from "prop-types";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserList: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
          Available users
        </h2>
        <ListOfUsers users={this.props.users} onUserSelect={(selectedUser) => {
          this.setState({
            selectedUserList: [
              ...this.state.selectedUserList,
              selectedUser,
            ]
          });
        }} />

        <h2>
          Selected UserDetails
        </h2>
        <ListOfUsers users={[this.state.selectedUserList]} onUserSelect={() => {}} />
      </div>
    );
  }
  }


export default App;

App.propTypes = {
  users: PropTypes.array.isRequired
};
