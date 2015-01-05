<!DOCTYPE html>
<html lang="en-us">
    <head>

        <?php $this->renderPartial('//layouts/includes/head1'); ?>

    </head>
    <body class="">
        <!-- possible classes: minified, fixed-ribbon, fixed-header, fixed-width-->

        <!-- HEADER -->
        <header id="header">
            <div id="logo-group">

                <!-- PLACE YOUR LOGO HERE -->
                <span id="logo"> <img src="<?php echo Yii::app()->theme->baseUrl; ?>/img/logo.png" alt="SmartAdmin"> </span>
                <!-- END LOGO PLACEHOLDER -->

                <!-- Note: The activity badge color changes when clicked and resets the number to 0
                Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->
                <span id="activity" class="activity-dropdown"> <i class="fa fa-user"></i> <b class="badge"> 21 </b> </span>

                <!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->
                <div class="ajax-dropdown">

                    <!-- the ID links are fetched via AJAX to the ajax container "ajax-notifications" -->
                    <div class="btn-group btn-group-justified" data-toggle="buttons">
                        <label class="btn btn-default">
                            <input type="radio" name="activity" id="ajax/notify/mail.html">
                            Msgs (14) </label>
                        <label class="btn btn-default">
                            <input type="radio" name="activity" id="ajax/notify/notifications.html">
                            notify (3) </label>
                        <label class="btn btn-default">
                            <input type="radio" name="activity" id="ajax/notify/tasks.html">
                            Tasks (4) </label>
                    </div>

                    <!-- notification content -->
                    <div class="ajax-notifications custom-scroll">

                        <div class="alert alert-transparent">
                            <h4>Click a button to show messages here</h4>
                            This blank page message helps protect your privacy, or you can show the first message here automatically.
                        </div>

                        <i class="fa fa-lock fa-4x fa-border"></i>

                    </div>
                    <!-- end notification content -->

                    <!-- footer: refresh area -->
                    <span> Last updated on: 12/12/2013 9:43AM
                        <button type="button" data-loading-text="<i class='fa fa-refresh fa-spin'></i> Loading..." class="btn btn-xs btn-default pull-right">
                            <i class="fa fa-refresh"></i>
                        </button> </span>
                    <!-- end footer -->

                </div>
                <!-- END AJAX-DROPDOWN -->
            </div>

            <!-- projects dropdown -->
            <div id="project-context">

                <span class="label">Projects:</span>
                <span id="project-selector" class="popover-trigger-element dropdown-toggle" data-toggle="dropdown">Recent projects <i class="fa fa-angle-down"></i></span>

                <!-- Suggestion: populate this list with fetch and push technique -->
                <ul class="dropdown-menu">
                    <li>
                        <a href="javascript:void(0);">Online e-merchant management system - attaching integration with the iOS</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Notes on pipeline upgradee</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Assesment Report for merchant account</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="javascript:void(0);"><i class="fa fa-power-off"></i> Clear</a>
                    </li>
                </ul>
                <!-- end dropdown-menu-->

            </div>
            <!-- end projects dropdown -->

            <!-- pulled right: nav area -->
            <div class="pull-right">

                <!-- collapse menu button -->
                <div id="hide-menu" class="btn-header pull-right">
                    <span> <a href="javascript:void(0);" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
                </div>

                <ul class="header-dropdown-list hidden-xs">
                    <li>

                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
                            <img alt="" src="<?php echo Yii::app()->theme->baseUrl; ?>/img/flags/ecu.png"> 

                            <span class="username"><?php echo Yii::app()->user->name ? Yii::app()->user->name : "Guest" ?></span>
                        </a>
                        <ul class="dropdown-menu pull-right">
                            <?php if (!Yii::app()->user->isGuest): ?>
                                <li><?php echo CHtml::link('<i class="icon-user"></i>&nbsp;&nbsp;Mi Cuenta', array('/cruge/ui/editprofile')) ?></a></li>
                                <?php if (Yii::app()->user->checkAccess('admin')): ?>
                                    <li><?php echo CHtml::link('<i class="icon-cog"></i>&nbsp;&nbsp;Administración', Yii::app()->user->ui->userManagementAdminUrl) ?></li>
                                <?php endif; ?>
                                <li><?php // echo CHtml::link('<i class="icon-key"></i>&nbsp;&nbsp;Cerrar Sesión', Yii::app()->user->ui->logoutUrl)    ?></a></li>
                            <?php else: ?>
                                <li><?php echo CHtml::link('<i class="icon-key"></i>&nbsp;&nbsp;Iniciar Sesión', Yii::app()->user->ui->loginUrl) ?></a></li>
                            <?php endif; ?>
                        </ul>
                    </li>
                </ul>
                <!-- end collapse menu -->

                <!-- logout button -->
                <?php if (Yii::app()->user->isGuest): ?>
                    <!--                <div id="logout" class="btn-header transparent pull-right hidden-lg hidden-md hidden-sm hidden-xs">
                                        <span> <a href="<?php echo Yii::app()->baseUrl ?>/cruge/ui/logout"><i class="fa fa-sign-out "></i></a> </span>
                                    </div>-->
                <?php else: ?>
                    <div id="logout" class="btn-header transparent pull-right">
                        <span> <a href="<?php echo Yii::app()->baseUrl ?>/cruge/ui/logout"  title="Cerrar Sesión"><i class="fa fa-sign-out"></i></a> </span>
                    </div>
                <?php endif; ?>
                <!-- end logout button -->

                <!-- search mobile button (this is hidden till mobile view port) -->
                <div id="search-mobile" class="btn-header transparent pull-right">
                    <span> <a href="javascript:void(0)" title="Search"><i class="fa fa-search"></i></a> </span>
                </div>
                <!-- end search mobile button -->

                <!-- input: search field -->
                <!--                <form action="#search.html" class="header-search pull-right">
                                    <input type="text" placeholder="Find reports and more" id="search-fld">
                                    <button type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                    <a href="javascript:void(0);" id="cancel-search-js" title="Cancel Search"><i class="fa fa-times"></i></a>
                                </form>-->
                <!-- end input: search field -->

                <!-- multiple lang dropdown : find all flags in the image folder -->

                <!-- end multiple lang -->

            </div>
            <!-- end pulled right: nav area -->

        </header>
        <!-- END HEADER -->

        <!-- Left panel : Navigation area -->
        <!-- Note: This width of the aside area can be adjusted through LESS variables -->
        <aside id="left-panel">

            <!-- User info -->
            <div class="login-info">
                <span> <!-- User image size is adjusted inside CSS, it should stay as it --> 

                    <a href="javascript:void(0);" id="show-shortcut">
                        <img src="<?php echo Yii::app()->theme->baseUrl; ?>/img/avatars/sunny.png" alt="me" class="online" /> 
                        <span>
                            SISTEMA 
                        </span>
                        <i class="fa fa-angle-down"></i>
                    </a> 

                </span>
            </div>
            <!-- end user info -->

            <!-- NAVIGATION : This navigation is also responsive

            To make this navigation dynamic please make sure to link the node
            (the reference to the nav > ul) after page load. Or the navigation
            will not initialize.
            -->
            <nav>
                    <!-- NOTE: Notice the gaps after each icon usage <i></i>..
                    Please note that these links work a bit different than
                    traditional hre="" links. See documentation for details.
                -->


                <?php
//                $a = Menu::getMenu($this);
//                var_dump($this);
                $this->widget('zii.widgets.CMenu', array(
                    'id' => 'menu_principal',
                    'items' => $this->admin ? Menu::getAdminMenu($this) : Menu::getMenu($this),
                    'encodeLabel' => false,
//                    'itemCssClass' => 'active',
//                    'activeCssClass' => 'active',
//                    'htmlOptions' => array('style' => $this->admin ? "admin" : $this->layout == "//layouts/column2" ? "COL2" : $this->layout),
//                    'submenuHtmlOptions' => array('class' => 'sub')
                ));
                ?>

            </nav>
            <span class="minifyme"> <i class="fa fa-arrow-circle-left hit"></i> </span>

        </aside>
        <!-- END NAVIGATION -->

        <!-- MAIN PANEL -->
        <div id="main" role="main">

            <!-- RIBBON -->
            <div id="ribbon">

                <span class="ribbon-button-alignment"> <span id="refresh" class="btn btn-ribbon" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true"><i class="fa fa-refresh"></i></span> </span>

                <!-- breadcrumb -->
                <ol class="breadcrumb">
                    <li>Home</li><li>Dashboard</li>
                </ol>
                <!-- end breadcrumb -->

                <!-- You can also add more buttons to the
                ribbon for further usability

                Example below:

                <span class="ribbon-button-alignment pull-right">
                <span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>
                <span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>
                <span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>
                </span> -->

            </div>
            <!-- END RIBBON -->

            <!-- MAIN CONTENT -->
       
                <?php echo $content; ?>

            <!-- END MAIN CONTENT -->

        </div>
        <!-- END MAIN PANEL -->

        <!-- SHORTCUT AREA : With large tiles (activated via clicking user name tag)
        Note: These tiles are completely responsive,
        you can add as many as you like
        -->
        <div id="shortcut">
            <ul>
                <li>
                    <a href="#inbox.html" class="jarvismetro-tile big-cubes bg-color-blue"> <span class="iconbox"> <i class="fa fa-envelope fa-4x"></i> <span>Mail <span class="label pull-right bg-color-darken">14</span></span> </span> </a>
                </li>
                <li>
                    <a href="#calendar.html" class="jarvismetro-tile big-cubes bg-color-orangeDark"> <span class="iconbox"> <i class="fa fa-calendar fa-4x"></i> <span>Calendar</span> </span> </a>
                </li>
                <li>
                    <a href="#gmap-xml.html" class="jarvismetro-tile big-cubes bg-color-purple"> <span class="iconbox"> <i class="fa fa-map-marker fa-4x"></i> <span>Maps</span> </span> </a>
                </li>
                <li>
                    <a href="#invoice.html" class="jarvismetro-tile big-cubes bg-color-blueDark"> <span class="iconbox"> <i class="fa fa-book fa-4x"></i> <span>Invoice <span class="label pull-right bg-color-darken">99</span></span> </span> </a>
                </li>
                <li>
                    <a href="#gallery.html" class="jarvismetro-tile big-cubes bg-color-greenLight"> <span class="iconbox"> <i class="fa fa-picture-o fa-4x"></i> <span>Gallery </span> </span> </a>
                </li>
                <li>
                    <a href="javascript:void(0);" class="jarvismetro-tile big-cubes selected bg-color-pinkDark"> <span class="iconbox"> <i class="fa fa-user fa-4x"></i> <span>My Profile </span> </span> </a>
                </li>
            </ul>
        </div>
        <!-- END SHORTCUT AREA -->

        <!--================================================== -->

        <!-- PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)-->
        <!--<script data-pace-options='{ "restartOnRequestAfter": true }' src="<?php // echo Yii::app()->theme->baseUrl;            ?>/js/plugin/pace/pace.min.js"></script>-->

        <!-- Link to Google CDN's jQuery + jQueryUI; fall back to local -->
        <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>-->
        <script>

        </script>

        <!--<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>-->
        <script>

        </script>
        <?php $this->renderPartial('//layouts/includes/foot1'); ?>

    </body>

</html>