function displayInfo() {
    document.getElementById('info').innerText = `Name:${formInfoArray[0].Name}, User Name:${formInfoArray[0].UserName}, Email:${formInfoArray[0].Email}`;
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("img-3").disabled = false;
    document.getElementById("img-2").disabled = true;
}
