function Navbar() {
    return (
  
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">aGora</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li ><a>LogIn</a></li>
            <li><a>Registrate</a></li>
            
          </ul>
        </div>
      </div>
  
    )
  }
  export default Navbar;