import React, { Component } from 'react';
import '../../constuctor/header/header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="box">
                        <div className="img">
                            <h2>S.W.A.T</h2>
                            <p>Aqilli Dunyoga Kirish Texnalogyasi</p>
                            <p>Smart World Access Technology</p>
                            <a href="#">Kirish</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;
