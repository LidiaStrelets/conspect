const profile = {
    name: 'Lidia Strelets',
    tag: 'just_li_s',
    location: 'Odessa, Ukraine',
    avatar: 'https://way_to_my_photo',
    stats: {
        followers: 2132,
        views: 78654,
        likes: 876545,
    },
}

// function showProfileInfo(userProfile) { 
//     const { name, tag, location, avatar, stats: { followers, views, likes } } = userProfile;
//     console.log(name, tag, location, avatar, followers, views, likes);
// };

function showProfileInfo({ name, tag, location, avatar, stats: { followers, views, likes } } ) { 
    
    console.log(name, tag, location, avatar, followers, views, likes);
};

showProfileInfo(profile);