import React, { Component } from 'react';
import '../../constuctor/footer/footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="stiv">
                        <div className="col">
                            <div className="imgs"></div>
                            <div className="box">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Serves</a></li>
                                    <li><a href="#">Contacts</a></li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea id hic deserunt illum aut ad molestias modi dolorum amet, corporis tempore eaque nobis excepturi quaerat recusandae laudantium assumenda iure distinctio?</p>
                                <button>Ma'lumotlar</button>
                            </div>

                            
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
