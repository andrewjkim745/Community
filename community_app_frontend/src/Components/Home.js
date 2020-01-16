import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './Styles/Home.css'
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
        {this.state.posts.map(post => {
          return (
            <div className='post-card' key={post.id}>
              <div className='votes-cont'>
                <div className='up-arrow'>^</div>
                <p>{post.votes ? post.votes: 0}</p>
                <div className='down-arrow'>^</div>
              </div>
              <div className='info-div'>
                <Link exact to={`/posts/${post.id}`} className='please'>
                  <h3 className='title'>{post.title}</h3>
                  <p>Posted by {post.username} at {new Date(post.created_at)}</p>
                </Link>
                <div className='buttons'>
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