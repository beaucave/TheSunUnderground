---
layout: page
title: Abilities

permalink: /abilities/
nav_include: yes
nav_order : 3
---
<head>
  <script type="text/javascript" src="../live/js/index.js"></script>
  <link rel="stylesheet" href="../assets/css/main.css">
</head>

# Abilities

TODO: *This page will contain a list of all character abilities that can be sorted and filtered.*

Click the name of an ability to view its advancement options. 

<input type="text" id="myInput" onkeyup="searchTable('abilityTable')" placeholder="Search abilities...">


<table id="abilityTable">
  <tr class="header">
    <th>Name</th>
    <th>Color</th>
    <th>Description</th>
    <th style="display:none;">Tags</th>
  </tr>
  {% for ability in site.data.ability %}
  {% if ability.color != "ascendant"%}
    <tr>
      <td>
        <button id="modal-button">{{ ability.name }}</button>
      </td>
      <td>{{ ability.color }}</td>
      <td>{{ ability.desc }}</td>
      <td style="display:none;">{{ ability.tags }}</td>
    </tr>
  {% endif %}
  {% endfor %}
</table>
