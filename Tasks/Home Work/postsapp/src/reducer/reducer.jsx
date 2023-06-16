const reducer = (state = {}, action) => {

    switch (action.type) {

        case "SET_STATE":
            return {
                ...state,
                posts: action.posts,
                lastIdPost: action.lastIdPpost
            }

        case "ADD_POST":
           
        let newId = ++lastIdPost;

            let newPost = {
                id: newId,
                name: action.post.name,
                text: action.post.text,
                image: action.post.image
            }
            state.posts.push(newPost);

            return {
                ...state,
                posts: state.posts,
                lastIdPost: newId
            };

        case "DELETE_POST":

            return {
                ...state,
                posts: state.posts.filter((item) => item.id != action.postId)
            }
    }
    return state;
};

module.exports = reducer;