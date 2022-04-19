// function add(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)+Number(b)
//     document.getElementsByClassName('output')[0].innerText=`sum of numbers is ${out}`
// }
// function sub(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)-Number(b)
//     document.getElementsByClassName('output')[0].innerText=`sub of numbers is ${out}`
// }
function cal(opt){
    let a =document.getElementById(`first`).value;
    let b= document.getElementById('second').value;
    let out ;
    if(opt=='Add'){
       out =`sum of number is ${Number(a)+Number(b)}`
    }
    else if(opt=='Mul'){
       out=`mul of  number is ${Number(a)*Number(b)}`
    }
    else if(opt=='Div'){
       out =`div of number is ${Number(a)/Number(b)}`
    }
    else{
       out =`sub of number is ${Number(a)-Number(b)}`
    }
    
    document.getElementsByClassName('output')[0].innerText = out
}