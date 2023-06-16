const React = require("react");


const List = (props) => {

    function handlePostDelete(event){
        props.onPostDelete(+event.currentTarget.dataset.id)
    }

    function handleLikePost(event){
        props.onPostFavorite(+event.currentTarget.dataset.id)
    }

    
    return <div className="blog_posts">
        {
            props.posts.map((post) =>{
                return <div className="card mb-3" key={post.id}>
                  <img src={`./public/assets/img/${post.image}`} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                      <h5 className="card-title">#{post.id} {post.title}</h5>
                      <p className="card-text">{post.text} </p>
                      <p className="card-text"><small className="text-body-secondary">{post.date.toLocaleDateString()}</small></p>
                       
                    </div>
                  <div className="card-footer text-body-secondary">
                      <button type="button" className="btn btn-primary" >Редактировать</button>&nbsp;
                      <button type="button" className="btn btn-danger" data-id={post.id} onClick={handlePostDelete}>Удалить</button>
                      <button type="button" data-id={post.id} className="btn btn-like" onClick={handleLikePost}>Like ❤</button>
                      <span>{post.favorite}</span>
                    </div>
                </div>
            }
                
            )
        }
    </div>
    
}

module.exports = List;



