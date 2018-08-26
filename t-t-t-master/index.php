<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Tic Tac Toe: Open Source. Simplified</title>
    <link href="../bitnami.css" media="all" rel="Stylesheet" type="text/css" />
    <link href="assets/css/main.css" media="all" rel="Stylesheet" type="text/css" />
    <script src="assets/js/main.js"></script>
</head>
<body>
<div id="container">
    <div id="header">
        <div id="bitnami">
            <a href="/"><img alt="Bitnami" src="../img/logo.png" /></a>
        </div>
    </div>
    <div id="menu_launch_page">
        <table cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <a href="../index.php"><img src="../img/tab1_applications.png" border="0" alt="" /></a>
                </td>
                <td><img src="../img/tab2_applications.png" border="0" alt="" />
                </td>
            </tr>
        </table>
    </div>
    <div id="lowerContainer">
        <div id="content">
            <div align="center">
                <table class="tableParagraph">
                    <tr>
                        <td class="container" >
                            <p>Check out my other <a href="../projects.html">projects</a>.</p><br/><br/>
                        </td>
                    </tr>
                </table>
            </div>
            <!-- START phpmyadmin phpmyadmin -->
            <div align="center">
                <h3 id="pTurnBef"></h3><img id="pTurnImg" src="assets/img/x.png"><h3 id="pTurnAft">'s Turn</h3>
                <table id="tttTable">
                    <tr>
                        <td onclick="setSpot('a1');" id="a1" class="nSpot"></td>
                        <td onclick="setSpot('a2');" id="a2" class="nSpot"></td>
                        <td onclick="setSpot('a3');" id="a3" class="nSpot"></td>
                    </tr>
                    <tr>
                        <td onclick="setSpot('b1');" id="b1" class="nSpot"></td>
                        <td onclick="setSpot('b2');" id="b2" class="nSpot"></td>
                        <td onclick="setSpot('b3');" id="b3" class="nSpot"></td>
                    </tr>
                    <tr>
                        <td onclick="setSpot('c1');" id="c1" class="nSpot"></td>
                        <td onclick="setSpot('c2');" id="c2" class="nSpot"></td>
                        <td onclick="setSpot('c3');" id="c3" class="nSpot"></td>
                    </tr>
                </table>
            </div>
            <br/><br/>
        </div>
    </div>
</div>
</body>
</html>
