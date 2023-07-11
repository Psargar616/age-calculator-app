// inputs
const dayIp = document.getElementById('day');
const monthIp = document.getElementById('month');
const yearIp = document.getElementById('year');

// outputs

const dayOp = document.getElementById('DD');
const monthOp = document.getElementById('MM');
const yearOp = document.getElementById('YY');

// form

const form = document.querySelector('form');

// adding submit eventlistener to form

form.addEventListener("submit",handleSubmit);

const date = new Date();
let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// month array
const monthArr = [31,28,31,30,31,30,31,31,30,31,30,31];

function validate(){
    const inputs = document.querySelectorAll("input");
    let validator = true;

    inputs.forEach( (val) => {
        const parent = val.parentElement;
        if(!val.value){
            val.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required.";
            validator = false;
        }else if(monthIp.value > 12){
            monthIp.style.borderColor = "red";
            monthIp.parentElement.querySelector("small").innerText = "must be a valid month.";
            validator = false;
        }else if(dayIp.value > 31){
            dayIp.style.borderColor = "red";
            dayIp.parentElement.querySelector("small").innerText = "must be a valid day.";
            validator = false;
        }else{
            val.style.borderColor = "black";
            parent.querySelector("small").innerHTML = "";
            validator = true;
        }
    });

    return validator;
}


function handleSubmit(s){
    s.preventDefault();
    if(validate()){
        if(dayIp.value > day){
            // calculating no of days
            day = day + monthArr[month-1];
            month = month-1;
        }
    
        if(monthIp.val > month){
            // calculating no of months and years
            month = month + 12;
            year = year - 1;
        }
    
        const d = day - dayIp.value;
        const m = month - monthIp.value;
        const y = year - yearIp.value;
    
        dayOp.innerHTML = d;
        monthOp.innerHTML = m;
        yearOp.innerHTML = y;

    }
   
}