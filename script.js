let weight=document.querySelector(".weight");
let height=document.querySelector(".height")
let btn=document.querySelector(".submitBtn");
let BMI=document.querySelector(".BMI");
let msg=document.querySelector(".msg");
let emoji=document.querySelector(".emoji");
let resetBtn=document.querySelector(".resetBtn")


const bmiCalculation =(weightValue,heightValue)=>{
    let BMIValue=weightValue/(heightValue**2);
    return BMIValue.toFixed(2)
}

btn.addEventListener("click",()=>{
    let weightValue=Number(weight.value);
    let heightValue=Number(height.value);

    let BMIValue=bmiCalculation(weightValue,heightValue);
    console.log(`weight is ${weightValue} and height is ${heightValue} and BMI is ${BMIValue}.`);
    BMI.innerText=BMIValue;

    if(BMIValue<18.5){
        BMI.style.color="#008DDA";
        msg.innerText="UnderWeight";
        emoji.innerHTML= "&#128533;" ;

    }else if(BMIValue>=18.5&& BMIValue<24.9){
        BMI.style.color="#06D001";
        msg.innerText="Normal";
        emoji.innerHTML="&#128513;";

    }else if(BMIValue>=24.9&&BMIValue<29.9){
        BMI.style.color="#FCDC2A";
        msg.innerText="OverWeight";
        emoji.innerHTML="&#128528;";

    }else if(BMIValue>=29.9&&BMIValue<34.9){
        BMI.style.color="#FF731D";
        msg.innerText="Obese";
        emoji.innerHTML="&#128529;";
    
    }else{
        BMI.style.color="red";
        msg.innerText="Extremely Obese";
        emoji.innerHTML="&#128558;";
       
    }
    
})

resetBtn.addEventListener("click",()=>{
    weight.value="";
    height.value="";
    msg.innerText="lets check whether you are healthy or not.";
    emoji.innerHTML="&#128512;";
    BMI.innerText="0.00";
})