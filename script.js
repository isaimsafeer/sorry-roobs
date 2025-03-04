document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "love.html"; // Redirects to another page
});

const noBtn = document.getElementById("noBtn");

const phrases = [
    "Please 😭", 
    "I won't do it again 😣", 
    "Please please please 🥺", 
    "Please accept 😔", 
    "Just this once 😭", 
    "I'm really really sorry 😢", 
    "Don't do this to me 💔", 
    "I promise I'll be better! 🙏", 
    "Think about all the good times! 😭", 
    "You’re my everything! 😢", 
    "I'll make it up to you, I swear! 🥺", 
    "Forgive me just this time? 😞", 
    "I’ll do whatever you say! 😭", 
    "I’ll buy you food! 🍔🍕", 
    "I can’t live without you! 💔", 
    "Come on, have mercy! 🙏", 
    "You're too kind to say no... right? 🥺", 
    "I'll be the best person ever, promise! ✨", 
    "My heart can't take this 😭", 
    "Think about all the love we have! ❤️", 
    "I know I messed up, but please... 😢", 
    "I'll write you a poem! ✍️", 
    "Please, I beg you on my knees! 🙇‍♂️", 
    "You don't really mean that, right? 🥺", 
    "Last chance to say yes... please? 😖"
];
let size = 16; // Initial font size in pixels
let index = 0;

noBtn.addEventListener("click", () => {
    size += 5; // Increase font size
    noBtn.style.fontSize = `${size}px`;
    noBtn.innerText = phrases[index]; // Change button text
    index = (index + 1) % phrases.length; // Cycle through phrases
});