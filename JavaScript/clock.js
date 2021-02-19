//console.log 콘솔창에 프린트하기 
//default로 const사용하기. 필요할 때만 let으로 바꿔라 
//함수 안의 매개변수는 type선언 해주지 않아도 된다 
//`${변수이름}`으로 스트링 출력 가능 
//DOM Document Object Model
//JS에서 equals는 === 3개나 된다... 
//setInterval(funciton, secs(반복되는 시간))

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    todayDate = clockContainer.querySelector("h2");
const dayOfWeek= new Array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

function getTime() {
    const date = new Date();
    const mins = date.getMinutes();
    const hours = date.getHours();
    const secs = date.getSeconds();
    const dateToday = date.getDate();
    const monthToday = date.getMonth();
    const dayToday = date.getDay();
    const day = dayOfWeek[dayToday];
    clockTitle.innerText = `${hours <10 ? `0${hours}` : hours} : ${mins <10 ? `0${mins}` : mins} : ${ secs <10 ? `0${secs}` : secs}`;
    todayDate.innerText = `Today's date : ${day} ${monthToday <9 ? ` 0${monthToday + 1}` :  monthToday + 1} . ${dateToday <10 ? `0${dateToday}` : dateToday} `;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();