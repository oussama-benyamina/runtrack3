<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 02 - Arc-en-ciel</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <style>
        #melange, #ordre { 
            display: flex; 
            flex-wrap: wrap; 
            margin-bottom: 20px;
            min-height: 110px;
            border: 2px dashed #ccc;
            padding: 10px;
        }
        img { 
            width: 100px; 
            height: 100px; 
            margin: 5px; 
            cursor: move; 
        }
    </style>
</head>
<body>
    <button id="shuffleButton">Mélanger</button>
    <h3>Images mélangées :</h3>
    <div id="melange"></div>
    <h3>Placez les images ici pour reconstituer l'arc-en-ciel :</h3>
    <div id="ordre"></div>
    <p id="message"></p>

    <script src="script.js"></script>
</body>
</html>