document.addEventListener("DOMContentLoaded", () => {
  // clicking on the logo/home button
  document.getElementById("brand-logo").addEventListener("click", () => {
    window.location.href = "/html/index.html";
  });

  // clicking on the "Discover Today" button
  document.getElementById("discover-today").addEventListener("click", () => {
    window.location.href = "/html/discover-today.html";
  });
  const taskCard = document.querySelectorAll(".task_card");
  let taskCount = taskCard.length;
  // console.log(taskCount);
  document.getElementById("task_assigned").innerText = taskCount;

  document.querySelectorAll(".completed-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".completed-button").classList.add("disabled");
      alert("Board updated successfully!");
      document.getElementById("task_assigned").innerText --;
      document.getElementById("task_completed").innerText ++;
    });
  });
});

// real-time date
setInterval(updatedDate, 1000);
