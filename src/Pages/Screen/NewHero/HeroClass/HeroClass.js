export class Hero {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.inventory = [];
    this.money = 0;
    this.savedtimes = 0;
  }
  hey() {
    console.log(`hey${this.id}`);
  }
}
