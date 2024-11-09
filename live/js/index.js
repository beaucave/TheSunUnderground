function searchTable(myTable){
  var input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById(myTable);
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    tds = tr[i].getElementsByTagName("td")
    var foundInRow = false
    for(j=0; j<tds.length; j++){
    if(foundInRow)
        continue
    td = tr[i].getElementsByTagName("td")[j];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        foundInRow = true
        tr[i].style.display = "";
      }

      else {
        tr[i].style.display = "none";
      }
    }      
    }
  }
}


// Get the modal
var modal = document.getElementById("myModal");
var modal_btn = document.getElementById("myBtn");
var modal_btn_text = modal_btn.textContent || modal_btn.innerText;
var modal_span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modal_btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modal_span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
