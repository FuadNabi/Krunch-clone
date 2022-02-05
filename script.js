const downloadBtn = document.getElementById('downloadBtn');
const viewFeaturesdBtn = document.getElementById('viewFeaturesBtn');
let toggle = "deqiq-olsun";



downloadBtn.onclick = () => {
  if ( toggle == "deqiq-olsun" ) {
    downloadBtn.style.backgroundColor = 'red';
    toggle = "onda-iiiii"
  } else {
    downloadBtn.style.backgroundColor = 'green';
    toggle = "deqiq-olsun"
  }
}

viewFeaturesdBtn.onclick = () => {
  if ( toggle == "deqiq-olsun" ) {
    viewFeaturesdBtn.style.backgroundColor = 'orange';
    toggle = "onda-iiiii"
  } else {
    viewFeaturesdBtn.style.backgroundColor = 'purple';
    toggle = "deqiq-olsun"
  }

}

