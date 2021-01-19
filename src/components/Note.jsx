import React from "react";
// import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

function Note(props) {
  function handleClick () {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick = {handleClick}><FontAwesomeIcon icon={faTrashAlt} size="2x"/>
        {/* <DeleteIcon /> */}
      </button>
    </div>
  );
}

export default Note;