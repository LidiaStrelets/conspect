const animal = {
  voice: 'roar',
  getVoice() {
    console.log(this.voice);
  },
};

const dog = Object.create(animal);
// console.log(dog);
dog.voice = 'bark';

// animal.getVoice();
// dog.getVoice();
//////////

const Page = function (links, photos) {
  this.links = links ?? ['vk', 'insta'];
  this.photos = photos ?? ['im-1', 'im-2', 'im-3'];
};

Page.prototype.getPhotosAmount = function () {
  //   console.log(this);
  console.log(this.photos.length);
};
Page.prototype.getLinksAmount = function () {
  console.log(this.links.length);
};

const myPage = new Page();
// myPage.getLinksAmount();
// myPage.getPhotosAmount();
//////////

const User = function (access) {
  this.access = access ?? 'locked';
};

const Manager = function (access, docs) {
  User.call(this, access);
  this.documents = docs;
};

const user = new User('locked');
const manager = new Manager('free', ['d1', 'd2']);

// console.log('user: ', user);
// console.log('manager: ', manager);
const employees = [user, manager];
for (const emp of employees) {
  //   console.log('i am employee', emp);
  if (emp.hasOwnProperty('documents')) {
    console.log(emp, ' is a manager');
  } else {
    console.log(emp, ' is just user');
  }
}
