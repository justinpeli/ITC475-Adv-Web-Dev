<html>
    <body>
        Thank you for submitting your travel agent contact request! Here is the information you submitted:<br><br>
        Client Name: <?php echo $_POST["firstName"]." ".$_POST["lastName"]; ?><br>
        Client Phone Number: <?php echo $_POST["phoneNumber"]; ?><br>
        Client Email: <?php echo $_POST["email"]; ?><br>
        Number of Adults: <?php echo $_POST["adultTravelers"]; ?><br>
        Number of children: <?php echo $_POST["kidTravelers"]; ?><br>
        Destination: <?php echo getLocationName($_POST["selectedLocation"]); ?><br>
        Travel Dates: <?php echo $_POST["startDate"]; ?><br>
        Interested Activities: <?php echo $_POST["startDate"]; ?><br> 
        An agent will be in touch with you soon!


    <?php
        function getLocationName($value){

            $locaitonName = "";

            if($value == "mexico"){
                $locaitonName = "Cancun, Mexico";
            }
            else if($value == "maldives"){
                $locaitonName = "Maldives, South Asia";
            }
            else if($value == "italy"){
                $locaitonName = "Venice, Italy";
            }
            else if($value == "new zealand"){
                $locaitonName = "New Zealand";
            }

            return $locaitonName;
        }
    ?>

    </body>
</html>