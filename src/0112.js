//switch 반복문을 이용한 윤년 계산
var year = 2000;
var month = 2;
var days = 0;

switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break; //폴스루 방지 
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year %100 === 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('invalid month');
}
console.log(days);
__________________________________________________________________________________________
//for 반복문을 이용한 주사위 합이 6이 되는 경우
for (var i = 1; i <= 6; i++)
{
    for (var j = 1; j <= 6; j++)
    {
        if(i+j===6) console.log(`[${i}, ${j}]`);
    }
}
__________________________________________________________________________________________
//단축 평가
var text = 'the fox is jumps over the box';
var tf = text && false; // text 는 참이지만 false 까지 확인했기 때문에 false 가 나온다.
console.log(tf);
__________________________________________________________________________________________
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello My Name is !{this.name}`);
    }
};

console.log(typeof person);
console.log(person);


var person = {
    name : 'Lee'
};
console.log(person.name);
console.log(typeof person.name);
