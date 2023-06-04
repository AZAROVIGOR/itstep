


const addPost = (post) => {
    return {
        type: "ADD_POST",
        post
    }
}

const deletePost = (postId) => {
    return {
        type: "DELETE_POST",
        postId
    }
}

module.exports = {addPost, deletePost}