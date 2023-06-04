const bus = class{
    constructor(km,time){
        this.km = km;
        this.time = time;
    }

    calculateSpeed(){
        let speed = this.km/this.time;
        return speed;
    }
};

console.log(`The speed of the bus is ${new bus(20,4).calculateSpeed()}`);
