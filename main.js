let list = document.getElementById('timezone-list')
let inputDateElement = document.getElementById('input-date')
let inputTimeElement = document.getElementById('input-time')
let selectTimezoneElement = document.getElementById('timezone-list')
let convertedDateTimeElement = document.getElementById('converted-time')

let inputDate
let inputTime
let selectedTimezone

moment.tz.names().map(item => {
    if(item === moment.tz.guess()){
        list.innerHTML += `<option selected>${item}</option>`
        selectedTimezone = item
    }
    else{
        list.innerHTML += `<option>${item}</option>`
    }
})



inputDateElement.onchange = (e) => {
    inputDate = e.target.value

    displayConvertedDateTime()
}

inputTimeElement.onchange = (e) => {
    inputTime = e.target.value
    
    displayConvertedDateTime()
}

selectTimezoneElement.onchange = (e) => {
    selectedTimezone = e.target.value

    displayConvertedDateTime()
}

function displayConvertedDateTime(){
    if(inputDate !== '' && inputTime !== undefined){
        let dateTime = moment(inputDate + ' ' + inputTime).tz(selectedTimezone).format('LLLL')
        convertedDateTimeElement.innerHTML = 'Converted time: ' + dateTime
    }
}