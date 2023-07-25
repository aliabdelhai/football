import React  from 'react';
function Navbar() {
  return (
    <div>
            <nav id="navbar" >

                <div className="nav-wrapper">
                    <div className="logo">
                        <a href="/"><img alt="" className="nbaImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/FIFA_logo_without_slogan.svg/1200px-FIFA_logo_without_slogan.svg.png" /></a>
                    </div>

                    <ul id="menu">
                        <li> <a href="/"> Home  </a></li>
                        <li> <a href="/dreamteam">Dream Team </a></li>
                        <li> <a href="/actions">Actions </a></li>

                    </ul>

                </div>

            </nav>
    </div>
  );
}

export default Navbar;