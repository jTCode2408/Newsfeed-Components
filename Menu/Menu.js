/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



function menuComponent(arr){
  const mainMenu = document.createElement('div');

  const list = document.createElement('ul'); 
  //create elemnts, div/ ul
  
  
  mainMenu.classList.add('menu'); //create classes

  mainMenu.appendChild(list); //append

  arr.forEach(function(item){
    const listItems = document.createElement('li');
    listItems.textContent = item;
    list.appendChild(listItems);
  }) // arr method to add li's


  const menuButton = document.querySelector('.menu-button'); //select 'menu-button class'

  menuButton.addEventListener('click', event => {
    mainMenu.classList.toggle('menu--open');
  }) //click event, toggle 


  return mainMenu; //return main menu
} //create componenet funcion


const nav = document.querySelector(".header"); 
nav.appendChild(menuComponent(menuItems)); //add menu to dom
