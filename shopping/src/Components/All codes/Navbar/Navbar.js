import React, {Component} from 'react';
import vector from '../../imgs/Vector.png'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <>
                <div className="Navbar">
                    <div className="NavbarTop">
                        <div className="Container">
                            <div className="Contents">
                                <div className="Title">
                                    <a href="#">О нас </a>
                                    <a href="#"><span><img src={vector} alt=""/></span>Ташкент</a>
                                </div>
                                <div className="Contacts">
                                    <a href="#">  + 99899 000 00 00</a>
                                    <a href="#">Заказать звонок</a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </>
        );
    }
}

export default Navbar;