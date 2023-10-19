window.addEventListener("load", function () {
    const form = document.getElementById("characterBuilder");
    form.addEventListener("submit", handleClassPicker);
});

function handleClassPicker(event) {
    event.preventDefault();
    const height = parseInt(document.querySelector("input#input2").value);
    const species = document.querySelector("select#input3").value;
    const gender = document.querySelector("input[name='input4']:checked").value;
    console.log(height);
    console.log(species);
    console.log(gender);


    if (height >= 6 && height < 8 && gender === "male"){
        result = "Knight"
    } else if ((height >= 4 && height <= 6) && (species === "Elf") && (gender === "female" || gender === "nb" || gender === "other")) {
        result = "Archer"
    } else if ((height >= 6 && height <= 10) && (species === "Elf" || species === "Human"))
        result = "Mage"
        else if ((height >= 3 && height < 6) && (species ==="Human" || species === "Orc"))
        result = "Thief"
    else
    result = "Villager"

    document.getElementById("output").innerText = result;
}

