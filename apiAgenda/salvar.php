<?php
header('Access-Control-Allow-Origin: *');
include("./conexao.php");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$id = $obj['id'];
$nome = $obj['nome'];
$email = $obj['email'];
$telefone = $obj['telefone'];
$idade = $obj['idade'];

if ($id == "") {
    $stmt = $conexao->prepare("INSERT INTO tbagenda VALUES(null,'$nome','$email','$telefone', '$idade');");
    $stmt->execute();
} else {
    $stmt = $conexao->prepare("UPDATE tbagenda SET nome='$nome', email='$email', telefone= '$telefone', idade='$idade' WHERE id='$id';");
    $stmt->execute();
}

// Agora, vamos buscar os dados atualizados da lista de alunos e retornar como JSON
$query = $conexao->query("SELECT * FROM tbagenda");
$alunos = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($alunos);
?>
