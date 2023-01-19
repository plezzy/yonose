(function()
{
    const list = document.querySelector('.nav__list')

    const menu = document.querySelector('.header__menu')

    const icon = document.querySelector('.menu__item-icon')

    
    const faqs = document.querySelector('.faqs')
    
    const faqsLink = document.querySelector('.info__faqs-icon')
    
    const button = document.querySelector('.faqs__button-text')


    menu.addEventListener
    (
        'click', 
        () => 
        {
            list.classList.toggle('nav__list--show')
            icon.classList.toggle('menu__item-icon--show')
        }
    )

    faqsLink.addEventListener('click', 
        () =>   
        {
            // faqs.classList.toggle('faqs__show')
            faqs.style.height = "auto"
            faqs.style.transform = "scale(1)"
            // console.log(click)
        }
    )

    button.addEventListener
    (
        'click', 
        () =>
        {
            faqs.style.transform = "scale(0)"
            setTimeout
            (
                () => 
                {
                    faqs.style.height = "0px"
                }
                , "500"
            )
        })

})();