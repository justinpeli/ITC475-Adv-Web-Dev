<?php

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "final_project";

// connection to database
$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

$sqlSelect = "";
$error = false;

if(isset($_POST['searchButton'])){
    if(isset($_POST['racerOneSelect']) && isset($_POST['racerTwoSelect'])){
        if($_POST['racerOneSelect'] == $_POST['racerTwoSelect']){
            $error = true;
            $sqlSelect = "select * from race order by RacerId desc limit 5;";
        }
        else{
            $racerOneSearchSelection = $_POST['racerOneSelect'];
            $racerTwoSearchSelection = $_POST['racerTwoSelect'];
            $sqlSelect = "select * from race where RacerOne = '$racerOneSearchSelection'
            and RacerTwo = '$racerTwoSearchSelection';";
        }
    }
    else {
        $sqlSelect = "select * from race order by RacerId desc limit 5;";
    }
}
else if(isset($_POST['seeAllButton'])){
    $sqlSelect = "select * from race order by RacerId desc limit 5;";
}
else {
    $sqlSelect = "select * from race order by RacerId desc limit 5;";
}

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
        <!--<link rel="stylesheet" href="styles.css">-->
        <link rel="stylesheet" href="race styles.css">
    </head>
    <body>
        <div class="Wrapper">
            <header>
                <div class="HeaderWrapper">
                    <div class="RaceStatsText"><em>Race Stats</em></div>
                    <div class="FormDiv">
                        <form action="" method="POST">
                            <select name="racerOneSelect" id="selectFirstRacer" class="racerSelect">
                                <option value="" selected disabled>RACER ONE</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>
                                <option value="Bronze">Bronze</option>
                            </select>
                            <select name="racerTwoSelect" id="selectSecondRacer" class="racerSelect">
                                <option value="" selected disabled>RACER TWO</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>
                                <option value="Bronze">Bronze</option>
                            </select>
                            <input type="submit" name="searchButton" value="Search" class="SearchButton">
                            <input type="submit" name="seeAllButton" value="See All Races" class="SearchButton">
                        </form>
                    </div>
                </div>
            </header>
            <div class="StatsDiv">
                <div class="tableDiv">
                <?php
                    if($error == true){
                        echo "<div class = 'errorClass'>Error! Enter Two Separate Racers.</div>";
                    }
                ?>
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
        </div>
    </body>
</html>