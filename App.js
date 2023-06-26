const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const weekDays = [
    "Sunday",
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const deadline = document.querySelector(".giveaway-info")
const countdownContainer = document.querySelector(".countdown")
const countdownItems = document.querySelectorAll(".countdown span")


const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()
const currentDay = currentDate.getDate()

const futureDate = new Date(currentYear, currentMonth, currentDay + 10, 12, 0, 0)
const futureYear = futureDate.getFullYear()
const futureMonth = futureDate.getMonth()
const futureWeekDay = futureDate.getDay()
const futureDay = futureDate.getDate()
const futureHours = futureDate.getHours()
const futureMinutes = futureDate.getMinutes() < 10 ? `0${futureDate.getMinutes()}` : futureDate.getMinutes()

deadline.textContent = `Giveaway ends on ${weekDays[futureWeekDay]}, ${futureDay} ${months[futureMonth]} ${futureYear}, at ${futureHours}:${futureMinutes} PM`


const displayCountdown = () => {

    const futureTime = futureDate.getTime()
    const currentTime = new Date().getTime()

    const difference = futureTime - currentTime

    const msInOneDay = 24 * 60 * 60 * 1000
    const msInOneHour = 60 * 60 * 1000
    const msInOneMinute = 60 * 1000

    const days = Math.floor(difference / msInOneDay)
    const hours = Math.floor((difference % msInOneDay) / msInOneHour)
    const minutes = Math.floor((difference % msInOneHour) / msInOneMinute)
    const seconds = Math.floor((difference % msInOneMinute) / 1000)

    const remainingTime = [days, hours, minutes, seconds]

    const format = (time) => {
        if (time < 10) {
            return `0${time}`
        }
        return time
    }

    countdownItems.forEach((item, index) => {
        item.textContent = format(remainingTime[index])
    })

    if (difference < 0) {
        clearInterval(displayInterval)
        countdownContainer.innerHTML = `<h4 id="giveaway-expired">Sorry, the giveaway has expired!</h4>`
    }

}


const displayInterval = setInterval(displayCountdown, 1000)

displayCountdown()