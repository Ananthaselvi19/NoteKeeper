import React, { useState } from "react";
// import AddIcon from '@material-ui/icons/Add';
// // import Fab from '@material-ui/core/Fab';
// import Zoom from '@material-ui/core/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note,setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name] : value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange = {handleChange} name="title" value={note.title} placeholder="Title" autoComplete = "off" /> }
        <textarea onClick={expand} onChange = {handleChange} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? "3" : "1"} />
        {isExpanded && <button onClick = {submitNote} ><FontAwesomeIcon icon={faPlus} /></button>}
      </form>
    </div>
  );
}

export default CreateArea;
