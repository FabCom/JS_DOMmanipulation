console.log("FONCTIONNALITÉ 1 : clique sur le footer");
console.log("FONCTIONNALITÉ 2 : clique sur le bouton de menu");
console.log("FONCTIONNALITÉ 3 : clique sur le bouton edit de la carte html5");
console.log("FONCTIONNALITÉ 4 : clique sur le bouton edit de la carte css3");
console.log("FONCTIONNALITÉ 5 : double-clic sur la navbar");
console.log("FONCTIONNALITÉ 6 : passe la souris sur les cartes");
console.log("FONCTIONNALITÉ 7 et 8 : clique sur les boutons LEFT et RIGHT");
console.log("FONCTIONNALITÉ 9 : clique sur JS & EVENT et appuie sur a, y, p, b");

// FONCTIONNALITÉ 1
let counter = 0
footer = document.querySelector('footer');
footer.addEventListener('click', addClick);

function addClick(){
  counter++
  console.log('clic numéro ' + counter);
}

// FONCTIONNALITÉ 2
menu = document.getElementById('navbarHeader');
menubtn = document.querySelector('button.navbar-toggler');
menubtn.addEventListener('click', addORremoveClassCollapse)
function addORremoveClassCollapse(){
  menu.classList.toggle('collapse')
}
// FONCTIONNALITÉ 3
first_card = document.querySelectorAll('div.card')[0];
first_card_text = first_card.children[1];
first_card_editbtn = first_card.getElementsByTagName('button')[1];

first_card_editbtn.addEventListener('click', textToRed)
function textToRed(){
  first_card_text.style.color = 'red'
}

// FONCTIONNALITÉ 4
second_card = document.querySelectorAll('div.card')[1];
second_card_text = second_card.children[1];
second_card_editbtn = second_card.getElementsByTagName('button')[1];

second_card_editbtn.addEventListener('click', textToGreen)
function textToGreen(){
  if (second_card_text.style.color == 'green'){
    second_card_text.style.color = ''
  }else {
    second_card_text.style.color = 'green'
  }
}

 
// FONCTIONNALITÉ 5

navbar = document.querySelector('div.navbar');
link_bootstrap = document.getElementsByTagName('link')[0];
navbar.addEventListener('dblclick',toggleBootstrap );

function toggleBootstrap(){
  if (link_bootstrap.href == 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'){
    link_bootstrap.href = ""
  }else{
    link_bootstrap.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  }

}

// FONCTIONNALITÉ 6
let cards = document.querySelectorAll('div.card')
// console.log(cards);

for (let i=0;i < cards.length;i++){
  card = cards[i];
  let btn = card.querySelector('button.btn-success');
  btn.addEventListener("mouseenter", modifyCard)
}

function modifyCard(){
  card_img = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('img')[0]
  card_text = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('p')[0]
  this.parentNode.parentNode.parentNode.parentNode.classList.toggle('reduce');
  if (this.parentNode.parentNode.parentNode.parentNode.classList.contains('reduce')){
    card_img.style.width="20%";
    card_text.style.display="none";
  }else{
    card_img.style.width="";
    card_text.style.display="";
  }
}

// Fonctionnalité 7 et 8

btn1 = document.getElementsByClassName('jumbotron')[0].getElementsByTagName('a')[0];
btn2 = document.getElementsByClassName('jumbotron')[0].getElementsByTagName('a')[1];

btn_left = document.createElement('button');
btn_right = document.createElement('button');
btn_left.innerHTML = "LEFT";
btn_left.classList.add("btn","btn-primary");
btn_right.innerHTML = "RIGHT";
btn_right.classList.add("btn","btn-secondary");
btn1.replaceWith(btn_left);
btn2.replaceWith(btn_right);
btn_left.addEventListener('click', firstBecomeLast);
btn_right.addEventListener('click', lastCardBecomeFirst);

function lastCardBecomeFirst(){
  let cards = document.querySelectorAll('div.card');
  cards[cards.length-1].parentNode.parentNode.insertBefore(cards[cards.length-1].parentNode,cards[0].parentNode)
}

function firstBecomeLast(){
  let cards = document.querySelectorAll('div.card');
  cards[cards.length-1].parentNode.after(cards[0].parentNode);
}

// FONCTIONNALITÉ 9
let brand = document.querySelector('a.navbar-brand');
let body = document.getElementsByTagName('body')[0];
document.addEventListener('keydown',modifyTemplate);

function modifyTemplate(e){
  function resetBodyClass(){
    body.classList='';
  }
  if(e.target==brand){
    switch(e.key){
      case 'a':
        resetBodyClass()
        body.classList.add('col-4');
        break;
      case 'y':
        resetBodyClass()
        body.classList.add('col-4', 'offset-md-4');
        break;
      case 'p':
        resetBodyClass()
        body.classList.add('col-4', 'offset-md-8');
        break;
      case 'b':
        resetBodyClass()
        break;
    }
  }
}