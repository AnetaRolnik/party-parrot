export default function date() {
    const $year =$('.footer__date');
    $year.innerHTML = new Date().getFullYear();
}