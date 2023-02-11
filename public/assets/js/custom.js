var modalLogin = document.querySelector(".modal-content .modal-body");
var activeNav = document.querySelectorAll(".modal-content .modal-header ul li a")
var asideMenu = document.querySelector(".aside_menu");
var dashBoard = document.querySelector(".dashboard");
var questionselect = document.querySelectorAll(".question_type .questions");
var question = document.querySelector(".question_type");
var body = document.querySelector('body');
var linkingMenu = document.querySelector('header > div:first-child .select a');
var menuList = document.querySelector('.exam_list');

var question = document.querySelectorAll('.wrapper_question_paper .question_paper');
var questions = document.querySelectorAll('.wrapper_question_paper');
var navbar_li = document.querySelectorAll('.container_exam-view .wrapper_paper .left .navbar li a');
var navbar = document.querySelectorAll('.container_exam-view .wrapper_paper .left .navbar');

var SW_CSS = {
    block: "block",
    none: "none",
    active: "active",
    px: 'px',
}
var SW_TAGS = {
    div: "div"
}
var SW_CLASS = {
    aside_width: 'aside_width',
    margindashboard: 'ml-dashboard',
    width_100: 'aside_width-100',
    overflow: 'overflow-h',

}
function toggleMenu($this){
    menuList.classList.toggle('display-block');
    $this.classList.toggle('toggle_color');
}

function loginSignup(id) {
    var $this = document.getElementById(id);

    modalLogin.querySelectorAll(SW_TAGS.div).forEach(function (el) {
        el.style.display = SW_CSS.none;
    });
    activeNav.forEach(function (el) {
        el.classList.remove(SW_CSS.active);
    })
    modalLogin.querySelector("." + $this.id + "_content").style.display = SW_CSS.block;
    $this.classList.add(SW_CSS.active);
}

function smallSidebar() {
    if (screen.availWidth > 760) {
        asideMenu.classList.toggle(SW_CLASS.aside_width);
        dashBoard.classList.toggle(SW_CLASS.margindashboard);
    }
    else {
        asideMenu.classList.toggle(SW_CLASS.width_100);
        body.classList.toggle(SW_CLASS.overflow);
        asideMenu.style.top = (pageYOffset + 120) + SW_CSS.px;
    }
}

function questionType($this) {
    var id_val = $this.value;
    questionselect.forEach(function (el) {
        el.style.display = SW_CSS.none;
    })

    question.querySelector("#" + id_val).style.display = SW_CSS.block

}
