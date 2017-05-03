import React from "react";
import ReactDOM from "react-dom";
import UserDetails from "./UserDetails";
import PropTypes from "prop-types";

function ListOfUsers(props) {
  return (
    <div>
      {props.users.map((users, key) => {
        return (
          <UserDetails
            users={users}
            key={key}
            onUserSelect={() => {
              console.log("User was Clicked", users);
              props.onUserSelect(users);
            }}
      />

        );
      })}
    </div>
  );
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired
};

export default ListOfUsers;
