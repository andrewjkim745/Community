import React from 'react'
// look at form component on react-post and substitute handlesubmit with handleadd

const PostForm = ({ post, handleSubmit, handleChange, }) => (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <span>
                <textarea
                    value={post.title}
                    name='title'
                    required
                    onChange={handleChange}
                />
            </span>
            <label>UserName</label>
            <span>
                <textarea
                    value={post.username}
                    name='username'
                    required
                    onChange={handleChange}
                />
            </span>
            <label>Image Link</label>
            <span>
                <textarea
                    value={post.link}
                    name='link'
                    onChange={handleChange}
                />
            </span>
            <label>Description</label>
            <span>
                <textarea
                    value={post.description}
                    name='description'
                    required
                    onChange={handleChange}
                />
            </span>
            {/* <input type="hidden" name="postId" value={id}/> */}
            <button type='submit'>Submit</button>
        </form>
    </div>

)


export default PostForm

