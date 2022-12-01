<?php

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "final_project";

// connection to database
$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

$sqlSelect = "select * from race";
$result = mysqli_query($conn, $sqlSelect);
$resultCheck = mysqli_num_rows($result);

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Race Statistics</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body style="background-color: white;">
        <div>
            <table>
                <tr>
                    <th>Race Number</th>
                    <th>Race Time</th>
                    <th>Racer One</th>
                    <th>Racer Two</th>
                    <th>Winner</th>
                </tr>
                <tr>
                    <?php
                        mysqli_data_seek($result,0);
                        if ($resultCheck > 0){
                            while ($row = mysqli_fetch_assoc($result)){
                                echo "
                                    <tr>
                                        <td>".$row['RacerId']."</td>
                                        <td>".$row['RaceTime']."</td>
                                        <td>".$row['RacerOne']."</td>
                                        <td>".$row['RacerTwo']."</td>
                                        <td>".$row['RaceWinner']."</td>
                                    </tr>";
                            }
                        }
                    ?>
                </tr>
            </table>
        </div>
    </body>
</html>