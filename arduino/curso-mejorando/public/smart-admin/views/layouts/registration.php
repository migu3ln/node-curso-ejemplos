<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="es"> <!--<![endif]-->
    <!-- BEGIN HEAD -->
    <head>
        <meta charset="utf-8">
        <!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->

        <title> SmartAdmin </title>
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- Use the correct meta names below for your web application
                 Ref: http://davidbcalhoun.com/2010/viewport-metatag 
                 
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">-->

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
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">
    </head>
    <!-- END HEAD -->
    <!-- BEGIN BODY -->
    <body  >
<!--        <div id="content" class="container">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                    <h1 class="txt-color-red login-header-big">SmartAdmin</h1>
                    <div class="hero">

                        <div class="pull-left login-desc-box-l">
                            <h4 class="paragraph-header">It's Okay to be Smart. Experience the simplicity of SmartAdmin, everywhere you go!</h4>
                            <div class="login-app-icons">
                                <a href="javascript:void(0);" class="btn btn-danger btn-sm">Frontend Template</a>
                                <a href="javascript:void(0);" class="btn btn-danger btn-sm">Find out more</a>
                            </div>
                        </div>

                        <img src="img/demo/iphoneview.png" class="pull-right display-image" alt="" style="width:210px">

                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h5 class="about-heading">About SmartAdmin - Are you up to date?</h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h5 class="about-heading">Not just your average template!</h5>
                            <p>
                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi voluptatem accusantium!
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                    <div class="well no-padding">
                        <form action="index.html" id="login-form" class="smart-form client-form" novalidate="novalidate">
                            <header>
                                Sign In
                            </header>

                            <fieldset>

                                <section>
                                    <label class="label">E-mail</label>
                                    <label class="input state-error"> <i class="icon-append fa fa-user"></i>
                                        <input type="email" name="email" class="invalid">
                                        <b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> Please enter email address/username</b></label><em for="email" class="invalid">Please enter a VALID email address</em>
                                </section>

                                <section>
                                    <label class="label">Password</label>
                                    <label class="input"> <i class="icon-append fa fa-lock"></i>
                                        <input type="password" name="password">
                                        <b class="tooltip tooltip-top-right"><i class="fa fa-lock txt-color-teal"></i> Enter your password</b> </label>
                                    <div class="note">
                                        <a href="forgotpassword.html">Forgot password?</a>
                                    </div>
                                </section>

                                <section>
                                    <label class="checkbox">
                                        <input type="checkbox" name="remember" checked="">
                                        <i></i>Stay signed in</label>
                                </section>
                            </fieldset>
                            <footer>
                                <button type="submit" class="btn btn-primary">
                                    Sign in
                                </button>
                            </footer>
                        </form>

                    </div>

                    <h5 class="text-center"> - Or sign in using -</h5>

                    <ul class="list-inline text-center">
                        <li>
                            <a href="javascript:void(0);" class="btn btn-primary btn-circle"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="btn btn-info btn-circle"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="btn btn-warning btn-circle"><i class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>-->


        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div class="sign-form">
                            <div class="sign-inner">
                                <h3 class="first-child">Sign In To Your Account</h3>
                                <hr>


                                <?php echo $content ?>

                            </div>
                        </div>
                    </div>
                </div> <!-- / .row -->      
            </div>       
        </div>
    </body>
    <!-- END BODY -->
</html>