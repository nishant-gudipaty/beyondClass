// import './css/posts.css';
import './css/posts2.css';
import { Row, Col} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
// importing images
import popularPostImg from './images/popular-post.png';
import profileImg from './images/profile.png';
import photoImg from './images/photo.png';
import videoImg from './images/video.png';
import textImg from './images/text.png';
import NavBar from "./components/NavBar.js";
import FeaturedPosts from "./components/FeaturedPosts";
import parse from 'html-react-parser';

const Posts = () => {
    return ( 
        <div className="posts-content">
            <NavBar/>
            <Container fluid className='main-content'>
                <div className='main-row-content d-flex justify-content-center'>
                    <Row className='main-row-class'>
                        <Col className='p-2'>
                            <div className='upper-part'>
                                <div className='row-content'>
                                    <img src={profileImg} alt="profile-img"/>
                                    <Link to ='/createpost'>Create Post</Link>
                                </div>
                            </div>
                            <div className="text-box">
                                <div className="top-part">
                                    <img src={popularPostImg} alt="popular-post-img"/>
                                    <h6 className="profile_name">Lakshaya Sharma  2 hours ago</h6>
                                </div>
                                <div className="middle-part">
                                    {parse('<p class = "img-description">Being one of the earliest clubs founded in CFI, we are a 30-member family of drone and airplane enthusiasts whom the club has envisioned the dream to fly. We formally welcome new members each year, and our senior members take pride in backing the club—the club witnesses active participation with members from diverse branches of engineering and of different age groups. Regular workshops and timely meetings have kept the club lively throughout. The club has witnessed glory in several national and international competitions like IARC (International Aerial Robotics Competition); NAL MICAV (Micro Air Vehicle Flying Competition).&nbsp; Building our own crafts and watching them take flight is a proud experience for each member and we hope to have young, inspired minds work onboard with us to share the joy of flying!!</p><div class = "main-img"><img src="https://lh4.googleusercontent.com/xTeEfqwrqf5kn284ujahs_TDmmzO3GqKgjdWygjvyHYsyduW5CGiEGy-sfnIKlUi2lrLVQCdBUG0yb5j-byYvwYjGIJMNs2yU3S5dtZiFaNUU979R7p3rbqLxm_kIK5LZWQt-Xkk"></div><p class = "img-description"> So yeah thats waht it is though!</p>')}
                                </div>
                                <div className="last-part">hii</div>
                            </div>
                        </Col>
                        <Col className='p-2'>
                            <FeaturedPosts/>
                            <div className="text-box">
                                <div className="top-part">
                                    <img src={popularPostImg} alt="popular-post-img"/>
                                    <h6 className="profile_name">Lakshaya Sharma  2 hours ago</h6>
                                </div>
                                <div className="middle-part">
                                    {parse('<p class = "img-description">Being one of the earliest clubs founded in CFI, we are a 30-member family of drone and airplane enthusiasts whom the club has envisioned the dream to fly. We formally welcome new members each year, and our senior members take pride in backing the club—the club witnesses active participation with members from diverse branches of engineering and of different age groups. Regular workshops and timely meetings have kept the club lively throughout. The club has witnessed glory in several national and international competitions like IARC (International Aerial Robotics Competition); NAL MICAV (Micro Air Vehicle Flying Competition).&nbsp; Building our own crafts and watching them take flight is a proud experience for each member and we hope to have young, inspired minds work onboard with us to share the joy of flying!!</p><div class = "main-img"><img src="https://lh4.googleusercontent.com/xTeEfqwrqf5kn284ujahs_TDmmzO3GqKgjdWygjvyHYsyduW5CGiEGy-sfnIKlUi2lrLVQCdBUG0yb5j-byYvwYjGIJMNs2yU3S5dtZiFaNUU979R7p3rbqLxm_kIK5LZWQt-Xkk"></div><p class = "img-description"> So yeah thats waht it is though!</p>')}
                                </div>
                                <div className="last-part">hii</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>        
        </div>
     );
}
 
export default Posts;