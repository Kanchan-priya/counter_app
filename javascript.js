const myNum=document.querySelectorAll('.count')
let speed= 200;
myNum.forEach( (myCount) => {
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    // console.log(target_count);

    let new_increment_num =Math.floor(target_count/speed);

    const updateNumber = () => {


        init_count=init_count+new_increment_num;
        myCount.innerText= init_count;

        if(init_count< target_count){

        setTimeout( () => { updateNumber()}, 5)
            
        }
    }
 updateNumber();



}

)