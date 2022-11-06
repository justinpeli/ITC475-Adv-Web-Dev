<?php
// create constants for the username and password
    define("username", "siteadmin", true);
    define("password", " itc475", true);

    $inputUsername = null;
    $inputPassword = null;

    $dbServerName = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "mega_travel";

    // connection to database
    $conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

    $sqlSelect = "select * from users";
    $result = mysqli_query($conn, $sqlSelect);
    $resultCheck = mysqli_num_rows($result);

    if(isset($_POST['username']) && isset($_POST['password'])){
        $inputUsername = $_POST['username'];
        $inputPassword = $_POST['password'];
        if ($resultCheck > 0){
            while ($row = mysqli_fetch_assoc($result)){
                if($inputUsername === $row['username'] && $inputPassword === $row['userPwd']){
                    header("Location:admin.php");
                }
            }
        }
    }

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
        <form action="" method="POST" class="login">
            <h1 class="login-header">Login</h1>
            <label for="username" class="login-label">Username:</label>
            <input type="text" name="username" class="login-input">
            <label for="password" class="login-label">Password:</label>
            <input type="password" name="password" class="login-input">
            <input type="submit" value="Sign In" class="login-button">
        </form>
        <footer class="login-footer">
            <p style="color: white;">Copyright Protected. All rights reserved.
                <br><br>
                MEGA TRAVLES <br>
                mega@travels.com
            </p>
        </footer>
    </body>
</html>