<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Taquin</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #taquin { display: grid; grid-template-columns: repeat(3, 100px); gap: 2px; }
        .tile { width: 100px; height: 100px; cursor: pointer; }
    </style>
</head>
<body>
    <div id="taquin"></div>
    <p id="message"></p>
    <button id="restartButton" style="display: none;">Recommencer</button>

    <script src="script.js"></script>
</body>
</html>