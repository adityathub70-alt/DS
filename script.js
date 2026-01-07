fetch("https://raw.githubusercontent.com/USERNAME/DS/main/data/DS.txt")
  .then(res => res.text())
  .then(text => {
    document.getElementById("content").textContent = text;
  })
  .catch(err => {
    document.getElementById("content").textContent = "Failed to load content";
  });

function copyAll() {
  const text = document.getElementById("content").textContent;
  navigator.clipboard.writeText(text);
  alert("✅ All content copied successfully!");
}
