import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavAdmin  from "./NavAdmin";

import './HeaderAdmin.css';

class HeaderAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
          <div className="header-admin">
              <div className="divider"></div>
              <div
                className="divider logo-ebloom"
                onClick={this.props.toggleDrawer()}>
              </div>
              <NavAdmin/>
          </div>

         );
    }
}

export default HeaderAdmin;
