let name = prompt( 'Ваше имя?')
let weight =  prompt( 'Ваш вес?')
let height =  prompt( 'Ваш рост в метрах ?')


let bodyIndex =  weight /  height ** 2;

if (bodyIndex  <= 16.5){ 
alert(name + " У вас крайний недостаток веса. Ваш ИМТ =" + bodyIndex );
}
else if ( bodyIndex  < 18.5) { 
alert(name + " У вас недостаток веса. Ваш ИМТ =" + bodyIndex  );
}
else if ( bodyIndex < 24.9) { 
alert(name + " У вас нормальный вес тела .Ваш ИМТ =" + bodyIndex );
}
else if ( bodyIndex  < 30) { 
alert(name + " У вас избытончый вес тела  Ваш ИМТ =" + bodyIndex );
};

alert("Спасибо что воспользовались нашим сервисом!")