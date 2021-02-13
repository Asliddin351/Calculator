const input = document.querySelector('#input')
const item = Array.from(document.querySelectorAll('.item'))
const clear = document.querySelector('.btn-danger')
const equally = document.querySelector('.btn-primary')

const OPERS = ['+', '-', '/','*'];

input.value = 0;

function parseNumber(str) {
    let res = '';

    while (str.length > 0 && !(OPERS.includes(str[0]))) {
        res += str[0];
        str = str.slice(1, str.length);
    }

    return [res, str];

}

function operClick(e) {
    const sym = e.srcElement.value; 

    if (!OPERS.includes(input.value[input.value.length-1])) {
        input.value += sym;
        
        // console.log(sym)
    } else {
        input.value = input.value.slice(0, input.value.length-1) + sym
    }
 
   
}
    item.forEach((it) => it.addEventListener('click', function() {
        if(input.value == 0){
            input.value = it.value
        }else{
            input.value += it.value
        }
        
    }));


document.querySelectorAll('.oper').forEach((el) => el.addEventListener('click', operClick));

clear.addEventListener('click', function() {
    input.value = 0
})

equally.addEventListener('click', function(){

        let a =  input.value;
        let b = parseNumber(a);

        a = b[1];
        b = b[0];
       
        
        let sym = a.slice(0, 1);
        a = a.slice(1, a.length);
        let c = parseNumber(a)[0];
        
        // console.log(`a: ${a}`)
        // console.log(`b: ${b}`);
        // console.log(`c: ${c}`);
        // console.log(`s: ${sym}`);


        let d = Number(b)
        let g = Number(c)

       
        
        input.value = eval(input.value)

        // if(sym == '+'){
        //     input.value = eval(input.value)
        // }else if(sym == '-'){
        //     input.value = min(b,c)
        // }else if(sym == '*'){
        //     input.value = umn(b,c)
        // }else if(sym == '/'){
        //     input.value = del(b,c)
        // }else{
        //     console.log(a)
        // }

        

})


   function sum(a, b) {
        return  a + b
    }
    function min(a, b) {
        return  a - b
    }
    function del(a, b) {
        return  a / b
    }
     function umn(a, b) {
        return  a * b
    }


































//calcculate btns
// btn[0].addEventListener('click', function() {
//     input.value += btn[0].value
// })
// btn[1].addEventListener('click', function() {
//     input.value += btn[1].value
// })




// // btn[4].addEventListener('click', function() {
// //     input.value += btn[4].value
// // })
// btn[5].addEventListener('click', function() {
//     input.value += btn[5].value
// })
// btn[6].addEventListener('click', function() {
//     input.value += btn[6].value
// })
// btn[7].addEventListener('click', function() {
//     input.value += btn[7].value 
// })
// btn[8].addEventListener('click', function() {
//     input.value += btn[8].value
// })
// btn[9].addEventListener('click', function() {
//     input.value += btn[9].value
// })
// btn[10].addEventListener('click', function() {
//     input.value += btn[10].value
// })
// btn[11].addEventListener('click', function() {
//     input.value += btn[11].value
// })
// btn[12].addEventListener('click', function() {
//     input.value += btn[12].value
// })
// btn[13].addEventListener('click', function() {
//     input.value += btn[13].value
// })
// btn[14].addEventListener('click', function() {
//     input.value += btn[14].value
// })
// btn[15].addEventListener('click', function() {
//     input.value = ''
// })