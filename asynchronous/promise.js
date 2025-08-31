function getPost() {
    return fetch('https://jsonholder.typicode.com/posts/1') //get
        .then(response => response.json())
}

function createPost(post) {
    return fetch('https://holder.typicode.com/posts', { //post
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json());
}

function updatePost(post) {
    return fetch(`https://holder.typicode.com/posts/${post.id}`, { //put
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json());
}


function deletePost(id) {
    return fetch(`https://holder.typicode.com/posts/${id}`, { //delete
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return { message: 'Post deleted successfully' };
    }   );
}

let promise = getPost();

console.log("Initial State:",promise);

promise.then(data => console.log("Fulfilled:",data))
.catch(error => console.error('Rejected:', error));
