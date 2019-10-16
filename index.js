//Player can select what die to roll from the dropdown menu: d2, d4, d6, d8, d10, d100, d12, d20
//More dice dropdowns can be added by clicking a button
//All dice will be rolled and their results displayed when a final button is clicked
//More buttons will appear after a roll: roll the same dice again, or reset the app
//variables for dice values
var dTwo = /[1-2]/;
var dFour = /[1-4]/;
var dSix = /[1-6]/;
var dEight = /[1-8]/;
var dTen = /[1-9]|10/;
var dTwelve = /[1-9]|1[0-2]/
var dTwenty = /^(?:[1-9]|0[1-9]|1[0-9]|20)$/