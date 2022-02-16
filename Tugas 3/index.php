<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XSS ATTACK</title>
</head>
<body>
    <form action="" method="POST">
        <label for="search">Cari pesan</label><br>
        <input type="text" name="search" id="seach" placeholder="search.." />
        <button type="submit" name="cari">Cari!</button>
    </form>

    <?php
        if (isset($_POST)) {
            $pesan = $_POST['search'];
            print "<p>Anda mencari : '$pesan'</p>";
        }
    ?>
    
</body>
</html>