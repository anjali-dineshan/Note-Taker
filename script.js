function addNote()
{
    let note=document.getElementById("note").value;
    let divId=document.getElementById("notes-body");

   let div=document.createElement("div");
   divId.append(div);
    let count=1;
   div.innerHTML=`<p>
   <span>Note</span>
   <span>${count}</span>
   </p>
   <p class="text-note">${note}</p>
   <a class="detail-button">View Detail</a>`
   count=count+1;

   //popup
   var detailButton = document.getElementsByClassName("detail-button");
   console.log(detailButton)
   for (var i = 0; i < detailButton.length; i++) 
    {
        detailButton[i].addEventListener('click', popup); 
    }
}
//pop up function
function popup()
{
    document.getElementById("popup-div").classList.remove("hide");

    let note=document.getElementById("note").value;
    let divId=document.getElementById("popup-div");
    let div=document.createElement("div");
    divId.appendChild(div);
    div.innerHTML=`<div class="overlay">
                        <div class="content">
                            <div class="close-btn" onclick="closeFun()">&times;</div>
                            <p></p>${note}</div></div>`;

}
//close btn
function closeFun()
{
    document.getElementById("popup-div").classList.toggle("hide");
}

