let x = new Promise(function(resolve, reject) {
    let a = 1 + 1;
    if (a === 2) {
      resolve("successful");
    } else {
      reject("Unsuccessful");
    }
  });
  
  x.then(function(message) {
    console.log("this message " + message);
  }).catch(function(message) {
    console.log("this message is " + message);
  });
  