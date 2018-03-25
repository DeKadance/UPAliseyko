const postRenderer = (function() {

    const postsContainer = document.getElementById('#posts-container');

    function renderPost(post) {
        const template = getTemplate(post);
        const postElement = getPostElement(template, post.id);
        postsContainer.appendChild(postElement);
    }

    function removePost(id) {
        const postToRemove = postsContainer.querySelector(`#${getPostId(id)}`);
        postsContainer.removeChild(postToRemove);
    }

    function editPost(id, newPost) {
        const postToEdit = postsContainer.querySelector(`#${getPostId(id)}`);
        const template = getTemplate(newPost);
        const updatedPost = getPostElement(template, newPost.id);
        postsContainer.replaceChild(updatedPost, postToEdit);
    }

    function getPostId(id) {
        return `post-${id}`;
    }

    function getTemplate(post) {
        return `
            <div class="post-title">
                <img class="avatar" TODO>
                <div class="title-info">
                    <span class="author">${post.author}</span>
                    <span class="location">${post.location}</span>
                </div>
            </div>
            <img class="post-img" src="${post.photoLink}">
            <div class="description">
                <span class="info">${post.description}</span>
                <span class="hashtags">${post.hashtags.join(', ')}</span>
                <div class="bottom">
                    <span class="date">${post.createdAt.toLocaleDateString()}</span>
                    <button class="like"><i class="material-icons">thumb_up</i></button>
                </div>
            </div>
        `;
    }

    function getPostElement(template, id) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.id = getPostId(id);
        postElement.innerHTML = template;
        return postElement;
    }

    return {
        editPost,
        renderPost,
        removePost,
    }
}());
