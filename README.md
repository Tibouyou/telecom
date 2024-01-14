
# Visualisation de la couverture réseau française

Ce projet vise à fournir une visualisation interactive de la couverture réseau en France sous forme de carte et de tableau. 
Cette application est destinée aussi bien aux professionnels, qui peuvent déterminer les lieux où l’accès au réseau est le plus restreint, ainsi qu’aux particuliers qui peuvent l’utiliser afin de savoir quel réseau est disponible dans leur logement.


## Fonctionnalités

- **Visualisation interactive :** Explorez la carte pour voir la couverture réseau dans différentes régions de la France.
- **Zoom :** Zoomez sur la carte pour voir apparaître votre commune. 
- **Filtrage par débit :** Choisissez un débit spécifique pour visualiser sa couverture réseau exclusive sur toute la carte. 
- **Données mises à jour :** Les informations de couverture réseau sont régulièrement mises à jour pour refléter les derniers développements du secteur.


## Prérequis

Avant de commencer l'installation et l'utilisation de ce projet, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

- **Node.js et npm :** Ces deux logiciels sont nécessaires pour exécuter le projet. Vous pouvez les télécharger et les installer à partir de [https://nodejs.org].

- **Git :** Git est nécessaire pour cloner le dépôt du projet sur votre machine. Vous pouvez le télécharger et l'installer à partir de [https://git-scm.com].

- **XAMPP/Laragon... :** Un de ces logiciels est nécessaire pour exécuter une base de données MySQL locale. Vous pouvez télécharger et installer XAMPP à partir de [https://www.apachefriends.org] ou Laragon à partir de [https://laragon.org].

Une fois que vous avez installé ces logiciels, vous pouvez passer à la section "Utilisation" pour savoir comment installer et exécuter le projet.


## Utilisation


1. **Clonez le dépôt :** Clonez ce dépôt sur votre machine locale en utilisant la commande git suivante :

    ```
    git clone https://github.com/Tibouyou/telecom.git
    ```

2. **Installez les dépendances :** Naviguez vers le répertoire du projet et installez les dépendances nécessaires avec npm :
    
    ```
    cd telecom
    npm install
    ```

3. **Configurez la base de données :** Ouvrez le fichier config.json et mettez à jour les informations de connexion à la base de données local que vous utilisez, lancez votre serveur de base de données. Vous pouvez utiliser des logiciels comme XAMPP ou Laragon pour créer une base de données locale. Importez ensuite le fichier *telecom\app\data\communes.sql* dans votre base de données locale.

4. **Démarrez le serveur :** Démarrer le serveur de développement avec npm :
    
    ```
    npm run dev
    ```

Maintenant, vous devriez pouvoir accéder à l'application sur [http://localhost:3000] depuis votre navigateur.


## Auteurs

- **BLANCHÉ Thomas**
- **HONORÉ Alexandre**
- **RIGONNET Arthur**
- **SITHIDEJ Clara**
- **SYLVESTRE Antonin**
