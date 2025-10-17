<p align="center">
  <img src="https://github.com/user-attachments/assets/99f133ec-9e4d-4dd7-a8f7-92e68e7b0066"
       alt="Profil - Roméo DJOMAN"
       width="150"
       height="150"
       style="border-radius: 50%; object-fit: cover;" />
</p>


<h1 align="center">💼 Portfolio — <strong>Roméo DJOMAN</strong> (Vanilla JS + Vite)</h1>

<p align="center">
  <em>Développeur Full-Stack & Biostatisticien — France · Côte d’Ivoire</em><br/>
  <a href="https://djoman-lab.github.io/portfolio"><img src="https://img.shields.io/badge/VISIT-SITE%20LIVE-blue?style=for-the-badge&logo=firefox-browser"/></a>
</p>

---

## 🌐 Présentation

Ce **portfolio** présente mon parcours, mes compétences et mes projets en **développement web**, **biostatistique** et **bio-informatique**. Il illustre ma capacité à concevoir des interfaces modernes, performantes et adaptées à tous les supports — **sans framework externe**, uniquement avec **HTML, CSS et JavaScript pur**.

Ce projet a été initialisé avec **Vite**, offrant une expérience de développement rapide et moderne pour du Vanilla JavaScript.

🎯 Objectif : offrir une vitrine professionnelle simple, fluide et responsive, pour présenter mes services et mes réalisations.

---

## ⚙️ Technologies utilisées

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-181717?logo=github&logoColor=white" />
</p>

---

## ✨ Fonctionnalités principales

- 🌑 **Thème sombre par défaut**, basculable en thème clair (avec sauvegarde locale)
- 💼 **Section Branding & Services** (conception, développement, maintenance web)
- 🧠 **Design moderne** inspiré de plateformes pro (Fiverr / 5euros.com)
- 📱 **Expérience fluide sur mobile, tablette et desktop**
- ⚡ **Transitions et animations CSS élégantes**
- 📬 **Formulaire de contact** complet (nom, email, téléphone, message)

---

## 📂 Structure du projet

```
OFFICIAL_PORTFOLIO/
├── public/                 # Fichiers statiques copiés tels quels (ex: favicon, images globales)
│   └── assets/
│       ├── blanck.png
│       ├── flinsc_capture.png
│       ├── mockup.png
│       ├── portrait.jpg
│       └── vite.svg        # Icône Vite
├── src/                    # Code source du projet
│   ├── HomePage.js         → Structure du contenu et sections dynamiques
│   ├── main.js             → Point d'entrée, gestion du thème, interactions et animations
│   ├── style.css           → Styles globaux, thème clair/sombre, responsive
│   └── temp.html           # (probablement un fichier de travail ou un template non utilisé directement par Vite en prod)
├── .gitignore              # Fichiers et dossiers à ignorer par Git
├── index.html              # Page HTML principale lue par Vite
├── package.json            # Métadonnées du projet et scripts (npm/yarn)
├── package-lock.json       # Verrouille les versions des dépendances
├── node_modules/           # Dépendances du projet (installées par npm/yarn)
└── dist/                   # Dossier généré par Vite lors du build pour le déploiement (non versionné)
```

---

## 🚀 Utilisation locale

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/djoman-lab/portfolio.git
cd OFFICIAL_PORTFOLIO
```

### 2️⃣ Installer les dépendances

Ce projet utilise des dépendances Node.js (Vite). Vous devez les installer :

```bash
npm install
# ou
yarn install
```

### 3️⃣ Lancer le serveur de développement

Vite propose un serveur de développement ultra-rapide avec Hot Module Replacement (HMR) :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez ensuite votre navigateur et accédez à l'adresse indiquée par Vite (généralement `http://localhost:5173/` ou similaire).


## 📦 Build pour la production

Pour générer la version optimisée de votre site prête pour le déploiement :

```bash
npm run build
# ou
yarn build
```

Cela créera un dossier `dist/` à la racine de votre projet, contenant tous les fichiers HTML, CSS et JavaScript minifiés et optimisés.


## 🌐 Déploiement sur GitHub Pages

Pour déployer un projet Vite sur GitHub Pages, il faut s'assurer que le dossier `dist` est correctement servi.

1.  **Mettre à jour `package.json` (optionnel mais recommandé pour la base URL) :**
    Si votre site sera accessible à `https://djoman-lab.github.io/portfolio/` (avec `/portfolio/` comme sous-chemin), vous devrez configurer la `base` de Vite.
    Créez un fichier `vite.config.js` à la racine de votre projet si vous n'en avez pas déjà un :

    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite';

    export default defineConfig({
      base: '/portfolio/', // Remplacez par le nom de votre dépôt si différent
    });
    ```
    Si votre site est déployé directement à la racine d'un domaine (ex: `https://djoman-lab.github.io/`), vous pouvez omettre cette ligne ou la laisser comme `base: '/'`.

2.  **Construire le projet :**

    ```bash
    npm run build
    # ou
    yarn build
    ```
    Cela générera le dossier `dist/`.

3.  **Configurer GitHub Pages :**
    *   Allez dans les **Settings** de votre dépôt GitHub.
    *   Cliquez sur **Pages**.
    *   Dans la section "Branch", choisissez :
        *   **Source :** `main`
        *   **Dossier :** `/dist`
        *(C'est la méthode la plus simple et recommandée pour les projets Vite)*

4.  **Enregistrer** les changements.

Votre site sera disponible à :
➡️ `https://djoman-lab.github.io/portfolio` (après quelques minutes pour le déploiement)


## 🧠 Auteur

**Roméo DJOMAN**
Développeur Full-Stack & Biostatisticien
📧 [romeo.djoman@outlook.fr](mailto:romeo.djoman@outlook.fr)
🌍 [djoman-lab.github.io/portfolio](https://djoman-lab.github.io/portfolio)

<p align="center">
  <a href="https://linkedin.com/in/romeo-djoman"><img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white&style=for-the-badge"/></a>
  <a href="https://github.com/djoman-lab"><img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge"/></a>
</p>



## 🪪 Licence

Ce projet est distribué sous licence MIT.
Vous pouvez le réutiliser, le modifier et vous en inspirer librement, en conservant la mention d’auteur.



<p align="center">
  🧩 <strong>DJOMAN LAB</strong> — Ingénierie logicielle & Bio-informatique au service du web et de la recherche.
</p>
