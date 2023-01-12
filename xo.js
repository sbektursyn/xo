var radio = document.getElementsByClassName('choise');

for (var i = 0; i< radio.length; i++) {
    radio[i].addEventListener('click', change, false);
}

function change(){
    var page = this.id;
    console.log(page)
    var submit = document.getElementById('submit').onclick = function(){
        if (page == "mp"){
            console.log("mp")

            document.getElementById('content').innerHTML = '<div class="game_table"><div class="cell" id="one"></div><div class="cell" id="two"></div><div class="cell" id="three"></div><div class="cell" id="four"></div><div class="cell" id="five"></div><div class="cell" id="six"></div><div class="cell" id="seven"></div><div class="cell" id="eight"></div><div class="cell" id="nine"></div></div>';
            
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
            }
        }
        if (page == "ai"){
            console.log("ai")
            document.getElementById('content').innerHTML = '<div class="game_table"><div class="cell" id="one"></div><div class="cell" id="two"></div><div class="cell" id="three"></div><div class="cell" id="four"></div><div class="cell" id="five"></div><div class="cell" id="six"></div><div class="cell" id="seven"></div><div class="cell" id="eight"></div><div class="cell" id="nine"></div></div>';
        
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
                    n.innerHTML += '<p class="element">x</p>'
                    //здесь будет ИИ

                    //не ставить туда где есть х либо о
                    //ИИ ходит в рандомное место

                    let num = Math.floor(Math.random() * 9);
                    console.log(num)

                    var bcell = ["one","two","three","four","five","six","seven","eight","nine"];

                    console.log(bcell[num])

                    let bottext = document.getElementById(bcell[num]).querySelector('.element')
                    console.log(bottext)
                    if (bottext == null){
                        n.innerHTML += '<p class="element">o</p>'
                    } else {
                        return;
                    }
                }
            }
        }
    }
}

//проверять иннер хтмл

//удалить с массива тот на которую ходили

//настройки уровня сложности

























/*let one = document.querySelector('#one').querySelector('.element');
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
    }*/
    
    //winIndex[m][n]

