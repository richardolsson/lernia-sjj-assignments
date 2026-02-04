<?php
  $menu = array(
    array(
      'label' => 'Home',
      'link' => '/',
    ),
    array(
      'label' => 'About',
      'link' => '/about.php',
    ),
    array(
      'label' => 'Contact',
      'link' => '/contact.php',
    ),
  );

  $path = $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE html>
<html>
  <head>
    <title>This is the page</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>
  <body>
    <div class="page">
      <header>
        <nav>
          <ul>
            <?php foreach ($menu as $item) { ?>
            <li class="menu-item <?php if ($item['link'] == $path) echo 'active'; ?>">
              <a href="<?php echo $item['link'];?>">
                <?php echo $item['label'];?>
              </a>
            </li>
            <?php } ?>
          </ul>
        </nav>
      </header>
      <main class="main">