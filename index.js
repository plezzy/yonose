(function()
{
    const list = document.querySelector('.nav__list')

    const menu = document.querySelector('.header__menu')

    const icon = document.querySelector('.menu__item-icon')

    menu.addEventListener
    (
        'click', 
        () => 
        {
            list.classList.toggle('nav__list--show')
            icon.classList.toggle('menu__item-icon--show')
        }
    )

    const faqs = document.querySelector('.faqs')

    const faqsLink = document.querySelector('.info__faqs-icon')

    faqsLink.addEventListener('click', 
        () =>   
        {
            faqs.classList.toggle('faqs__show')
        }
    )

})();