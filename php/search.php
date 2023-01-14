<?php
$host = "localhost";
$user = "root";
$pass = "passhatim";
$db   = "wosproject";
$connect = mysqli_connect($host,$user,$pass,$db);
mysqli_select_db($connect, $db) or die("Could not open the db '$db', check your credentials and try again.");
//print "Connected.";
//search.php 
if(isset($_POST["query"]) && isset($_POST["selection"]))  
 {  
      $output = '';  
      if ($_POST["selection"] == "title"){
          $query = "SELECT * FROM netflix WHERE title LIKE '%".$_POST["query"]."%'"; 
          $result = mysqli_query($connect, $query);  
          $output = '<ul class="list-unstyled">';  
          if(mysqli_num_rows($result) > 0)  
          {  
               while($row = mysqli_fetch_array($result))  
               {  
                    $output .= '<li>'.🔎." ".$row["title"].'</li>';  
               }  
          }  
          else  
          {  
               $output .= '<li>Entry Not Found</li>';  
          }  
          $output .= '</ul>';  
          echo $output;
      } else if ($_POST["selection"] == "genre"){
          $query = "SELECT * FROM colorpalette WHERE Palette_name LIKE '%".$_POST["query"]."%'";
          $result = mysqli_query($connect, $query);  
          $output = '<ul class="list-unstyled">';  
          if(mysqli_num_rows($result) > 0)  
          {  
               while($row = mysqli_fetch_array($result))  
               {  
                    $output .= '<li>'.🔎." ".$row["Palette_name"].'</li>';  
               }  
          }  
          else  
          {  
               $output .= '<li>Entry Not Found</li>';  
          }  
          $output .= '</ul>';  
          echo $output;
      }
      
 }  
 if(isset($_POST["userInput"]))  {
     if ($_POST["selection"] == "title"){
          $query = "SELECT * FROM netflix WHERE title ='".$_POST["userInput"]."';"; 
          $result = mysqli_query($connect, $query); 
          $out = "";
          if(mysqli_num_rows($result) > 0)  
          {  
               while($row = mysqli_fetch_array($result))  
               { 
                    $p1 = $row["Palette1"];
                    $p2 = $row["Palette2"];
                    $p3 = $row["Palette3"];
                    $d = $row["duration"];
                    $out .= $p1.';'.$p2.';'.$p3.';'.$d;
               }
          }
          else  
          {  
               $out .= 'Title Not Found';  
          }
          $out .= '';
          echo $out;
     } else if ($_POST["selection"] == "genre"){
          $query = "SELECT * FROM colorpalette WHERE Palette_name ='".$_POST["userInput"]."';"; 
          $result = mysqli_query($connect, $query); 
          $out = "";
          if(mysqli_num_rows($result) > 0)  
          {  
               while($row = mysqli_fetch_array($result))  
               { 

                    $p1 = $row["Palette1"];
                    $p2 = $row["Palette2"];
                    $p3 = $row["Palette3"];
                    $d = "110 min";
                    $out .= $p1.';'.$p2.';'.$p3.';'.$d;
               }
          }
          else  
          {  
               $out .= 'Genre Not Found';  
          }
          $out .= '';
          echo $out;
     }
 }
 ?>  
