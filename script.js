const downloadBtm = document.querySelector('.header-btm');
let toggle = "deqiq-olsun";



downloadBtm.onclick = () => {
  alert(toggle)

  if ( toggle == "deqiq-olsun" ) {
    downloadBtm.style.backgroundColor = 'red';
    toggle = "onda-iiiii"
  } else {
    downloadBtm.style.backgroundColor = 'green';
    toggle = "deqiq-olsun"
  }
}

