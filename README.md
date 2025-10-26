# LexicaLearn

LexicaLearn est une application TypeScript destinée à faciliter l'apprentissage du vocabulaire et la mémorisation par des sessions interactives (flashcards, QCM, répétition espacée). Ce dépôt contient le code source principal du projet — frontend et/ou backend en TypeScript.

---

## Fonctionnalités principales

- Gestion de listes de mots (création, modification, suppression)
- Sessions d'entraînement (flashcards, QCM, écriture)
- Suivi des progrès et statistiques utilisateur
- Import / export de listes (CSV / JSON)
- Configuration multilingue et paramètres personnalisés

## Technologies

- Langage : TypeScript
- (Précisez selon votre projet) Frontend : React / Next.js / autre
- (Précisez selon votre projet) Backend : Node.js + Express / Fastify / autre
- Tests : Jest / Vitest (si présents)
- Lint : ESLint, Format : Prettier

## Prérequis

- Node.js >= 18
- npm ou yarn ou pnpm
- (Optionnel) Base de données : SQLite, PostgreSQL ou MongoDB selon la configuration

## Installation (développement)

1. Cloner le dépôt :

   git clone https://github.com/charles-kamga/LexicaLearn.git

2. Se placer dans le dossier du projet :

   cd LexicaLearn

3. Installer les dépendances :

   npm install

   (ou `yarn` / `pnpm install`)

4. Copier le fichier d'exemple d'environnement et le configurer :

   cp .env.example .env

   Remplir les variables nécessaires (PORT, DATABASE_URL, clés API, ...).

5. Lancer en mode développement :

   npm run dev

## Scripts utiles (exemples à vérifier dans package.json)

- `npm run dev` — démarrer l'application en mode développement
- `npm run build` — compiler le projet TypeScript
- `npm start` — démarrer la version buildée
- `npm run lint` — exécuter ESLint
- `npm run format` — formater le code avec Prettier
- `npm run test` — lancer la suite de tests
- `npm run typecheck` — vérifier les types TypeScript

> Vérifiez `package.json` pour les scripts exacts si différents.

## Configuration

- `.env` : variables d'environnement (voir `.env.example` si présent)
- `tsconfig.json` : configuration TypeScript

## Architecture suggérée

Le dépôt est écrit en TypeScript. Une structure commune recommandée :

```
src/
  client/         # code frontend (si mono-repo)
  server/         # code backend / API
  modules/        # fonctionnalités (words, sessions, users)
  db/             # migrations / accès données
  types/          # définitions types
  utils/          # utilitaires
tests/            # tests unitaires / intégration
```

Adaptez selon l'arborescence réelle du projet.

## CI / CD

Exemple d'action GitHub pour CI (lint, build, tests) :

```
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test -- --coverage
```

## Déploiement

- Docker : fournir un `Dockerfile` pour construire l'image de production
- Plateformes : Vercel (frontend), Railway / Heroku / Fly / DigitalOcean (backend)

## Contribution

Merci pour votre contribution !

1. Forkez le dépôt
2. Créez une branche `feature/xxx` ou `fix/xxx`
3. Ajoutez des tests pour vos changements si possible
4. Ouvrez une Pull Request et décrivez les changements

Respectez le style de code du projet et assurez-vous que la CI passe.

## License

Ce dépôt ne contient pas de fichier LICENSE par défaut. Ajoutez une licence (par ex. MIT) si vous souhaitez rendre le projet open-source.

## Contact

Mainteneur: @charles-kamga (https://github.com/charles-kamga)

---
