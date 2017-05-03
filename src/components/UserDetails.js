import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function UserDetails(props) {
  return (
    <div>
      {props.users.firstName} {props.users.lastName}
      <button onClick={props.onUserSelect}>
        Select
      </button>
    </div>
  );
}



UserDetails.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};


export default UserDetails;
