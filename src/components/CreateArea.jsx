import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
            rows="1"
          />
        )}
        <textarea
          onClick={() => {
            setIsClicked(true);
          }}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isClicked}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
