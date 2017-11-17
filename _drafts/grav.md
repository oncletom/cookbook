# Grav

Générateur de sites statiques en PHP
Répond à l'envie de site statique sans base de données
PHP car simple à installer sur hébergement classique (type mutualisé chez OVH)
Propose admin pour l'utilisateur final

## Installation

### En local

MAMP ou (tuto en ligne)[https://learn.getgrav.org/basics/installation]

### En ligne

FTP (SCP) pour OVH

Heroku pour staging, sync avec github 

1. créer le repo heroku
1. activer le lien Heroku/GitHub
1. cocher "auto deploy"

--> regarder les [Deploy Button][] d'Heroku

À partir de là :

- les modifications se font sur GitHub
- les changements sont répercutés sur la plate-forme d'hébergement (oVH, Heroku etc.)

## configuration de base

### L'admin en Français

![illustrer le minimum à remplir pour avoir un site fonctionnel](#)

Défini par l'utilisateur : clique sur le nom de l'utilisateur, puis choisir la langue

### votre site

Dans `Configuration` / `Site`

* Titre du site
* Langue par défaut
* Auteur par défaut  
* E-mail par défaut

### choisir un thème

![interface de choix de thème pour trouver un truc](#)


## contenus

(ces opérations se font depuis l'interface d'administration)

### pages

1. titre
1. nom du dossier
1. type de template (voir [choisir un thème](#))
1. arborescence (voir [arborescence](#))

### arborescence

Comment tu disposes tes contenus dans le site.

(des conseils ?)



[Deploy Button]: https://devcenter.heroku.com/articles/heroku-button
