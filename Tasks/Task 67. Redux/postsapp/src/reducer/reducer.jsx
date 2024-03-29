const reducer = (state = {}, action) => {

    switch (action.type) {

        case "SET_POST":
            return {
                ...state,
                posts: action.posts,
                lastIdPost: action.lastIdPost

            }

        case "ADD_POST":

            let newId = ++state.lastIdPost;

            let newPost = {
                id: newId,
                name: action.post.name,
                text: action.post.text,
                image: action.post.image,
                date: new Date(),
                favorite: action.post.favorite
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                lastIdPost: newId
            };

        case "DELETE_POST":

            return {
                ...state,
                posts: state.posts.filter((item) => item.id != action.postId)
            }

        case "PRODUCT_FAVORITE": {

            return {
                ...state,
                posts: state.posts.map((item) => {
                    if (item.id == action.id) {
                        item.favorite++;
                    }
                    return item;
                })
            }
        }

    }
    return state;
};

module.exports = reducer;