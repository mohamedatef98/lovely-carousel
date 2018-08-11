var items = document.querySelectorAll('.item');
var previous = document.querySelector('input.previous');
var next = document.querySelector('input.next');

/* 
    We will just keep swaping the classes between the elements.
*/


//The starting order.
var order = [1,2,3,4,5,6];

//A helper function, that will swap the order array in given direction specified by the dir value.
function reOrder(arr,dir){

    var dir = Number(dir);

    //make a copy
    var t = arr.slice();

    //Imagine that our order array at a given moment is sorted like [1,2,3,4,5,6]


    //if dir === 1
    //it will be sorted like [2,3,4,5,6,1] "NOTICE the 1"
    if(dir === 1){
        var ele = t.shift();
        t.push(ele);
    }


    //if dir === -1
    //it will be sorted like [6,1,2,3,4,5] "NOTICE the 6"
    if(dir === -1){
        var ele = t.pop();
        t.unshift(ele);
    }
    return t;
}



//The function that will do the animation
function animate(dir){

    //get the new order depending on the given direction.
    var newOrder = reOrder(order,dir);

    //swap the classes
    for(let i = 0; i < 6; i++){
        items[i].classList.replace(`item-${order[i]}`,`item-${newOrder[i]}`);
    }

    //save the new order
    order = newOrder;

}


//helpers
function turnNext(){
    animate(-1);
}
function turnPrevious(){
    animate(1);
}


previous.addEventListener('click',turnPrevious);
next.addEventListener('click',turnNext);