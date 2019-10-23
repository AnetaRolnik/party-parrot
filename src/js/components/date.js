export default function date() {
    const year = document.querySelector('.footer__date');
    year.innerHTML = new Date().getFullYear();
}