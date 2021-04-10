let count=1;
function addNote()
{
    let note=document.getElementById("note").value;
    let divId=document.getElementById("notes-body"); //Parent Div
   let div=document.createElement("div");
   div.setAttribute("id",count);

   if(note.length>=180)
   {
    let substr=note.substring(0,180);
    let substr1=note.substr(180);
    div.innerHTML=`<p>
            <span>Note</span>
            <span>${count}</span>
            </p>
            <p class="text-note" id="NoteP">${substr}...</p>
            <a class="detail-button" onclick="popup(this.parentElement,${substr1})">View Detail</a>`;
   }
   else
   {
    div.innerHTML=`<p>
    <span>Note</span>
    <span>${count}</span>
    </p>
    <p class="text-note" id="NoteP">${note}</p>
    <a class="detail-button">View Detail</a>`;
   }
    divId.append(div);
    count++;

   //popup
//    var detailButton = document.getElementsByClassName("detail-button");
//    for (var i = 0; i < detailButton.length; i++) 
//     {
//         detailButton[i].addEventListener('click', popup); 
//     }

    
    
 
}
//pop up function
function popup(parentDiv, st)
{
    console.log("hai")
    document.getElementById("popup-div").classList.remove("hide");


    let NoteP=parentDiv.childNodes[2].innerHTML; //to get 3rd element in the div 
    console.log(parentDiv)
    // console.log(substr1)











    // let divId=document.getElementById("popup-div");
    // let div=document.createElement("div");
    // if(note.length>=180)
    // {
    //     // let substr=note.substring(0,180);
    //     // let substr1=note.substr(180);
    //     let fullString=substr+substr1;
    //     console.log(fullString);
    
    //     div.innerHTML=`<div class="overlay">
    //     <div class="content">
    //         <div class="close-btn" onclick="closeFun()">&times;</div>
    //         <p></p>${fullString}</div></div>`;
    // }
    // else
    // {
    //     console.log("hai")
    //     div.innerHTML=`<div class="overlay">
    //     <div class="content">
    //         <div class="close-btn" onclick="closeFun()">&times;</div>
    //         <p></p>${NoteP}</div></div>`;
    // }
 

    // divId.appendChild(div);
    
}
//close btn
function closeFun()
{
    document.getElementById("popup-div").classList.toggle("hide");
}


