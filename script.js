document.addEventListener("DOMContentLoaded",function(){
console.log("Mystic Diaries is ready.");
});

function openEntry(type){
const windowBox=document.getElementById("entryWindow");
const title=document.getElementById("entryTitle");
const text=document.getElementById("entryText");

if(type==="chemistry"){
title.textContent="Entry 01 — Thermodynamics";
text.textContent="Thermodynamics is the study of energy changes that accompany physical and chemical processes. It helps us understand how heat and work are transferred between a system and its surroundings. Important concepts include the system, surroundings, state functions, internal energy, enthalpy and entropy. These ideas help explain whether a process can occur and how energy changes during a reaction.";
}

if(type==="archives"){
title.textContent="The Archives";
text.textContent="A collection of things I discover, create, learn and want to remember.";
}

if(type==="midnight"){
title.textContent="Midnight Notes";
text.textContent="Some thoughts don't need a reason to exist. This is a space for observations, memories and little moments worth keeping.";
}

windowBox.style.display="flex";
}

function closeEntry(){
document.getElementById("entryWindow").style.display="none";
}