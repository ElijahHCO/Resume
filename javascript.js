let myName = 'elijah hurn'
let result = "Name: " + myName.toUpperCase()
console.log(result)
console.log("Career: " + "Retail")
console.log("Description: " + "I am 6'2, I have brown hair, I have hazel eyes")
console.log("My Interests:");
console.log("* " + "Music");
console.log("* " + "College Football");
console.log("* " + "Snowboarding");
console.log("My Previous Experience: ")
displayPosition('* ','evo ', 'service shop attendant - Help customers with snowboards')
displayPosition('* ','Clean Kratom ', 'shop attendant - sell kratom to customers')
displayPosition('* ','Brauhaus ', 'bartender - pour beer, and mix drinks')
console.log("My Skills: ")
displaySkill("Photography", true)
displaySkill("Snowboarding", true)
displaySkill("Guitar", true)
displaySkill("Video Editing", true)



function displayPosition(companyName, jobTitle, description) {
    console.log(companyName + jobTitle + '-' + description)
}
function displaySkill(skillName, isCool) {
    if (isCool === true) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
};