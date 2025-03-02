// Method chaining = Calling one method after another one continuous line of code .


// No Method chaining

username = "  sok NAN ";
console.log(`1. username is |${username}|`);

username = username.trim();
console.log(`2. usename is |${username}|`);

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(`3. username is |${username}|`);

// Method chaining 

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(`4. username is|${username}|`);