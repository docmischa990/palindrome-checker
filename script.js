// acquire elements
const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

// Function to check if a string is a palindrome
const isPalindrome = (text) => {
const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
const reversedText = cleanedText.split("").reverse().join("");
return cleanedText === reversedText;
};

// event listener for the button element
checkButton.addEventListener("click", () => {
  const userInput = input.value.trim();

// empty input
if (!userInput) {
  alert("Please input a value");
  return;
}

result.classList.remove('hidden');

// check for palindrome
result.style.display = "block";

if (isPalindrome(userInput)) {
  result.innerText = `"${userInput.trim()} is a palindrome"`;
  result.style.color = "green";
} else {
  result.innerText = `"${userInput.trim()} is not a palindrome"`;
  result.style.color = "red";
}
});

// additional keyboard option to get result
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkButton.click();
  }
});