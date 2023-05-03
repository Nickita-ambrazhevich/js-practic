function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
let shuffledColor = {};
console.log( 'цветов: ' + colorsCount );
for ( let i=1; i<=colorsCount; i++ ) {
    const n = randomDiap(1,7);
    const colorName=colors[n];
    console.log( colorName );
    shuffledColor. addColor = colorName;
console.log(shuffledColor);
 
    return colorsCount;

}
}


mood(3);