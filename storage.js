function getPosts(){
    return JSON.parse(localStorage.getItem("posts")) || [];
}

function savePosts(posts){
    localStorage.setItem("posts", JSON.stringify(posts));
}