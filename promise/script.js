let x = 'ff';
// let checkType =new Promise(function(resolve,reject){

// })
console.log(typeof x);
let checkType = new Promise((resolve, reject) => {
  if (typeof x == 'number') {
    let response = { id: 1, status: 'success' };
    resolve(response);
  } else {
    let error = { id: 2, status: 'failure' };
    reject(error);
  }
});

checkType
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//async & await
async function getTitle() {
  let title = new Promise(function (resolve, reject) {
    resolve('Admin dashboard');
  });
  console.log(title);
  document.getElementById('demo').innerText = await title;
}
