import React, { Component } from 'react';
import '../constuctor/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="nav">
                        <div className="logo">
                            <h2>
                            S.W.A.T group
                            </h2>
                        </div>
                        <div className="text">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Serves</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
