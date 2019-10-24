export default function navigation() {
    const $nav = $(".navigation");
    
    $(document).scroll(function () {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
}