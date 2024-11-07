---
layout: page
title: Abilities
permalink: /abilities/
---

TODO: *This page will contain a list of all character abilities that can be sorted and filtered.*

<!-- <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for abilities.."> -->

<table id="myTable">
  <tr class="header">
    <th>Name</th>
    <th>Color</th>
    <th>Description</th>
    <!-- <th style="width:60%;">Name</th>
    <th style="width:40%;">Color</th> -->
  </tr>
  {% for ability in site.data.ability %}
  {% if ability.color != "ascendant"%}
    <tr>
      <td>{{ ability.name }}</td>
      <td>{{ ability.color }}</td>
      <td>{{ ability.desc }}</td>
    </tr>
  {% endif %}
  {% endfor %}
</table>

<script>
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
</script>
