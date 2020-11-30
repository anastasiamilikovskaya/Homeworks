function verifyWidth() {
    window.addEventListener('resize', function(){
        if(this.innerWidth < 768){
            txt.classList.toggle('colorWidth');
        }
    });
}

export { verifyWidth };