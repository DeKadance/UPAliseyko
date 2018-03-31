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