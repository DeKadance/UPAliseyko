const invoker = (function () {

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
            photoPosts.length :
            postsRendered + postsAmountToRender;
        for (let i = postsRendered; i < postsToTake; i++) {
            if (!photoPosts[i]) {
                console.log('dsajjkdhsajdhsna');
            }
            postRenderer.renderPost(photoPosts[i]);
        }
        postsRendered += postsAmountToRender;
    }

    return {
        addEventListeners,
        renderMore,
    }
}());