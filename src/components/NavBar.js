import React, { Component } from "react"
import {Navbar, Nav} from 'react-bootstrap';
import popularPostImg from '../images/popular-post.png';
import notificationImg from '../images/notifications.png';
import answerImg from '../images/answer.png';
import beyondclassImg from '../images/beyond_class.png';
import profileImg from '../images/profile.png';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/posts"><img src={beyondclassImg} alt="brand-logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <input className="" type="search" placeholder="Search" />
                        <li className="nav-item"><a className="nav-link active" href="/posts"><img src={popularPostImg} alt="popular-post-img"/> Popular Post</a></li>
                        <li className="nav-item"><a className="nav-link" href="/createpost"><img src={answerImg} alt="Answer-img"/> Answer</a></li>
                        {/* <li className="nav-item"><a className="nav-link" href=""><img src={popularPostImg} alt="popular-post-img"/><i className="fas fa-users"></i> Communities</a></li> */}
                        {/* <li className="nav-item"><a className="nav-link" href="/mainpage"><img src={notificationImg} alt="Notifiactions-img"/> Notifications</a></li> */}
                        <li className="nav-item"><a className="nav-link" href="/myprofile"><img src={popularPostImg} alt="Answer-img"/> My Profile</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;