const friends = [
    { name: 'Mango', isOnline: true, vip: true, },
    { name: 'Kiwi', isOnline: false, vip: false, },
    { name: 'Apple', isOnline: false, vip: true, },
    {name: "Orange", isOnline: true, vip: true,},
];

// console.table(friends);

// Найти друга в коллекции объектов и вернуть сообщение нашли или нет
function findFriendByName(friends, nameToFind) {
    for (const friend of friends) {
        if(friend.name===nameToFind){
            return 'В базе данных есть твой друг';
    }
    }
    return 'В базе не обнаружено совпадений';
}

// console.log(findFriendByName(friends, 'Apple'));

// console.log(findFriendByName(friends, 'Pear'));


// получить массив имен друзей

function getAllFriends(friends) {
    const allFriends = [];
    for (const friend of friends) {
        allFriends.push(friend.name);
    }
    return allFriends;
}

// console.log(getAllFriends(friends));

// Получить друзей которые в сети

function getOnlineFriends(friends) {
    const onlineFriends = [];
    for (const friend of friends) {
        if (friend.isOnline) {
           onlineFriends.push(friend); 
        }
        
    }
    return onlineFriends;
}

// console.log(getOnlineFriends(friends));

// вернуть непривелегированных друзей

function getNotVips(friends) {
    const regularFriends = [];
    for (const friend of friends) {
        if (!friend.vip) {
            regularFriends.push(friend)
        }
    }
    return regularFriends;
}
 
// console.log(getNotVips(friends));

// вывести кто онлайн а кто нет

function getFriendOnlineStatus(friends) { 
    const onlineFriends = [];
    const offlineFriends = [];

    for (const friend of friends) {
        if (friend.isOnline) {
            onlineFriends.push(friend.name);
        }
        else {
            offlineFriends.push(friend.name);
        }
    }

    const onlineFriendsString = onlineFriends.join(', ');
    const offlineFriendsString = offlineFriends.join(', ');

    console.log('Сейчас в сети: ', onlineFriendsString);
    console.log('Сейчас не в сети: ', offlineFriendsString);
}
// getFriendOnlineStatus(friends);

// вернуть объект с массивом друзей - кто он кто оф

function sortFriendsByOnline(friends) {
    const onlineFriends = [];
    const offlineFriends = [];

    const friendsByOnline = {online: [], offline: [],};


    for (const friend of friends) {
        if (friend.isOnline) {
            friendsByOnline.online.push(friend);
            continue;
        }
        
            friendsByOnline.offline.push(friend);
        
    }
    // return {
    //     online: onlineFriends,
    // offline: offlineFriends,
    // }

    return friendsByOnline;
}

console.log(sortFriendsByOnline(friends));