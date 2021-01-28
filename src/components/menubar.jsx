import React, { Component } from "react";

class Menubar extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>I am the menubar</h1>
        <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">Login</a>
{/*           <a href="#contact">Contact</a> */}
{/*           <a href="#about">About</a> */}
        </div>
{/*         <button>I am a button</button> */}
      </div>
    );
  }
}

export default Menubar;
