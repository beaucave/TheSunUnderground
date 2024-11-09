---
layout: page
title: Identities
permalink: /identities
---
<head>
  <script type="text/javascript" src="./live/js/index.js"></script>
  <link rel="stylesheet" href="../assets/css/main.css">
</head>

PLACEHOLDER: *This page will contain brief summaries of the 12 Identities, and links to a downloadable character sheet.*

<a href="../assets/CharSheet_v1.0.0.pdf" target="_blank">Click here</a> to download a blank character sheet. 

<input type="text" id="myInput" onkeyup="searchTable('identityTable')" placeholder="Search identities...">
### *Identities*

<table id="identityTable">
  <tr class="header">
    <th>Name</th>
    <th>Description</th>
    <th>Primary Color</th>
    <th>Secondary Color</th>
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