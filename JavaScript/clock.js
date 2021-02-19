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
