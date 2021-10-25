
export default function Navbar(props){
  return (
    <nav id="navbar" className="navbar">
        <section id="navbar_side">
          <span> <button> How It Works </button> </span>
          <span> <button onClick={props.onClick3}>Your Profile</button> </span>
          <span> <button onClick={props.onClick4}>Visit Chat Room</button> </span>
        </section>
        <span id="title"><strong>QuickUp</strong></span>
        <section id="navbar_side">
          <span> <button onClick={props.onClick2}>Sign-Up</button></span>
          <span> <button onClick={props.onClick1}>Login </button></span>
        </section>
      </nav>
  );
}