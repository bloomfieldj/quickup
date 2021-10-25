
export default function Navbar(props){
  return (
    <nav id="navbar" className="navbar">
        <section id="navbar_side">
          <span> <button> Home </button> </span>
          <span> <button>How It Works</button> </span>
        </section>
        <span id="title"><strong>QuickUp</strong></span>
        <section id="navbar_side">
          <span> <button>Sign-Up</button></span>
          <span> <button>Login </button></span>
        </section>
      </nav>
  );
}