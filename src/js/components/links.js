export default function links() {
    const $links = $('.nav__link'),
        $body = $('.page');

    $links.each(function () {
        $(this).on("click", function () {
            $links.removeClass('active');
            $(this).addClass('active');
            backdrop.remove();
            $body.removeClass('hamburger--open');
        });
    });
}