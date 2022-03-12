// import './css/posts.css';
import './css/createposts.css';
import { Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
import NavBar from "./components/NavBar.js";
import FeaturedPosts from "./components/FeaturedPosts";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import {CKEditor} from "@ckeditor/ckeditor5-react"
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const Create = () => {
    return ( 
        <div className="posts-content">
            <NavBar/>
            <Container fluid className='main-content'>
                <div className='main-row-content d-flex justify-content-center'>
                    <Row className='main-row-class'>
                            <div className="editor">
                                <form>
                                    <h2>Post Title</h2>
                                    <input style={{ font: '19px'}} 
                                    type="text" placeholder="Title"
                                    name="postTitle"
                                    // onChange={this.handleChangePost}
                                    // value={this.state.postTitle}
                                    required
                                    />

                                    <h2>Post Body</h2>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data= "Temp" //{this.state.postBody}
                                        required
                                        // onChange={(event, editor) => {
                                        // const data = editor.getData()
                                        // this.setState({postBody: data})
                                        // }}
                                    />
                                    {/* <ReactQuill theme="snow"/> */}

                                    <input
                                        type="file"
                                        // onChange={this.handleImageOnChange}
                                    />
                        
                                    <input type="submit"
                                        label="Choose File"
                                        className="btn"
                                        style={{ fontSize: '19px'}}
                                    />
                                    
                                </form>
                            </div> 
                    </Row>
                </div>
            </Container>      
        </div>
     );
}
 
export default Create;