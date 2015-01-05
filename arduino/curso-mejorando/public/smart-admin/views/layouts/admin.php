<?php
//Yii::app()->clientScript->scriptMap['bootstrap.min.css'] = false;
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Fav and touch icons -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="<?php echo Yii::app()->theme->baseUrl; ?>/ico/apple-touch-icon-57-precomposed.html">
        <link rel="shortcut icon" href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/ico/favicon.png">
        <title>TSHOP - Bootstrap E-Commerce Parallax Theme</title>
        <!-- Bootstrap core CSS -->
        <!--<link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/bootstrap/css/bootstrap.css" rel="stylesheet">-->
        <!-- add theme styles for this template -->
        <link id="pagestyle" rel="stylesheet" type="text/css" href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/skin-5.css">


        <!-- Custom styles for this template -->
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/style.css" rel="stylesheet">

        <!-- css3 animation effect for this template -->
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/animate.min.css" rel="stylesheet">

        <!-- styles needed by carousel slider -->
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/owl.carousel.css" rel="stylesheet">
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/owl.theme.css" rel="stylesheet">

        <!-- styles needed by checkRadio -->
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/ion.checkRadio.css" rel="stylesheet">
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/ion.checkRadio.cloudy.css" rel="stylesheet">

        <!-- styles needed by mCustomScrollbar -->
        <link href="<?php echo Yii::app()->theme->baseUrl; ?>/assets/css/jquery.mCustomScrollbar.css" rel="stylesheet">
        <script src="<?php print Yii::app()->theme->baseUrl; ?>/assets/js/pace.min.js"></script>

        <!-- Just for debugging purposes. -->
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
              <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
              <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->

        <!-- include pace script for automatic web page progress bar  -->
        <script>
            var baseUrl = "<?php print Yii::app()->baseUrl . '/'; ?>";
            var themeUrl = "<?php print Yii::app()->theme->baseUrl . '/'; ?>";
        </script>

    </head>

    <body>


        <!-- Fixed navbar start -->
        <div class="navbar navbar-tshop navbar-fixed-top megamenu" role="navigation">
            <div class="navbar-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6">
                            <div class="pull-left ">
                                <ul class="userMenu ">
                                    <li> <a href="#"> <span class="hidden-xs">HELP</span><i class="glyphicon glyphicon-info-sign hide visible-xs "></i> </a> </li>
                                    <li class="phone-number"> <a  href="callto:+8801680531352"> <span> <i class="glyphicon glyphicon-phone-alt "></i></span> <span class="hidden-xs" style="margin-left:5px"> 88 01680 53 1352 </span> </a> </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-6 col-md-6 no-margin no-padding">
                            <div class="pull-right">
                                <ul class="userMenu">
                                    <li> <a href="account-1.html"><span class="hidden-xs"> My Account</span> <i class="glyphicon glyphicon-user hide visible-xs "></i></a> </li>
                                    <li> <a href="#"  data-toggle="modal" data-target="#ModalLogin"> <span class="hidden-xs">Sign In</span> <i class="glyphicon glyphicon-log-in hide visible-xs "></i> </a> </li>
                                    <li class="hidden-xs"> <a href="#"  data-toggle="modal" data-target="#ModalSignup"> Create Account </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/.navbar-top-->

            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only"> Toggle navigation </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> <span class="icon-bar"> </span> </button>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-cart"> <i class="fa fa-shopping-cart colorWhite"> </i> <span class="cartRespons colorWhite"> Cart ($210.00) </span> </button>
                    <a class="navbar-brand " href="index.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/logo.png" alt="TSHOP"> </a> 

                    <!-- this part for mobile -->
                    <div class="search-box pull-right hidden-lg hidden-md hidden-sm">
                        <div class="input-group">
                            <button class="btn btn-nobg getFullSearch" type="button"> <i class="fa fa-search"> </i> </button>
                        </div>
                        <!-- /input-group --> 

                    </div>
                </div>

                <!-- this part is duplicate from cartMenu  keep it for mobile -->
                <div class="navbar-cart  collapse">
                    <div class="cartMenu  col-lg-4 col-xs-12 col-md-4 ">
                        <div class="w100 miniCartTable scroll-pane">
                            <table  >
                                <tbody>
                                    <tr class="miniCartProduct">
                                        <td style="20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/3.jpg" alt="img"> </a> </div></td>
                                        <td style="40%"><div class="miniCartDescription">
                                                <h4> <a href="product-details.html"> TSHOP T shirt Black </a> </h4>
                                                <span class="size"> 12 x 1.5 L </span>
                                                <div class="price"> <span> $8.80 </span> </div>
                                            </div></td>
                                        <td  style="10%" class="miniCartQuantity"><a > X 1 </a></td>
                                        <td  style="15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                        <td  style="5%" class="delete"><a > x </a></td>
                                    </tr>
                                    <tr class="miniCartProduct">
                                        <td style="20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/2.jpg" alt="img"> </a> </div></td>
                                        <td  style="40%"><div class="miniCartDescription">
                                                <h4> <a href="product-details.html"> TSHOP T shirt Black </a> </h4>
                                                <span class="size"> 12 x 1.5 L </span>
                                                <div class="price"> <span> $8.80 </span> </div>
                                            </div></td>
                                        <td   style="10%" class="miniCartQuantity"><a > X 1 </a></td>
                                        <td  style="15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                        <td  style="5%" class="delete"><a > x </a></td>
                                    </tr>
                                    <tr class="miniCartProduct">
                                        <td style="20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/5.jpg" alt="img"> </a> </div></td>
                                        <td  style="40%"><div class="miniCartDescription">
                                                <h4> <a href="product-details.html"> TSHOP T shirt Black </a> </h4>
                                                <span class="size"> 12 x 1.5 L </span>
                                                <div class="price"> <span> $8.80 </span> </div>
                                            </div></td>
                                        <td   style="10%" class="miniCartQuantity"><a > X 1 </a></td>
                                        <td  style="15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                        <td  style="5%" class="delete"><a > x </a></td>
                                    </tr>
                                    <tr class="miniCartProduct">
                                        <td style="20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/3.jpg" alt="img"> </a> </div></td>
                                        <td  style="40%"><div class="miniCartDescription">
                                                <h4> <a href="product-details.html"> TSHOP T shirt Black </a> </h4>
                                                <span class="size"> 12 x 1.5 L </span>
                                                <div class="price"> <span> $8.80 </span> </div>
                                            </div></td>
                                        <td   style="10%" class="miniCartQuantity"><a > X 1 </a></td>
                                        <td  style="15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                        <td  style="5%" class="delete"><a > x </a></td>
                                    </tr>
                                    <tr class="miniCartProduct">
                                        <td style="20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/3.jpg" alt="img"> </a> </div></td>
                                        <td  style="40%"><div class="miniCartDescription">
                                                <h4> <a href="product-details.html"> TSHOP T shirt Black </a> </h4>
                                                <span class="size"> 12 x 1.5 L </span>
                                                <div class="price"> <span> $8.80 </span> </div>
                                            </div></td>
                                        <td   style="10%" class="miniCartQuantity"><a > X 1 </a></td>
                                        <td  style="15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                        <td  style="5%" class="delete"><a > x </a></td>
                                    </tr>
                                    <tr class="miniCartProduct">
                                        <td style="20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/4.jpg" alt="img"> </a> </div></td>
                                        <td  style="40%"><div class="miniCartDescription">
                                                <h4> <a href="product-details.html"> TSHOP T shirt Black </a> </h4>
                                                <span class="size"> 12 x 1.5 L </span>
                                                <div class="price"> <span> $8.80 </span> </div>
                                            </div></td>
                                        <td   style="10%" class="miniCartQuantity"><a > X 1 </a></td>
                                        <td  style="15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                        <td  style="5%" class="delete"><a > x </a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--/.miniCartTable-->

                        <div class="miniCartFooter  miniCartFooterInMobile text-right">
                            <h3 class="text-right subtotal"> Subtotal: $210 </h3>
                            <a class="btn btn-sm btn-danger"> <i class="fa fa-shopping-cart"> </i> VIEW CART </a> <a class="btn btn-sm btn-primary"> CHECKOUT </a> </div>
                        <!--/.miniCartFooter--> 

                    </div>
                    <!--/.cartMenu--> 
                </div>
                <!--/.navbar-cart-->

                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"> <a href="#"> Home </a> </li>
                        <li class="dropdown megamenu-fullwidth"> <a data-toggle="dropdown" class="dropdown-toggle" href="#"> New Products <b class="caret"> </b> </a>

                        </li>

                        <!-- change width of megamenu = use class > megamenu-fullwidth, megamenu-60width, megamenu-40width -->
                        <li class="dropdown megamenu-80width "> <a data-toggle="dropdown" class="dropdown-toggle" href="#"> SHOP <b class="caret"> </b> </a>
                            <ul class="dropdown-menu">
                                <li class="megamenu-content"> 

                                </li>
                            </ul>
                        </li>
                        <li class="dropdown megamenu-fullwidth"> <a data-toggle="dropdown" class="dropdown-toggle" href="#"> PAGES <b class="caret"> </b> </a>
                            <ul class="dropdown-menu">
                                <li class="megamenu-content"> 


                                </li>
                            </ul>
                        </li>
                    </ul>

                    <!--- this part will be hidden for mobile version -->
                    <div class="nav navbar-nav navbar-right hidden-xs">
                        <div class="dropdown  cartMenu "> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-shopping-cart"> </i> <span class="cartRespons"> Cart ($210.00) </span> <b class="caret"> </b> </a>
                            <div class="dropdown-menu col-lg-4 col-xs-12 col-md-4 ">
                                <div class="w100 miniCartTable scroll-pane">
                                    <table>
                                        <tbody>
                                            <tr class="miniCartProduct">
                                                <td style="width:20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/3.jpg" alt="img"> </a> </div></td>
                                                <td style="width:40%"><div class="miniCartDescription">
                                                        <h4> <a href="product-details.html"> TSHOP Tshirt DO9 </a> </h4>
                                                        <span class="size"> 12 x 1.5 L </span>
                                                        <div class="price"> <span> $22 </span> </div>
                                                    </div></td>
                                                <td  style="width:10%" class="miniCartQuantity"><a > X 1 </a></td>
                                                <td  style="width:15%" class="miniCartSubtotal"><span> $33 </span></td>
                                                <td  style="width:5%" class="delete"><a > x </a></td>
                                            </tr>
                                            <tr class="miniCartProduct">
                                                <td style="width:20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/2.jpg" alt="img"> </a> </div></td>
                                                <td  style="width:40%"><div class="miniCartDescription">
                                                        <h4> <a href="product-details.html"> TShir TSHOP 09 </a> </h4>
                                                        <span class="size"> 12 x 1.5 L </span>
                                                        <div class="price"> <span> $15 </span> </div>
                                                    </div></td>
                                                <td   style="width:10%" class="miniCartQuantity"><a > X 1 </a></td>
                                                <td  style="width:15%" class="miniCartSubtotal"><span> $120 </span></td>
                                                <td  style="width:5%" class="delete"><a > x </a></td>
                                            </tr>
                                            <tr class="miniCartProduct">
                                                <td style="width:20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/5.jpg" alt="img"> </a> </div></td>
                                                <td  style="width:40%"><div class="miniCartDescription">
                                                        <h4> <a href="product-details.html"> Tshir 2014 </a> </h4>
                                                        <span class="size"> 12 x 1.5 L </span>
                                                        <div class="price"> <span> $30 </span> </div>
                                                    </div></td>
                                                <td   style="width:10%" class="miniCartQuantity"><a > X 1 </a></td>
                                                <td  style="width:15%" class="miniCartSubtotal"><span> $80 </span></td>
                                                <td  style="width:5%" class="delete"><a > x </a></td>
                                            </tr>
                                            <tr class="miniCartProduct">
                                                <td style="width:20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/3.jpg" alt="img"> </a> </div></td>
                                                <td  style="width:40%"><div class="miniCartDescription">
                                                        <h4> <a href="product-details.html"> TSHOP T shirt DO20 </a> </h4>
                                                        <span class="size"> 12 x 1.5 L </span>
                                                        <div class="price"> <span> $15 </span> </div>
                                                    </div></td>
                                                <td   style="width:10%" class="miniCartQuantity"><a > X 1 </a></td>
                                                <td  style="width:15%" class="miniCartSubtotal"><span> $55 </span></td>
                                                <td  style="width:5%" class="delete"><a > x </a></td>
                                            </tr>
                                            <tr class="miniCartProduct">
                                                <td style="width:20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/product/4.jpg" alt="img"> </a> </div></td>
                                                <td  style="width:40%"><div class="miniCartDescription">
                                                        <h4> <a href="product-details.html"> T shirt Black </a> </h4>
                                                        <span class="size"> 12 x 1.5 L </span>
                                                        <div class="price"> <span> $44 </span> </div>
                                                    </div></td>
                                                <td   style="width:10%" class="miniCartQuantity"><a > X 1 </a></td>
                                                <td  style="width:15%" class="miniCartSubtotal"><span> $40 </span></td>
                                                <td  style="width:5%" class="delete"><a > x </a></td>
                                            </tr>
                                            <tr class="miniCartProduct">
                                                <td style="width:20%" class="miniCartProductThumb"><div> <a href="product-details.html"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/images/site/winter.jpg" alt="img"> </a> </div></td>
                                                <td  style="width:40%"><div class="miniCartDescription">
                                                        <h4> <a href="product-details.html"> G Star T shirt </a> </h4>
                                                        <span class="size"> 12 x 1.5 L </span>
                                                        <div class="price"> <span> $80 </span> </div>
                                                    </div></td>
                                                <td   style="width:10%" class="miniCartQuantity"><a > X 1 </a></td>
                                                <td  style="width:15%" class="miniCartSubtotal"><span> $8.80 </span></td>
                                                <td  style="width:5%" class="delete"><a > x </a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--/.miniCartTable-->

                                <div class="miniCartFooter text-right">
                                    <h3 class="text-right subtotal"> Subtotal: $210 </h3>
                                    <a class="btn btn-sm btn-danger"> <i class="fa fa-shopping-cart"> </i> VIEW CART </a> <a class="btn btn-sm btn-primary"> CHECKOUT </a> </div>
                                <!--/.miniCartFooter--> 

                            </div>
                            <!--/.dropdown-menu--> 
                        </div>
                        <!--/.cartMenu-->

                        <div class="search-box">
                            <div class="input-group">
                                <button class="btn btn-nobg getFullSearch" type="button"> <i class="fa fa-search"> </i> </button>
                            </div>
                            <!-- /input-group --> 

                        </div>
                        <!--/.search-box --> 
                    </div>
                    <!--/.navbar-nav hidden-xs--> 
                </div>
                <!--/.nav-collapse --> 

            </div>
            <!--/.container -->

            <div class="search-full text-right"> <a class="pull-right search-close"> <i class=" fa fa-times-circle"> </i> </a>
                <div class="searchInputBox pull-right">
                    <input type="search"  data-searchurl="search?=" name="q" placeholder="start typing and hit enter to search" class="search-input">
                    <button class="btn-nobg search-btn" type="submit"> <i class="fa fa-search"> </i> </button>
                </div>
            </div>
            <!--/.search-full--> 

        </div>
        <!-- /.Fixed navbar  -->
        <div class="container main-container"> 
            <div class="row featuredPostContainer globalPadding style2">
            </div>
            <!-- Wrapper -->

            <div class="wrapper">
                <div class="topic">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <h3><?php echo Yii::t('AweCrud.app', 'Administración') ?></h3>
                            </div>
                            <div class="col-sm-8">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <!-- Categories -->
                            <div class="panel-group" id="help-nav">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" href="#help-nav-one" class="collapseWill <?php echo (YiiBase::app()->getController()->getId() == "productoCategoria" || YiiBase::app()->getController()->getId() == "productoSubcategoria" ) ? "" : "pressed collapsed" ?>"> 
                                                Productos <span class="pull-left"> <i class="fa fa-caret-right"></i></span> </a> </h4>

                                    </div>
                                    <div id="help-nav-one" class="panel-collapse collapse <?php echo( YiiBase::app()->getController()->getId() == "productoCategoria" || YiiBase::app()->getController()->getId() == "productoSubcategoria" ) ? "in" : "" ?>" >
                                        <div class="panel-body">

                                            <ul class="nav nav-pills nav-stacked tree">
                                                <li class="dropdown-tree <?php echo YiiBase::app()->getController()->getId() == "productoCategoria" ? "open-tree" : "" ?>"> <a class="dropdown-tree-a"> <span class="badge pull-right">42</span>Categoria </a>
                                                    <ul class="category-level-2 dropdown-menu-tree">

                                                        <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "create" && YiiBase::app()->getController()->getId() == "productoCategoria") ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "create" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoCategoria/create') ?>">Nuevo</a></li>
                                                        <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "admin" && YiiBase::app()->getController()->getId() == "productoCategoria") ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "admin" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoCategoria') ?>">Administrar</a></li>

                                                    </ul>
                                                </li>

                                            </ul>
                                            <ul class="nav nav-pills nav-stacked tree">
                                                <li class="dropdown-tree <?php echo YiiBase::app()->getController()->getId() == "productoSubcategoria" ? "open-tree" : "" ?>"> <a class="dropdown-tree-a"> <span class="badge pull-right">42</span>Subcategoria </a>
                                                    <ul class="category-level-2 dropdown-menu-tree">

                                                        <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "create" && YiiBase::app()->getController()->getId() == "productoSubcategoria" ) ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "create" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoSubcategoria/create') ?>">Nuevo</a></li>
                                                        <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "admin" && YiiBase::app()->getController()->getId() == "productoSubcategoria") ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "admin" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoSubcategoria') ?>">Administrar</a></li>

                                                    </ul>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="panel-group" id="help-nav">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"> <a data-toggle="collapse" href="#help-nav-one" class="collapseWill <?php echo (YiiBase::app()->getController()->getId() == "cliente") ? "" : "pressed collapsed" ?>"> 
                                                    Clientes <span class="pull-left"> <i class="fa fa-caret-right"></i></span> </a> </h4>

                                        </div>
                                        <div id="help-nav-one" class="panel-collapse collapse <?php echo(YiiBase::app()->getController()->getId() == "cliente" ) ? "in" : "" ?>" >
                                            <div class="panel-body">

                                                <ul class="nav nav-pills nav-stacked tree">
                                                    <li class="dropdown-tree <?php echo YiiBase::app()->getController()->getId() == "cliente" ? "open-tree" : "" ?>"> <a class="dropdown-tree-a"> <span class="badge pull-right">42</span>Cliente </a>
                                                        <ul class="category-level-2 dropdown-menu-tree">

                                                            <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "create" && YiiBase::app()->getController()->getId() == "productoCategoria") ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "create" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoCategoria/create') ?>">Nuevo</a></li>
                                                            <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "admin" && YiiBase::app()->getController()->getId() == "productoCategoria") ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "admin" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoCategoria') ?>">Administrar</a></li>

                                                        </ul>
                                                    </li>

                                                </ul>
                                                <ul class="nav nav-pills nav-stacked tree">
                                                    <li class="dropdown-tree <?php echo YiiBase::app()->getController()->getId() == "productoSubcategoria" ? "open-tree" : "" ?>"> <a class="dropdown-tree-a"> <span class="badge pull-right">42</span>Subcategoria </a>
                                                        <ul class="category-level-2 dropdown-menu-tree">

                                                            <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "create" && YiiBase::app()->getController()->getId() == "productoSubcategoria" ) ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "create" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoSubcategoria/create') ?>">Nuevo</a></li>
                                                            <li class="dropdown-tree  <?php echo (YiiBase::app()->getController()->action->id == "admin" && YiiBase::app()->getController()->getId() == "productoSubcategoria") ? "open-tree" : "" ?>"><a  class="<?php echo YiiBase::app()->getController()->action->id == "admin" ? "dropdown-tree-a" : "" ?>" href="<?php echo Yii::app()->createUrl('producto/productoSubcategoria') ?>">Administrar</a></li>

                                                        </ul>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> </div>

                        <div class="col-lg-9">
                            <?php echo $content; ?>
                        </div>
                    </div>
                </div>

            </div> <!-- / .wrapper -->
        </div>


        <!-- MAIN MODAL -->
        <div class="row-fluid">
            <?php
// El modal de la página
            $this->beginWidget('ext.booster.widgets.TbModal', array('id' => 'mainModal', 'options' => array('backdrop' => 'static')));
            $this->endWidget();
            ?>
        </div>
        <div class="row-fluid">
            <?php
// El modal de la página
            $this->beginWidget('ext.booster.widgets.TbModal', array('id' => 'mainBigModal', 'options' => array('backdrop' => 'static')));
            $this->endWidget();
            ?>
        </div>


        <!--Le javascript-->
        <!--==================================================-->  

        <!--Placed at the end of the document so the pages load faster-->  
       <!--<script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/jquery/1.8.3/jquery.js"></script>--> 
       <!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/bootstrap/js/bootstrap.min.js"></script>--> 

        <!--include jqueryCycle plugin-->  
       <!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/jquery.cycle2.min.js"></script>--> 

        <!--include easing plugin-->  
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/jquery.easing.1.3.js"></script> 

        <!--include  parallax plugin-->  
        <script type="text/javascript"  src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/jquery.parallax-1.1.js"></script> 

        <!--optionally include helper plugins-->  
        <script type="text/javascript"  src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/helper-plugins/jquery.mousewheel.min.js"></script> 

        <!--include mCustomScrollbar plugin //Custom Scrollbar-->   

        <script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/jquery.mCustomScrollbar.js"></script> 

        <!--include checkRadio plugin //Custom check & Radio-->   
        <script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/ion-checkRadio/ion.checkRadio.min.js"></script> 

        <!--include grid.js // for equal Div height-->   
        <!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/grids.js"></script>--> 

        <!--include carousel slider plugin-->   
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/owl.carousel.min.js"></script> 

        <!--jQuery minimalect // custom select-->    
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/jquery.minimalect.min.js"></script> 

        <!--include touchspin.js // touch friendly input spinner component-->    
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/bootstrap.touchspin.js"></script> 

        <!--include custom script for only homepage-->   
       <!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/home.js"></script>--> 
        <!--include custom script for site-->   
        <script src="<?php echo Yii::app()->theme->baseUrl; ?>/assets/js/script.js"></script> 

    </body>
</html>

