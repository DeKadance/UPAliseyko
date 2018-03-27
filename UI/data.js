const photoPosts = [
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
        hashtags: ['#canyon', '#USA']
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