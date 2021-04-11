let count=1;
function addNote()
{
    let note=document.getElementById("note").value; //input value
    let divId=document.getElementById("notes-body"); //Parent Div

   let div=document.createElement("div");
   if(note.length>=180)  // content length morethan 180(more than 2 line)
   {
    let substr=note.substring(0,180); 
    let substr1=note.substr(180);
    div.innerHTML=`<p>
                        <span>Note</span>
                        <span>${count}</span>
                    </p>
                    <p class="text-note" id="NoteP">
                        <span>${substr}...</span>
                        <span class="hidden-str">${substr1}</span>
                    </p>
                    <a class="detail-button" onclick="popup(this.parentElement)">View Detail</a>`;
   }
   else
   {
    div.innerHTML=`<p>
                     <span>Note</span>
                     <span>${count}</span>
                    </p>
                     <p class="text-note" id="NoteP">${note}</p>
                     <a class="detail-button" onclick="popup1(this.parentElement)">View Detail</a>`;
   }
    divId.append(div);
    count++;
 
}
//pop up function for long input content
function popup(parentDiv)
{

    document.getElementById("popup-div").classList.remove("hide"); // removing the class hide -closeFun()

    let Ptag=parentDiv.childNodes[2]; //to get 3rd element in the parent div(Accessing p tag)

    //accessing child elements in  p tag 
    let span1=Ptag.children[0].innerHTML; 
    let substring = span1.slice(0, -3); //remove ... from the end
    let span2=Ptag.children[1].innerHTML; 

    let fullString=substring+span2;

    let divId=document.getElementById("popup-div");
    let div=document.createElement("div");
    
    div.innerHTML=`<div class="overlay">
    <div class="content">
        <div class="close-btn" onclick="closeFun()">&times;</div>
        <p>${fullString}</p></div></div>`;

    divId.appendChild(div);
    
}
//popup function for short input content
function popup1(parentDiv)
{
    document.getElementById("popup-div").classList.remove("hide"); // removing the class hide -closeFun()

    let NoteP=parentDiv.childNodes[2].innerHTML; //to get 3rd element content in the parent div(p tag content);
    let divId=document.getElementById("popup-div");
    let div=document.createElement("div");
    
    div.innerHTML=`<div class="overlay">
    <div class="content">
        <div class="close-btn" onclick="closeFun()">&times;</div>
        <p>${NoteP}</p></div></div>`;

    divId.appendChild(div);
}
//close btn
function closeFun()
{
    document.getElementById("popup-div").classList.toggle("hide");
     
}


