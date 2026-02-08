// USER VIEW
if(document.getElementById("posts")){
    displayPosts();
}

function displayPosts(){
    const posts = getPosts();
    const container = document.getElementById("posts");

    container.innerHTML = "";

    posts.forEach(post=>{
        container.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
        `;
    });
}

// ADMIN CRUD

if(document.getElementById("adminPosts")){
    renderAdminPosts();
}

function addPost(){
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const posts = getPosts();

    posts.push({
        id: Date.now(),
        title,
        content
    });

    savePosts(posts);
    renderAdminPosts();
}

function renderAdminPosts(){
    const posts = getPosts();
    const container = document.getElementById("adminPosts");

    container.innerHTML="";

    posts.forEach(post=>{
        container.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;
    });
}

function deletePost(id){
    let posts = getPosts();
    posts = posts.filter(p=>p.id!==id);
    savePosts(posts);
    renderAdminPosts();
}