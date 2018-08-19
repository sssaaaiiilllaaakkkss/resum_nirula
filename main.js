function json(file,callback){

	var xhr=new XMLHttpRequest();  
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
	if(xhr.readyState=="4" && xhr.status=="200"){
			callback(xhr.responseText);
		}
	} 
   xhr.send();
}

//json("data.json",function(text){
//	let d=JSON.parse(text);
//	console.log(d);
//	basics(d.basicdetails);
//	edu(d.education);
//	techskills(d.skills);
//	carr(d.carrier);
//	ache(d.acheivements);
//	desc(d.description);
//})

//Fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	carr(d.carrier);
	ache(d.acheivements);
	desc(d.description);

})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(cse){

var  i=document.createElement("img");
i.src=cse.image;
i.alt="profile photo";
l.appendChild(i);

var nam=document.createElement("h3");
nam.textContent=cse.name;
l.appendChild(nam);

var em=document.createElement("h3");
em.textContent=cse.email;
l.appendChild(em);

var ph=document.createElement("h3");
ph.textContent=cse.phone;
l.appendChild(ph);

var add=document.createElement("h3");
add.textContent=cse.address;
l.appendChild(add);
}

var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e){

	var e1=document.createElement("div");
	e1.classList.add("educa")
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="Educational Details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for(var i = 0;i<e.length; i++) {
		var h=document.createElement("h2");
		h.textContent=e[i].course;
		e1.appendChild(h);
		var u=document.createElement("ul");
		e1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=e[i].college;
		u.appendChild(list)
		var list1=document.createElement("li");
		list1.textContent=e[i].percentage;
		list.appendChild(list1);

	}

}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carr(car){
	var c=document.createElement("div");
	r.appendChild(c);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective";
	c.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.ca;
	c.appendChild(para);
}
function ache(a){
	var d=document.createElement("div");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="acheivements:";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for(i in a){
		var u=document.createElement("ul");
		d.appendChild(u);
		var list=document.createElement("li")
		list.textContent=a[i];
		u.appendChild(list);
	}
}
function desc(D){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="description:";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("h3");
	para.textContent=D.des;
	c1.appendChild(para);
}











