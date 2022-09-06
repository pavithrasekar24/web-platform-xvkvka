function changeStyle() {
  let subHead = document.getElementById('subHead');
  subHead.innerHTML =
    'Thinking back to when <mark> i was a kid</mark> I think about all the cartoons I used to watch and my favorite show was Tom and Jerry. Yes, it was violent in a comedic way but that’s what ma';
  subHead.style.color = 'red';
  subHead.style.fontFamily = 'cursive';
  subHead.className = 'my-sub-head';
}

function handleCheckBox() {
  let language = document.getElementsByName('language');
  console.log(language);
  let getCheckedValues = [];
  language.forEach((item) => {
    console.log(item.checked);
    if (item.checked == true) {
      getCheckedValues.push(item.value);
    }
  });
  console.log(getCheckedValues);
}
{
  /* <a href="" >vhcvc</a> */
}

let achor = document.createElement('a');
achor.href = 'https://github.com';
achor.innerText = 'Github';
achor.style.color = 'red';
achor.target = '_blank';
document.body.appendChild(achor);

function handlePh() {
  let phNum = document.getElementById('phNum');
  console.log('phNum', phNum.value);
}

function handleName() {
  let firstName = document.querySelector('#firstName');
  console.log(firstName.value);
}

document.querySelector('.alert').style.color = 'white';
document.querySelector('.alert').style.background = 'blue';
document.querySelector('button').style.color = 'violet';
