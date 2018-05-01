const invoker = (function () {

    let user = 'Johny Dee';
    let postsRendered = 0;
    const postsAmountToRender = 10;

    function addEventListeners() {
        document.getElementById('add-post-button').addEventListener('click', function (event) {
            document.getElementById('mc-id').style.display = "flex";
            const addModal = getAddModal();
            addModal.addEventListener('click', function (event) {
                event.stopPropagation();
            });
            document.getElementById('mc-id').appendChild(addModal);
            document.getElementById('add-submit').addEventListener('click', function (event) {
                const desc = document.getElementById('desc-id');
                const loc = document.getElementById('loc-id');
                const photo = document.getElementById('img-text-id');
                const hash = document.getElementById('hash-id');
                const post = {
                    author: 'Hans Adler',
                    location: loc.value,
                    description: desc.value,
                    photoLink: photo.value,
                    hashtags: ['#mountain', '#Nordicpower', '#snow']
                };
                postManager.addPhotoPost(post);
            });
        });
        document.getElementById('load-more-button').addEventListener('click', function (event) {
            renderMore();
        });
        document.getElementById('mc-id').addEventListener('click', function (event) {
            this.style.display = "none";
            this.innerHTML = '';
        });
        /*document.getElementById('load-more-button').removeEventListener('click', function (event) {
            renderMore();
        });*/
    }

    function renderMore() {
        const postsToTake = postsRendered + postsAmountToRender > photoPosts.length ?
            photoPosts.length - postsRendered:
            postsAmountToRender;
        let postsToRender = postManager.getPhotoPosts({}, postsRendered, postsToTake);
        for (let i = 0; i < postsToTake; i++) {
            if (!postsToRender[i]) {
                console.log('dsajjkdhsajdhsna');
            }
            postRenderer.renderPost(postsToRender[i]);
        }
        postsRendered += postsAmountToRender;
    }
    function increasePostsRendered() {
        postsRendered++;
    }

    function decreasePostsRendered() {
        postsRendered--;
    }
    function showUser() {
        const header = document.getElementById('header');
        let userInfo = document.createElement('span');
        userInfo.classList.add('user-info');
        header.insertBefore(userInfo, header.getElementsByTagName('i')[0]);
        if (!user) {
            userInfo.innerHTML = `Зарегистрируйтесь или войдите`;
        }
        else {
            userInfo.innerHTML = `Здравствуйте, ${user}`;
        }
    }

    function getAddModal() {
        const editModal = document.createElement('div');
        editModal.classList.add('modal');
        editModal.innerHTML = `
            <div class = "edit-content">
                <div class="edit-div">
                <span>Location:</span>
                <input type="text" name="location" id="loc-id"/>
                </div>
                <div class="edit-div">
                <span>Image:</span>
                <input type="file" name="pic" id="img-id" accept="image/*">
                <input type="submit">
                <input type="text" id="img-text-id">
                </div>
                <div class="edit-div">
                <span>Description:</span>
                <textarea class="description-ed" id="desc-id"></textarea>
                </div>
                <div class="edit-div">
                <span>Hashtags:</span>
                <input type="text" name="hashtags" id="hash-id"/>
                </div>
                <button class="submit-edit" id="add-submit">Сохранить изменения</button>
            </div>
            `;
        return editModal;
    }

    return {
        showUser,
        user,
        addEventListeners,
        renderMore,
        increasePostsRendered,
        decreasePostsRendered
    }
}());

/*let searchInput = document.getElementById("search");
document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault();
    let request = searchInput.value;
    postRenderer.clear();
    let result = [];
    if (request.indexOf('@') === 0){
        result = postManager.getPhotoPosts(0, postManager.size(), {author : request.slice(1, request.length)});
    }
    if (request.indexOf('#') === 0){
        result = postManager.getPhotoPosts(0, postManager.size(), {hashTags: request.split(" ")});
    }
    result.forEach( item => {
        postRenderer.renderPost(item)
    });
});*/