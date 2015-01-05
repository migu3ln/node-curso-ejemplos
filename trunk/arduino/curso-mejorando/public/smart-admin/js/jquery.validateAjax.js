
function ajaxValidateMultiModel(options) {
    $.ajax({
        type: 'POST',
        url: $(options.formId).attr('action'),
        data: $(options.formId).serialize() + '&' + 'ajax=' + options.formId,
        dataType: 'json',
        beforeSend: function (xhr) {
            //Acciones a reaqlizar antes del envio
            if (options.beforeCall) {
                options.beforeCall();
            }
        },
        success: function (data) {
            //acciones a realizar cuando la respuesta es positiva 
            if (data.success) {
                //reiniciar elementos
                reloadControlGroup(options.formId);
                //agragar clase success a los elemento si error
                addClassSuccess(options.formId);
                if (options.successCall) {
                    options.successCall(data);
                }
            } else {
                //acciones a realizar cuando existen errores
                if (options.errorCall) {
                    options.errorCall(data);
                }
                //reiniciar elementos
                reloadControlGroup(options.formId);
                //recorres errores
                $.each(data.errors, function (apt_form_name, apt_errors) {
                    $.each(apt_errors, function ($input_id, errors) {
                        //elemento con error [name=OUTWARDONEWAY]
                        selectElementoFormError = "form" + options.formId + ' [name="' + apt_form_name + "[" + $input_id + ']"';
                        console.log(selectElementoFormError);
                        //agregar la clase error
                        $(selectElementoFormError).parent().parent('div.control-group').addClass('error');
                        //mostrar mensaje de error
                        $("form" + options.formId + ' #' + apt_form_name + '_' + $input_id + '_em_').html(errors[0]);
                        $("form" + options.formId + ' #' + apt_form_name + '_' + $input_id + '_em_').attr('style', '');
                    });
                });
                //agragar clase success a los elemento si error
                addClassSuccess(options.formId);
            }
        }
    });
}
function ajaxValidarFormulario(options) {
    $.ajax({
        type: 'POST',
        url: $(options.formId).attr('action'),
        data: $(options.formId).serialize() + '&' + 'ajax=' + options.formId,
        dataType: 'json',
        beforeSend: function (xhr) {
            //Acciones a reaqlizar antes del envio
            if (options.beforeCall) {
                options.beforeCall();
            }
        },
        success: function (data) {
            //acciones a realizar cuando la respuesta es positiva
            if (data.success) {
                //reiniciar elementos
                reloadControlGroup(options.formId);
                //agragar clase success a los elemento si error
                addClassSuccess(options.formId);
                if (options.successCall) {
                    options.successCall(data);
                }
            } else {
                //acciones a realizar cuando existen errores
                if (options.errorCall) {
                    options.errorCall(data);
                }
                //reiniciar elementos
                reloadControlGroup(options.formId);
                //inicielaizar span help-inline
                formIdpar = options.formId.split('-');
                //capturar el identificador
                $.each(formIdpar, function (index, element) {
                    if (element === 'form') {
                        formIdpar[index] = '';
                    }
                });
                formIdent = getLomoCamello(formIdpar);


                console.log(formIdent);
                //mostrar errores
                $.each(data.errors, function (parametro, mensaje) {
                    //elemento con error [name=OUTWARDONEWAY]
                    selectElementoFormError = "form" + options.formId + ' [name="' + formIdent.replace('#', '') + "[" + parametro + ']"';
                    $elementError = $(selectElementoFormError);
                    if ($(selectElementoFormError).length == 0) {
                        selectElementoFormError = "form" + options.formId + ' ' + formIdent + "Form_" + parametro;
                    }
                    console.log(selectElementoFormError);
                    //agregar la clase error
                    $(selectElementoFormError).parent().parent('div.form-group').addClass('has-error');
                    //mostrar mensaje de error
                    $("form" + options.formId + ' ' + formIdent + '_' + parametro + '_em_').html(mensaje);
                    $("form" + options.formId + ' ' + formIdent + '_' + parametro + '_em_').attr('style', '');
                });
                //agragar clase success a los elemento si error
                addClassSuccess(options.formId);
            }
        }
    });
}
/*
 * fucnion para poner la primera letra de un string en mayúscula
 */
String.prototype.capitalize = function () {
    return this.replace(/\w+/g, function (a) {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    });
};
function getLomoCamello(arrayElement) {
    unitElement = '';
    $.each(arrayElement, function (index, elemento) {
        unitElement = unitElement + elemento.capitalize();
    });
    return unitElement;
}
function reloadControlGroup(formId) {
    //remover clases de validacion de los div.control-group
    $('form' + formId + ' div.form-group').removeClass('has-success').removeClass('has-error');
    //remover mensajes de error style
    $('form' + formId + ' div.help-block.error').html('');
    $('form' + formId + ' div.help-block.error').attr('style', 'display: none');
}
function addClassSuccess(formId) {
    $('form' + formId + ' div.form-group').each(function () {
        if (!$(this).hasClass('has-error')) {
            $(this).addClass('has-success');
        }
    });
}
