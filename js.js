   var ul = document.querySelector("ul");

//*************** ADDING NOTES TO THE UL
   document.getElementById("add-btn").addEventListener("click",
   function(e){
      e.preventDefault();
      var addInput = document.getElementById("add-input");

      if (addInput.value !== '') {
         
      var li = document.createElement("li"),
         firstP = document.createElement("p"),
         secondP = document.createElement("p"),
         firstIcon = document.createElement("i"),
         secondIcon = document.createElement("i"),
         input = document.createElement("input");

         firstIcon.className = "fa fa-pencil-square-o";
         secondIcon.className = "fa fa-times";
         input.className = "edit-note";
         input.setAttribute('type','text');

         firstP.textContent = addInput.value;

         secondP.appendChild(firstIcon);
         secondP.appendChild(secondIcon);

         li.appendChild(firstP);
         li.appendChild(secondP);
         li.appendChild(input);
         ul.appendChild(li);

         addInput.value = '';
      }
   })

   //*****************EDITING AND DELETING NOTES */

   ul.addEventListener('click', function(e){
      if(e.target.classList[1] === "fa-pencil-square-o")
      {
         var parentPar = e.target.parentNode;
         parentPar.style.display = "none";

         var note = parentPar.previousElementSibling;
         var input = parentPar.nextElementSibling;

         input.style.display = "block";
         input.value = note.textContent;

         input.addEventListener("keypress", function(e){
            if(e.keyCode === 13){
               if(input.value !== ''){
               note.textContent = input.value;
               parentPar.style.display = "block";
               input.style.display = "none";
               }
               else{
                  var li = input.parentNode;
                  li.parentNode.removeChild(li);
               }
            }
         })
      }
   })

   ul.addEventListener('click',function(e){
      if(e.target.classList[1] === "fa-times"){
         var parentpar = e.target.parentNode;
         var input = parentpar.nextElementSibling;
         var li = input.parentNode;
         li.parentNode.removeChild(li);
      };
   })

//////************************HIDE LISTS function */

var hide = document.getElementById('hide');
hide.addEventListener('click',function(){
   var label = document.querySelector('label');
   if(hide.checked)
   {  
      label.textContent = "Unhide notes"
      ul.style.display = "none";
   }
   else{
      label.textContent = "Hide notes"
      ul.style.display = "block";
   }
})

///*******************SEARCH FILTER */

var searchInput= document.querySelector('#search-note input');

searchInput.addEventListener('keyup', function(e){

   var searchChar = e.target.value.toUpperCase();
   
   var notes = ul.getElementsByTagName('li');

   Array.from(notes).forEach(function(note){
      var parText = note.firstElementChild.textContent;

      if(parText.toUpperCase().indexOf(searchChar) !== -1){
         note.style.display = 'block';
      }
      else{
         note.style.display = 'none';
      }
   })
})