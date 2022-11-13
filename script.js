// using a iife becouse the intride operation is done inside a one function
(function(){

    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".equals-btn")
    let equal = document.querySelector(".clear-btn")
    
    // retive data from the buttons are clicked
    buttons.forEach(function (button) {
        // doms call will not hava the same name as fucntion name if usimg a name advice 
        // use a aroow fucntion will using a forEach loop
        // check DOM
            button.addEventListener("click", function (e) {
                let value1 = e.target.dataset.num;
                screen.value += value1;
            });
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = 'Please Enter a Value';
            Text.remove = value1;
        } 
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value='';
    })



})();