window.onload = function () {

  let num1 = document.querySelector('input[name=num1]');
  let num2 = document.querySelector('input[name=num2]');
  let result = document.querySelector('.res');
  let buttons = document.querySelectorAll('input[type=button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      let op = this.getAttribute('data-operations');
      calculations(op);
    }
  }

  function calculations(op) {
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    let res;

    if (op === '+') {
      res = a + b;
    } 
    else if (op === '-' ) {
      res = a - b;
    }
    else if ((op === '/') && (b != 0)) {
      res = a / b;
    }
    else if (op === '*') {
      res = a * b;
    }
    else {
      res = 'непонятная операция';
    }
    result.innerHTML = res;
  }
}























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