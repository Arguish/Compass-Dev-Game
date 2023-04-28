export class Hero {
  constructor(id) {
    this.id = id;
    this.type = "player";
    this.inventory = [];
    this.money = 0;
    this.savedtimes = 0;
  }
  hey() {
    console.log(`hey${this.id}`);
  }
}
