
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aquifer";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

 $sql = "INSERT INTO test (value,relay) VALUES ('".$_GET["value"]."','".$_GET["relay"]."');";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


//  $sql = "INSERT INTO aquifer.test (value) VALUES ('".$_GET["value"]."')";
?>
