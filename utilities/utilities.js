function updatedDate () {
  const now = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  document.getElementById("liveTime").innerText = `${now.toDateString(undefined, dateOptions)}`;
}