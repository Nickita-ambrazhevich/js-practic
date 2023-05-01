
function words() {
    var stringsearch = /[аоиеёэыуюя]/g;
    var f = prompt("пару слов на русском:");

    var k = f.match(stringsearch).length;

    return k ? k : "Net sovpadenyi";
}

console.log(words());
   
    
