function additem() {
  let head = document.getElementById("head");
  let rowsdone = document.getElementById(`additem`);
  let pop1 = document.getElementById("todono");
  pop1.style.display = "flex";
  let cards = document.getElementById("card");
  cards.style.opacity = 0.1;
  // pop1.style.textAlign="center"

  // let backgr =document.getElementById("opacitych")

  head.style.opacity = 0.1;
  // backgr.style.display="none"
  // document.body.style.opacity=.1
  pop1.innerHTML = `
    <nav  class="addview" >
    <nav>Add New List</nav><br>
    <input type="text" class="tex" id="texts" placeholder="Add New List">
    <nav class="ac">
    <button onclick="card1()" id="card1" >ADD</button>
    <button onclick="cancel()" >Cancel</button></nav>
</nav>`;
  // document.body.style.backgroundColor="red"
  let child = [];
  // oldpg.innerHTML=newtrip;
  rowsdone.innerHTML = child;
}

let data = [];

function card1() {
  let head = document.getElementById("head");
  head.style.opacity = 1;
  let cards = document.getElementById("card");
  cards.style.opacity = 1;
  let newtex = document.getElementById("texts").value;
  let item = {
    id: new Date().getTime(),
    title: newtex,
  };
  if (newtex) {
    data.push(item);
    addui();
  } else {
    alert("Please  enter the Card Title ☺️");
  }

  let pop1 = document.getElementById("todono");

  let rowsdone = document.getElementById(`additem`);
  add = rowsdone.innerHTML;
  if (add !== "") {
    pop1.style.display = "flex";
  } else {
    pop1.style.display = "none";
  }
  function addui() {
    let popcards = document.getElementById("card");
    let coadop = "";

    for (let index = 0; index < data.length; index++) {
      console.log(index);
      if (index <= data.length) {
        console.log(index);
        console.log("dl", data.length);
        console.log("REMOVEid", data[index].id);
        console.log("REMOVEid", data[index].title);
        coadop += `
<nav class="cards" id="cd${data[index].id}"> ${data[index].title}<hr>
<p id="addtk${data[index].id}"><p>
<span class="c1 c2 card-btn" id="del${data[index].id}"  onclick="delcard(${data[index].id})">
d</span>
<span class="c1 card-btn" id="addtask${data[index].id}" onclick="addtask(${data[index].id})">+</span></nav>`;
      }
    }
    popcards.innerHTML = coadop;
  }
  console.log("u", item.id);
}

function delcard(id) {
  let head = document.getElementById("head");
  head.style.opacity = 1;
  let cards = document.getElementById("card");
  cards.style.opacity = 1;
  const cardId = `cd${id}`;
  const card = document.getElementById(cardId);
  card.parentNode.removeChild(card);
  data = data.filter((item) => item.id != id);
  console.log(data);
}

function addtask(taskid) {
  let head = document.getElementById("head");
  head.style.opacity = 0.1;
  let cards = document.getElementById("card");
  cards.style.opacity = 0.1;
  let add = document.getElementById(`addtk${taskid}`);
  let pop1 = document.getElementById("todono");
  pop1.style.display = "flex";
  console.log("HI" + taskid);
  pop1.innerHTML = `
    <nav  class="addview" id="newtripcd">
    <nav>Add New Task</nav><br>
    <input type="text" class="tex" id="textsfortask" placeholder="Add New Task">
    <nav class="ac">
    <button onclick="cardstask(${taskid})" id="card1" >ADD</button>
    <button onclick="cancel()" >Cancel</button></nav>
</nav>`;
}

function cancel() {
  let head = document.getElementById("head");
  head.style.opacity = 1;
  let cards = document.getElementById("card");
  cards.style.opacity = 1;
  let pop1 = document.getElementById("todono");
  pop1.style.display = "none";
}

const da = [];
function cardstask(taskid) {
  let head = document.getElementById("head");
  head.style.opacity = 1;
  let cards = document.getElementById("card");
  cards.style.opacity = 1;
  let add = document.getElementById(`addtk${taskid}`);
  let newtext = document.getElementById("textsfortask").value;
  let pop1 = document.getElementById("todono");
  pop1.style.display = "none";
  const it = {
    id: new Date().getTime().toString(),
    tit: newtext,
  };

  console.log(it);
  if (newtext || it.tit) {
    da.push(it);

    additem(taskid);
  } else {
    alert("Please  enter the Item ☺️");
  }

  function additem(taskid) {
    let coaditem = "";
    for (let i = 0; i < da.length; i++) {
      if (i <= da.length) {
        console.log(taskid, da[i].id);
        coaditem += `<p id="${da[i].id}${taskid}">
    <span id="new${da[i].id}${taskid}">
    ${da[i].tit}<span>
    <span class="makerd" id="makeread${da[i].id}${taskid}" onclick="makeread(${da[i].id},${taskid})">Make as read</span></p>`;
        add.innerHTML = coaditem;
      }
    }
  }
}

function makeread(id, taskid) {
  let mr = document.getElementById(`makeread${id}${taskid}`);
  mr.style.display = "none";
  let tk = document.getElementById(`new${id}${taskid}`);
  console.log(tk.innerText);
  console.log(tk);
  tk.style.color = "red";
  tk.style.textDecoration = "line-through";

  console.log(da);
  data = data.filter((item) => item.id != id);
  //   da = da.filter(it => it.id != id);
}

// class="contact${contact.done?"checked":""}"
