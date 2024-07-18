let time = document.querySelector("#time");
let date = document.querySelector("#date");

function today(){
    let today = new Date();

    //  month name
    const monthNames =["Jan" , "Feb" , "Mar" , "Apr" , "May" ,
    "June" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]

    //day names 
    const dayNames = ["Sat" , "Sun" , "Mon" , "Tue" , "Wed" , 
        "Thu" , "Fri"]
    

    // Current time
    let currentTime = `${today.getHours() <= 9 ? '0'+today.getHours() : today.getHours()} : 
    ${today.getMinutes() <= 9 ? '0'+today.getMinutes() : today.getMinutes()} 
    : ${today.getSeconds() <= 9 ? '0'+today.getSeconds() : today.getSeconds()}`

    // Current date

    let currentDate = `${dayNames[today.getDay()+1]}, ${today.getDate()} 
    ${monthNames[today.getMonth()]} ${today.getFullYear()}`
    
    // console.log(today.getDay());

    time.innerHTML = currentTime;
    date.innerHTML = currentDate;
    
}

setInterval( () =>{
    today();} , 1000);
