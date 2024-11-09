---
layout: page

title: Self-Control
permalink: /abilities/self-control
nav_exclude: true
---
<head>
  <script type="text/javascript" src="../live/js/index.js"></script>
  <link rel="stylesheet" href="../assets/css/main.css">
</head>
{% for ability in site.data.ability %}
{% if ability.name == "Self-Control"%}

# {{ ability.name }}
*color: {{ ability.color }}*

> {{ ability.desc }}

<table>
  <tr>
    <th>Rank 1</th>
    <td>{{ ability.desc }}</td>
  </tr>
  <tr>
    <th>Rank 2</th>
    <td>{{ ability.desc2 }}</td>
  </tr>
  <tr>
    <th>Rank 3</th>
    <td>{{ ability.desc3 }}</td>
  </tr>
</table>

  {% endif %}
  {% endfor %}
