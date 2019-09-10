window.onload = () => {
  const btnCreate = document.querySelector(".btnCreate");
  const btnSave = document.querySelector('.saveActive');
  const btnClearAll = document.querySelector(".clearAll");
  const taskText = document.querySelector(".userText");
  const parentList = document.querySelector(".list");
  let todoListArray = [];
  let current = 0;

  btnCreate.addEventListener("click", function () {
    createTask();
  });

  btnSave.addEventListener("click", function () {
    saveTask();
  });

  function createTask() {
    const newLi = document.createElement("li");
    const newliText = document.createElement("span");
    const btnDelete = document.createElement("button");
    const btnEdit = document.createElement("button");
    let task = {
      name: taskText.value.trim(),
      check: false,
      id: `task-${todoListArray.length}`
    };
    todoListArray.push(task);

    parentList.appendChild(newLi);
    newLi.setAttribute("id", task.id);
    newLi.appendChild(newliText);
    newLi.appendChild(btnDelete);
    newLi.appendChild(btnEdit);
    newliText.innerText = task.name;

    btnDelete.classList.add("btn-delete");
    btnDelete.innerText = "удалить";

    btnEdit.classList.add("btn-edit");
    btnEdit.innerText = "редактировать";

    btnDelete.onclick = function () {
      deleteTask(task.id);
    };

    btnEdit.onclick = function () {
      editTask(task.id);
    };

    if (btnCreate.classList.contains('saveActive')) {
      console.log('hui');
    }
  }

  function deleteTask(id) {
    parentList.querySelector(`#${id}`).remove();
  }
  function editTask(id) {
    let btnDeletThisLi = document.querySelector(".btn-delete");
    btnCreate.innerText = "сохранить";
    btnCreate.classList.remove('btnCreate');
    btnCreate.classList.add('saveActive');
    btnDeletThisLi.setAttribute("disabled", "disabled");
  }

  function saveTask() {
    btnSave.innerText = 'добавить';
    btnSave.classList.remove('saveActive');
    btnSave.classList.add('btnCreate');
  }
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// НЕ ОЧЕНЬ ХОРОШИЙ ТУДУ ЛИСТ
// let todoList = localStorage.getItem("task")
//   ? JSON.parse(localStorage.getItem("task"))
//   : [];

// console.log(todoList);

// const addTask = document.querySelector(".addTask");

// const listAllTasks = document.querySelector(".listTasks");

// const userText = document.querySelector(".textFieldForTask");

// const clearAll = document.getElementById("clearAll");

// let currentEdit = 0;

// addTask.addEventListener("click", () => {
//   if (userText.value.trim().length == 0 && userText.value.trim() != null) {
//     alert("Empty field - this is not a task");
//   } else if (addTask.classList.contains("saveTask") && bruteForce()) {
//     alert("ты пидор такое уже есть в списке");
//   } else if (addTask.classList.contains("saveTask")) {
//     saveTask(currentEdit);
//     let btnRemove2 = document.querySelector(`#${currentEdit} > .btn-remove`);
//     btnRemove2.style.display = "block";
//   } else if (bruteForce()) {
//     alert("уже есть такой сука блядь");
//     userText.value = "";
//   } else {
//     const task = {
//       name: userText.value.trim(), // 1-ое свойство объекта наименование задачи + trim чтобы оно убрало пробелы
//       check: false, // 2-оe св-во об, для будущего задела на чекнуто ли?
//       id: `task-${todoList.length}`
//     }; //создали объект на каждую задачу;
//     todoList.push(task); // индекс массива приравнивается к объекту
//     createTask(task);
//     localStorage.setItem("task", JSON.stringify(todoList[i]));
//     clearAll.removeAttribute("disabled"); // удаляем атрибут disabled у кнопки, так как есть минимум одно поле, которое можно удалить
//   }
// });

// // создаем новый таск
// function createTask(task) {
//   const newLi = document.createElement("li");
//   const buttonRemove = document.createElement("button");
//   const buttonEdit = document.createElement("button");
//   const textSpan = document.createElement("span");
//   const editLink = document.createElement("a");
//   const removeLink = document.createElement("a");
//   id = `task-${task.id}`;

//   listAllTasks.classList.add("activeList");
//   listAllTasks.appendChild(newLi);

//   newLi.setAttribute("id", task.id);
//   newLi.classList.add("item");

//   newLi.appendChild(textSpan);
//   // textSpan.innerText = userText.value.trim();
//   textSpan.innerText = task.name;
//   textSpan.classList.add("text");

//   buttonRemove.appendChild(removeLink);
//   buttonRemove.classList.add("btn-remove");
//   removeLink.innerText = "delete";
//   removeLink.classList.add("link-remove");
//   newLi.appendChild(buttonRemove);

//   buttonEdit.appendChild(editLink);
//   buttonEdit.classList.add("btn-edit");
//   editLink.innerText = "edit this task";
//   editLink.classList.add("link-edit");
//   newLi.appendChild(buttonEdit);

//   localStorage.setItem("task", JSON.stringify(todoList));

//   buttonRemove.addEventListener("click", () => {
//     deleteTask(task.id);
//   });

//   buttonEdit.addEventListener("click", () => {
//     editTask(task.id);
//   });
// }
// // удалить таск
// function deleteTask(id) {
//   listAllTasks.querySelector(`#${id}`).remove();
//   todoList.splice(id, 1);
//   console.log(id);
//   localStorage.setItem("task", JSON.stringify(todoList));
// }

// // редактировать таск
// function editTask(id) {
//   let onlyTaskText = document.querySelector(`#${id} > span`).innerText;
//   let btnRemove = document.querySelector(`#${id} > .btn-remove`);

//   addTask.classList.add("saveTask");
//   addTask.value = "save this task";
//   userText.value = onlyTaskText;
//   btnRemove.style.display = "none";
//   currentEdit = id;
//   localStorage.setItem("task", JSON.stringify(todoList));
// }
// // сохранить таск
// function saveTask(id) {
//   document.querySelector(`#${id} > span`).innerText = userText.value.trim();
//   addTask.classList.remove("saveTask");
//   addTask.classList.add("addTask");
//   addTask.value = "add new task";
//   localStorage.setItem("task", JSON.stringify(todoList));
// }

// // перебор всех детей на поиск одинакового текста внутри листа
// function bruteForce() {
//   let childrensList = document.querySelectorAll(".listTasks .item > span");
//   for (let item of childrensList) {
//     if (userText.value.trim() === item.innerText) {
//       return true;
//     }
//   }
// }

// // очистить все поле ul
// clearAll.addEventListener("click", () => {
//   let allChilds = document.querySelectorAll(".listTasks .item");

//   for (let i of allChilds) {
//     i.remove();
//   }
//   localStorage.setItem("task", JSON.stringify(todoList));
//   userText.value = "";
//   clearAll.setAttribute("disabled", "disabled");
// });

// if (localStorage.getItem("task")) {
//   todoList = JSON.parse(localStorage.getItem("task"));
//   todoList.forEach(task => {
//     createTask(task);
//   });
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// МЕТОД СОРТ ДЛЯ МАССИВОВ ПЕРЕБОР
// let products = [  { name:"Grapefruit", calories: 170, color: "red", sold: 8200 },
//                   { name:"Orange", calories: 160, color: "orange", sold: 12101 },
//                   { name:"Cola", calories: 210, color: "caramel", sold: 25412 },
//                   { name:"Diet Cola", calories: 0, color: "caramel", sold: 43922 },
//                   { name:"Lemon", calories: 200, color: "clear", sold: 14983 },
//                   { name:"Raspberry", calories: 180, color: "pink", sold: 9427 },
//                   { name:"Root Beer", calories: 200, color: "caramel", sold: 9909 },
//                   { name:"Root Beer", calories: 200, color: "caramel", sold: 9909 },
//                   { name: "Water", calories: 0, color: "clear", sold: 62123 }

//                 ];

// function compareSold (colaA, colaB) {
//   if (colaA.sold > colaB.sold) {
//     return 1;
//   } else if (colaA.sold === colaB.sold) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// function compareCalories (colaA, colaB) {
//   if (colaA.calories > colaB.calories) {
//     return 1;
//   } else if (colaA.calories === colaB.calories) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// function compareNames (colaA, colaB) {
//   if (colaA.name > colaB.name) {
//     return 1;
//   } else if (colaA.name === colaB.name) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// products.sort(compareSold);
// console.log(products.sort(compareSold));
// products.sort(compareCalories);
// console.log(products.sort(compareCalories));
// products.sort(compareNames);
// console.log(products.sort(compareNames));

// ++++++++++++++++++++++++++++++++++++++++++++
// ХУЕТА ПРО ПАССАЖИРОВ И ОЧЕНЬ ТУПОЙ ПРИМЕР
// let passengers = [
//   { name: 'Aleksander Zalup', paid: true, ticket: 'coach' },
//   { name: 'Dima Kilop', paid: true, ticket: 'firstclass' },
//   { name: 'Vitya AK47', paid: true, ticket: 'firstclass' },
//   { name: 'Oleg Mishkin', paid: true, ticket: 'coach' }
// ];

// function checkNoFlylist(passenger) {
//   return (passenger.name === 'Vitya AK47');
// }

// function checkNotPaid(passenger) {
//   return (!passenger.paid);
// }

// function processPassengers(passengers, testFunction) {
//   for (let i = 0; i < passengers.length; i++) {
//     if (testFunction(passengers[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// let allCanFly = processPassengers(passengers, checkNoFlylist);
// if (!allCanFly) {
//   console.log("The plane can't take off: we have a passenger on the no-fly-list.");
// }

// let allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//   console.log("The plane can't take off: not everyone has paid.");
// }

// function printPassenger(passenger) {
//   let message = passenger.name;
//   if (passenger.paid === true) {
//     message = `${message} has paid`;
//   } else {
//     message = `${message} has not paid`;
//   }
//   console.log(message);
//   return false;
// }

// processPassengers(passengers, printPassenger);

// function createDrinkOrder(passenger) {

//   let orderFunction;

//   if (passenger.ticket === 'firstclass') {
//     orderFunction = function() {
//       console.log('Would you like a cocktail or wine');
//     }
//   }
//   else {
//     orderFunction = function () {
//       console.log('Your choice is cola or water.');
//     }
//   }
//   return orderFunction;
// }

// function serveCustomer(passenger) {
//   let getDrinkOrderFunction = createDrinkOrder(passenger);
//   getDrinkOrderFunction();
//   getDrinkOrderFunction();
//   getDrinkOrderFunction();
//   getDrinkOrderFunction();
//   getDrinkOrderFunction();
// }

// function servePassengers(passengers) {
//   for (var i = 0; i < passengers.length; i++) {
//     serveCustomer(passengers[i]);
//   }
// }

// servePassengers(passengers);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// НЕБОЛЬШОЙ ПРИМЕРЧИК ПРО ФУНКЦИИ ВЫСШЕГО ПОРЯДКА, КОТОРЫЕ ПЕРЕДАЮТСЯ ИЗ ФУНКЦИИ В ФУНКЦИЮ
// function sayIt(translator) {
//   var phrase = translator("Hello");
//   alert(phrase);
// }
// function hawaiianTranslator(word) {
//   if (word === "Hello") return "Aloha";
//   if (word === "Goodbye") return "Aloha";
// }
// sayIt(hawaiianTranslator);

// ++++++++++++++++++++++++++++++++++++++++
// ПОБЫЛУЕМСЯ С РЕСАЙЗОМ СТРАНИЦЫ ХИ ХИ
// window.onresize = function resize() {
//   let h = document.querySelector('h1');
//   h.innerHTML = h.innerHTML + 'that tickles';
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// ВСЯ ТАЖЕ ИГРА С КАРТИКАМИ НО ПО НАВЕДЕНИЮ МЫШИ
//      function init() {
//         let images = document.querySelectorAll('.photo .blur');
//         for(let i = 0; i < images.length; i++) {
//           images[i].onmouseover = showAnswer;
//           images[i].onmouseout = reblur;
//           // images[i].onmouseout = stopMove;
//         }
//       };

//       function showAnswer(eventObj) {
//         let image = eventObj.target;
//         let name = image.id;
//         name = `assets/img/${name}.jpg`;
//         image.src = name;

//       }
//       init();

//       function reblur(eventObj){
//         let image = eventObj.target;
//         let name = image.id;
//         name = `assets/img/${name}blur.jpg`;
//         console.log(name);
//         image.src = name;
//       }
// }

// +++++++++++++++++++++++
// ТИК ТОК хи хи
// let tick = true;
// function ticker() {
//   if (tick) {
//     console.log('Tick');
//     tick = false;
//   }
//   else {
//     console.log('Tock');
//     tick = true;
//   }
// }
// setInterval(ticker, 1500);

// +++++++++++++++++++++++++++++++++++++++++++++++
// НЕМНОГО РАБОТЫ С МЕТОДОМ SETTIMEOUT
//   function showAlert(){
//     alert('What are you doing on my pages, little boy?')
//   }

//   setTimeout(showAlert, 5000);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++
// КООРДИНАТЫ ПО КАРТЕ
//   function find() {
//     let map = document.querySelector('#map');
//     map.onmousemove = showCoords;
//   }

//   function showCoords(eventObj) {
//     let coords = document.querySelector('#coords');
//     let x = eventObj.clientX;
//     let y = eventObj.clientY;

//     coords.innerHTML = "Map coordinates: "
//     + x + "," + y;
//   }
//   find();
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ИГРА, ГДЕ КАРТИНКИ РАЗМЫТЫЕ, А ПО НАЖАТИЮ ЧЕТКИЕ И НАОБОРОТ
//   function init() {
//     let images = document.querySelectorAll('.photo .blur');
//     for(let i = 0; i < images.length; i++) {
//       images[i].onclick = showAnswer;
//       images[i].onmousedown = stopMove;
//       images[i].oncontextmenu = stopMove;
//     }
//   };

//   function showAnswer(eventObj) {
//     let image = eventObj.target;
//     let name = image.id;
//     name = "assets/img/" + name + ".jpg";
//     image.src = name;

//     setTimeout(() => {
//       image.src = "assets/img/" + image.id + "blur.jpg"
//     }, 3000);
//   }
//   init();
//   function stopMove(e) {
//     return false;
//   }
// }

// ПО КЛИКУ ОБЪЕКТ ИСЧЕЗАЕТ И ПЛАВНО ДВИГАЮТСЯ ОСТАЛЬНЫЕН
//   let allItems = document.querySelectorAll('.items .item');

//   for(let i = 0; i < allItems.length; i++) {
//     allItems[i].onclick = function() {
//       fade(this, 1000, function(){
//         this.style.display = 'none';
//       });
//     }
//   }
// }

// function fade(elem, t, f) {
//   let fps = 50;
//   let time = t || 500;
//   let steps = time / fps;
//   let op = 1;
//   let dO = op / steps;

//   let callback = f || function(){};

//   let timer = setInterval(function() {
//     op -= dO;
//     elem.style.opacity = op;
//     steps--;
//     if (steps === 0) {
//       clearInterval(timer);
//       callback.call(elem);
//     }
//   }, (1000 / fps));
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// РАНДОМНОЕ ПОЯВЛЕНЕ КРАСНЫХ РАМОК НА БЛОКАХ ОЧ ПРИКОЛЬНО
//   let items = document.querySelectorAll('.items .item');
//   function activeItem(){
//     this.classList.toggle('active1');
//   }

//   setInterval(function(){
//     let randomNumber = mtRand(0, items.length - 1);
//     items[randomNumber]
//     activeItem.call(items[randomNumber]);
//     console.log(randomNumber);
//     activeItem
//   }, 300);
// }

// function mtRand(min, max){
//   return Math.floor(Math.random() * (max-min + 1));
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// slider через классы, один сам меняется, второй по нажатию
//   let btn_prev = document.querySelector('.gallery .buttons .prev');
//   let btn_next = document.querySelector('.gallery .buttons .next');
//   let images = document.querySelectorAll('.gallery--1 .photos img');

//   let slider = new Slider(images);

//   document.querySelector('.gallery--1 .buttons .next').onclick = function(){
//     slider.btn_next();
//   }
//   document.querySelector('.gallery--1 .buttons .prev').onclick = function(){
//     slider.btn_prev();
//   }

//   let images2 = document.querySelectorAll('.gallery--2 .photos img');
//   let slider2 = new Slider(images2);
//   setInterval(function() {slider2.btn_prev();},1500);

// function Slider(images) {
//   this.images = images;
//   let i = 0;

//   this.btn_prev = function() {
//     this.images[i].classList.remove('showed');
//     i--;
//     if (i < 0) {
//       i = this.images.length - 1;
//     }
//     this.images[i].classList.add('showed');
//   }

//   this.btn_next = function() {
//     this.images[i].classList.remove('showed');
//     i++;
//     if (i >= this.images.length) {
//       i = 0;
//     }
//     this.images[i].classList.add('showed');
//   }
// };

// НЕМНОГО О КЛАССАХ
//   function Cat(name) {
//     this.name = name;
//     this.age = 0;
//     this.weight = 1;
//     this.eat = function() {
//       this.weight++;
//     }
//     this.run = function() {
//       this.weight--;
//     }
//   }

//   let cat1 = new Cat('Naches');
//   console.log(cat1);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SLIDER

//   let btn_prev = document.querySelector('.gallery .buttons .prev');
//   let btn_next = document.querySelector('.gallery .buttons .next');

//   let images = document.querySelectorAll('.gallery .photos img');
//   let i = 0;

//   btn_prev.onclick = function() {
//     images[i].classList.remove('showed');
//     i--;
//     if (i < 0) {
//       i = images.length - 1;
//     }

//     images[i].classList.add ('showed');
//   }

//   btn_next.onclick = function() {
//     images[i].classList.remove ('showed');
//     i++;
//     if (i >= images.length) {
//       i = 0;
//     }
//     images[i].classList.add ('showed');
//   }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЗАПРЕТ ПЕРЕТАСКИВАТИЬ ФОТОГРАФИИ И СОХРАНЯТЬ ИХ
//   let links = document.querySelectorAll('a[target=_blank]');

//   for (let i = 0; i < links.length; i++){
//     links[i].onclick = confimAway;
//   }

//   function confimAway() {
//     if(!confirm('Я не гарантирую, что вы перейдете на безопасный сайт!!! Перейти?')){
//       return false;
//     }
//   }

//   let images = document.querySelectorAll('.gallery img');

//   for (let i = 0; i < images.length; i++) {
//     images[i].onmousedown = stopMove;
//     images[i].oncontextmenu = stopMove;
//   }
//   function stopMove(e) {
//     return false;
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// РАБОЧИЙ КАЛЬКУЛЯТОР, С БОЛЕЕ МЕНЕЕ НОРМАЛЬНЫМ КОДОМ

//   let num1 = document.querySelector('input[name=num1]');
//   let num2 = document.querySelector('input[name=num2]');
//   let result = document.querySelector('.res');
//   let buttons = document.querySelectorAll('input[type=button]');

//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function() {
//       let op = this.getAttribute('data-operations');
//       calculations(op);
//     }
//   }

//   function calculations(op) {
//     let a = parseInt(num1.value);
//     let b = parseInt(num2.value);
//     let res;

//     if (op === '+') {
//       res = a + b;
//     }
//     else if (op === '-' ) {
//       res = a - b;
//     }
//     else if ((op === '/') && (b != 0)) {
//       res = a / b;
//     }
//     else if (op === '*') {
//       res = a * b;
//     }
//     else {
//       res = 'непонятная операция';
//     }
//     result.innerHTML = res;
//   }
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// решение калькулятора методом копипаста конченное, но пусть лежит для памяти
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   let inp1 = document.querySelector('input[name=num1]');
//   let inp2 = document.querySelector('input[name=num2]');
//   let btn1 = document.querySelector('input[name=sum]');
//   let span1 = document.querySelector('.res1');
//   btn1.onclick = function sum() {
//     var sum = parseInt(inp1.value) + parseInt(inp2.value);
//     span1.innerHTML = sum;
//     this.disabled = true;
//     let btnEnable1 = function() {
//       btn1.disabled = false;
//     }
//     inp1.oninput = btnEnable1;
//     inp2.oninput = btnEnable1;
//   }

//   let inp3 = document.querySelector('input[name=num3]');
//   let inp4 = document.querySelector('input[name=num4]');
//   let btn2 = document.querySelector('input[name=sub]');
//   let span2 = document.querySelector('.res2');

//   btn2.onclick = function sub() {
//     var sub = parseInt(inp3.value) - parseInt(inp4.value);
//     span2.innerHTML = sub;
//     this.disabled = true;
//     let btnEnable2 = function() {
//       btn2.disabled = false;
//     }
//     inp3.oninput = btnEnable2;
//     inp4.oninput = btnEnable2;
//   }

//   let inp5 = document.querySelector('input[name=num5]');
//   let inp6 = document.querySelector('input[name=num6]');
//   let btn3 = document.querySelector('input[name=multi]');
//   let span3 = document.querySelector('.res3');

//   btn3.onclick = function multi() {
//     var multi = parseInt(inp5.value) * parseInt(inp6.value);
//     span3.innerHTML = multi;
//     this.disabled = true;
//     let btnEnable3 = function() {
//       btn3.disabled = false;
//     }
//     inp5.oninput = btnEnable3;
//     inp6.oninput = btnEnable3;
//   }

//   let inp7 = document.querySelector('input[name=num7]');
//   let inp8 = document.querySelector('input[name=num8]');
//   let btn4 = document.querySelector('input[name=division]');
//   let span4 = document.querySelector('.res4');

//   btn4.onclick = function multi() {
//     var division = parseInt(inp7.value) / parseInt(inp8.value);
//     span4.innerHTML = division;
//     this.disabled = true;
//     let btnEnable4 = function() {
//       btn4.disabled = false;
//     }
//     inp7.oninput = btnEnable4;
//     inp8.oninput = btnEnable4;
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ПЕРВОЕ ЗАДАНИЕ С ПОДЦЕТКОЙ КАРТОЧЕК ТОВАРА И СУММОЙ НАБРАННЫХ ТОВАРОВ
///////////////////////////////////////////////////////////////////////

// window.onload = function() {
//   const items = document.querySelectorAll('.items .item');
//   const divPrice = document.querySelector('.value');

//   for (let i = 0; i < items.length; i++) {
//     items[i].onclick = function(){
//       this.classList.toggle('active');
//       calcPrice();
//     }
//   }
//   function calcPrice() {

//     let price = 0;

//     for (let i = 0; i < items.length; i++) {
//       if (items[i].classList.contains('active')) {
//         price += parseInt(items[i].getAttribute('data-price'));
//       }
//     }
//     divPrice.innerHTML = price;
//   }
// }
