$reporteData = {};
function viewHighcarts(id_contenedor, data) {
    console.log(data);
    $reporteData = data;
    if (data.cambiar.mostrar) {
        $(id_contenedor).highcharts(data);
    }
    else {
        $pieUsuarios = $(id_contenedor).highcharts();
        $pieUsuarios.series[0].setData(data.series[0].data);
    }
}
var main = function() {
    window.client = io.connect(window.location.href);
    var grid = new Grid();
    grid.render($('#grid'));
    client.on('pintar', function(data) {
        grid.pintar(data.x, data.y, data.color);
    });
    //#1 Declaramos el objeto socket que se conectará en este caso a localhost
    var socket = io.connect('http://localhost');
//#2 Función que muestra un mensaje u otro, dependiendo de la conexión.
    function toggle() {
        $("#disconected").toggleClass("hide");
        $("#connected").toggleClass("hide");
    }

    $otro = {"title": {"text": "Incidencias"}, "credits": {"enabled": false}, "chart": {"height": "400"}, "plotOptions": {"pie": {"allowPointSelect": true, "cursor": "pointer", "dataLabels": {"enabled": false, "format": "<b>{point.name}<\/b>: {point.percentage:.1f} %"}, "showInLegend": true, "tooltip": {"pointFormat": "Porcentaje: <b>{point.percentage:.1f}%<\/b><br>{series.name}: <b>{point.y}<\/b>"}}}, "series": [{"type": "pie", "name": "Incidencia Producto", "data": [["Estado de cuenta", 689], ["Fisura", 616]]}], "mostrar": true};
//    viewHighcarts("pieIncidenciaProductos", data);
//#3 Si estamos conectados, muestra el log y cambia el mensaje
    socket.on('connected', function() {
//        viewHighcarts(data);
        socket.emit('mostrarInfo', {mostrar: true});
        console.log('Conectado!');
        toggle();
    });
//#4 Si pulsas el botón, envía el evento click
    $('#button').on('click', function() {
        socket.emit("click");
//        socket.on('click');
    });
//#5 El servidor nos responde al click con este evento y nos da el número de clicks en el callback.
    socket.on('otherClick', function(clicks) {
        console.log('Click', clicks);
        $('#pulsaciones').html(" Numero de Clicks : " + clicks);
        $('#pulsaciones').replaceWith("<h2 id=pulsaciones> " + "Numero de Clicks : " + clicks + "</h2>");
    });
//#6 Si nos desconectamos, muestra el log y cambia el mensaje.
    socket.on('disconnect', function() {
        console.log('Desconectado!');
        toggle();
    });
    $('#apagar_foco').on('change', function() {
        info = {prender: false};
        socket.emit('prender', info, function(data) {
            console.log(data);
        });
//        socket.on('click');
    });
    $('#prender_foco').on('change', function() {
        console.log("prender jq");
        info = {prender: true};
        socket.emit('prender', info, function(data) {
            console.log(data);
        });
    });
    pageSetUp();
    $(".js-status-update a").click(function() {
        var selText = $(this).text();
        var $this = $(this);
        $this.parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        $this.parents('.dropdown-menu').find('li').removeClass('active');
        $this.parent().addClass('active');
    });
    $('.todo .checkbox > input[type="checkbox"]').click(function() {
        var $this = $(this).parent().parent().parent();
        if ($(this).prop('checked')) {
            $this.addClass("complete");
            $(this).parent().hide();
            $this.slideUp(500, function() {
                $this.clone().prependTo("#sortable3").effect("highlight", {}, 800);
                $this.remove();
                countTasks();
            });
        } else {
        }

    })
    function countTasks() {

        $('.todo-group-title').each(function() {
            var $this = $(this);
            $this.find(".num-of-tasks").text($this.next().find("li").size());
        });
    }


    var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chart").css('color');
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i)
            res.push([i, data[i]])
        return res;
    }

    var updateInterval = 1500;
    $("#updating-chart").val(updateInterval).change(function() {

        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            $(this).val("" + updateInterval);
        }

    });
    var options = {
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        },
        colors: [$UpdatingChartColors],
        series: {
            lines: {
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                            opacity: 0.4
                        }, {
                            opacity: 0
                        }]
                },
                steps: false

            }
        }
    };
    $('input[type="checkbox"]#start_interval').click(function() {
        if ($(this).prop('checked')) {
            $on = true;
            updateInterval = 1500;
            update();
        } else {
            clearInterval(updateInterval);
            $on = false;
        }
    });
    function update() {
        if ($on == true) {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        } else {
            clearInterval(updateInterval)
        }

    }

    var $on = false;
    $(function() {
        var twitter = [[1, 27], [2, 34], [3, 51], [4, 48], [5, 55], [6, 65], [7, 61], [8, 70], [9, 65], [10, 75], [11, 57], [12, 59], [13, 62]], facebook = [[1, 25], [2, 31], [3, 45], [4, 37], [5, 38], [6, 40], [7, 47], [8, 55], [9, 43], [10, 50], [11, 47], [12, 39], [13, 47]], data = [{
                label: "Twitter",
                data: twitter,
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.1
                            }, {
                                opacity: 0.13
                            }]
                    }
                },
                points: {
                    show: true
                }
            }, {
                label: "Facebook",
                data: facebook,
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.1
                            }, {
                                opacity: 0.13
                            }]
                    }
                },
                points: {
                    show: true
                }
            }];
        var options = {
            grid: {
                hoverable: true
            },
            colors: ["#568A89", "#3276B1"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                ticks: [[1, "JAN"], [2, "FEB"], [3, "MAR"], [4, "APR"], [5, "MAY"], [6, "JUN"], [7, "JUL"], [8, "AUG"], [9, "SEP"], [10, "OCT"], [11, "NOV"], [12, "DEC"], [13, "JAN+1"]]
            },
            yaxes: {
            }
        };
    });
    $(function() {

        var trgt = [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]], prft = [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]], sgnups = [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]], toggles = $("#rev-toggles"), target = $("#flotcontainer");
        var data = [{
                label: "Target Profit",
                data: trgt,
                bars: {
                    show: true,
                    align: "center",
                    barWidth: 30 * 30 * 60 * 1000 * 80
                }
            }, {
                label: "Actual Profit",
                data: prft,
                color: '#3276B1',
                lines: {
                    show: true,
                    lineWidth: 3
                },
                points: {
                    show: true
                }
            }, {
                label: "Actual Signups",
                data: sgnups,
                color: '#71843F',
                lines: {
                    show: true,
                    lineWidth: 1
                },
                points: {
                    show: true
                }
            }]

        var options = {
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: {
                tickFormatter: function(val, axis) {
                    return "$" + val;
                },
                max: 1200
            }

        };
        plot2 = null;
        function plotNow() {
            var d = [];
            toggles.find(':checkbox').each(function() {
                if ($(this).is(':checked')) {
                    d.push(data[$(this).attr("name").substr(4, 1)]);
                }
            });
            if (d.length > 0) {
                if (plot2) {
                    plot2.setData(d);
                    plot2.draw();
                } else {
                    plot2 = $.plot(target, d, options);
                }
            }

        }
        ;
        toggles.find(':checkbox').on('change', function() {
            plotNow();
        });
        plotNow()

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
    if ($("#calendar").length) {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var calendar = $('#calendar').fullCalendar({
            editable: true,
            draggable: true,
            selectable: false,
            selectHelper: true,
            unselectAuto: false,
            disableResizing: false,
            header: {
                left: 'title', //,today
                center: 'prev, next, today',
                right: 'month, agendaWeek, agenDay' //month, agendaDay,
            },
            select: function(start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    }, true
                            );
                }
                calendar.fullCalendar('unselect');
            },
            events: [{
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    description: 'long description',
                    className: ["event", "bg-color-greenLight"],
                    icon: 'fa-check'
                }, {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    className: ["event", "bg-color-red"],
                    icon: 'fa-lock'
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    className: ["event", "bg-color-blue"],
                    icon: 'fa-clock-o'
                }, {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false,
                    className: ["event", "bg-color-blue"],
                    icon: 'fa-clock-o'
                }, {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    className: ["event", "bg-color-darken"]
                }, {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    className: ["event", "bg-color-darken"]
                }, {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    className: ["event", "bg-color-darken"]
                }, {
                    title: 'Smartadmin Open Day',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    className: ["event", "bg-color-darken"]
                }],
            eventRender: function(event, element, icon) {
                if (!event.description == "") {
                    element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                }
                if (!event.icon == "") {
                    element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                }
            }
        });
    }
    ;
    $('.fc-header-right, .fc-header-center').hide();
    $('#calendar-buttons #btn-prev').click(function() {
        $('.fc-button-prev').click();
        return false;
    });
    $('#calendar-buttons #btn-next').click(function() {
        $('.fc-button-next').click();
        return false;
    });
    $('#calendar-buttons #btn-today').click(function() {
        $('.fc-button-today').click();
        return false;
    });
    $('#mt').click(function() {
        $('#calendar').fullCalendar('changeView', 'month');
    });
    $('#ag').click(function() {
        $('#calendar').fullCalendar('changeView', 'agendaWeek');
    });
    $('#td').click(function() {
        $('#calendar').fullCalendar('changeView', 'agendaDay');
    });
    $.filter_input = $('#filter-chat-list');
    $.chat_users_container = $('#chat-container > .chat-list-body')
    $.chat_users = $('#chat-users')
    $.chat_list_btn = $('#chat-container > .chat-list-open-close');
    $.chat_body = $('#chat-body');
    jQuery.expr[':'].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    function listFilter(list) {// header is any element, list is an unordered list

        $.filter_input.change(function() {
            var filter = $(this).val();
            if (filter) {
                $.chat_users.find("a:not(:Contains(" + filter + "))").parent().slideUp();
                $.chat_users.find("a:Contains(" + filter + ")").parent().slideDown();
            } else {
                $.chat_users.find("li").slideDown();
            }
            return false;
        }).keyup(function() {
            $(this).change();
        });
    }

    listFilter($.chat_users);
    $.chat_list_btn.click(function() {
        $(this).parent('#chat-container').toggleClass('open');
    })



};
$(document).on('ready', main);
$(document).ready(
        function() {

            pageSetUp();
            $(".js-status-update a").click(function() {
                var selText = $(this).text();
                var $this = $(this);
                $this.parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
                $this.parents('.dropdown-menu').find('li').removeClass('active');
                $this.parent().addClass('active');
            });
            $('.todo .checkbox > input[type="checkbox"]').click(function() {
                var $this = $(this).parent().parent().parent();
                if ($(this).prop('checked')) {
                    $this.addClass("complete");
                    $(this).parent().hide();
                    $this.slideUp(500, function() {
                        $this.clone().prependTo("#sortable3").effect("highlight", {}, 800);
                        $this.remove();
                        countTasks();
                    });
                } else {
                }

            })
            function countTasks() {

                $('.todo-group-title').each(function() {
                    var $this = $(this);
                    $this.find(".num-of-tasks").text($this.next().find("li").size());
                });
            }


            var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chart").css('color');
            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50;
                    var y = prev + Math.random() * 10 - 5;
                    if (y < 0)
                        y = 0;
                    if (y > 100)
                        y = 100;
                    data.push(y);
                }

                var res = [];
                for (var i = 0; i < data.length; ++i)
                    res.push([i, data[i]])
                return res;
            }

            var updateInterval = 1500;
            $("#updating-chart").val(updateInterval).change(function() {

                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    $(this).val("" + updateInterval);
                }

            });
            var options = {
                yaxis: {
                    min: 0,
                    max: 100
                },
                xaxis: {
                    min: 0,
                    max: 100
                },
                colors: [$UpdatingChartColors],
                series: {
                    lines: {
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 0.4
                                }, {
                                    opacity: 0
                                }]
                        },
                        steps: false

                    }
                }
            };
            $('input[type="checkbox"]#start_interval').click(function() {
                if ($(this).prop('checked')) {
                    $on = true;
                    updateInterval = 1500;
                    update();
                } else {
                    clearInterval(updateInterval);
                    $on = false;
                }
            });
            function update() {
                if ($on == true) {
                    plot.setData([getRandomData()]);
                    plot.draw();
                    setTimeout(update, updateInterval);
                } else {
                    clearInterval(updateInterval)
                }

            }

            var $on = false;
            $(function() {
                var twitter = [[1, 27], [2, 34], [3, 51], [4, 48], [5, 55], [6, 65], [7, 61], [8, 70], [9, 65], [10, 75], [11, 57], [12, 59], [13, 62]], facebook = [[1, 25], [2, 31], [3, 45], [4, 37], [5, 38], [6, 40], [7, 47], [8, 55], [9, 43], [10, 50], [11, 47], [12, 39], [13, 47]], data = [{
                        label: "Twitter",
                        data: twitter,
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: true,
                            fillColor: {
                                colors: [{
                                        opacity: 0.1
                                    }, {
                                        opacity: 0.13
                                    }]
                            }
                        },
                        points: {
                            show: true
                        }
                    }, {
                        label: "Facebook",
                        data: facebook,
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: true,
                            fillColor: {
                                colors: [{
                                        opacity: 0.1
                                    }, {
                                        opacity: 0.13
                                    }]
                            }
                        },
                        points: {
                            show: true
                        }
                    }];
                var options = {
                    grid: {
                        hoverable: true
                    },
                    colors: ["#568A89", "#3276B1"],
                    tooltip: true,
                    tooltipOpts: {
                        defaultTheme: false
                    },
                    xaxis: {
                        ticks: [[1, "JAN"], [2, "FEB"], [3, "MAR"], [4, "APR"], [5, "MAY"], [6, "JUN"], [7, "JUL"], [8, "AUG"], [9, "SEP"], [10, "OCT"], [11, "NOV"], [12, "DEC"], [13, "JAN+1"]]
                    },
                    yaxes: {
                    }
                };
            });
            $(function() {

                var trgt = [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]], prft = [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]], sgnups = [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]], toggles = $("#rev-toggles"), target = $("#flotcontainer");
                var data = [{
                        label: "Target Profit",
                        data: trgt,
                        bars: {
                            show: true,
                            align: "center",
                            barWidth: 30 * 30 * 60 * 1000 * 80
                        }
                    }, {
                        label: "Actual Profit",
                        data: prft,
                        color: '#3276B1',
                        lines: {
                            show: true,
                            lineWidth: 3
                        },
                        points: {
                            show: true
                        }
                    }, {
                        label: "Actual Signups",
                        data: sgnups,
                        color: '#71843F',
                        lines: {
                            show: true,
                            lineWidth: 1
                        },
                        points: {
                            show: true
                        }
                    }]

                var options = {
                    grid: {
                        hoverable: true
                    },
                    tooltip: true,
                    tooltipOpts: {
                        defaultTheme: false
                    },
                    xaxis: {
                        mode: "time"
                    },
                    yaxes: {
                        tickFormatter: function(val, axis) {
                            return "$" + val;
                        },
                        max: 1200
                    }

                };
                plot2 = null;
                function plotNow() {
                    var d = [];
                    toggles.find(':checkbox').each(function() {
                        if ($(this).is(':checked')) {
                            d.push(data[$(this).attr("name").substr(4, 1)]);
                        }
                    });
                    if (d.length > 0) {
                        if (plot2) {
                            plot2.setData(d);
                            plot2.draw();
                        } else {
                            plot2 = $.plot(target, d, options);
                        }
                    }

                }
                ;
                toggles.find(':checkbox').on('change', function() {
                    plotNow();
                });
                plotNow()

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
            /*
             * FULL CALENDAR JS
             */

            if ($("#calendar").length) {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendar').fullCalendar({
                    editable: true,
                    draggable: true,
                    selectable: false,
                    selectHelper: true,
                    unselectAuto: false,
                    disableResizing: false,
                    header: {
                        left: 'title', //,today
                        center: 'prev, next, today',
                        right: 'month, agendaWeek, agenDay' //month, agendaDay,
                    },
                    select: function(start, end, allDay) {
                        var title = prompt('Event Title:');
                        if (title) {
                            calendar.fullCalendar('renderEvent', {
                                title: title,
                                start: start,
                                end: end,
                                allDay: allDay
                            }, true
                                    );
                        }
                        calendar.fullCalendar('unselect');
                    },
                    events: [{
                            title: 'All Day Event',
                            start: new Date(y, m, 1),
                            description: 'long description',
                            className: ["event", "bg-color-greenLight"],
                            icon: 'fa-check'
                        }, {
                            title: 'Long Event',
                            start: new Date(y, m, d - 5),
                            end: new Date(y, m, d - 2),
                            className: ["event", "bg-color-red"],
                            icon: 'fa-lock'
                        }, {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d - 3, 16, 0),
                            allDay: false,
                            className: ["event", "bg-color-blue"],
                            icon: 'fa-clock-o'
                        }, {
                            id: 999,
                            title: 'Repeating Event',
                            start: new Date(y, m, d + 4, 16, 0),
                            allDay: false,
                            className: ["event", "bg-color-blue"],
                            icon: 'fa-clock-o'
                        }, {
                            title: 'Meeting',
                            start: new Date(y, m, d, 10, 30),
                            allDay: false,
                            className: ["event", "bg-color-darken"]
                        }, {
                            title: 'Lunch',
                            start: new Date(y, m, d, 12, 0),
                            end: new Date(y, m, d, 14, 0),
                            allDay: false,
                            className: ["event", "bg-color-darken"]
                        }, {
                            title: 'Birthday Party',
                            start: new Date(y, m, d + 1, 19, 0),
                            end: new Date(y, m, d + 1, 22, 30),
                            allDay: false,
                            className: ["event", "bg-color-darken"]
                        }, {
                            title: 'Smartadmin Open Day',
                            start: new Date(y, m, 28),
                            end: new Date(y, m, 29),
                            className: ["event", "bg-color-darken"]
                        }],
                    eventRender: function(event, element, icon) {
                        if (!event.description == "") {
                            element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                        }
                        if (!event.icon == "") {
                            element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                        }
                    }
                });
            }
            ;
            $('.fc-header-right, .fc-header-center').hide();
            $('#calendar-buttons #btn-prev').click(function() {
                $('.fc-button-prev').click();
                return false;
            });
            $('#calendar-buttons #btn-next').click(function() {
                $('.fc-button-next').click();
                return false;
            });
            $('#calendar-buttons #btn-today').click(function() {
                $('.fc-button-today').click();
                return false;
            });
            $('#mt').click(function() {
                $('#calendar').fullCalendar('changeView', 'month');
            });
            $('#ag').click(function() {
                $('#calendar').fullCalendar('changeView', 'agendaWeek');
            });
            $('#td').click(function() {
                $('#calendar').fullCalendar('changeView', 'agendaDay');
            });
            $.filter_input = $('#filter-chat-list');
            $.chat_users_container = $('#chat-container > .chat-list-body')
            $.chat_users = $('#chat-users')
            $.chat_list_btn = $('#chat-container > .chat-list-open-close');
            $.chat_body = $('#chat-body');
            jQuery.expr[':'].Contains = function(a, i, m) {
                return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
            };
            function listFilter(list) {// header is any element, list is an unordered list

                $.filter_input.change(function() {
                    var filter = $(this).val();
                    if (filter) {
                        $.chat_users.find("a:not(:Contains(" + filter + "))").parent().slideUp();
                        $.chat_users.find("a:Contains(" + filter + ")").parent().slideDown();
                    } else {
                        $.chat_users.find("li").slideDown();
                    }
                    return false;
                }).keyup(function() {
                    $(this).change();
                });
            }

            listFilter($.chat_users);
            $.chat_list_btn.click(function() {
                $(this).parent('#chat-container').toggleClass('open');
            });
//            $('#color').colorpicker(
//                    ).on('click', function() {
//                $('#color').colorpicker('hide');
//
//            }
//            );
            var bodyStyle = $('body')[0].style;
            $('#color').colorpicker().on('changeColor', function(ev) {
                $('#color').colorpicker('hide');
                bodyStyle.backgroundColor = ev.color.toHex();
            });
        }


);
