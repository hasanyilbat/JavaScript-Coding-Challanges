const link = prompt("Enter Youtube link:");
const linkEdited = link.split("=");
newLink = String("https://youtu.be/" + linkEdited[1]);
console.log(newLink);
