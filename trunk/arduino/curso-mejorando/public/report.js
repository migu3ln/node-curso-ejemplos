var dataCh, fecha_desde, fecha_hasta;
var parametros;
$(function() {
    init();
    var seleccionados = $('#s2id_Producto_oportunidad_etapa_ids').select2("val");
    if (seleccionados.length == 0) {
        $('#s2id_Producto_oportunidad_etapa_ids').select2("val", "0");
    }
    viewReportes();
});
/**
 * @author Miguel Alba <malba@tradesystem.com.ec>
 * @returns {undefined}
 */
function init() {
    $("#Producto_categoria_id").select2({
        placeholder: "Seleccione una Sección",
        initSelection: function(element, callback) {
            if ($(element).val()) {
                var data = {id: element.val(), text: $(element).attr('selected-text')};
                callback(data);
            }
        },
        ajax: {// instead of writing the function to execute the request we use Select2's convenient helper
            url: baseUrl + "productos/productoCategoria/ajaxlistCategorias",
            type: "get",
            dataType: 'json',
            data: function(term, page) {
                return {
                    search_value: term, // search term
                };
            },
            results: function(data, page) { // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to alter remote JSON data
                return {results: data};
            }
        },
        allowClear: true
    });
    $("#Producto_categoria_id").on('change', function() {
        viewReportes("oportunidad");
        viewReportes("incidencia");
    });
    $("#Producto_subcategoria_id").select2({
        placeholder: "Seleccione una División",
        initSelection: function(element, callback) {
            if ($(element).val()) {
                var data = {id: element.val(), text: $(element).attr('selected-text')};
                callback(data);
            }
        },
        ajax: {// instead of writing the function to execute the request we use Select2's convenient helper
            url: baseUrl + "productos/productoSubCategoria/ajaxlistSubcategorias",
            type: "get",
            dataType: 'json',
            data: function(term, page) {
                return {
                    search_value: term, // search term
                };
            },
            results: function(data, page) { // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to alter remote JSON data
                return {results: data};
            }
        },
        allowClear: true
//        multiple: true,
    });
    $("#Producto_subcategoria_id").on('change', function() {
        viewReportes("oportunidad");
    });
    $("#Producto_oportunidad_etapa_ids").select2({
        placeholder: "Seleccione una Etapa",
        initSelection: function(element, callback) {

            if ($(element).val()) {
                if (data) {
                    callback(data);
                }
            }
        },
        ajax: {// instead of writing the function to execute the request we use Select2's convenient helper
            url: baseUrl + "oportunidades/oportunidadEtapa/ajaxlistOportunidadEtapa",
            type: "get",
            dataType: 'json',
            data: function(term, page) {
                return {
                    fechas: dataFecha ? dataFecha : null,
                    search_value: term,
                };
            },
            results: function(data, page) { // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to alter remote JSON data

                datos = {results: data};
                return datos;
            }
        },
        multiple: true,
        allowClear: true
    });
    $("#Producto_oportunidad_etapa_ids").on('change', function() {
        viewReportes('oportunidad');
    });
    $("#Producto_incidenciaMotivoId").select2({
        placeholder: "Seleccione una Sección",
        initSelection: function(element, callback) {

            if ($(element).val()) {
                var data = {id: element.val(), text: $(element).attr('selected-text')};
                callback(data);
            }

        },
        ajax: {// instead of writing the function to execute the request we use Select2's convenient helper
            url: baseUrl + "incidencias/incidenciaMotivo/ajaxlistIncidenciaMotivo",
            type: "get",
            dataType: 'json',
            data: function(term, page) {
                return {
                    search_value: term, // search term
                    fechas: dataFecha ? dataFecha : null,
                };
            },
            results: function(data, page) { // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to alter remote JSON data

                datos = {results: data};
                return datos;
            }
        },
        allowClear: true
    });
    $("#Producto_incidenciaMotivoId").on('change', function() {
        select2vacio('s2id_Producto_incidenciaSubmotivoId');
        viewReportes('incidencia');
    });
    $("#Producto_incidenciaSubmotivoId").select2({
        placeholder: "Seleccione un Motivo",
        initSelection: function(element, callback) {

            if ($(element).val()) {
                if (dataIncidencia) {
                    callback(dataIncidencia);
                }
            }

        },
        ajax: {// instead of writing the function to execute the request we use Select2's convenient helper
            url: baseUrl + "incidencias/incidenciaSubmotivo/ajaxlistIncidenciaSubMotivo",
            type: "get",
            dataType: 'json',
            data: function(term, page) {
                return {
                    search_value: term,
                    fechas: dataFecha ? dataFecha : null,
                    incidencia_motivo_id: ($("#Producto_incidenciaMotivoId").val() !== "") ? $("#Producto_incidenciaMotivoId").val() : null, // search term
                };
            },
            results: function(data, page) { // parse the results into the format expected by Select2.
                datos = {results: data};
                return datos;
            }
        },
        allowClear: true,
        multiple: true
    });
    $("#Producto_incidenciaSubmotivoId").on('change', function() {
        viewReportes('incidencia');
    });
    //input de zona
    zona_id = $('#Producto_zonas');
    zona_id.select2({
        multiple: true,
        placeholder: "Seleccione una Zona",
        ajax: {// instead of writing the function to execute the request we use Select2's convenient helper
            url: baseUrl + "crm/zona/ajaxlistZonasProducto",
            type: "get",
            dataType: 'json',
            data: function(term, page) {
                return {
                    search_value: term, // search term
                };
            },
            results: function(data, page) { // parse the results into the format expected by Select2.
                // since we are using custom formatting functions we do not need to alter remote JSON data
                return {results: data};
            }
        }
    });
    zona_id.on('change', function() {
        viewReportes("incidencia");
        viewReportes("oportunidad");
    });
}




function select2vacio(id) {
    if (id == 0) {
        $('#' + id).select2("val", "");
    }
    else {
        $('#' + id).select2("val", "");
    }
}

function select2validar(event, id) {
    var seleccionados = $('#' + id).select2("val");
    if (seleccionados.length == 0) {
        $('#' + id).select2("val", "0");
    }
    else if ($.inArray("0", seleccionados) != -1 && seleccionados.length > 1) {
        seleccionados.splice($.inArray("0", seleccionados), 1);
        $('#' + id).select2("val", seleccionados);
    }
    if (event.added) {
        if (event.added.id == 0) {
            select2vacio(id);
        }
    }
}
function cambiar() {
    dataFecha = fecha_desde + '/' + fecha_hasta;
    viewReportes();
}
/**Agrega las diferentes caracteristicas a los divs(Al no haber informacion del reporte, y cuando existe datos)
 *  q muestran la informacion de los highcharts
 * @author Miguel Alba <malba@tradesystem.com.ec> 
 * @param {type} $id_div
 * @returns {undefined}
 */
function viewDivsContenedoresCharts($id_div, $mostrar) {
    if ($mostrar) {//Mostrar los divs contenedores y ocultar el div de vacio
        if ($($id_div).hasClass("hidden")) {
            $($id_div).removeClass("hidden");
        }
        if (!$($id_div + "Empty").hasClass("hidden")) {
            $($id_div + "Empty").addClass("hidden");
        }

    }
    else {

        if (!$($id_div).hasClass("hidden")) {
            $($id_div).addClass("hidden");
        }
        if ($($id_div + "Empty").hasClass("hidden")) {
            $($id_div + "Empty").removeClass("hidden");
        }
    }

}

/**
 * Retorna todos los parametros para generar el chart :en la primera posicion se encuentra la informacion para 
 * al accion ajax en l controlador, 2 posicion la url para dirigirse a la aaccion
 * @author Miguel Alba <malba@tradesystem.com.ec>
 * @param {type} $id_contenedor
 * @returns {undefined}
 */
function getparamsChart($id_contenedor) {
    $parametrosTotal = {};
    $categoria_id = $("#Producto_categoria_id").val() ? $("#Producto_categoria_id").val() : null;
    $subcategoria_id = $("#Producto_subcategoria_id").val() ? $("#Producto_subcategoria_id").val() : null;
    $zona_id = zona_id.val() ? zona_id.val() : null;
    switch ($id_contenedor) {
        case '#funnelProductos':
            $url = "oportunidades/oportunidadProducto/ajaxFunnelProducto";
            $oportunidades_etapas_ids = $("#Producto_oportunidad_etapa_ids").val() ? $("#Producto_oportunidad_etapa_ids").val() : null;
            parametros = {fechas: dataFecha, categoria_id: $categoria_id, subcategoria_id: $subcategoria_id, oportunidad_etapa_ids: $oportunidades_etapas_ids, zona_id: $zona_id};
            break;
        case '#pieIncidenciaProductos':
            //Grafico Pie Productos
            $url = "incidencias/incidenciaProducto/ajaxPieIncidenciaProducto";
            $incidenciaMotivoId = $("#Producto_incidenciaMotivoId").val() ? $("#Producto_incidenciaMotivoId").val() : null;
            $incidenciaSubmotivoId = $("#Producto_incidenciaSubmotivoId ").val() ? $("#Producto_incidenciaSubmotivoId").val() : null;
            parametros = {fechas: dataFecha, incidenciaMotivoId: $incidenciaMotivoId, incidenciaSubmotivoId: $incidenciaSubmotivoId, categoria_id: $categoria_id, zona_id: $zona_id};
            break;
        case '#barrasProductosIncidencia':
            //Grafico Productos Incidencia Barras
            $url = "productos/producto/ajaxBarrasIncidenciaProducto";
            parametros = {fechas: dataFecha, categoria_id: $categoria_id, subcategoria_id: $subcategoria_id, zona_id: $zona_id};
            break;
        case '#barrasProductosOportunidad':
            //Grafico Productos Oportunidad Barras
            $url = "productos/producto/ajaxBarrasOportunidadProducto";
            parametros = {fechas: dataFecha, categoria_id: $categoria_id, subcategoria_id: $subcategoria_id, zona_id: $zona_id};
            break;
        case '#rankingProductosColumn':
            $url = "productos/producto/ajaxGenerateReporteRankingProductos";
            parametros = {fechas: dataFecha, categoria_id: $categoria_id, subcategoria_id: $subcategoria_id, zona_id: $zona_id};
            break;
    }
    $parametrosTotal = {parametros: parametros, url: $url};
    return  $parametrosTotal;
}
function viewReportes($tipo) {
    if ($tipo) {
        if ($tipo == 'incidencia') {
            $parametrosTotal = getparamsChart("#pieIncidenciaProductos");
            viewHighcarts("#pieIncidenciaProductos", $parametrosTotal.url, $parametrosTotal.parametros, function(data) {
                $pieProductosIncidenciaChart = $("#pieIncidenciaProductos").highcharts();
                if (data.mostrar) {
                    viewDivsContenedoresCharts("#pieIncidenciaProductos", true);
                    $pieProductosIncidenciaChart.series[0].setData(data.series[0].data);
                }
                else {
                    viewDivsContenedoresCharts("#pieIncidenciaProductos", false);
                }

            });
            $parametrosTotal = getparamsChart("#barrasProductosIncidencia");
            viewHighcarts("#barrasProductosIncidencia", $parametrosTotal.url, $parametrosTotal.parametros);
            //Grafico Productos Facturas Column
            $parametrosTotal = getparamsChart("#rankingProductosColumn");
            viewHighcarts("#rankingProductosColumn", $parametrosTotal.url, $parametrosTotal.parametros);
        } else if ($tipo == 'oportunidad') {
            $parametrosTotal = getparamsChart("#funnelProductos");
            viewHighcarts("#funnelProductos", $parametrosTotal.url, $parametrosTotal.parametros, function(data) {
                $funnelOportunidadProductosChart = $("#funnelProductos").highcharts();
                if (data.mostrar) {
                    viewDivsContenedoresCharts("#funnelProductos", true);
                    $funnelOportunidadProductosChart.series[0].setData(data.series[0].data);
                }
                else {
                    viewDivsContenedoresCharts("#funnelProductos", false);
                }
            });
            //Grafico Productos Oportunidad Barras
            $parametrosTotal = getparamsChart("#barrasProductosOportunidad");
            viewHighcarts("#barrasProductosOportunidad", $parametrosTotal.url, $parametrosTotal.parametros);
        }
    } else {
        $parametrosTotal = getparamsChart("#funnelProductos");
        viewHighcarts("#funnelProductos", $parametrosTotal.url, $parametrosTotal.parametros);
        //Grafico Pie Productos
        $parametrosTotal = getparamsChart("#pieIncidenciaProductos");
        viewHighcarts("#pieIncidenciaProductos", $parametrosTotal.url, $parametrosTotal.parametros);
        //Grafico Productos Incidencia Barras
        $parametrosTotal = getparamsChart("#barrasProductosIncidencia");
        viewHighcarts("#barrasProductosIncidencia", $parametrosTotal.url, $parametrosTotal.parametros);
        //Grafico Productos Oportunidad Barras
        $parametrosTotal = getparamsChart("#barrasProductosOportunidad");
        viewHighcarts("#barrasProductosOportunidad", $parametrosTotal.url, $parametrosTotal.parametros);
        //Grafico Productos Facturas Column
        $parametrosTotal = getparamsChart("#rankingProductosColumn");
        viewHighcarts("#rankingProductosColumn", $parametrosTotal.url, $parametrosTotal.parametros);
        //
    }


}


