//добавление атрибута lang в тег html без объявления вспомогательной переменной
document.querySelector('html').setAttribute('lang', 'ru');

//создаем meta и title
let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8')

let title = document.createElement('title');
title.innerHTML = 'JS-7';

document.head.appendChild(title)
document.head.appendChild(metaUTF8)

//создаем структуру документа:
//родительский div
let divGrid = document.createElement('div');
divGrid.classList.add ('grid-model');
document.body.appendChild(divGrid);

//дочерние divы - 3 шт. Переменные в массиве от 1 до 3
let divChild = [];
for (let i = 1; i < 4; i++){
	divChild[i] = document.createElement('div');
	divChild[i].classList.add(`div-child${i}`);
	divGrid.appendChild(divChild[i]);
};

//одинаковую строку заносим в переменную
let textBut = 'But i must explain to you how all this mistaken idea of denouncing';
//h1-h3-текст
let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option'; //первый заголовок
divChild[1].appendChild(h1);
let h1Text = [];
let h2Text = ['freelancer','studio'];
let pText = [];
let h3Text = [];

for (let i = 1; i < 4; i++){ //цикл перебора дочерих элементов
	if (i > 1) { //условие проверки на первый дочерний элемент
		//заголовки H2
		//значения текста очень опасно меняются в массиве с 0,1 на 2,3
		h2Text[i] = document.createElement('h2');
		h2Text[i].innerHTML = h2Text[i-2]; //значения текста freelancer, studio
		divChild[i].appendChild(h2Text[i]);
		//заголовки H1
		h1Text[i] = document.createElement('h1');
		h1Text[i].innerHTML = 'Initially designet to'; //второй и третий заголовок
		divChild[i].appendChild(h1Text[i]);
	};
	pText[i] = document.createElement('p'); //вставка общего текста во все строки
	pText[i].innerHTML = textBut; //вызываем строку-переменную
	divChild[i].appendChild(pText[i]);
	if (i > 1) { //условие проверки на первый дочерний элемент
		//заголовки H3
		h3Text[i] = document.createElement('h3');
		h3Text[i].innerHTML = 'Start here'; //второй и третий заголовок
		divChild[i].appendChild(h3Text[i]);
	};
};
//класс - цвет текста
pText[1].classList.add('gray');
pText[2].classList.add('gray');
h2Text[2].classList.add('gray');
h2Text[3].classList.add('yellow');

//список стилей, адаптивная верстка по grid-модели
let style = document.createElement('style');
style.innerHTML = `
*{
	margin: 0;
	padding: 0;
	text-align: center;
}
h1{
	font-size: 55px;
	margin: 30px 10px;
}
h2{
	font-size: 15px;
}
h2, h3 {
	text-transform: uppercase ;
}
h3{
	margin: 25% 15%;
	padding: 20px;
	border: 3px solid #f1cb57;
	border-radius: 50px;
	letter-spacing: 3px;
}
p{
	margin: 50px;
}
.grid-model{
	margin: 5% 15%;
	display: grid;
	place-items: stretch;
	grid-template-areas:
    'A A'
    'B C';
}
.div-child1{
	grid-area: A;
	padding: 0 15%;
}
.div-child2, .div-child3{
	height: 500px;
	border: 1px solid #DCDCDC;
	padding: 5% 15%;
}
.div-child2{
	grid-area: B;
	background: #fff;
}
.div-child3{
	grid-area: C;
	background: #8f75bd;
	color: #fff;
}
.gray{
	color: gray;
}
.yellow{
	color: #f1cb57;
}
`
document.head.appendChild(style);