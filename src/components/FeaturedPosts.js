import React, { Component } from "react"
import {Navbar, Nav} from 'react-bootstrap';
import popularPostImg from '../images/popular-post.png';
import notificationImg from '../images/notifications.png';
import answerImg from '../images/answer.png';
import beyondclassImg from '../images/beyond_class.png';
import profileImg from '../images/profile.png';
import {Link} from "react-router-dom";

class FeaturedPosts extends Component {
    render() {
        return (
            <div className="featurePosts-div">
                <div className="featured">Featured Posts</div>
                <div className="featurePosts">
                    <Link>Community 1</Link>
                    <Link>Community 2</Link>
                    <Link>Community 3</Link>
                    <Link>Community 4</Link>
                </div>
            </div>
        )
    }
}

export default FeaturedPosts;