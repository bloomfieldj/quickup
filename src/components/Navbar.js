import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  return (
    <nav id="navbar" className="navbar">
      <section id="navbar_side">

        <section className="dropdown">
          <button className="dropbtn">
            <span id="title"><strong>QuickUp</strong></span><div className="dropcarat"><FontAwesomeIcon icon={faChevronDown} /></div>
          </button>
          <div className="dropdown-content">
           <div><button> How It Works </button></div>
           <div><button onClick={props.onClick3}>Your Profile</button></div>
           <div><button onClick={props.onClick4}>Visit Chat Room</button></div>
          </div>
        </section>

      </section>
      <section id="navbar_side">
        <span> <button onClick={props.onClick2}>Sign-Up</button></span>
        <span> <button onClick={props.onClick1}>Login </button></span>
      </section>
    </nav>
  );
}