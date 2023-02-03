function mapNameMp() {
    document.getElementById('content').innerHTML = '<div class="app_block" data-item="0"></div><div class="app_block" data-item="1"></div><div class="app_block" data-item="2"></div><div class="app_block" data-item="3"></div><div class="app_block" data-item="4"></div><div class="app_block" data-item="5"></div><div class="app_block" data-item="6"></div><div class="app_block" data-item="7"></div><div class="app_block" data-item="8"></div>';

    var items = document.getElementsByClassName("app_block");
    var movePlayer = true;
    var game = true;

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            var collecion = document.querySelectorAll(".app_block:not(.active)");
            if(collecion.length == 1) {
                exit({win: "nobody"});
            }
            //проверка наличия класса актив
            if( !this.classList.contains("active") ){ 
                if( movePlayer) {
                    firstPlayer(this);
                } else {
                    secondPlayer(this);
                }
            }
        });
    }
    function firstPlayer(that) {
        if(that.innerHTML == "") {
            that.classList.add("active");
            that.classList.add("active_x");
            that.innerHTML = "x"
        }

        var result = checkMap();
        if( result.val) {
            game = false;
            setTimeout(function() {
                exit(result);
            }, 10);
        }

        movePlayer = !movePlayer;
    }

    function secondPlayer(that) {
        if(that.innerHTML == "") {
            that.classList.add("active");
            that.classList.add("active_o");
            that.innerHTML = "0"
        }

        var result = checkMap();
        if( result.val) {
            game = false;
            setTimeout(function() {
                exit(result);
            }, 10);
        }

        movePlayer = !movePlayer;
    }
}



function mapNameAi() {
    document.getElementById('content').innerHTML = '<div class="app_block" data-item="0"></div><div class="app_block" data-item="1"></div><div class="app_block" data-item="2"></div><div class="app_block" data-item="3"></div><div class="app_block" data-item="4"></div><div class="app_block" data-item="5"></div><div class="app_block" data-item="6"></div><div class="app_block" data-item="7"></div><div class="app_block" data-item="8"></div>';
        
    var items = document.getElementsByClassName("app_block");   // Коллекция элементов
    var movePlayer = true;                                      // Ход игрока
    var game = true;                                            // состояние игры

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



    // перебираем все элементы и назначаем событие на каждую ячейку.
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            var collecion = document.querySelectorAll(".app_block:not(.active)");

            // проверка на ничью
            if (collecion.length == 1) {
                exit({win: "nobody"});
            }

            // проверка на значение внутри ячейки
            if (!this.classList.contains("active") ){

                // если ходит игрок
                if (movePlayer) {

                    // если ячейка свободна
                    if (this.innerHTML == "") {
                        // занять ячейку
                        this.classList.add("active"); //добавляем класс к элементу
                        this.classList.add("active_x");
                        this.innerHTML = "x"

                        var a = Number(this.dataset.item)+1;



                        for (let u of winIndex) {
                            for (let w of u){
                                if (w == a) {
                                    var WI = winIndex.indexOf(u);
                                    winIndex.splice(WI,1);
                                    break;
                                }
                            }
                        }
                    }

                    // проверка ячеек и выход
                    var result = checkMap();
                    if (result.val) {
                        game = false;
                        setTimeout(function() {
                            exit(result);
                        }, 10);
                    }

                    movePlayer = !movePlayer;
                }
                        
                // если все еще играем, то ходит бот
                if (game) {
                    setTimeout(function() {
                        botMove();
                    }, 200);
                }
                        
            }
        });
    }
    /*function botMove() {
        // бот ходит рандомно
        var items = document.querySelectorAll(".app_block:not(.active)");

        var step = getRandom(items.length);

        items[ step ].innerHTML = "0";
        items[ step ].classList.add("active");
        items[ step ].classList.add("active_o");

        var result = checkMap();
        if (result.val) {
            setTimeout(function() {
                exit(result);
            }, 1);
        }

        movePlayer = !movePlayer;
    }*/
    function botMove() {

        var items = document.querySelectorAll(".app_block:not(.active)");
        var item = Math.floor(Math.random()*winIndex.length);
        var step = getRandom(winIndex[item].length);
        console.log(winIndex)


        let sortedwinIndex = new Map([]);

        for (let m of winIndex){
            for (let n of m){
                let q = winIndex.indexOf(m);
                sortedwinIndex.set(q, 0)
            }
        }

        var free = document.getElementsByClassName("app_block active active_o");

        for (let f of free){
            let freeItem = Number(f.dataset.item)+1;
            for (let o of winIndex){
                for (let l of o){
                    if (l == freeItem){
                        var fI = winIndex.indexOf(o);
                        sortedwinIndex.set(fI, 1)
                    }
                }
            }
        }

        //здесь узнали какой 0 какой 1 в sortedwinIndex
        for (let z = 0; z < 8; z++){
            if (sortedwinIndex.get(z) == 1){

                

                for (let v of winIndex[z]){
                    var firstStep = winIndex[z]
                    //остановился здесь (перебираю ключи в котором есть 1)
                    console.log(firstStep)
                    //выходит это_____________________________

                    //(3) [4, 5, 6]
                    //(3) [4, 5, 6]
                    //(3) [4, 5, 6]
                    //________________________________________


                    /*items[ firstStep ].innerHTML = "0";
                    items[ firstStep ].classList.add("active");
                    items[ firstStep ].classList.add("active_o");*/
                }


                

                /*items[ firstStep ].innerHTML = "0";
                items[ firstStep ].classList.add("active");
                items[ firstStep ].classList.add("active_o");*/
            }
        }
        //до сюда______________________________________

        console.log(sortedwinIndex)


        // бот пытается выиграть
        
        items[ step ].innerHTML = "0";
        items[ step ].classList.add("active");
        items[ step ].classList.add("active_o");
        

        

        
    
        




        var result = checkMap();
        if (result.val) {
            setTimeout(function() {
                exit(result);
            }, 1);
        }

        movePlayer = !movePlayer;
    }
}

function checkMap() {
    var block = document.querySelectorAll(".app_block");
    var items = [];
    for (var i = 0; i < block.length; i++) { 
        items.push(block[i].innerHTML);
    }

    if ( items[0] == "x" && items[1] == 'x' && items[2] == 'x' ||
         items[3] == "x" && items[4] == 'x' && items[5] == 'x' ||
         items[6] == "x" && items[7] == 'x' && items[8] == 'x' ||
         items[0] == "x" && items[3] == 'x' && items[6] == 'x' ||
         items[1] == "x" && items[4] == 'x' && items[7] == 'x' ||
         items[2] == "x" && items[5] == 'x' && items[8] == 'x' ||
         items[0] == "x" && items[4] == 'x' && items[8] == 'x' ||
         items[6] == "x" && items[4] == 'x' && items[2] == 'x' )
        return { val: true, win: "first player"}
    if ( items[0] == "0" && items[1] == '0' && items[2] == '0' ||
         items[3] == "0" && items[4] == '0' && items[5] == '0' ||
         items[6] == "0" && items[7] == '0' && items[8] == '0' ||
         items[0] == "0" && items[3] == '0' && items[6] == '0' ||
         items[1] == "0" && items[4] == '0' && items[7] == '0' ||
         items[2] == "0" && items[5] == '0' && items[8] == '0' ||
         items[0] == "0" && items[4] == '0' && items[8] == '0' ||
         items[6] == "0" && items[4] == '0' && items[2] == '0' )
        return { val: true, win: "second player"}

    return {val: false}
}

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function exit(obj) {
    alert(obj.win + " wins");
    location.reload();
};






/*for (var i = 0; i < 9; i++){
    for(var j = 0; j < 3; j++){
        if (winIndex[i][j] == a){
            winIndex[i][j] = "x";
        }
    }
}


for (var i = 0; i < 9; i++){
    for(var j = 0; j < 3; j++){
        if (winIndex[i][0] && winIndex[i][1] && winIndex[i][2] == "x"){
            alert("x wins")
        } if (winIndex[i][0] && winIndex[i][1] && winIndex[i][2] == "o"){
            alert("o wins")
        } else {alert("draw")}
    }
}*/


/*var page = this.id;
    console.log(page)
    var submit = document.getElementById('submit').onclick = function(){
        if (page == "mp"){
            console.log("mp")

            document.getElementById('content').innerHTML = '<div class="game_table"><div class="cell" id="one"></div><div class="cell" id="two"></div><div class="cell" id="three"></div><div class="cell" id="four"></div><div class="cell" id="five"></div><div class="cell" id="six"></div><div class="cell" id="seven"></div><div class="cell" id="eight"></div><div class="cell" id="nine"></div></div>';
            
            var cell = document.getElementsByClassName('cell');
            var c = 0;
            

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
        }*/



//проверять иннер хтмл

//удалить с массива тот на которую ходили

//настройки уровня сложности




/*
НАДО ПРИДУМАТЬ КОНЦОВКУ ИГРЫ

1) надо сделать так чтобы 3 крестиков(х) в ряд выигрывали и алерт х выиграл
2) Надо сделать так чтобы 3 ноликов(о) в ряд выигрывали и алерт 0 выиграл
3) надо объеденить
4) если все фигуры заполнены но нет 3 в ряд то вывезти ничья


ПРИМЕР!!!!! (1){
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
}
ПРИМЕР!!!!! (2){
    function checkMap() {
        var block = document.querySelectorAll(".app_block");
        var items = [];
        for (var i = 0; i < block.length; i++) { 
            items.push(block[i].innerHTML);
        }

        if ( items[0] == "x" && items[1] == 'x' && items[2] == 'x' ||
             items[3] == "x" && items[4] == 'x' && items[5] == 'x' ||
             items[6] == "x" && items[7] == 'x' && items[8] == 'x' ||
             items[0] == "x" && items[3] == 'x' && items[6] == 'x' ||
             items[1] == "x" && items[4] == 'x' && items[7] == 'x' ||
             items[2] == "x" && items[5] == 'x' && items[8] == 'x' ||
             items[0] == "x" && items[4] == 'x' && items[8] == 'x' ||
             items[6] == "x" && items[4] == 'x' && items[2] == 'x' )
            return { val: true, win: "player"}
        }
}

*/
    
    //winIndex[m][n]
