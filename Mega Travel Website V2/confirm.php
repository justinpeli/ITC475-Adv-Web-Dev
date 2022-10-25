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
            Client Name: <span style = "font-style: italic;"><b><?php echo $_POST["firstName"]." ".$_POST["lastName"]; ?></b></span><br><br>
            Client Phone Number: <span style = "font-style: italic;"><b><?php echo $_POST["phoneNumber"]; ?></b></span><br><br>
            Client Email: <span style = "font-style: italic;"><b><?php echo $_POST["email"]; ?></b></span><br><br>
            Number of Adults: <span style = "font-style: italic;"><b><?php echo $_POST["adultTravelers"]; ?></b></span><br><br>
            Number of children: <span style = "font-style: italic;"><b><?php echo $_POST["kidTravelers"]; ?></b></span><br><br>
            Destination: <span style = "font-style: italic;"><b><?php echo getLocationName($_POST["selectedLocation"]); ?></b></span><br><br>
            Travel Dates: <span style = "font-style: italic;"><b><?php echo $_POST["startDate"]; ?></b></span><br><br>
            Interested Activities: <span style = "font-style: italic;"><b><?php echo getSelectedActivities(); ?></b></span><br><br>
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

    ?>

    </body>
</html>