var module_13= document.getElementById('open-modal3');
var back_btn= document.querySelector('.back_btn');
var new_page_title= document.querySelector('.new_page_title');
var new_page_plusBtn= document.querySelector('.new_page_plusBtn');

module_13.style.display='none';

new_page_plusBtn.addEventListener('click',add_ele);


back_btn.addEventListener('click',(argu)=>{
  module_13.style.display="none";
  document.querySelector('.heading').classList.remove('hidden');
  var temp=document.getElementsByClassName('index_box');
  for(let i of temp){
    i.classList.remove('hidden');
  }
  document.querySelector('.hidden_page_element').classList.remove('hidden_page_element');
});

var modal = document.querySelector(".hidden");
var overlay = document.querySelector(".overlay");
var inp_title = document.querySelector(".input_title");
var con_box = document.getElementById("heading_box");
var object_arry = [];
var count = 0;
var plus_icon01 = [];
var trash_icon01 = [];

var modal2 = document.querySelector(".hidden2");
var inp_iteam = document.querySelector(".input_iteam");
var iteam_btn = document.querySelector(".add_button2");
var temp_id;

function Obj_Create(unique_id, title) {
  this.unique_id = unique_id;
  this.title = title;
  task_obj = {};
}
function add_ele() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function add_ele2() {
  modal2.classList.remove("hidden2");
  overlay.classList.remove("hidden");
}

var task_plus1 = document.querySelector('.index_plus');
task_plus1.addEventListener('click', add_ele);

function closer() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  inp_title.value = "";
}

function closer2() {
  modal2.classList.add("hidden2");
  overlay.classList.add("hidden");
  inp_iteam.value = "";
}

function plus_icon2(id) {
  temp_id = id;
  add_ele2();
  iteam_btn.addEventListener('click', function () {
    if (inp_iteam.value == "") {
      closer2();
    }
    else {
      var temp_task = document.getElementsByClassName('task_box');
      for (let k = 0; k < temp_task.length; k++) {
        if (temp_task[k].classList[1] == temp_id) {
          var p_tag = document.createElement('p');
          p_tag.classList.add('tasks');
          p_tag.textContent = inp_iteam.value;
          temp_task[k].appendChild(p_tag);
          p_tag.addEventListener('click', function (temp_obj){
            temp_obj.target.style.textDecoration="line-through";
          });
        }
      }
     
      closer2();
    }
  });
}

function trash_icon2(id) {
  var temp_box = document.getElementsByClassName('index_box');
  for (let i of temp_box) {
    if (i.classList[1] == id) {
      con_box.removeChild(i);
      count--;
    }
  }
  if(con_box.children.length==0){
    document.querySelector('.no_item').classList.remove('hidden');
  }
}

function new_page_fun(para){
  document.querySelector('.heading').classList.add('hidden');
  var temp=document.getElementsByClassName('index_box');
  for(let i of temp){
    if(i.classList[1]!=para.target.classList[1]){
      i.classList.add('hidden');
    }
    else{
      i.classList.add('hidden_page_element');
      module_13.style.display='flex';
      new_page_title.textContent= `${i.childNodes[0].textContent}`;
      console.log();
    }
  }
}

document.querySelector(".add_button").addEventListener("click", () => {
  if (inp_title.value == "") {
    closer();
  } else {
    var unique_id = new Date().valueOf();
    var box_obj = inp_title.value; 
    var temp_title = box_obj;
    box_obj = new Obj_Create(unique_id, temp_title); 
    object_arry.push(box_obj); 

    var box_div = document.createElement("div"); 
    box_div.classList.add("index_box", unique_id); 

    var p_tag = document.createElement("p"); 
    p_tag.classList.add("title", unique_id); 
    p_tag.textContent = inp_title.value; 
    p_tag.addEventListener('click', function (obj_new_page){
      new_page_fun(obj_new_page);
    });

    box_div.append(p_tag); 
    
    box_div.append(document.createElement("hr")); 

    var task_box = document.createElement("div"); 
    task_box.classList.add("task_box", unique_id); 
    box_div.append(task_box); 
    
    var task_icon1 = document.createElement("div"); 
    task_icon1.classList.add("task_icon");
    
    var task_plus1 = document.createElement("i"); 
    task_plus1.classList.add("fas", "fa-plus-circle", "task_plus", unique_id);
    task_icon1.append(task_plus1); 

    var task_trash1 = document.createElement("i"); 
    task_trash1.classList.add("fas", "fa-trash-alt", "task_trash", unique_id);
    task_icon1.append(task_trash1); 
    box_div.append(task_icon1); 

    con_box.append(box_div); 

    plus_icon01 = document.getElementsByClassName("task_plus");
    plus_icon01[count].addEventListener('click', function (count) {
      plus_icon2(count.target.classList[3]);
    });

    trash_icon01 = document.getElementsByClassName("task_trash");
    trash_icon01[count].addEventListener('click', function (count) {
      trash_icon2(count.target.classList[3]);
    });
    count++;
    if(con_box.children.length>=0){
      document.querySelector('.no_item').classList.add('hidden');
    }
    closer(); 
  }
});
