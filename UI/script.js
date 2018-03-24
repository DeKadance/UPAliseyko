const postsFunctions = (function () {

    function getPhotoPosts(filterConfig, skip = 0, top = 10) {
        let resultPosts = photoPosts;
        if (filterConfig) {
            if (filterConfig.author) {
                resultPosts = resultPosts.filter(post => post.author === filterConfig.author)
            }

            if (filterConfig.dateBegin && filterConfig.dateBegin instanceof Date) {
                resultPosts = resultPosts.filter(post => post.createdAt >= filterConfig.dateBegin);
            }

            if (filterConfig.dateEnd && filterConfig.dateEnd instanceof Date) {
                resultPosts = resultPosts.filter(post => post.createdAt <= filterConfig.dateEnd);
            }

            if (filterConfig.hashtags) {
                console.log(filterConfig);
                for (let i = 0; i < filterConfig.hashtags.length; i++) {
                    console.log(filterConfig.hashtags[i]);
                    resultPosts = resultPosts.filter(post => post.hashtags.includes(filterConfig.hashtags[i]));
                }
            }
        }
        resultPosts.sort((post1, post2) => post2.createdAt - post1.createdAt);
        return resultPosts.slice(skip, skip + top);
    }

    function getPhotoPost(id) {
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === id.toString()) {
                return photoPosts[i];
            }
        }
    }

    function validatePhotoPost(photoPost) {
        if (!photoPost) {
            return false;
        }
        if (typeof photoPost.id !== 'string') {
            return false;
        }
        if (typeof photoPost.description !== 'string' && photoPost.description.length > 200) {
            return false;
        }
        if (!(photoPost.createdAt instanceof Date)) {
            return false;
        }
        if (typeof photoPost.author !== 'string' || photoPost.author.length === 0) {
            return false;
        }
        if (typeof photoPost.photoLink !== 'string' || photoPost.photoLink.length === 0) {
            return false;
        }
        if (!photoPost.hashtags) {
            return false;
        }
        return true;
    }

    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            if (photoPosts.some((post) => post.id === photoPost.id)) {
                return false;
            }
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    function editPhotoPost(id, photoPost) {
        let temp = getPhotoPost(id);
        if (photoPost.description && photoPost.description.length < 200) {
            temp.description = photoPost.description;
        }
        if (photoPost.photoLink && photoPost.photoLink !== 0) {
            temp.photoLink = photoPost.photoLink;
        }
        if (photoPost.hashtags) {
            temp.hashtags = photoPost.hashtags;
        }
        if (validatePhotoPost(temp)) {
            for (let i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id) {
                    photoPosts[i] = temp;
                    return true;
                }
            }
        }
        return false;
    }

    function removePhotoPost(id) {
        if (!id) {
            return false;
        }
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === id) {
                photoPosts.splice(i, 1);
                return true;
            }
        }
    }

    return {
        removePhotoPost,
        addPhotoPost,
        getPhotoPost,
        getPhotoPosts,
        editPhotoPost,
        validatePhotoPost
    };
}());

