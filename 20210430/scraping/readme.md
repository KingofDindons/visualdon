## Approche "Scraping"

Choix de la méthode:  "à la main "  donc "Exécuter de la manipulation DOM dans la console du navigateur" car c'est un one shot et que ça ne demande donc pas d'automatisation spécial. 



1) Changer le cl pour charger des classes. 

2) faire itération sur élément parent qui contient toute nos informations voulu (ici price, title et rating)

3) refaire une itération sur les élément pris au point 2 pour avoir chaque élément par classe.

4) Retourner le tout dans un objet

5) "Stringifier" l'objet 