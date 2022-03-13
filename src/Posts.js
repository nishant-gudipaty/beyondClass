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
                                    <h6 className="profile_name">Aero Club CFI  2 hours ago</h6>
                                </div>
                                <div className="middle-part">
                                    {parse('<p class = "img-description">Being one of the earliest clubs founded in CFI, we are a 30-member family of drone and airplane enthusiasts whom the club has envisioned the dream to fly. We formally welcome new members each year, and our senior members take pride in backing the club—the club witnesses active participation with members from diverse branches of engineering and of different age groups. Regular workshops and timely meetings have kept the club lively throughout. The club has witnessed glory in several national and international competitions like IARC (International Aerial Robotics Competition); NAL MICAV (Micro Air Vehicle Flying Competition).&nbsp; Building our own crafts and watching them take flight is a proud experience for each member and we hope to have young, inspired minds work onboard with us to share the joy of flying!!</p><div class = "main-img"><img src="https://lh4.googleusercontent.com/xTeEfqwrqf5kn284ujahs_TDmmzO3GqKgjdWygjvyHYsyduW5CGiEGy-sfnIKlUi2lrLVQCdBUG0yb5j-byYvwYjGIJMNs2yU3S5dtZiFaNUU979R7p3rbqLxm_kIK5LZWQt-Xkk"></div><p class = "img-description"> This is the Aero Club of IIT Madras  </p>')}
                                </div>
                                <div className="last-part"><Row><Col> 22 Likes | Comments </Col></Row></div>
                            </div>
                            <div className="text-box">
                                <div className="top-part">
                                    <img src={popularPostImg} alt="popular-post-img"/>
                                    <h6 className="profile_name">Entrepreneurship Cell IIT Madras</h6>
                                </div>
                                <div className="middle-part">
                                    {parse('<p class="img-description"> <strong>Entrepreneurship Cell </strong> at IIT Madras believes that entrepreneurship is not just about starting companies, but a pathway towards India’s socio-economic development. Our vision is to make students and faculty ‘entrepreneurial’ in every work that they do. We hope to enable them to solve global challenges as we see students as the greatest capital and intend to nurture them, provide them with opportunities for excellence.<br>We make the entrepreneurial world accessible to all group of people part of IIT Madras ecosystem, cater the audience from startup enthusiasts to hardcore entrepreneurs, with plethora of yearlong events and workshops through both personal and collaboration-based approach.</p><br><p class="img-description"> <strong> E-Summit:</strong> Every year we play host to our flagship event, E-Summit. E-Summit 2022, themed around Disruption in Veins was a 4-Conclave model including Youth Conclave, Innovator’s Conclave, Startup Conclave and Sustainability Conclave.</p>')}
                                </div>
                                <div className="last-part"><Row><Col>101 Likes | Comments</Col></Row></div>
                            </div>
                        </Col>
                        <Col className='p-2'>
                            <FeaturedPosts/>
                            <div className="text-box">
                                <div className="top-part">
                                    <img src={popularPostImg} alt="popular-post-img"/>
                                    <h6 className="profile_name">Making of Beyond Class</h6>
                                </div>
                                <div className="middle-part">
                                    {parse('<p class="img-description">Hello! I am Prateek, third-year Chemical Engineering UG student. Our team at CFI Product Design Club took up this project to make a web app catering to students at IITM where they can interact more freely and get seamless information about various clubs, opportunities, people, systems existing on the campus - especially for the oblivious people like me :)</p><br><p class="img-description">The project was initiated during the time of July 2021 in the Student Innovation Program of CFI where it was taken up under the Product Design Club merging with a previous team working on a similar project on remodeling Moodle to make it more student-friendly. The start was enthusiastic and works on making the logo, a Figma wireframe model and a test backend being built very fast within a month. However, things got slower over the semester with everyone getting involved in academic commitments and internship applications. The project was dragged forward with customer and market research which indeed indicated the need for the platform in IITM and me getting more motivated to pursue the same.</p><br><p class="img-description">Andhere we are, after the intensive works by the backend team over the winter coming up with an MVP (Minimum Viable Product) of the Beyond Class app. The project has been made with lots of ambitions and expectations of the team that this app would be useful for the diverse communities in IITM and serve to the best of their requirements.</p><br><p class="img-description">The project will currently involve smail users to get information being put under specified forums by representatives from different clubs and some other general posts. With time, it would be extended to better features similar to a social media platform but limited to IITM and more focussed on info-load about the institute. Feedbacks and suggestions are always welcome!</p>')}
                                </div>
                                <div className="last-part"><Row><Col>50 Likes</Col></Row></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>        
        </div>
     );
}
 
export default Posts;