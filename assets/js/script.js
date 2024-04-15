const currentLocation = location.href
const navLinks = document.querySelectorAll('.navlinks ul a');

const menuLength = navLinks.length;

for (var i = 0; i < menuLength; i++) {
    if (navLinks[i].href === currentLocation){
        navLinks[i].className = "active"
    }
}