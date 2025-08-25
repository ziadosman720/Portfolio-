// Particle effect background (simple)
document.addEventListener("mousemove", e => {
  let circle = document.createElement("div");
  circle.className = "particle";
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
  document.body.appendChild(circle);

  setTimeout(() => { circle.remove(); }, 1000);
});
