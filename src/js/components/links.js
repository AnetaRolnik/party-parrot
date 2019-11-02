export default function links() {
    const $links = $('.nav__link');

    $links.each(function () {
        $(this).on("click", function () {
            $links.removeClass('active');
            $(this).addClass('active');
        });
    });
}