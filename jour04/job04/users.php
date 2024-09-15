<?php
require 'config.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("SELECT * FROM utilisateurs");
    $users = $stmt->fetchAll();
    echo json_encode($users);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}