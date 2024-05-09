// function updateTime() {
  //   const now = new Date();
  //   const hours = String(now.getHours()).padStart(2, '0');
  //   const minutes = String(now.getMinutes()).padStart(2, '0');
  //   const seconds = String(now.getSeconds()).padStart(2, '0');
  //   const timeString = `${hours}:${minutes}:${seconds}`;
  //   document.getElementById('time').textContent = timeString;
  // }
  
  // // Update the time every second
  // setInterval(updateTime, 1000);
  
  // // Initial call to display the time immediately
  // updateTime();

  function updateClock() {
    const now = new Date();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}, ${month} ${date}, ${year}`;
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }
  
  setInterval(updateClock, 1000); // Update every second
  