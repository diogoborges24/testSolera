class Tamagotchi {
    constructor(happiness, hungriness, tiredeness, fullness) {
      this.happiness = happiness
      this.hungriness = hungriness
      this.tiredeness = tiredeness
      this.fullness = fullness
      
    }
    // Getter
  getHappiness() {
    return `Happiness: ${this.happiness}`;
  }

  getHungriness() {
    return `Hungriness: ${this.hungriness}`;
  }

  getTiredeness() {
    return `Tiredeness: ${this.tiredeness}`;
  }

  getFullness() {
    return `Fullness: ${this.fullness}`;
  }
  // Method
  feed(number) {
    this.hungriness -= number
    this.fullness += number
  }
  play(number){
    this.happiness += number
    this.tiredeness += number
  }
  bed(number){
    this.tiredeness -= number
  }
  poop(number){
    this.fullness -= number
  }
  passingTime(number){
    this.tiredeness += number
    this.hungriness += number
    this.happiness -= number
  }
  }

  const tama = new Tamagotchi(50, 50, 50, 50);
  console.log(tama.getHappiness())
  console.log(tama.getTiredeness())
  tama.play(10)
  console.log(tama.getHappiness())
  console.log(tama.getTiredeness())

