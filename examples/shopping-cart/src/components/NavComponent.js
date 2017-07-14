import React from 'react'

const NavComponent = () => (
  <div>
    <div className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* <a className="navbar-brand" href="#"><img src="https://lh4.ggpht.com/vaMh25OceLuxlQ5c8wAm5UWWZ8ppNXXSUyhHmQ3ZNEtRxEGVkAhnaoB8i7py49nxJco=w300" height="40px"/> */}
          {/* </a> */}
        </div>
        <div id="navbar1" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Checkout</a></li>
          </ul>
        </div>
        {/* <!--/.nav-collapse --> */}
      </div>
      {/* <!--/.container-fluid --> */}
    </div>

    <h1>Neolife</h1>
    {/* <div className="jumbotron">
      <h1>Neolife</h1>
      <p>NeoLife's Club Member program is free to join and gives customers the ability to shop at a special 15-25% discount. It also gives you access to a fun and passionate community, with a goal of empowering you with resources for education and personal development. You can earn Free product with the 3 for Free program, but you'll never earn any money from commissions.</p>
    </div> */}
  </div>
)

export default NavComponent
