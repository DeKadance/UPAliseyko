let photoPosts = [
    {
        id: '1',
        author: 'Johny Dee',
        location: "Costa Rica",
        description: 'My dad sells land in Costa Rica, and this is the crazy view from one of the plots.',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/z56z6wud4pj01.jpg',
        hashtags: ['#stunning', '#costarica']

    },

    {
        id: '2',
        author: 'Felix Kjellberg',
        location: 'Colorado, USA',
        description: 'Golden Aspens in Creede, Colorado.',
        createdAt: new Date('2018-02-25'),
        photoLink: 'https://i.redd.it/49w6wamzxyj01.jpg',
        hashtags: ['#goldenaspens', '#USA']
    },

    {
        id: '3',
        author: 'Ken Sprouse',
        location: 'Death Valley, USA',
        description: '50 shades of blue and brown in Death Valley National Park ',
        createdAt: new Date('2018-02-25'),
        photoLink: 'https://i.redd.it/hqa1bjp58uj01.jpg',
        hashtags: ['#OC', '#nature']
    },

    {
        id: '4',
        author: 'Hans Adler',
        location: 'Germany',
        description: 'Foggy Woodlands in Southern Germany ',
        createdAt: new Date('2018-02-26'),
        photoLink: 'https://i.redd.it/c9ju3lfectj01.jpg',
        hashtags: ['#forest', '#nature']
    },

    {
        id: '5',
        author: 'Jimmy Raynor',
        location: 'Iceland',
        description: 'Black Sand Beach - Dyrholaey, Vik',
        createdAt: new Date('2018-02-26'),
        photoLink: 'https://i.redd.it/ceac0n6hduj01.jpg',
        hashtags: ['#beach', '#Nordicpower']
    },

    {
        id: '6',
        author: 'Peter Watson',
        location: 'New York, USA',
        description: 'Snowy day in the woods of Ithaca, New York.',
        createdAt: new Date('2018-02-27'),
        photoLink: 'https://i.redd.it/cd2lj75cpvj01.jpg',
        hashtags: ['#forest', '#USA', '#snow']
    },

    {
        id: '7',
        author: 'Peter Watson',
        location: 'Zion, USA',
        description: 'Zion National Park at night.',
        createdAt: new Date('2018-02-25'),
        photoLink: 'https://i.redd.it/bnlgrotw1wj01.jpg',
        hashtags: ['#park', '#USA', '#night']
    },

    {
        id: '8',
        author: 'Hans Adler',
        location: 'Grand Teton, USA',
        description: 'North Fork Cascade Trail looking back at Grand Teton | Grand Teton National Park',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/sz97o90mtyj01.jpg',
        hashtags: ['#park', '#USA']
    },

    {
        id: '9',
        author: 'Johny Dee',
        location: 'Argentina',
        description: 'Southern Argentina has some pretty good scenery too',
        createdAt: new Date('2018-03-01'),
        photoLink: 'https://i.redd.it/o984jrk2rxj01.jpg',
        hashtags: ['#beach', '#Argentina']
    },

    {
        id: '10',
        author: 'Jimmy Raynor',
        location: 'Arizona, USA',
        description: 'Mount Lemmon',
        createdAt: new Date('2018-03-01'),
        photoLink: 'https://i.redd.it/9ncw8puoktj01.jpg',
        hashtags: ['#mountain', '#USA']
    },

    {
        id: '11',
        author: 'Jimmy Raynor',
        location: 'USA',
        description: '"The Best Sunrise in the West" - Mesa Arch, Canyonlands National Park',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/qy6dx29ywrj01.jpg',
        hashtags: '#canyon #USA'
    },

    {
        id: '12',
        author: 'Peter Watson',
        location: 'Canada',
        description: 'Pacific Rim National Park, Wild Pacific Trail',
        createdAt: new Date('2018-02-27'),
        photoLink: 'https://i.redd.it/s76kam9hkxj01.jpg',
        hashtags: ['#river', '#forest']
    },

    {
        id: '13',
        author: 'Felix Kjellberg',
        location: 'Kenya',
        description: 'Storm over Samburu National Reserve, Kenya',
        createdAt: new Date('2018-02-25'),
        photoLink: 'https://i.redd.it/6c2afwjhkyj01.jpg',
        hashtags: ['#storm', '#Africa', '#forest']
    },

    {
        id: '14',
        author: 'Johny Dee',
        location: 'Utah, USA',
        description: 'Crossing the creek on the way to Donut Falls in Big Cottonwood Canyon, UT.',
        createdAt: new Date('2018-02-26'),
        photoLink: 'https://i.redd.it/y2gcxbm6prj01.jpg',
        hashtags: ['#river', '#USA', '#forest']
    },

    {
        id: '15',
        author: 'Ken Sprouse',
        location: 'UK',
        description: 'Sunset below Great Gable, The Lake District, UK',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/c6tmqva4trj01.jpg',
        hashtags: ['#lake', '#UK', '#snow']
    },

    {
        id: '16',
        author: 'Johny Dee',
        location: 'New Zealand',
        description: 'A misty morning on the Mirror Lakes in New Zealand ',
        createdAt: new Date('2018-03-02'),
        photoLink: 'https://i.imgur.com/RxzuJ36.jpg',
        hashtags: ['#lake', '#forest']
    },

    {
        id: '17',
        author: 'Hans Adler',
        location: 'Norway',
        description: 'Walk in North Norway, Looking over Ersfjordbotn',
        createdAt: new Date('2018-02-25'),
        photoLink: 'https://i.redd.it/3jt2zorz5uj01.jpg',
        hashtags: ['#mountain', '#Nordicpower', '#snow']
    },

    {
        id: '18',
        author: 'Peter Watson',
        location: 'Colorado, USA',
        description: 'Morning Glory at the 4UR Ranch, Creede, Colorado.',
        createdAt: new Date('2018-02-26'),
        photoLink: 'https://i.redd.it/y2gcxbm6prj01.jpg',
        hashtags: ['#river', '#USA', '#forest']
    },

    {
        id: '19',
        author: 'Johny Dee',
        location: 'Colorado, USA',
        description: 'Morning Glory at the 4UR Ranch, Creede, Colorado.',
        createdAt: new Date('2018-02-26'),
        photoLink: 'https://i.redd.it/yzzw2xpiwyj01.jpg',
        hashtags: ['#goodmorning', '#USA', '#stunning']
    },

    {
        id: '20',
        author: 'Ken Sprouse',
        location: 'UK',
        description: 'Ennerdale Forest, the Lake District',
        createdAt: new Date('2018-02-27'),
        photoLink: 'https://i.redd.it/qgygtg4v1xj01.jpg',
        hashtags: ['#mountain', '#UK', '#forest']
    }

];


let postsFunctions = (function () {

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        let resultPosts = photoPosts;
        if (filterConfig) {
            if (filterConfig.author) {
                resultPosts = resultPosts.filter(post => post.author === filterConfig.author)
            }

            if (filterConfig.dateBegin && filterConfig.dateBegin instanceof Date) {
                resultPosts = resultPosts.filter(post => post.createdAt >= filterConfig.dateBegin);
                if (filterConfig.dateEnd && filterConfig.dateEnd instanceof Date) {
                    resultPosts = resultPosts.filter(post => post.createdAt <= filterConfig.dateEnd);
                }
            }

            if (filterConfig.hashtags) {
                resultPosts = resultPosts.filter(post => post.hashtags.includes(filterConfig.hashtags));
            }
        }
        resultPosts.sort((post1, post2) => post2.createdAt - post1.createdAt);
        return resultPosts.slice(skip, skip + top);
    }

    function getPhotoPost(id) {
        if (typeof id === 'number') {
            for (let i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id.toString()) {
                    return photoPosts[i];
                }
            }
        }
        if (typeof id === 'string') {
            for (let i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id) {
                    return photoPosts[i];
                }
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
        if (photoPost.description && photoPost.description < 200) {
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

console.log(postsFunctions.getPhotoPosts(0, 10));
console.log(postsFunctions.getPhotoPosts(0, 10, {author: 'Johny Dee'}));
console.log(postsFunctions.removePhotoPost('5'));
console.log(postsFunctions.getPhotoPost(5));
console.log(postsFunctions.getPhotoPost('6'));
console.log(postsFunctions.getPhotoPost(7));
console.log(postsFunctions.validatePhotoPost(
    {
        id: '21',
        author: 'Ken Sprouse',
        location: 'UK',
        description: 'Ennerdale Forest, the Lake District',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/qgygtg4v1xj01.jpg',
        hashtags: ['#mountain', '#UK', '#forest']
    }
));
console.log(postsFunctions.validatePhotoPost(
    {
        id: '21',
        author: '',
        location: 'UK',
        description: 'Ennerdale Forest, the Lake District',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/qgygtg4v1xj01.jpg',
        hashtags: ['#mountain', '#UK', '#forest']
    }
));
console.log(postsFunctions.editPhotoPost('7', {description: 'Edited description'}));
console.log(postsFunctions.getPhotoPost(7));
console.log(postsFunctions.addPhotoPost(
    {
        id: '21',
        author: 'Ken Sprouse',
        location: 'UK',
        description: 'Added post',
        createdAt: new Date('2018-02-28'),
        photoLink: 'https://i.redd.it/qgygtg4v1xj01.jpg',
        hashtags: ['#mountain', '#UK', '#forest']
    }
));
console.log(postsFunctions.getPhotoPost(21));