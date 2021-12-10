let theme_toggler = document.querySelector('#theme-toggler');
theme_toggler.addEventListener('click', () => {
    theme_toggler.classList.toggle('fa-sun')
    if(theme_toggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
})