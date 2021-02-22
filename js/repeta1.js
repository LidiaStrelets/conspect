// const inputName = 'color';
// const inputValue = 'red';

// const colorPicker = {
//     [inputName]: inputValue,
// }

// console.log(colorPicker);

const myPlayList = {
    name: 'favourite',
    // songsNumber: 4,
    duration: '381 minutes',
    rate: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'k'],
    changeName(newName) {
        this.name = newName;
        console.log(this);
    },
    addTrack(trackName) {
        this.tracks.push(trackName);
        // this.songsNumber += 1;

        // console.log(this);
        
    },
    updateRating(newRate) {
        this.rate = newRate;
        console.log(this.rate);
    },
    getTracksNumber() {
        return this.tracks.length;
    }
}
// myPlayList.changeName('dance');

myPlayList.addTrack('Dance for me');

myPlayList.addTrack('Upgrade you');

// myPlayList.updateRating(4.4);

// console.log(myPlayList.getTracksNumber());

// const keys = Object.keys(myPlayList);
// console.log('Keys of my object: ', keys);

// for (const key of keys) {
//     console.log(myPlayList[key]);
// }

const values = Object.values(myPlayList);
console.log(values);