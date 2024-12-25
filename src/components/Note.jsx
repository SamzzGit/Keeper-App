import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function Note(props) {
  console.log("props = " + props);
  function handleClick() {
    props.onDelete(props.id);
  }
  const zoomOut = true;
  return (
    <div className="note">
      <h1>jiovfgbjiofb</h1>
      <p>hthjthj</p>
      <Zoom in={zoomOut}>
        <Fab onClick={handleClick}>
          <DeleteOutlineIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
