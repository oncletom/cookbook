---
layout: svg
title: SVG - Passage au vectoriel
permalink: /SVG/intro
extra_css: svg
exclude: true
---

# SVG

Pendant des années les images que l'on affichait étaient des bitmaps. Des jpg, png et autres formats ***à écrire***


## Construire un SVG

SVG est en fait un fichier XML avec le même type d'arborescence.

### Base de code

Pour écrire un SVG il faut toujours avoir les éléments suivants : 

```
<svg xmlns="http://www.w3.org/2000/svg">

</svg>
```

Un fichier SVG est en fait un fichier XML, d'où le ``xmlns="http://www.w3.org/2000/svg``.


### Formes de base

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="2">
  <line x1="0" x2="100" stroke-width="1" stroke="black" />
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg">
<line x1="0" x2="100" stroke-width="1" stroke="black" />
</svg>
```
Une line de 100px de long, 1 de haut, noire

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <rect width="200" height="200" stroke-width="5" stroke="red" fill="green" />
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
<rect width="200" height="200" stroke-width="2" stroke="red"  fill="yellow" />
</svg>
```
Un rectangle de 200x200 (oui ça fait un carré ça) avec un contour rouge de 5px et un remplissage vert

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
  <circle  cx="20" cy="20" r="20" />
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
  <circle  cx="20" cy="20" r="20" />
</svg>
```
Un rond qui fait 20px de rayon (donc 40 de diamètre). Le centre est positionné à 20px du top:0, et à 20px du left:0.

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
  <ellipse cx="50" cy="60" rx="50" ry="5"/>
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <ellipse cx="50" cy="70" rx="50" ry="5"/>
</svg>
```
Une ellipse qui fait 50px de rayon (donc 100 de diamètre) sur la largeur et 5px de rayon (10 de diamètre) sur la hauteur. Le centre x de la forme est positionnée à 50px du haut, le centre y est positionnée à 60px de la gauche.

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="130">
  <path d="M20,80 Q40,100 50,50 T90,110" fill="none" stroke="blue" stroke-width="5"/>
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="130">
  <path d="M20,80 Q40,100 50,50 T90,110" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

La forme la plus utilisée lors de la génération d'un SVG depuis un logiciel de type Sketch ou Illustrator.<br>
Le fonctionnement sera détaillé un peu plus loin.


### Attributs applicables aux formes

- ```fill``` : remplissage de la forme
- ```fill-opacity``` : opacité du remplissage de la forme
- ```stroke``` : couleur de contour
- ```stroke-width``` : épaisseur du contour
- ```stroke-opacity``` : opacité du contour
- ```stroke-dasharray``` : tableau de valeurs des pointillés  du contour. Ex. : ```stroke-dasharray:4,5,8,5``` = pointillé de 4px, espace de 5px, pointillé de 8px, espace de 5px
- ```stroke-dashoffset``` : décale le début des pointillés


### Transformations

Comme en CSS on peut appliquer des transformations : 

- ```rotate```
- ```translate```
- ```scale```
- ```skewX``` et ```skewY```

/!\ Par contre la transformation ne s'applique pas que à la forme mais bien à toute la zone de dessin.

## Exporter un SVG

### Depuis Sketch

### Depuis Illustrator

### SVG Optimizer

Cela permet d'optimiser le(s) SVG(s) que l'on lui envoie avec un certain nombres de règles configurables.<br>
Il s'agit à la base d'un [package Node](https://github.com/svg/svgo), mais il a été décliné en [version web](https://jakearchibald.github.io/svgomg/), en tâches [Grunt](https://github.com/sindresorhus/grunt-svgmin), [Gulp](https://github.com/ben-eb/gulp-svgmin), etc.

À tester !

## Insérer un SVG

### Comme une image

```<img src="mon.svg" alt="Un SVG qu'il est beau">```

### Comme un background-image

```background: url(mon.svg);```

**=> Ces 2 derniers types d'insertion ne permettent pas de les modifier à posteriori**

# A traiter

Chrome taille par défaut 300 x 150