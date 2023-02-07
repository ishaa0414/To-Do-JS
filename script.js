document.getElementById('plusButton').addEventListener("click",function(){
 document.getElementById('popup').style.display="flex";  
 
})
document.getElementById('close').addEventListener("click",function(){
    document.getElementById('popup').style.display="none";   
})
document.getElementById('add').addEventListener("click",function(){
    document.getElementById('popup').style.display="none";   
})

function dynamicId(){
    const did=`id-${+new Date()}`
    return did;
}

let listNameInput=document.getElementById('listNameInput')



document.getElementById('add').addEventListener("click",function(){
    let listName=listNameInput.value;
let row=document.getElementById('rows')
const cols=document.createElement("div");
cols.id=dynamicId();
cols.style.border="1px solid orange";
cols.style.borderRadius="10px";
cols.style.height="300px";
cols.style.width="200px";
cols.style.backgroundColor="white";
cols.style.marginTop="5%";
cols.style.marginLeft="5%";
row.appendChild(cols);

cols.innerHTML=`<h1>${listName}</h1><hr><i class="fa fa-plus-circle" style="font-size:24px" id="addInternalElements"></i> <i class="fa fa-trash"  id="deleteInternalElements" style="font-size:24px;"></i>`;
let deleteInternalElements=document.getElementById('deleteInternalElements')
deleteInternalElements.id=dynamicId();
deleteInternalElements.addEventListener("click",function(){
    cols.remove();
})
let addInternalElements=document.getElementById('addInternalElements');
addInternalElements.id=dynamicId();
addInternalElements.addEventListener("click",function(){
let popup2=document.getElementById('popup2')
    document.getElementById('popup2').style.display="flex"; 
})


document.getElementById('close2').addEventListener("click",function(){
    document.getElementById('popup2').style.display="none"; 
})
let list=document.getElementById("list");
list.id=dynamicId();
let add2=document.getElementById('add2')
add2.id=dynamicId();
add2.addEventListener("click",function(){
    let listNameInput2=document.getElementById('listNameInput2');
    let value=listNameInput2.value;
    value.id=dynamicId();
    const li=document.createElement("li");
    li.id=Date.now();
   li.innerHTML=`${value}  <button > Mark Done </button>`
cols.id=dynamicId();
    list.appendChild(li);
    cols.appendChild(list);
   
})
})