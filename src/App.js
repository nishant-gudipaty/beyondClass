import './index.css';
// import Navbar from './Navbar';
// import Home from './Home';
// import Test from './test';
// import LogIn from './LogIn';
// import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import MainPage from './MainPage';
// import HomePage from './HomePage';
import Posts from './Posts';
import Forums from './Forums';
import Create from './createpost';

const App = () => {
  return ( 
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            {/* <Route exact path='/' component={Home}/> */}
            {/* <Route exact path='/test' component={Test}/> */}
            {/* <Route exact path='/login' component={LogIn}/> */}
            {/* <Route exact path='/signup' component={SignUp}/> */}
            {/* <Route exact path='/mainpage' component={MainPage}/> */}
            {/* <Route exact path='/homepage' component={HomePage}/> */}
            <Route exact path='/posts' component={Posts}/>
            <Route exact path='/myprofile' component={Forums}/>
            <Route exact path='/createpost' component={Create}/>
          </Switch>
        </div>
      </div>
    </Router>
   );
}
 
export default App;


// type Profile @model @auth(rules: [
//   { allow: public, operations: [read]}
//   { allow: owner }
// ]) {
//   id: ID!
//   profileOwnerId: String!
//   profileOwnerUsername: String!
//   name: String!
//   profile_type: String!
//   intro: String!
//   mail: String!
//   insta: String!
//   created_at: String
//   posts: [Post] @hasMany
// }

// type Post @model @auth(rules: [
//   { allow: public, operations: [read]}
//   { allow: owner }
// ]) {
//   id: ID!
//   postOwnerId: String!
//   postOwnerUsername: String!
//   title: String!
//   content: String!
//   cover_photo: String!
//   attachements: String
//   created_at: String
//   comments: [Comment] @hasMany
//   likes: [Like] @hasMany
// }

// type Comment @model @auth(rules: [
//   { allow: public, operations: [read]}
//   { allow: owner }
// ]) {
//   id: ID!
//   commentOwnerId: String!
// 	commentOwnerUsername: String!
//   post: Post @belongsTo
//   comment: String!
//   created_at: String!
// }

// type Like @model @auth(rules: [
//   { allow: public, operations: [read]}
//   { allow: owner }
// ]) {
//   id: ID!
//   likeOwnerId: String!
// 	likeOwnerUsername: String!
//   post: Post @belongsTo
// }