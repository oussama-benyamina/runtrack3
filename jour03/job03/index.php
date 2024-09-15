<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Taquin La Plateforme_</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #taquin {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 2px;
            margin-bottom: 20px;
        }
        .tile {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            cursor: pointer;
            background-size: 300px 300px;
        }
        #message {
            font-weight: bold;
            margin-bottom: 10px;
        }
        #restartButton {
            display: none;
        }
    </style>
</head>
<body>
    <div id="taquin"></div>
    <div id="message"></div>
    <button id="restartButton">Recommencer</button>

    <script src="script.js"></script>
</body>
</html>