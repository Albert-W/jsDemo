class Player {
	constructor(name){
		this.name = name;
	}
	sayHelo(){
		console.log(`Helo ${this.name}.`);
	}
}
// ES6
// export default Player;
module.exports = Player;
