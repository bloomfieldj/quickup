
export default function Navbar(props) {
  return (
    <nav id="navbar" className="navbar">
      <section id="navbar_side">
      <section class="dropdown">
     
        <button class="dropbtn"> <span id="title"><strong>QuickUp</strong></span>
        <i class ="fa fa-caret-down"></i>
        </button>
        <div class ="dropdown-content">
        <button> How It Works </button>
        <button onClick={props.onClick3}>Your Profile</button> 
        <button onClick={props.onClick4}>Visit Chat Room</button>
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