
function writeCards(namesArray, eventName) {
    let messages = [];
    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
  
      messages.push(message);
    }
  
    
    return messages;
  }
  

  //console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
   function countDown(n) {
    let i = 10;
    while(i >= 0 ){
      console.log(i);
      i--;
    }
    return i;
   }
   countDown(10);