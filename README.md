# Angular PortFolio

Ce projet à été généré avec [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

Le premier commit de ce projet fait suite à une veille et une mise en place antérieure à la création de ce dépôt.

## Objectif

Fournir un boilerplate angular utilisable pour divers projets. Un Portfolio est utilisé ici en exemple.

---

Le module ui-router permet de structurer le contenu avec une URL composée :

- http://localhost/main/dashboard

- La partie "main" de l'URL traite la structure globale du site incluant 2 directives pour le header et la sidebar
- La partie "dashboard" (ou tout autre page) traite les différents contenus.

L'utilisation du module 'ocLazyLoad' permet de ne charger que les scripts indispensables à chaque partie du site.
On peut donc charger des scripts 'globaux' pour la partie main, et des scripts différents sur chaque autre page.

Le problème d'Angular en tant que SPA (Single Page Application) est qu'il déclare tous les scripts utilisables par
le site sur la page d'index, même s'ils sont rarement utilisés, ce qui alourdit considérablement le projet.

L'utilisation des URLs composées avec la pratique du lazyLoad permet de structurer l'utilisation des scripts et de
séparer les différentes couches afin de pouvoir faire évoluer la future application plus efficacement.

## Build & Développement

Lancez `grunt` ou `grunt build` pour la génération du projet et `grunt serve` pour lancer un serveur web de test.

## Testing

La commande `grunt test` lancera les tests unitaires avec karma.
