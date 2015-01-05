<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->

        <title><?php echo CHtml::encode($this->pageTitle); ?></title>

        <meta name="description" content="">
        <meta name="author" content="">

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <!-- Basic Styles -->
        <!--<link rel="stylesheet" type="text/css" media="screen" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/bootstrap.min.css">-->
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/font-awesome.min.css">

        <!-- SmartAdmin Styles : Please note (smartadmin-production.css) was created using LESS variables -->
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/smartadmin-production.css">
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/smartadmin-skins.css">

        <!-- SmartAdmin RTL Support is under construction
        <link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-rtl.css"> -->

        <!-- We recommend you use "your_style.css" to override SmartAdmin
             specific styles this will also ensure you retrain your customization with each SmartAdmin update.
        <link rel="stylesheet" type="text/css" media="screen" href="css/your_style.css"> -->

        <!-- Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp -->
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo Yii::app()->theme->baseUrl; ?>/css/demo.css">

        <!-- FAVICONS -->
        <link rel="shortcut icon" href="<?php echo Yii::app()->theme->baseUrl; ?>/img/favicon/favicon.ico" type="image/x-icon">
        <link rel="icon" href="<?php echo Yii::app()->theme->baseUrl; ?>/img/favicon/favicon.ico" type="image/x-icon">

        <!-- GOOGLE FONT -->
        <!--<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">-->

    </head>
    <body class="">

            <?php echo $content; ?>

        <!-- CUSTOM NOTIFICATION -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/notification/SmartNotification.min.js"></script>

        <!-- JARVIS WIDGETS -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/smartwidgets/jarvis.widget.min.js"></script>

        <!-- EASY PIE CHARTS -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js"></script>

        <!-- SPARKLINES -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/sparkline/jquery.sparkline.min.js"></script>

        <!-- JQUERY VALIDATE -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/jquery-validate/jquery.validate.min.js"></script>

        <!-- JQUERY MASKED INPUT -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/masked-input/jquery.maskedinput.min.js"></script>

        <!-- JQUERY SELECT2 INPUT -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/select2/select2.min.js"></script>

        <!-- JQUERY UI + Bootstrap Slider -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>

        <!-- browser msie issue fix -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/msie-fix/jquery.mb.browser.min.js"></script>

        <!-- FastClick: For mobile devices -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/fastclick/fastclick.js"></script>

        <!--[if IE 7]>

        <h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>

        <![endif]-->

        <!-- Demo purpose only -->
        <!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/demo.js"></script>-->

        <!-- MAIN APP JS FILE -->
        <!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/app.js"></script>-->

        <!-- PAGE RELATED PLUGIN(S) -->

        <!-- Flot Chart Plugin: Flot Engine, Flot Resizer, Flot Tooltip -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/flot/jquery.flot.cust.js"></script>
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/flot/jquery.flot.resize.js"></script>
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/flot/jquery.flot.tooltip.js"></script>

        <!-- Vector Maps Plugin: Vectormap engine, Vectormap language -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/vectormap/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/vectormap/jquery-jvectormap-world-mill-en.js"></script>

        <!-- Full Calendar -->
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/fullcalendar/jquery.fullcalendar.min.js"></script>



    </body>

</html>