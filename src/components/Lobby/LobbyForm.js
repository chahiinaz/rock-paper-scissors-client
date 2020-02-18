import React from "react";

const LobbyForm = props => {
  return (
    <div>
      Rooms:
      <form onSubmit={props.handleSubmit}>
        <label>Name:</label>

        <input
          onChange={props.handleChange}
          type="text"
          name="name"
          value={props.values.name}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LobbyForm;
