import React from "react";
// import { HighlightIcon } from '@material-ui/icons/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
    <h1> <FontAwesomeIcon icon={faStickyNote} /> Keeper</h1>
      {/* <h1><HighlightIcon /> Keeper</h1> */}
     
    </header>
  );
}

export default Header;
