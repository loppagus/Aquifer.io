
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
    echo "connection failed";
}
//echo "Connected successfully";

$sql = "SELECT id, time, relay, value FROM test";
//$result = $sql->query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

$result = $conn->query($sql);

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }


    echo "{ \"data\":" ;
    echo json_encode($emparray);
    echo "}";


$conn->close();


//  $sql = "INSERT INTO aquifer.test (value) VALUES ('".$_GET["value"]."')";
?>
