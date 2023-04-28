let name = prompt( 'Ваше имя?')
let weight = + prompt( 'Ваш вес?')
let height = + prompt( 'Ваш рост в метрах ?')


let index =  weight /  height ** 2;

if (index <= 16.5){ 
alert(name + " У вас крайний недостаток веса. Ваш ИМТ =" + index);
}
else if ( 16.5 < index && index < 18.5) { 
alert(name + " У вас недостаток веса. Ваш ИМТ =" + index );
}
else if ( 18.5 < index && index < 24.9) { 
alert(name + " У вас нормальный вес тела .Ваш ИМТ =" + index);
}
else if ( 25 < index && index < 30) { 
alert(name + " У вас избытончый вес тела  Ваш ИМТ =" + index);
};

alert("Спасибо что воспользовались нашим сервисом!")