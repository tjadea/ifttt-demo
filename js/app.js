// Declare variables so.. create an object for list
let list = [{
    id: 1,
    name: "Twitter",
    icon: "fab fa-twitter-square",
    description: "Hi this is",
    colour: "#FF0000",
    link: "#"
}, {
    id: 2,
    name: "Date &amp; Time",
    icon: "fas fa-clock",
    description: "As well as..",
    colour: "rgb(51,51,51)",
    link: "#"
}, {
    id: 3,
    name: "RSS Feed",
    icon: "fas fa-rss",
    description: "As well as..",
    colour: "rgb(237,117,5)",
    link: "if-feed.html",
    data: [{
        key: "new-feed-item",
        title: "New Feed Item",
        info: "This Trigger fires every time a new item is added to the feed you specify.",
        link: "if-feed-then.html",
    }, {
        key: "new-feed-matches",
        title: "New Feed Item Matches",
        info: "This Trigger fires every time a new item in the feed you specify contains a particular keyword or simple phrase.",
    }],
}, {
    id: 4,
    name: "SMS",
    icon: "fas fa-comment-alt",
    description: "As well as..",
    colour: "rgb(41,191,18)",
    link: "#"
}, {
    id: 5,
    name: "Email",
    icon: "fas fa-envelope",
    description: "As well as..",
    colour: "rgb(36,104,255)",
    link: "#"
},{
    id: 6,
    name: "Delicious",
    icon: "fab fa-delicious",
    description: "As well as..",
    colour: "rgb(50,116,208)",
    link: "#"
},{
    id: 7,
    name: "Facebook",
    icon: "fab fa-facebook-square",
    description: "As well as..",
    colour: "rgb(59,87,157)",
    link: "#"
},{
    id: 8,
    name: "Tumblr",
    icon: "fab fa-tumblr-square",
    description: "As well as..",
    colour: "rgb(53,70,92)",
    link: "#"
},{
    id: 9,
    name: "Pinboard",
    icon: "fas fa-thumbtack",
    description: "As well as..",
    colour: "rgb(0,0,230)",
    link: "#"
},{
    id: 10,
    name: "Instagram",
    icon: "fab fa-instagram",
    description: "As well as..",
    colour: "rgb(228,64,95)",
    link: "trigger.html"
}];

let actionList = [{
    id: 1,
    name: "Twitter",
    icon: "fab fa-twitter-square",
    colour: "rgb(0,171,236)",
}, {
    id: 2,
    name: "SMS",
    icon: "fas fa-clock",
    colour: "rgb(41,191,18)",
}, {
    id: 3,
    name: "Evernote",
    icon: "fas fa-sticky-note",
    colour: "rgb(45,190,96)",
}, {
    id: 4,
    name: "Pocket",
    icon: "fab fa-get-pocket",
    colour: "rgb(239,62,86)"
}, {
    id: 5,
    name: "Email",
    icon: "fas fa-envelope",
    colour: "rgb(36,104,255)",
    link: "if-email.html",
    data: [{
        key: "send-new-email",
        title: "Send me an email",
        info: "This action will send you an HTML based email. Images and links are supported.",
        link: "if-feed-then.html",
    }],
},{
    id: 6,
    name: "Delicious",
    icon: "fab fa-delicious",
    colour: "rgb(50,116,208)",
},{
    id: 7,
    name: "Facebook",
    icon: "fab fa-facebook-square",
    colour: "rgb(59,87,157)",
},{
    id: 8,
    name: "Tumblr",
    icon: "fab fa-tumblr-square",
    colour: "rgb(53,70,92)",
},{
    id: 9,
    name: "Pinboard",
    icon: "fas fa-thumbtack",
    colour: "rgb(0,0,230)",
},{
    id: 10,
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    colour: "rgb(0,123,182)",
}];

// New elements
let newUL = document.createElement("ul");
let newLI = document.createElement("li");
let newALink = document.createElement("a");
let newIcon = document.createElement("i");

var storedFeed = window.localStorage.getItem("newFeedURL");
var storedEmail = window.localStorage.getItem("newEmailADR");