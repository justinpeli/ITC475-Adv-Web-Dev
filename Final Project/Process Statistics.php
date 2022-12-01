<?php

$timestamp = $_POST['timestamp'];
$racerParticipantOne = $_POST['participantOne'];
$racerParticipantTwo = $_POST['partipantTwo'];
$winner = $_POST['winner'];

echo "Current Timestamp is: ".$timestamp."\n";
echo "Racer one: ".$racerParticipantOne."\n";
echo "Racer two: ".$racerParticipantTwo."\n";
echo "Winner: ".$winner."\n";

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "final_project";

// connection to database
$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

// see if database connection is successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sqlInsert = "INSERT INTO race (RacerId, RacerOne, RacerTwo, RaceWinner, RaceTime) 
    VALUES (NULL, '$racerParticipantOne', '$racerParticipantTwo',
    '$winner', '$timestamp')";

mysqli_query($conn, $sqlInsert);
mysqli_close($conn);