document.addEventListener("DOMContentLoaded", () => {


  // clicking on the logo/home button
  document.getElementById("brand-logo").addEventListener("click", () => {
    window.location.href = "index.html";
  });
  

  // clicking on the "Discover Today" button
  document.getElementById("discover-today").addEventListener("click", () => {
    window.location.href = "html/discover-today.html";
  });


  // clicking on the "Add Task" button
  document.getElementById("task_assigned").innerText =
  document.querySelectorAll(".task_card").length;
  document.querySelectorAll(".completed-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.disabled = true;
      alert("Board updated successfully!");
      document.getElementById("task_assigned").innerText--;
      document.getElementById("task_completed").innerText++;
      

      // Add activity log after task completion
      const activityTitle = btn.closest('.task_card').querySelector('h2').innerText;
      const activityMessage = `You have Completed The Task <span class="font-bold">${activityTitle}</span> at <span class="italic">${new Date().toLocaleTimeString()}</span>`;

      const activityLogContainer = document.getElementById(
        "activity_log_container"
      );
      const activityLog = document.createElement('p');
      activityLog.className = "bg-my-white p-2 rounded text-sm";
      activityLog.innerHTML = activityMessage; ;
      activityLogContainer.appendChild(activityLog);
    });


    //clicking on the "Clear History" button to clear activity log
    document.getElementById('clear_history').addEventListener('click', () => {
      document.getElementById('activity_log_container').innerHTML = '';
    })
  });

  document.getElementById('rendom_color').addEventListener('click', () =>{
    document.getElementById('body').style.backgroundColor=getRandomRGBColor();

  })
  
  
});

// real-time date
setInterval(updatedDate, 1000);
