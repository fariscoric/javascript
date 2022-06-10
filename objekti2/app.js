//auto,    make,model,maxSpeed,currentSpeed,drive,break,stop.
//drive - trenutnu brzinu za 20
//break - smanji brzinu za 10
//stop - brzina 0

//160, i treba smanji brzinu do 80, i da stane


const car = {
    make: "Audi",
    model: "A4",
    maxSpeed: 250,
    currentSpeed: 0,
    drive: function (x) {
        if (this.currentSpeed + x<this.maxSpeed) {
            console.log(this.currentSpeed += x);
        }
        else  if (this.currentSpeed + x >= this.maxSpeed){
        console.log(this.currentSpeed = this.maxSpeed);
        alert("Maximum speed reached");
    }
    },
    break: function (y) {
        if (this.currentSpeed - y>0) {
            console.log(this.currentSpeed -= y);
        }
        else  if (this.currentSpeed - y <= 0){
        console.log(this.currentSpeed = 0);
        alert("The car cannot go any slower");
    };
    },
    stop: function () {
        console.log(this.currentSpeed = 0);
    },
}

car.drive(200);
car.break(240);



