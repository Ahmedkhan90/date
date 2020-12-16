// var today = new Date ()
// console.log(today)
// var todays = today.getTime()
// console.log(todays)
// var birth = new Date ('january 22,2000')
// console.log(birth)
// var toda = birth.getTime()
// console.log(toda) 

var my = todays - toda
console.log(my)

var second = my/1000
console.log(second)

var minutes = second/60
console.log(minutes) 

var hours = minutes/60
console.log(hours)

var days = hours/24
console.log(days)

var months = days/365
console.log(months)

function yourAge() {
var enterYourBirth = document.getElementById("date").value
var nowDate = new Date();
var myDate = new Date(enterYourBirth);
var age = nowDate.getFullYear()
var ages = myDate.getFullYear()
var fullAge = age-ages

var today = new Date ()
var birth = new Date (enterYourBirth)
var todays = today.getTime()
var toda = birth.getTime()
var my = todays - toda

var second = my/1000

var minutes = second/60

var hours = minutes/60

var days = hours/24
var months = days/30
var months = days/365

document.write(myDate,"   ","day for your birth","   ", fullAge , " ","year","   ", my ," ","mini" ,"   ", second,"   ","second", "   ",minutes,"   ","minutes","   ",hours,"   ","hours","   ",days,"   ","days","   ",months,"months")

}

