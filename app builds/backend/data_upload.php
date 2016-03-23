

<?php
$servername = "localhost"; //server port
$username = "root"; //username
$password = "";  //password
$dbname = "aquifer";  //data base name

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname); //connect to db

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); //report error connecting
}
echo "Connected successfully";

 $sql = "INSERT INTO test (value) VALUES ('".$_GET["value"]."');"; //INSERT value

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;  // report error
}

$conn->close(); //close db connection


//  $sql = "INSERT INTO aquifer.test (value) VALUES ('".$_GET["value"]."')";
?>
