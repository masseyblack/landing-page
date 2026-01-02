const launchDate = new Date("February 1, 2026 00:00:00").getTime();
const boxes = document.querySelectorAll(".time-box");

setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML =
      "<h2 class='text-3xl font-bold'>We Are Live 🎉</h2>";
    return;
  }

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText =
    Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText =
    Math.floor((distance / 1000) % 60);

  boxes.forEach(box => {
    box.classList.add("scale-110");
    setTimeout(() => box.classList.remove("scale-110"), 300);
  });

}, 1000);
