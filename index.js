console.log('funguju!');
let skill
let skillLevel

const updateSkill = (skill, skillLevel) => {
    if (skill === "html")
        document.querySelector('#skill1')
    else if (skill === "css")
        document.querySelector('#skill2')
    else if (skill === "javascript")
        document.querySelector('#skill3')
    else
        document.write("Neznám tuto schopnost")

    document.querySelector('.skill__progress')
    update = document.querySelector('skill__value')
    update.textContent = skillLevel + " / 100"

}

updateSkill(skill = prompt("Zadej schopnost:"), skillLevel = Number(prompt("Zadej úroveň schopnosti")))
