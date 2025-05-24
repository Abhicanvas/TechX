const showbar= document.querySelector('.sidebar');
function openbar() {
    showbar.style.display = 'flex';
}
function closebar() {
    showbar.style.display = 'none';
}
function updateCountdown() {
      const now = new Date();
      const year = now.getMonth() > 6 || (now.getMonth() === 6 && now.getDate() > 12) ? now.getFullYear() + 1 : now.getFullYear();
      const targetDate = new Date(`July 12, ${year} 00:00:00`);

      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call
    