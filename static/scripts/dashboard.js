const hide = (evento) => {

    let toggler = evento.currentTarget;
    let sidebar = document.getElementById('sidebar');
    let main = document.getElementById('main');

    if (sidebarFlag) {
        sidebar.style.width = "0"

        sidebarFlag = false
    } else {
        sidebar.style.width = "23%"
        sidebarFlag = true
    }

}

let hideSidebar = document.getElementById('hide-sidebar');
let sidebarFlag = true;
hideSidebar.addEventListener('click', hide);