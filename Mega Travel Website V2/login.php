<?php

    // start a session
    session_start();

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
        <div class="header-separator" id="header-separator-id">
            <span id="welcome-text-span">
                <b id="welcome-text-bold"></b>
            </span>
            <span id="sun-moon-span"></span>
            <span id="time-text-span"></span>
        </div>
        <nav>
            <a href="index.html" target="_self"><span class="links-text"><b>Home</b></span></a>
            <a href="aboutUs.html" target="_self"><span class="links-text"><b>About Us</b></span></a>
            <a href="agent.html" target="_self"><span class="links-text" style="margin-right: 0;"><b>Agent</b></span></a>
        </nav>
        <form action="" method="POST" class="login">
            <h1 class="login-header">Login</h1>

            <?php
                if(isset($_POST['signin'])){
                    $inputUsername = $_POST['username'];
                    $inputPassword = $_POST['password'];
                    if ($resultCheck > 0){
                        while ($row = mysqli_fetch_assoc($result)){
                            if($inputUsername === $row['username'] && $inputPassword === $row['userPwd']){
                                $_SESSION['loggedin'] = True;
                                header("Location:admin.php");
                            }
                            else {
                                echo "<div class = 'login-error'>Sorry! Incorrect Username or Password
                                    Entered. Please try again.</div>";
                            }
                        }
                    }
                }
            ?>

            <label for="username" class="login-label">Username:</label>
            <input type="text" name="username" class="login-input">
            <label for="password" class="login-label">Password:</label>
            <input type="password" name="password" class="login-input">
            <input type="submit" value="Sign In" class="login-button" name="signin">
        </form>
        <footer class="login-footer">
            <p style="color: white;">Copyright Protected. All rights reserved.
                <br><br>
                MEGA TRAVLES <br>
                mega@travels.com
            </p>
        </footer>
        <script src="welcome.js"></script>
    </body>
</html>