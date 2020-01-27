import React, { Component} from 'react';


class AdminLoginHeader extends Component {

    constructor (pops) {
        super(pops);
        this.state = { }
    }
    render() {
        return (
            <div className="admin-login-header">
                <div className="logo-ebloom"></div>
            </div>

        );
    }
}

export default AdminLoginHeader;