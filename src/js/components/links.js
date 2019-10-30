export default function links() {
    const $links = $('.navigation__link');

    $links.each(function () {
        $(this).on("click", function () {
            $links.removeClass('navigation__link--active');
            $(this).addClass('navigation__link--active');
        });
    });
}