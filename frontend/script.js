document.getElementById("uploadForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const fileInput = document.getElementById("imageInput");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const response = await fetch("http://localhost:8000/remove-bg/", {
        method: "POST",
        body: formData
    });

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    document.getElementById("result").src = url;
});
