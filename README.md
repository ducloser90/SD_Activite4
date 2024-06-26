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

## Intégration de la Notion de Service

Pour améliorer la structure et la maintenabilité de notre application, nous avons intégré la notion de service en utilisant Angular. En encapsulant la logique des requêtes HTTP au sein d'un service dédié, `ProductService`, nous avons centralisé les opérations de récupération et de mise à jour des produits. Ce service est injecté dans notre composant `ProductsComponent`, permettant ainsi de séparer les préoccupations et de faciliter les tests et la réutilisation du code. 

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/50434131-f96b-4ae8-92b5-8b88965a2ec2)

## Intégration du Modèle

L'utilisation de **ReactiveFormsModule** dans notre application Angular est cruciale pour créer et gérer des formulaires de manière réactive et robuste. En intégrant **ReactiveFormsModule** dans notre `AppModule`, nous avons accès à un ensemble puissant de fonctionnalités de gestion des formulaires, telles que la liaison bidirectionnelle des données entre les champs de formulaire et le modèle, ainsi que la validation des données utilisateur en temps réel. Cette approche permet une synchronisation fluide des données entre l'interface utilisateur et notre application, tout en offrant une gestion avancée des états et des erreurs de formulaire. En définissant des validations telles que les champs requis, les longueurs minimales ou maximales et les expressions régulières, nous assurons une saisie de données fiable et conforme aux exigences métier. Ainsi, **ReactiveFormsModule** joue un rôle crucial dans l'amélioration de la convivialité et de la fiabilité de notre application Angular.

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/421c9a80-ab83-4ec6-8e5a-e89197259cfd)

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/22ccdab4-b055-4893-b526-eb8aa4e9f3f6)

## La pagination

En ce qui concerne la gestion des données, nous avons également implémenté la pagination avec JSON Server pour gérer efficacement de grandes listes de produits. JSON Server prend en charge la pagination via des paramètres de requête tels que `_page` et `_per_page`. Par exemple, une requête à `http://localhost:8089/products?_page=1&_per_page=3` récupère les 3 premiers produits de la première page. Cette fonctionnalité de pagination permet de diviser les résultats en pages plus petites, améliorant ainsi la performance et l'expérience utilisateur lors de la navigation dans de grandes listes de données.


![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/49ba56cf-8b4f-48de-958d-f296afe55cb6)

## Editer un produit

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/c750ecc9-751f-4c01-a666-47315513f601)

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/fd93bfa3-8df0-451a-8e5c-d151ac4d70bf)

## L'ajout de l'option `Loading Spinner`

![Capture d'écran 2024-06-15 112930](https://github.com/ducloser90/SD_Activite4/assets/167253342/bd851550-0a05-478f-a178-ab4868f70fab)

## Authentication

Nous avons créé une page de login qui permet aux utilisateurs de saisir leurs informations d'identification.

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/e7ff3516-9fa7-46d6-a66e-1bdbb83510b3)

Nous avons renforcé la sécurité en implémentant des guards, ainsi qu'une authentification basée sur JWT (JSON Web Token) pour gérer l'autorisation des utilisateurs. L'authentification par JWT utilise des tokens sécurisés pour identifier les utilisateurs authentifiés après une connexion réussie. Nous avons intégré un service d'authentification qui gère le processus de connexion, stocke les tokens JWT et assure leur persistance entre les sessions. Les guards sont utilisés pour protéger les routes spécifiques de l'application. Par exemple, en ajoutant `canActivate: [AuthenticationGuard]` dans les définitions de routes, nous nous assurons que seuls les utilisateurs authentifiés peuvent accéder à certaines parties de l'application. 

![image](https://github.com/ducloser90/SD_Activite4/assets/167253342/f2a36513-b33b-4fcc-af2d-0af79261463a)

Ces mesures de sécurité garantissent que seules les personnes autorisées peuvent interagir avec les fonctionnalités sensibles de l'application, renforçant ainsi la protection et la confidentialité des données.

Par exemple, un utilisateur `user1` qui n'est pas autorisé ne pourra pas éditer ou supprimer un produit.

![Capture d'écran 2024-06-15 165724](https://github.com/ducloser90/SD_Activite4/assets/167253342/373a8596-b93f-4f48-bf62-0c8748c81596)

## Troisième Partie : Spring Angular





