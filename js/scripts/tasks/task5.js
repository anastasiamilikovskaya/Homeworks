function setClass() {
    let head = document.getElementsByTagName("header")[0];
    window.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 200){
            head.classList.add('header');
        }
    })
}

export { setClass };