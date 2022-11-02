<?php

    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $phoneNumber = $_POST["phoneNumber"];
    $email = $_POST["email"];
    $adultTravelers = $_POST["adultTravelers"];
    $childrenTravelers = $_POST["kidTravelers"];
    $selectedLocation = getLocationName($_POST["selectedLocation"]);
    $originalDate = $_POST["startDate"];
    $date = formatDate($originalDate);
    $selectedActivities = getSelectedActivities();
    $dbServerName = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "mega_travel";

    $conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sqlInsert = "INSERT INTO TripFormInfo (id, FirstName, LastName, PhoneNumber, 
        Email, NumberOfAdults, NumberOfChildren, Destination, TravelDate, 
        InterestedActivities) VALUES (NULL, '$firstName', '$lastName', '$phoneNumber',
        '$email', '$adultTravelers', '$childrenTravelers', '$selectedLocation', '$date', '$selectedActivities')";

    if (mysqli_query($conn, $sqlInsert))

    mysqli_close($conn);

?>

<html>
    <head>
        <title>Mega Travel | Form</title>
        <link rel="stylesheet" href="styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <header>
            <img src="site files/mega travel logo.png" alt="Mega Travel Logo" 
            class = "mega-travel-logo-img">
        </header>
        <section style = "padding: 20px">
            <span style = "font-style: italic; color: red">Thank you for submitting your 
                travel agent contact request! Here is the information you submitted:</span><br><br>
            Client Name: <span style = "font-style: italic;"><b><?php echo $firstName." ".$lastName; ?></b></span><br><br>
            Client Phone Number: <span style = "font-style: italic;"><b><?php echo $phoneNumber; ?></b></span><br><br>
            Client Email: <span style = "font-style: italic;"><b><?php echo $email; ?></b></span><br><br>
            Number of Adults: <span style = "font-style: italic;"><b><?php echo $adultTravelers; ?></b></span><br><br>
            Number of children: <span style = "font-style: italic;"><b><?php echo $childrenTravelers ?></b></span><br><br>
            Destination: <span style = "font-style: italic;"><b><?php echo $selectedLocation; ?></b></span><br><br>
            Travel Dates: <span style = "font-style: italic;"><b><?php echo $date; ?></b></span><br><br>
            Interested Activities: <span style = "font-style: italic;"><b><?php echo $selectedActivities; ?></b></span><br><br>
            An agent will be in touch with you soon!
        </section>
        <footer>
            <p style="color: white;">Copyright Protected. All rights reserved.
                <br><br>
                MEGA TRAVLES <br>
                mega@travels.com
            </p>
        </footer>

    <?php
        function getLocationName($value){

            $locationName = "";

            if($value == "mexico"){
                $locationName = "Cancun, Mexico";
            }
            else if($value == "maldives"){
                $locationName = "Maldives, South Asia";
            }
            else if($value == "italy"){
                $locationName = "Venice, Italy";
            }
            else if($value == "new zealand"){
                $locationName = "New Zealand";
            }

            return $locationName;
        }

        function getSelectedActivities(){

            $activitesString = "";

            if(isset($_POST['checkBox0'])){
                $activitesString .= $_POST['checkBox0'];
            }

            if(isset($_POST['checkBox1'])){

                if (isset($_POST['checkBox0'])){
                    $activitesString .= ", ";
                }
                
                $activitesString .= $_POST['checkBox1'];
            }

            if(isset($_POST['checkBox2'])){

                if (isset($_POST['checkBox0']) || isset($_POST['checkBox1'])){
                    $activitesString .= ", ";
                }

                $activitesString .= $_POST['checkBox2'];
            }

            if(isset($_POST['checkBox3'])){

                if (isset($_POST['checkBox0']) || isset($_POST['checkBox1']) || isset($_POST['checkBox2'])){
                    $activitesString .= ", ";
                }

                $activitesString .= $_POST['checkBox3'];
            }

            if(isset($_POST['checkBox4'])){

                if (isset($_POST['checkBox0']) || isset($_POST['checkBox1']) || isset($_POST['checkBox2']) || isset($_POST['checkBox3'])){
                    $activitesString .= ", ";
                }

                $activitesString .= $_POST['checkBox4'];
            }

            return $activitesString;

        }

        function formatDate($originalDate){
            $newDate = date("Y-m-d", strtotime($originalDate));
            return $newDate;
        }

    ?>

    </body>
</html>