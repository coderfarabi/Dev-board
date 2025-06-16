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