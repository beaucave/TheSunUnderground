---
layout: page
title: Identities
permalink: /identities/
---

PLACEHOLDER: *This page will contain brief summaries of the 12 Identities, and links to a downloadable character sheet.*

[Click here](https://github.com/beaucave/TheSunUnderground/blob/3f8ee3db2650f4a81f280ce85d0643c60358ad50/assets/CharSheet_v1.0.0.pdf) to download a blank character sheet. 

### *Identities*

<!-- <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for abilities.."> -->

<table id="myTable">
  <tr class="header">
    <th>Name</th>
    <th>Description</th>
    <th>Primary Color</th>
    <th>Secondary Color</th>
    <!-- <th style="width:60%;">Name</th>
    <th style="width:40%;">Color</th> -->
  </tr>
  {% for identity in site.data.identity %}
    <tr>
      <td>{{ identity.name }}</td>
      <td>{{ identity.desc }}</td>
      <td>{{ identity.primary }}</td>
      <td>{{ identity.secondary }}</td>
    </tr>
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
