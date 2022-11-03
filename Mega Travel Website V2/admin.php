<html>
    <head>
        <title>Mega Travel | Admin</title>
        <link rel="stylesheet" href="styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <header>
            <img src="site files/mega travel logo.png" alt="Mega Travel Logo" 
            class = "mega-travel-logo-img">
        </header>

<?php

    $dbServerName = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "mega_travel";

    // connection to database
    $conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

    $sqlSelect = "select * from TripFormInfo";
    $result = mysqli_query($conn, $sqlSelect);
    $resultCheck = mysqli_num_rows($result);

?>
        <div class = "table-div">
            <table>
                <tr>
                    <th>Client Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Adults</th>
                    <th>Children</th>
                    <th>Destination</th>
                    <th>Travel Date</th>
                    <th>Activities</th>
                </tr>
                <tr>
                    <?php
                        if ($resultCheck > 0){
                            while ($row = mysqli_fetch_assoc($result)){
                                echo "
                                    <tr>
                                        <td>".$row['LastName'].", ".$row['FirstName']."</td>
                                        <td>".$row['PhoneNumber']."</td>
                                        <td>".$row['Email']."</td>
                                        <td>".$row['NumberOfAdults']."</td>
                                        <td>".$row['NumberOfChildren']."</td>
                                        <td>".$row['Destination']."</td>
                                        <td>".$row['TravelDate']."</td>
                                        <td>".$row['InterestedActivities']."</td>
                                    </tr>
                                ";
                            }
                        }
                    ?>
                </tr>
            </table>
        </div>

        <footer>
            <p style="color: white;">Copyright Protected. All rights reserved.
                <br><br>
                MEGA TRAVLES <br>
                mega@travels.com
            </p>
        </footer>
    </body>
</html>