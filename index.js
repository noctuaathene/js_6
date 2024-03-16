console.log('funguju!');

let skill
let skillLevel

const updateSkill = (skill, skillLevel) => {
    if (skillLevel > 100) {
        skillLevel = 100
    }
    if (skillLevel < 0) {
        skillLevel = 0
    }
    update = document.querySelector(skill + " .skill__progress")
    update2 = document.querySelector(skill + ' .skill__value')

    update2.textContent = skillLevel + " / 100"
    update.style.width = skillLevel + "%"
}

updateSkill("#skill1", Number(prompt("Zadej úroveň schopnosti v HTML:")))
updateSkill("#skill2", Number(prompt("Zadej úroveň schopnosti v CSS:")))
updateSkill("#skill3", Number(prompt("Zadej úroveň schopnosti v JavaScript:")))