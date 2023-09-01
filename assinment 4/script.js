var names = ["waheed", "waqar", "waqas", "husain", "hassan", "muneeb", "ayesha", "wahab", "muhammad"];

for (var i = 0; i < names.length; i++) {
    if (names[i][0] === 'w' || names[i][0] === 'W') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}