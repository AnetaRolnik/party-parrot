export default function navigation() {
    const $nav = $(".nav");
    
    $(document).scroll(function () {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
}