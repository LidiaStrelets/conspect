const hotel = {
    name: 'Ovis',
    stars: 4,
    rooms: 213,
    showName(){
            console.log(this.name);
    },
    changeRooms(value) {
        this.rooms = value;
    },
}

// console.log(hotel.name);
// console.log(hotel["stars"]);

// hotel.name = 'Hope';
// console.log(hotel.name);

// hotel["rooms"] = 108;
// console.log(hotel["rooms"]);

// hotel.city = 'Kharkiv';
// hotel["rate"] = 9.7;

// console.log(hotel);

// delete hotel.city;
// delete hotel["rate"];
// console.log(hotel);

// console.log(hotel.pool);

// let number = 46;
// let type = 'gymnasium';
// const school = {
//     number,
//     type,
//     students: 1267,
// }
// console.log(school);


// const key = 'lastName';
// const person = {};
// person[key] = 'Guzh';
// console.log(person);


// hotel.greet = function() {
//     console.log('Hello,my friend!');
// }
// console.log(hotel);
// hotel.greet();

// hotel.showName();
hotel.changeRooms(11);
// console.log(hotel);

// for (const key in hotel) {
//     console.log('key: ', key);
//     console.log('value: ', hotel[key]);
// }

console.log(Object.keys(hotel));
console.log(Object.values(hotel));
console.log(Object.entries(hotel));