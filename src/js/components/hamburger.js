export default function hamburger() {
    const $hamburger = $('.navigation__hamburger'),
      $body = $('.page'),
      backdrop = $(`<div id="backdrop" style="position: fixed; width: 100%;
      background: rgba(0,0,0,0.7); top: 0; bottom: 0; z-index: 11"></div>`);

    $hamburger.click(function(){
      $body.toggleClass('hamburger--open');
      $body.hasClass('hamburger--open') ? $body.append(backdrop) : backdrop.remove();
	  });
}