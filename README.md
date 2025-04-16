# NgPoke

**NgPoke** est une application Angular conçue pour afficher et interagir avec des données issues de l’univers Pokémon. Elle permet d'explorer des fiches Pokémon de manière dynamique grâce à l'utilisation de l'API PokéAPI, offrant une interface fluide et moderne basée sur Angular.

---

## 🧰 Technologies utilisées

- **Angular 15+**
- **TypeScript**
- **SCSS**
- **RxJS**
- **PokéAPI** – API publique utilisée pour récupérer les données des Pokémon

---

## 🚀 Fonctionnalités principales

- Recherche de Pokémon via une barre de recherche.
- Affichage des fiches détaillées (type, taille, poids, image, etc.).
- Navigation responsive et interactive.
- Composants Angular modulaires pour une meilleure maintenabilité.
- Chargement asynchrone des données via des Observables.

---

## 📦 Prérequis

Avant de commencer, assurez-vous d’avoir installé les outils suivants :

- [Node.js](https://nodejs.org/) (version 16 ou plus recommandée)
- [Angular CLI](https://angular.io/cli)

---

## ⚙️ Installation

Clonez le dépôt puis installez les dépendances :

```bash
git clone <repository-url>
cd NgPoke-dev
npm install
```

---

## ▶️ Lancer le serveur de développement

```bash
ng serve
```

Rendez-vous ensuite sur [http://localhost:4200](http://localhost:4200). L’application se rechargera automatiquement en cas de modifications.

---

## 🏗️ Génération de composants

Pour générer un nouveau composant :

```bash
ng generate component nom-du-composant
```

---

## 🛠️ Build du projet

Pour compiler l’application pour la production :

```bash
ng build
```

Le projet sera compilé dans le dossier `dist/`.

---

## ✅ Tests unitaires

Lancer les tests avec Karma :

```bash
ng test
```

---

## 🔍 Tests end-to-end

Angular CLI ne fournit plus de framework e2e par défaut. Vous pouvez ajouter Cypress ou Playwright si besoin :

```bash
ng add @cypress/schematic
```

---

## 📚 Ressources supplémentaires

- [Documentation Angular](https://angular.io/docs)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [PokéAPI](https://pokeapi.co/)

---

## 👨‍💻 Auteur

Projet de démonstration réalisé dans un cadre pédagogique.
