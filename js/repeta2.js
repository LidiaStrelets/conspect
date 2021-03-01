const user = {
    name: 'Lidia',
    showName() {
        console.log('this', this);
        console.log('this.name', this.name);
    }
}

// user.showName();
const outerShowName = user.showName;

// outerShowName();

const action = func => {
    console.log(func);
    func();
}

action(user.showName)