const nameElement = document.getElementById('dynamicName');
const messageElement = document.getElementById('dynamicMessage');
const nameText = "Bhavya gera";
const initialGreeting = "Hello everyone";
const initialMessage = "I am ";
const finalMessages = ["LEARNER", "ENGINEER","DEVELOPER","EXPLORER","SOLVER"];
let index = 0;
let greetingIndex = 0;
let messageIndex = 0;
let currentWordIndex = 0;

function typeName() {
    if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeName, 100);
    } else {
        setTimeout(typeGreeting, 1000); // Pause before typing greeting
    }
}

function typeGreeting() {
    if (greetingIndex < initialGreeting.length) {
        messageElement.textContent += initialGreeting.charAt(greetingIndex);
        greetingIndex++;
        setTimeout(typeGreeting, 100);
    } 
    else{
        messageElement.textContent ="";
        setTimeout(typeInitialMessage, 400)
    }
}

function typeInitialMessage() {
    if (messageIndex < initialMessage.length) {
        messageElement.textContent += initialMessage.charAt(messageIndex);
        messageIndex++;
        setTimeout(typeInitialMessage, 100);
    } else {
        setTimeout(changeToNextWord, 1000); // Pause before changing the word
    }
}

function changeToNextWord() {
    const words = finalMessages;
    if (currentWordIndex < words.length) {
        const currentWord = words[currentWordIndex];
        const messageParts = initialMessage.split(" ");
        messageParts[2] = currentWord; // Change "student" to the next word
        messageElement.textContent = messageParts.join(" ");
        currentWordIndex++;
        setTimeout(changeToNextWord, 2000); // Pause before changing to the next word
    } 
    else {
        // Reset to the initial message and start over
        currentWordIndex = 0;
        messageElement.textContent = initialMessage; // Clear the message
        setTimeout(changeToNextWord, 10); // Pause before typing the greeting again
    }
}

window.onload = typeName;










// const nameElement = document.getElementById('dynamicName');
// const messageElement = document.getElementById('dynamicMessage');
// const nameText = "John Doe";
// const roleText = "Web Developer";
// const greetingText = "Hello everyone";
// const portfolioText = "It's my portfolio";
// const designation="I am";
// let param=["Learner","Engineer","developer"];
// let index = 0;
// let messageIndex = 0;

// function typeName() {
//     if (index < nameText.length) {
//         nameElement.textContent += nameText.charAt(index);
//         index++;
//         setTimeout(typeName, 100);
//     } else {
//         setTimeout(typeGreeting, 1000); // Pause before typing greeting
//     }
// }

// function typeGreeting() {
//     if (messageIndex < greetingText.length) {
//         messageElement.textContent += greetingText.charAt(messageIndex);
//         messageIndex++;
//         setTimeout(typeGreeting, 100);
//     } else {
//         setTimeout(showPortfolioMessage, 1000); // Pause before showing portfolio message
//     }
// }

// function showPortfolioMessage() {
//     messageElement.textContent = portfolioText; // Change to portfolio message
//     setTimeout(typeName, 2000);
//     messageElement.textContent="";

// }

// window.onload = typeName;




















// const nameElement = document.getElementById('dynamicName');
// const helloElement = document.getElementById('helloName');
// const hello ="Hello Everyone";
// const nameText = "name sirname - AI Developer";
// // const roleText = "AI Developer";
// let index = 0;
// let i=0;

// function typeName() {
//     if (i < hello.length) {
//         helloElement.textContent += hello.charAt(i);
//         i++;
//         setTimeout(typeName, 100);
//     } else {
//         setTimeout(typeRole, 1000); // Pause before typing the role
//     }
// }

// function typeName() {
//     if (index < nameText.length) {
//         nameElement.textContent += nameText.charAt(index);
//         index++;
//         setTimeout(typeName, 100);
//     } else {
//         setTimeout(typeRole, 1000); // Pause before typing the role
//     }
// }

// function typeRole() {
//     nameElement.textContent += " - " + roleText;
// }

// window.onload = typeName;