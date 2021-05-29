1. Pourquoi doit-on projeter des données cartographiques?

   Il est important de projeter des données sur une carte car cela permets de contextualiser l'information et surtout de rajouter une couche de compréhension de celle-ci.

   La projection est une problématique bien connu à travers les âges car la terre, ronde, devant être mise sur un plan à plat amène la complication des proportions 

   

   

2. Qu'est ce qu'Open street map?

   OpenStreetMap est un service web proposant une cartographie du monde en license libre et en open source pour pourvoir s 'approvisionner' en différente partie du monde pour l'utilisation de cartes dans des site web.

   

3. Quelles fonctions D3 sont spécifiques à la cartographie?

   geopath(), geomercator(), geoOrthographic(), geotranform(), projection()

   

4. À quoi sert le format topojson? En quoi est-il différent du geojson?

   Le geojason est assez lourds premièrement. Le but du topojson est de réduire les doublons présents dans le geoJason (comme par exemple les points en commun sur une frontière entre 2 pays)

   

5. À quoi sert `turf`? Décrivez ce que font trois fonctions de cette libraire

   Turf sert à faire des opérations / des calcules sur des données cartographique (coordonnées). 

   distance=> pour calculer la distance entre 2 points

   area() => le même mais calculer une surface 

   union() => pour faire une union entre 2 areas (2 polygones) pour donner, comme le système mathématique des ensembles, un "in".

   circle() => pour avoir une area de t kilomètres autour d'un point (rayon)

   

   