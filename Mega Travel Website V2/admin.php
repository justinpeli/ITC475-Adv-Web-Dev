<?php

    //header("Location:login.php");

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
        <div class = "mobile-view-div">
            <?php
                if ($resultCheck > 0){
                    while ($row = mysqli_fetch_assoc($result)){
                        echo "
                            <div class = 'form-info-div'>
                                <span class = 'form-info-span'>"."<b>Name: </b>".$row['LastName'].", ".$row['FirstName']."</span>
                                <span class = 'form-info-span'>"."<b>Phone Number: </b>".$row['PhoneNumber']."</span>
                                <span class = 'form-info-span'>"."<b>Email: </b>".$row['Email']."</span>
                                <span class = 'form-info-span'>"."<b>Adults: </b>".$row['NumberOfAdults']."</span>
                                <span class = 'form-info-span'>"."<b>Children: </b>".$row['NumberOfChildren']."</span>
                                <span class = 'form-info-span'>"."<b>Destination: </b>".$row['Destination']."</span>
                                <span class = 'form-info-span'>"."<b>Travel Date: </b>".$row['TravelDate']."</td>
                                <span class = 'form-info-span'>"."<b>Activities: </b>".$row['InterestedActivities']."</span>
                            </div>
                        ";
                    }
                }
            ?>
        </div>

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
                        mysqli_data_seek($result,0);
                        if ($resultCheck > 0){
                            while ($rowTwo = mysqli_fetch_assoc($result)){
                                echo "
                                    <tr>
                                        <td>".$rowTwo['LastName'].", ".$rowTwo['FirstName']."</td>
                                        <td>".$rowTwo['PhoneNumber']."</td>
                                        <td>".$rowTwo['Email']."</td>
                                        <td>".$rowTwo['NumberOfAdults']."</td>
                                        <td>".$rowTwo['NumberOfChildren']."</td>
                                        <td>".$rowTwo['Destination']."</td>
                                        <td>".$rowTwo['TravelDate']."</td>
                                        <td>".$rowTwo['InterestedActivities']."</td>
                                    </tr>
                                ";
                            }
                        }
                    ?>
                </tr>
            </table>
        </div>

        <footer style = "float: right;">
            <p style="color: white;">Copyright Protected. All rights reserved.
                <br><br>
                MEGA TRAVLES <br>
                mega@travels.com
            </p>
        </footer>
    </body>
</html>