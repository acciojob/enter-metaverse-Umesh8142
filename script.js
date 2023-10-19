//your JS code here. If required.
const btn =document.getElementById("enterBtn");
btn.addEventListener("click", function() {
    const p =document.getElementById("status");
	const h1 =document.createElement("h1");
	h1.innerText="Entered Metaverse"
	p.innerText=""
	p.appendChild(h1);
});