const postRenderer = (function () {

    const postsContainer = document.getElementById('#posts-container');

    function renderPost(post) {
        const template = getTemplate(post);
        const modalTemplate = getModalTemplate(post);
        const postElement = getPostElement(template, modalTemplate, post.id);
        postsContainer.appendChild(postElement);
        if (invoker.user === post.author) {
            renderUserButtons(post.id);
        }
    }

    function renderUserButtons(id) {
        const editButtons = document.createElement('div');
        editButtons.classList.add('edit-Buttons');
        editButtons.innerHTML = `
        <button class="edit-button">
            <i class="material-icons">edit</i>
        </button>
        <button class="delete-button">
            <i class="material-icons">delete</i>
        </button>`;
        document.getElementById(`title-${id}`).appendChild(editButtons);
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

    function addPost(post) {
        const template = getTemplate(post);
        const postElement = getPostElement(template, post.id);
        postsContainer.insertBefore(postElement, postsContainer.getElementsByClassName('post')[0]);
        invoker.increasePostsRendered();
    }


    function getPostId(id) {
        return `post-${id}`;
    }

    function getTemplate(post) {
        return `
            <div class="post-title" id = 'title-${post.id}'>
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

    function getModalTemplate(post) {
        return `
            <div class="post-title" id = 'title-${post.id}'>
                <img class="avatar" TODO>
                <div class="title-info">
                    <span class="author">${post.author}</span>
                    <span class="location">${post.location}</span>
                </div>
            </div>
            <img class="modal-post-img" src="${post.photoLink}">
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

    function getPostElement(template, modalTemplate, id) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.id = getPostId(id);
        postElement.innerHTML = template;
        postElement.addEventListener('click', function (event) {
            document.getElementById('mc-id').style.display = "flex";
            let postModal = document.createElement('div');
            postModal.classList.add('modal');
            postModal.id = 'modal-id';
            postModal.style.zIndex = "100";
            postModal.innerHTML = modalTemplate;
            document.getElementById('mc-id').appendChild(postModal);
            document.getElementById('modal-id').addEventListener('click', function (event1) {
                event1.stopPropagation();
            })
        });
        return postElement;

    }

    return {
        editPost,
        addPost,
        renderPost,
        removePost,
        postsContainer,
    }
}());
