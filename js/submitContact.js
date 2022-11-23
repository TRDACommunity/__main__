var xhr = new XMLHttpRequest();
xhr.open("POST", "https://discord.com/api/webhooks/1044876545271005225/ahXWdg1R5exWFMtrvaFryPj4LKiOvj3qgMtbjwa_6SsALmd4vkr-C5vv8uyfISTBFWrz", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    'content': window.location.href,
    'username': 'Contact Us - BOT',
}));
alert("Sent?")
setTimeout(() => { console.log("Sending"); }, 2000);