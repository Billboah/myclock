let today = new Date()
let hours = today.getHours()


function clock() {
  let today = new Date()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  let seconds = today.getSeconds()
  let period = 'PM';
  let day = 'GOOD EVENING,';
  let body_background = '';
  let time_icon =''



  if (hours < 12 && hours >= 00) { day = 'GOOD MORNING,' } else if (hours < 18 && hours >= 12) { day = 'GOOD AFTERNOON,' } else { day = 'GOOD EVENING,' }
  if(hours<18 && hours>=06){time_icon='./icon-sun.svg'}else{time_icon='./icon-moon.svg'}
  if (hours < 09 && hours >= 05) {
    body_background = 'background-image: url(https://static.vecteezy.com/system/resources/previews/004/770/331/large_2x/sunset-and-orange-cloud-and-blue-dawn-sky-with-cloud-horizontal-lines-motion-effect-on-background-from-sunshine-free-photo.jpg);'
  } else if(hours < 16 && hours >= 09){
     body_background = ' background-image: url(https://free4kwallpapers.com/uploads/originals/2015/11/03/a-beautiful-sunny-day-wallpaper.jpg)'
  } else if (hours < 18 && hours >= 16) {
    body_background = ' background-image: url(https://wallpaperaccess.com/full/1131217.jpg);'
  } else if (hours >= 21 && hours<=23 || hours>=00 && hours < 05) {
    body_background = 'background-image: url(https://wallpaperaccess.com/full/1320623.jpg)'
  }
  else {
    body_background = ' background-image: url(https://wallpaperaccess.com/full/1685406.jpg);'
  }
  if (hours < 12) { period = 'AM' } else { period = period }
  if (hours >= 12) { hours = hours % 12 } else { hours = hours }
  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
 
  document.querySelector('.hours').innerHTML = hours
  document.querySelector('.minutes').innerHTML = minutes
  document.querySelector('.seconds').innerHTML = seconds
  document.querySelector('.period').innerHTML = period
  document.querySelector('.day_time').innerHTML = day
  document.querySelector('body').style = body_background
  document.querySelector('.icon').src = time_icon

}

let updateClock = setInterval(clock, 1000)


function discription() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector('.text').innerHTML = data[Math.floor(Math.random() * data.length)].text
      document.querySelector('.author').innerHTML = data[Math.floor(Math.random() * data.length)].author
    });

}
let updateDiscribtion = setInterval(discription, 10000)

async function getLocation() {
  const res = await fetch(
    `https://api.ipbase.com/v1/json?apikey=ydu5Jx5UGvlLoXaj6y4JCOAFDs2teSZBaBHRYTA5`
  );
  const json = await res.json();
  document.querySelector('.city').innerHTML = 'in ' + json.city + ', ' + json.country_code
  document.getElementById('timezone').innerHTML = json.timezone;
  document.getElementById('year-day').innerHTML= json.day_of_year;
  document.getElementById('week-day').innerHTML = json.day_of_week;
  document.getElementById('week-number').innerHTML = json.week_number;
}
getLocation()


function showDetails() {
  let arrow = document.querySelector('.arrow')
  let expand = document.querySelector('.expand')
  let discription = document.querySelector('.discription')
  let app = document.querySelector('.app')

  let details = document.querySelector('.details')
  let detailsSetting = details.style.display

  if (detailsSetting=== 'block') {
    discription.style.display = 'block'
    details.style.display = 'none'
    app.style.height = '100%'
    expand.firstChild.nodeValue='more'
   arrow.style.transform='rotate(0deg)'             
  } else {
    discription.style.display = 'none'
    details.style.display = 'block'
    app.style.height = '40%'
    expand.firstChild.nodeValue='less'
    arrow.style.transform='rotate(180deg)'
  }
}
document.querySelector('.expand').addEventListener('click', showDetails);
