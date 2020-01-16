import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Styles/Home.css'
import Moment from 'react-moment';
import axios from 'axios';
// // import PostForm from './CreatePostform'
// import { Link } from 'react-router-dom'


// export default function Home(props) {
//     const { posts, comments } = props;

//     const displayallPosts = () => {
//         return posts.map(post => (
//             <div key={post.id} className="post">
//                 <div>
//                     <p>{post.title}</p>
//                     <p>Posted by {post.username} at {post.created_at}</p>
//                 </div>
//                 <p>{post.description}</p>
//                 <div>
//                     {/* <p>{comments.length}</p> */}
//                 </div>
//             </div>
//         ))
//     }

//     return (
//         <div>{displayallPosts()}</div>
//     )
// }


class Home extends React.Component {
  state = {
    posts: [],
    votes: 0,
    comments: '',
    confirm: false,
    deleted: false
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(jsonedPosts => this.setState({ posts: jsonedPosts }))
      .catch(error => console.error(error));
      
  }
  handleDelete(post) {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'DELETE',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
      // }
    })
    console.log("hi")
    this.getPosts();
  }

  getComments = async(post_id) => {
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`)
    console.log(data)
    console.log(data[Object.keys(data)[0]].comments[0].username)
    console.log(data[Object.keys(data)[0]].comments[0].reply)
    let comments = data[Object.keys(data)[0]].comments[0].reply
    console.log(comments)
    this.setState({ 
      comments: comments
    })

  }



  handleUpVote = async(post_id) => {
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`)
    console.log(data)
    console.log(data[Object.keys(data)[0]].post.votes)
    // console.log(data[Object.keys(data)[0]].comments[0].reply)
    let newData = data[Object.keys(data)[0]].post.votes + 1 
    console.log(newData)
    await axios.put(`http://localhost:3000/posts/${post_id}`, {
      votes: newData
    })
    this.getPosts();
    
    // let newdata = data.post.votes + 1
    // console.log(newdata)
    // data.votes + 1
    // axios PushSubscription


  }

  handleDownVote = async(post_id) => {
    let data = await axios.get(`http://localhost:3000/posts/${post_id}`)
    console.log(data)
    console.log(data[Object.keys(data)[0]].post.votes)
    let newData = data[Object.keys(data)[0]].post.votes - 1 
    console.log(newData)
    await axios.put(`http://localhost:3000/posts/${post_id}`, {
      votes: newData
    })
    this.getPosts();
    
    // let newdata = data.post.votes + 1
    // console.log(newdata)
    // data.votes + 1
    // axios PushSubscription


  }


  render() {

    
    return (
      <>
        <div className='create-posts'>
          <Link exact to='/createposts' activeClassName='active' className='please'>
            <div className='button'>
              <p className='button-text'>Post</p>
              <img className='pencil' src='https://i.imgur.com/X7GIKlu.png'></img>
            </div>
          </Link>
        </div>
        {this.state.posts.reverse().map(post => {
          return (
            <div className='post-card' key={post.id}>
              <div className='votes-cont'>
                <div onClick={() => this.handleUpVote(post.id)} className='up-arrow'>^</div>
                  {post.votes ? post.votes: 0}
                <div onClick={() => this.handleDownVote(post.id)} className='down-arrow'>^</div>
              </div>
              <div className='info-div'>
                <Link exact to={`/posts/${post.id}`} className='please'>
                  <h3 className='title'>{post.title}</h3>
                  <div className='user-date'>
                  <p>{post.username}-</p>
                  <Moment fromNow>{post.created_at}</Moment>
                  </div>
                </Link>
                <div className='buttons'>
                  <div>
                    {/* {this.getComments(post.id)} */}
                    {/* <p>{this.state.comments}</p> */}
                  </div>
                  <div onClick={() => this.handleDelete(post)}>
                    <img className='delete-button' src='https://i.imgur.com/I8VKeEG.png'></img>
                  </div>
                  <p>delete</p>
                  <Link exact to={`/posts/${post.id}/edit`} activeClassName='active' className='edit-div'>
                    <img className='edit-button' src='http://cdn.onlinewebfonts.com/svg/img_186761.png'></img>
                  </Link>
                  <p>edit</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default Home;