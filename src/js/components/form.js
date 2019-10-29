export default function form() {
    const $fields = $('.page__element');

    $fields.each(function () {
        $(this).on("change", function () {
            $(this).val().length > 0 ?  $(this).addClass('active') : $(this).removeClass('active');
        });
    });
}