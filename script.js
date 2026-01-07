fetch("data/DS.txt")
    .then(response => response.text())
    .then(text => {
        document.getElementById("content").value = text;
    });

function copyAll() {
    const textArea = document.getElementById("content");
    textArea.select();
    document.execCommand("copy");
    alert("✅ All content copied successfully!");
}
