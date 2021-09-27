$(document).ready(function() {

    $(".top-nav .link, [href='#application']").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top + 100 }, 1000);
    });

    $("[name='phone']").mask("+7(999) 999-9999");

    $('form.wrapper').submit(function(e) {

        var $form = $(this);
        // console.log($form);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function(data) {
            Swal.fire({
                title: 'Ваша заявка отправлена',
                timer: 5000
            });
            // console.log(data);
        }).fail(function(data) {
            // console.log(data);
            Swal.fire('Что то пошло не так. Заявка не отправлена');
        });

        e.preventDefault();
    });

    $('#offCanvas').offcanvas({
        modifiers: 'right, overlay',
        triggerButton: '.mob-menu-trigger'
    });

    var dataOffcanvas = $('#offCanvas').data('offcanvas-component');
    $("#offCanvas .link").on("click", function(event) {
        event.preventDefault();
        dataOffcanvas.close();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

});