let apple = function () {
    console.log("I Like Apple!");
};

apple(); //apple은 식별자일 뿐... 쫄지 말자
//__________________________________________________________________

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10); 