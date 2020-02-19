import React from "react";

const LobbyForm = props => {
  return (
    <div>
      Create a room
      <form onSubmit={props.handleSubmit}>
        <label>Name:</label>

        <input
          onChange={props.handleChange}
          type="text"
          name="roomname"
          value={props.values.roomname}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LobbyForm;
