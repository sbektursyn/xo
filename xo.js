var cell = document.getElementsByClassName('cell');

var c = 0;


var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick(){
    console.log(this.id)
    let a = this.id;
    console.log(a)

    var n = document.getElementById(a);

    c = c + 1;

    let elems = this.querySelector('.element')
    console.log(elems)

    if (elems !== null){
        alert("занято")
        return;
    } else {
        if (c % 2 === 1){
            n.innerHTML += '<p class="element">x</p>'
        }
        if (c % 2 === 0){
            n.innerHTML += '<p class="element">o</p>'
        }
    }


    let one = document.querySelector('#one').querySelector('.element');
    let two = document.querySelector('#two').querySelector('.element');
    let three = document.querySelector('#three').querySelector('.element');
    let four = document.querySelector('#four').querySelector('.element');
    let five = document.querySelector('#five').querySelector('.element');
    let six = document.querySelector('#six').querySelector('.element');
    let seven = document.querySelector('#seven').querySelector('.element');
    let eight = document.querySelector('#eight').querySelector('.element');
    let nine = document.querySelector('#nine').querySelector('.element');

    console.log(one)
    console.log(two)
    console.log(three)


    if (one !== null && two !== null && three !== null){
        alert('win')  
    }
    
    //winIndex[m][n]


}

