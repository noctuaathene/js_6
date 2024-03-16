console.log('funguju!');

let skill
let skillLevel

const updateSkill = (skill, skillLevel) => {
    update = document.querySelector(skill + " .skill__progress")
    update2 = document.querySelector(skill + ' .skill__value')

    update2.textContent = skillLevel + " / 100"
    update.style.width = skillLevel + "%"
}

updateSkill("#skill1", skillLevel = Number(prompt("Zadej úroveň schopnosti v HTML:")))
updateSkill("#skill2", skillLevel = Number(prompt("Zadej úroveň schopnosti v CSS:")))
updateSkill("#skill3", skillLevel = Number(prompt("Zadej úroveň schopnosti v JavaScript:")))