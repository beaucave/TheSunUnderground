---
layout: page
title: Abilities
permalink: /abilities
---
<head>
  <script type="text/javascript" src="./live/js/index.js"></script>
  <link rel="stylesheet" href="../assets/css/main.css">
</head>

TODO: *This page will contain a list of all character abilities that can be sorted and filtered.*

Click the name of an ability to view its advancement options. 

<input type="text" id="myInput" onkeyup="searchTable('abilityTable')" placeholder="Search abilities...">

<table id="abilityTable">
  <tr class="header">
    <th>Name</th>
    <th>Color</th>
    <th>Description</th>
  </tr>
  {% for ability in site.data.ability %}
  {% if ability.color != "ascendant"%}
    <tr>
      <td>
        <!-- {{ ability.name }} -->
          <button id="myBtn">{{ ability.name }}</button>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
      </td>
      <td>{{ ability.color }}</td>
      <td>{{ ability.desc }}</td>
    </tr>
  {% endif %}
  {% endfor %}
</table>