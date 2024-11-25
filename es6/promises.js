function popUp(msg, time){
  return new Promise((complete) => {
    setTimeout(() => {
      console.log("Popup:", msg);
      complete();
    }, time);
  })
}

// function newFn() {
//   setTimeout(() => {
//     console.log("Popup: message 1");
//     setTimeout(() => {
//       console.log("Popup: message 2");
//       callApi();
//     }, 1000);
//   }, 3000);
// }

function callApi(){
  console.log("Calling API");
}

popUp("message1", 3000).then(() => {
  popUp("message2", 1000).then(() => {
    popUp("message3", 1000).then(() => {
      callApi();
    })
  })
});
popUp("message1", 3000).then(() => {
  return popUp("message2", 1000);
}).then(() => {
  return popUp("message3", 1000);
}).then(() => {
  callApi();
})


