const invoker = (function () {

    let user = 'Johny Dee';
    let postsRendered = 0;
    const postsAmountToRender = 10;

    function addEventListeners() {
        document.getElementById('add-post-button').addEventListener('click', function (event) {
            alert('TBD');
        });
        document.getElementById('load-more-button').addEventListener('click', function (event) {
            renderMore();
        });
        document.getElementsByClassName('post')[0].addEventListener('click', function (event) {

        });
        document.getElementsByClassName('edit-button')[0].addEventListener('click', function (event) {
            alert("edit1");
            event.stopPropagation();
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
    return {
        showUser,
        user,
        addEventListeners,
        renderMore,
        increasePostsRendered
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