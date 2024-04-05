const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.header');
const menuClose = document.querySelector('.menu-close');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("activeMenu");
    menu.classList.toggle("activeMenu");
}

const ticketA = document.querySelector('.ticketA');
const ticketB = document.querySelector('.ticketB');
const ticketPage = document.querySelector('.ticketPage');
const ticketClose = document.querySelector('.ticketClose')

ticketActive = () => {
    ticketA.classList.toggle("activeTicket");
    ticketB.classList.toggle("activeTicket");
    ticketPage.classList.toggle("activeTicket");
}

ticketA.onclick = () => {
    ticketActive();
}

ticketB.onclick = () => {
    ticketActive();
}

ticketClose.onclick = () => {
    ticketA.classList.remove("activeTicket");
    ticketB.classList.remove("activeTicket");
    ticketPage.classList.remove("activeTicket");
}