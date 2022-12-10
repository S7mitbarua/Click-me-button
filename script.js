document.querySelector('.clickme').addEventListener('click', () => { });
document.querySelector('.clickme').addEventListener('click', () => {
    document.querySelectorAll('.hidden').forEach((item) => { });
});
document.querySelector(".clickme").addEventListener("click", () => {
  document.querySelectorAll(".hidden").forEach((item) => {
    item.classList.toggle("showing");
  });
});

