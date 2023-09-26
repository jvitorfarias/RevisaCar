function addTextNode(text) {
    let newText = document.createTextNode(text)
    let rc = document.getElementById("rc")

    rc.appendChild(newText)
}

function reloadPage() {
    window.location.reload()
}