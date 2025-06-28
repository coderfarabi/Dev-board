function updatedDate () {
  const now = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  document.getElementById("live_date").innerText = `${now.toDateString(undefined, dateOptions)}`;
  // console.log(now.toDateString(undefined, dateOptions));
}


function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b}, ${.3})`;
}
