<?php
 
header('Access-Control-Allow-Origin: *');
 
    include("./conexao.php");
 
    $id = $_GET['id'];
 
    $stmt = $conexao->prepare("DELETE FROM tbagenda WHERE id='$id'");   
      $stmt ->execute();
 
?>