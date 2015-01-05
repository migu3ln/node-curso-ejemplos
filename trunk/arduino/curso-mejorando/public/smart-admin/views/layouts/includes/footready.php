<!-- BOOTSTRAP JS -->
<!--<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/bootstrap/bootstrap.min.js"></script>-->

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
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/demo.js"></script>

<!-- MAIN APP JS FILE -->
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/app.js"></script>

<!-- PAGE RELATED PLUGIN(S) -->
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/superbox/superbox.min.js"></script>
<!-- Flot Chart Plugin: Flot Engine, Flot Resizer, Flot Tooltip -->
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/flot/jquery.flot.cust.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/flot/jquery.flot.resize.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/flot/jquery.flot.tooltip.js"></script>

<!-- Vector Maps Plugin: Vectormap engine, Vectormap language -->
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/vectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/vectormap/jquery-jvectormap-world-mill-en.js"></script>

<!-- Full Calendar -->
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/fullcalendar/jquery.fullcalendar.min.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/plugin/superbox/superbox.min.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/jquery.validateAjax.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/common-scripts.js"></script>
<!-- ladda submit -->
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/spin.min.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/ladda.min.js"></script>
<script src="<?php echo Yii::app()->theme->baseUrl; ?>/js/ladda.jquery.min.js"></script>
<script>
        var baseUrl = "<?php print Yii::app()->baseUrl . '/'; ?>";
    var themeUrl = "<?php print Yii::app()->theme->baseUrl . '/'; ?>";
                var user_id = "<?php print Yii::app()->user->id; ?>";
</script>
<script>
            $(document).ready(function() {

        // DO NOT REMOVE : GLOBAL FUNCTIONS!
        pageSetUp();
            $('.superbox').SuperBox();
        /*
         * PAGE RELATED SCRIPTS
         */

            $(".js-status-update a").click(function() {
        var selText = $(this).text();
            var $this = $(this);
            $this.parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    $this.parents('.dropdown-menu').find('li').removeClass('active');
            $this.parent().addClass('active');
        });

        data_array = {
            "US": 4977,
            "AU": 4873,
            "IN": 3671,
            "BR": 2476,
            "TR": 1476,
            "CN": 146,
            "CA": 134,
            "BD": 100
        };
    });

</script>
