import React from 'react'
import './Styles/PostDetails.css'
import axios from 'axios'



class PostDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            username: '',
            link: '',
            description: '',
            views: '',
            votes: ''

        }
    }


    componentDidMount() {
        this.getPost()
    }

    getPost = async () => {
        console.log('hello')
        await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response.data.post.title)
                this.setState({
                    title: response.data.post.title,
                    description: response.data.post.description,
                    username: response.data.post.username,
                    link: response.data.post.link,
                    views: response.data.post.views,
                    votes: response.data.post.votes
                })
            })


    }


    render() {
        console.log(this.state.title)
        // const { post } = this.state;
        return (
            <div className='background'>
            <div className='outer-container'>
            <div className='post-container'>
                <div className='votes-container'>
                    <p className='votes'>{this.state.votes}</p>
                </div>
                <div className='top-container'>
                    <p className='user'>Posted by u/{this.state.username}</p>
                    <h4>{this.state.title}</h4>
                    <img className='post-image' src={this.state.link}></img>
                    <p>{this.state.description}</p>
                    <div className='bottom-container'>
                        <p className='views'>{this.state.views} views</p>
                    </div>
                </div>




            </div>
            </div>
            </div>
        )
    }


}

export default PostDetails