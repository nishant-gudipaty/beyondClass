import './css/forum.css';
//importing images
import profileImg from './images/profile_img.png';
import instagramImg from './images/instagram.png';
import linkedinImg from './images/linkedin.png';
import NavBar from "./components/NavBar.js";
import {Link} from "react-router-dom";
import { Row, Col} from 'react-bootstrap';
import popularPostImg from './images/popular-post.png';
import parse from 'html-react-parser';

const Forums = () => {
    return ( 
        <div className="forum-content">
           <NavBar/>
            <div className="main-content">
                <div className="container row-main-div">
                    <div className="row row-content-main">
                        <div className="col-md-8">
                            <div className="row col-class-1 h4">Profile</div>
                            <div className="user-div">
                                <div className="row">
                                    <div className="col-md-4 profile-pic">
                                        <div className="profile-div">
                                            <div className="profile-img"><img src= {profileImg} alt="profile-img" /></div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 user-content">
                                        <div className="left-top-part">
                                            <span className='h6'>Vinayak Nishant</span>
                                            {/* <button className='btn-class-1'>Follow</button> */}
                                        </div>
                                        <div className="left-bottom-part">
                                            <p className='title-para h6'>Student</p>
                                            <p className='user-text'> I am Vinayak Nishant, 3rd Year Electrical Engineering Student. I am currently part of the PDC team as a Cloud Engineer in beyond class.</p>
                                        </div>
                                        <div className="user-icons">
                                            <a href="https://www.instagram.com/"><img src={instagramImg} alt="" /></a>
                                            <a href="https://www.instagram.com/"><img src={linkedinImg} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-row">
                                <div className="general-post">Your Posts</div>
                                <div className="post-box">
                                    {/* <div className="area">  */}
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
                                 </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col-md-2 col-class-2">
                            <div className='top-box'>
                                <p>Followers <span>5</span></p>
                                <p>Following <span>9</span></p>
                                <p>Post <span>3</span></p>
                            </div>
                            <div className="communities mt-3 h6">Featured Posts</div>
                            <div className='top-box-1'>
                                <ul>
                                 <li className='m-2'><Link>E-Cell IIT Madras</Link></li>
                                 <li className='m-2'><Link>PDC Club</Link></li>
                                 <li className='m-2'><Link>Placements </Link></li>
                                 <li className='m-2'><Link>Internships</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Forums;