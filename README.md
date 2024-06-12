# Activité Pratique N° 4 - Angular - Spring
## Première Partie
"FirstApp" est un exemple simple pour illustrer les bases d'Angular. 

## Deuxième Partie - Application de Gestion de Produits Angular

## Introduction
L'objectif de ce projet est de créer une application web Angular pour gérer les produits. Cette application permettra aux utilisateurs d'ajouter, de modifier, de supprimer et de visualiser des produits dans une interface conviviale.

## Technologies Utilisées
- Angular : Framework JavaScript côté client pour la construction d'applications web.
- TypeScript : Langage de programmation pour le développement d'applications Angular.
- HTML et CSS : Langages de balisage et de style pour la conception de l'interface utilisateur.
- JSON Server : Utilisé pour simuler une API REST en utilisant un fichier JSON comme base de données.

## Intégration de la Base de Données
Dans ce projet, la base de données est simulée à l'aide de JSON Server. JSON Server permet de créer rapidement une API RESTful à partir d'un fichier JSON. Nous avons utilisé un fichier JSON contenant les détails des produits, tel que `db.json`, comme source de données pour notre application.

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/8218c8b2-124f-4a09-8d11-b1a412bc46fa)


Le fichier `db.json` contient une liste de produits avec des attributs tels que l'ID, le nom, la prix et un champs checked. JSON Server expose automatiquement ces données via des points de terminaison RESTful tels que `/products` pour effectuer des opérations CRUD (Create, Read, Update, Delete).

#### Démarrage du Serveur JSON Server
Pour démarrer le serveur JSON Server et simuler notre API REST, nous utilisons la commande `json-server -w data/db.json -p 8089`. Cette action lance JSON Server en mode surveillance du fichier `db.json`, permettant aux données d'être accessibles à l'adresse `http://localhost:8089/products`. Cela nous offre une base de données simulée sans nécessiter une installation complexe de base de données.

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/f6f34d2c-2f18-48ee-af15-0de2f6bf7764)

Après avoir mis en œuvre l'utilisation de l'objet Observable et de la méthode subscribe avec la fonction next, nous avons réussi à intégrer avec succès la récupération dynamique de la liste des produits dans notre application Angular. L'Observable fourni par HttpClient nous permet de faire des requêtes HTTP de manière asynchrone vers notre API JSON Server. En souscrivant à cet Observable et en définissant une fonction next, nous pouvons réagir à chaque nouvelle émission de données en mettant à jour la liste de produits dans notre composant ProductsComponent.

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/2a484c2a-a40e-4b93-98a4-56ca7ab92eec)


## Progression Actuelle
À ce stade, l'intégration de la base de données via JSON Server est opérationnelle. Nous sommes en mesure de récupérer, d'ajouter, de modifier et de supprimer des produits dans notre application Angular en utilisant les points de terminaison fournis par JSON Server.

## Prochaines Étapes
1. Finaliser les fonctionnalités restantes de l'application, telles que la recherche de produits et la gestion des stocks.
2. Effectuer des tests pour assurer la stabilité et la fiabilité de l'application.
3. Améliorer l'interface utilisateur pour une meilleure expérience utilisateur.
4. Déployer l'application sur un serveur en ligne pour une utilisation publique.

## Conclusion
L'intégration de la base de données via JSON Server facilite le développement de notre application de gestion de produits Angular en fournissant une API RESTful avec une persistance de données basée sur un fichier JSON. Cette approche nous permet de développer et de tester notre application sans avoir besoin d'une base de données réelle, accélérant ainsi le processus de développement.
