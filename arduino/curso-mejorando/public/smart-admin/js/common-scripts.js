

/**
 * 
 * @param {cadena} url
 * @returns {undefined}
 */
function viewModal(url, CallBack, tipo)
{
    $.ajax({
        type: "POST",
        url: baseUrl + url,
        beforeSend: function() {
            showModalLoading(tipo);
        },
        success: function(data) {
            showModalData(data, tipo);
            CallBack();
        }
    });
}

function showModalLoading(tipo) {
    var html = "";

    html += '<div class="modal-dialog">';
    html += '<div class="modal-content">';
    html += "<div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h4><i class='icon-refresh'></i> Cargando</h4></div>";
    html += "<div class='modal-body'><div class='loading'><img src='" + themeUrl + "img/loading.gif' /></div></div>";
    html += "</div>";
    html += "</div>";
    if (tipo)
    {
        $("#mainBigModal").html(html);
        $("#mainBigModal").modal("show");
    }
    else {
        $("#mainModal").html(html);
        $("#mainModal").modal("show");
    }

}
function showModalData(html, tipo) {
    if (tipo) {

        $("#mainBigModal").html(html);

    }
    else {

        $("#mainModal").html(html);

    }
//    $('select.fix').selectBox();
}
/**
 * Actualizacion de vistas por ajax
 * @param {type} url
 * @param {type} elemento
 * @param {type} callBack
 * @returns {undefined}
 */
function ajaxUpdateElement(url, elemento, callBack)
{
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: url,
        beforeSend: function(xhr) {
            var html = "<div class='loading'><img src='" + themeUrl + "img/loading.gif' /></div>";
            $(elemento).html(html);
        },
        success: function(data) {
            if (data.success) {
                $(elemento).html(data.html);
                callBack();
            } else {
                bootbox.alert(data.messages.error.toString());
            }
        }
    });
}
