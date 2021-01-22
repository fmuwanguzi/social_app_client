import React from 'react'

const PostStatus = () => {
    return (
        <div className='update-post-container'>
            <h2>Posts</h2>
            <input type="text" placeholder="What's happening right now?" />
            <button type='submit'>Post</button>
        </div>
    )
}

export default PostStatus
