async function copyAll() {
    try {
        const url =
            "https://raw.githubusercontent.com/USERNAME/DS/main/DS_ALL.txt";

        const response = await fetch(url);
        const text = await response.text();

        await navigator.clipboard.writeText(text);

        alert("✅ All DS content copied successfully!");
    } catch (error) {
        alert("❌ Failed to copy. Check GitHub URL.");
        console.error(error);
    }
}
