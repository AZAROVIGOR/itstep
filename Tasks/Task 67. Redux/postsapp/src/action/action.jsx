


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

const favoritePost = (id, favorite) => {
    return {
        type: "PRODUCT_FAVORITE",
        id,
        favorite
    }
}

module.exports = {addPost, deletePost, favoritePost}