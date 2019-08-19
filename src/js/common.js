(() => {
  document.body.style.backgroundColor = '#414141';
})();

window.onload = function () {

  let inp1 = document.querySelector('input[name=num1]');
  let inp2 = document.querySelector('input[name=num2]');
  let btn1 = document.querySelector('input[name=sum]');
  let span1 = document.querySelector('.res1');
  btn1.onclick = function sum() {
    var sum = parseInt(inp1.value) + parseInt(inp2.value);
    span1.innerHTML = sum; 
  }


  let inp3 = document.querySelector('input[name=num3]');
  let inp4 = document.querySelector('input[name=num4]');
  let btn2 = document.querySelector('input[name=sub]');
  let span2 = document.querySelector('.res2');

  btn2.onclick = function sub() {
    var sub = parseInt(inp3.value) - parseInt(inp4.value);
    span2.innerHTML = sub; 
  }


  let inp5 = document.querySelector('input[name=num5]');
  let inp6 = document.querySelector('input[name=num6]');
  let btn3 = document.querySelector('input[name=multi]');
  let span3 = document.querySelector('.res3');

  btn3.onclick = function multi() {
    var multi = parseInt(inp5.value) * parseInt(inp6.value);
    span3.innerHTML = multi;
    btn3.disabled = true;
    inp5.onchange, inp6.onchange = function() {
      btn3.disabled = false;
    }
  }



  let inp7 = document.querySelector('input[name=num7]');
  let inp8 = document.querySelector('input[name=num8]');
  let btn4 = document.querySelector('input[name=division]');
  let span4 = document.querySelector('.res4');

  btn4.onclick = function multi() {
    var division = parseInt(inp7.value) / parseInt(inp8.value);
    span4.innerHTML = division;
    this.disabled = true;
    inp7.onchange = function() {
      this.disabled = false;
    }
    inp8.onchange = function() {
      this.disabled = false;
    }
  }
}



















// ПЕРВОЕ ЗАДАНИЕ С ПОДЦЕТКОЙ КАРТОЧЕК ТОВАРА И СУММОЙ НАБРАННЫХ ТОВАРОВ

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