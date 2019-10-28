export default function date() {
    const $year =$('.footer__date');
    $year.text((new Date).getFullYear());
}