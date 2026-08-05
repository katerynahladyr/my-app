function Blog(props) {
    return(
        <div>
            <div>
            <h1>{props.name}</h1>
            <p>{props.costs}</p>
            <p>{props.about}</p>
            <img src={props.img} alt="man" width="200px" />
            </div>
        </div>
    )
}

export default Blog;