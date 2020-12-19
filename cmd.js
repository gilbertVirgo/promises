// Run on https://www.biblestudytools.com/topical-verses/gods-promises-verses-in-the-bible/

var s = document.querySelectorAll(".scripture")

var a = [], b, c;
for(var i of s) {
    b = i.querySelectorAll("span");
    c = "";
    for(var j of b) {
        c += j.innerText.split(" ").slice(1).join(" ");
    }
    a.push(c + ` (${i.parentNode.parentNode.querySelector("h2").innerText})`);
}

document.body.innerHTML = a.map(z => `&quot;${z}&quot;`).join(", ")