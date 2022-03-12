import './css/forum.css';
//importing images
import profileImg from './images/profile_img.png';
import instagramImg from './images/instagram.png';
import linkedinImg from './images/linkedin.png';
import NavBar from "./components/NavBar.js";
import {Link} from "react-router-dom";

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
                                            <span className='h6'>NAME OF THE USER</span>
                                            {/* <button className='btn-class-1'>Follow</button> */}
                                        </div>
                                        <div className="left-bottom-part">
                                            <p className='title-para h6'>Student / Teacher /Club Member:</p>
                                            <p className='user-text'>This is the discription of the user of beyond class. It contains some basic info about the user.</p>
                                        </div>
                                        <div className="user-icons">
                                            <a href="#"><img src={instagramImg} alt="" /></a>
                                            <a href="#"><img src={linkedinImg} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-row">
                                <div className="general-post">Your Posts</div>
                                <div className="post-box">
                                    <div className="area"> </div>
                                    <div className="bottom-box">
                                        <p><i class="fas fa-thumbs-up icon-thumbs"></i>2k</p>
                                        <p><i class="far fa-comment icon-comment"></i>165</p>
                                    </div>
                                </div>
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
                                    <li className='m-2'><Link>Community 1</Link></li>
                                    <li className='m-2'><Link>Community 1</Link></li>
                                    <li className='m-2'><Link>Community 1</Link></li>
                                    <li className='m-2'><Link>Community 1</Link></li>
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