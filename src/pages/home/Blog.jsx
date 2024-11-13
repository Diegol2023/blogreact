const Blog =({blog}) =>{
    return(
        <div>
            <h1>{blog.source.id}</h1>
            <h1>{blog.author}</h1>
        </div>
    )

}

export default Blog