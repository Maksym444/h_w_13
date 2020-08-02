let numberStr = String (prompt ('Введите число: '));
function isPalendrom (numberStr){
  let reverseNumberFunction = (numberStr) =>  numberStr.split("").reverse().join("");
  let reverseNumber = Number (reverseNumberFunction(numberStr));
  let number = Number (numberStr);
  if (Number.isInteger(number)){
    if (number==reverseNumber){
      console.log(`Близжайший палиндром с этим числом: ${number}`); 
    }
    else{ 
      return isPalendrom(String(number+reverseNumber));
    }
  } else{
    console.error("Введите число!");
    
  }
}
isPalendrom (numberStr);




