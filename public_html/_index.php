<!DOCTYPE html>

<html>

<head>
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8" />
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="style_squod.css">
    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
    <link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">
</head>


<body>

    <div class="grid-container">
        <div class="grid-item" id="name_en">Click picture to get info about movie</div>
        <div class="grid-item" id="name_loc"></div>
        <div class="grid-item" id="year">Year</div>
        <div class="grid-item" id="idb">IDB</div>
        <div class="grid-item" id="rh">
            <span class="reload_btn" id="reload_btn_id">reload</span>
        </div>
        <div class="grid-item" id="chose_lang">
            <span class="choose_lang_btn" id="choose_lang_btn_en">en</span>
            <span id="choose_lang_btn_plus"> + </span>
            <span class="choose_lang_btn" id="choose_lang_btn_pl">pl</span>
            <span class="choose_lang_btn" id="choose_lang_btn_ua">ua</span>
            <span class="choose_lang_btn" id="choose_lang_btn_ru">ru</span>
        </div>
    </div>


    <div id="container"></div>

                <!-- <?php
                    $doc = new DOMDocument();
                    $doc->loadHTMLFile("TZ.html");
                   // echo $doc->saveHTML();
                    $myDOMNodeList_h1 = $doc->getElementsByTagName('h1');
                    $myDOMNodeList_p = $doc->getElementsByTagName('p');

                    $arrForJS = 'let films = [';
     
                   for($i=0; $i < $myDOMNodeList_h1->length; $i++){
                        if($i < 10)
                          $ii = '00'. $i. '.jpg';
                        if($i > 9 && $i < 100)
                          $ii='0'. $i. '.jpg';
                        if($i > 99)    
                          $ii= $i. '.jpg';
                        
                
                    //    echo '{name: "'. $myDOMNodeList_h1[$i]->nodeValue. '"';
                    //    echo ', rate: '. $myDOMNodeList_p[$i]->nodeValue;
                    //    echo ', image: "'. $ii.'"},<br>';
                        //$arrForJS =  $arrForJS.
                    }
                    $arrForJS = $arrForJS. ']';

                ?> -->

<!-- <div class="debug"><?php  echo ' Hi '. `<img src="img/168.jpg" alt="fff">`?></div> -->

    <script type="text/javascript" src="movies.js"> </script>
    <script type="text/javascript" src="film.js"> </script>
    <!-- <img src="img/168.jpg"> -->

</body>

</html>