/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import "./style.css";

const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "A", "Q", "K", "J"];
const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

const getRan = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const suitIndex = getRan(0, suits.length - 1);
//const numberIndex = getRan(0, number.length - 1);

const body = document.querySelector(".body");
const suitTop = document.querySelector(".suit-top");
const numberContainer = document.querySelector(".number");
const suitBottom = document.querySelector(".suit-bottom");

document.body.style.backgroundColor = "green";

window.onload = function() {
  //write your code here
  numberContainer.innerHTML = number[getRan(0, number.length)];
  suitBottom.innerHTML = suits[suitIndex];
  suitTop.innerHTML = suits[suitIndex];
  console.log("Hello Rigo from the console!");
};
