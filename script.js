async function copyAll() {
    try {
        // 🔗 RAW GitHub file URLs (IMPORTANT: use raw.githubusercontent.com)
        const file1 = "https://raw.githubusercontent.com/USERNAME/REPO/main/DS.txt";
        const file2 = "https://raw.githubusercontent.com/USERNAME/REPO/main/DS_Titles_Numbered.txt";

        const res1 = await fetch(file1);
        const res2 = await fetch(file2);

        const text1 = await res1.text();
        const text2 = await res2.text();

        const combinedContent =
            "===== FILE 1 =====\n\n" +
            text1 +
            "\n\n===== FILE 2 =====\n\n" +
            text2;

        await navigator.clipboard.writeText(combinedContent);

        alert("✅ All content copied to clipboard!");
    } catch (error) {
        alert("❌ Error copying content. Check GitHub URLs.");
        console.error(error);
    }
}
