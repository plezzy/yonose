const list = document.querySelector('.nav__list')

const menu = document.querySelector('.header__menu')

const icon = document.querySelector('.menu__item-icon')


const faqs = document.querySelector('.faqs')

const faqsStyles = window.getComputedStyle(faqs)

let faqsHeight = faqsStyles.getPropertyValue("height")

console.log(faqsHeight)

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

faqsLink.addEventListener('click', show)

function show()
{
    faqs.classList.add('faqs--show')

    setTimeout(() => 
    {
        faqs.style.height = "auto"
        faqs.classList.remove("faqs--show")

        console.log("function show - actived")
        console.log(faqsHeight)
    }
    , 699)
}

 button.addEventListener
 (
     'click', 
     () =>
     {
         faqs.classList.add('faqs--hide')

         setTimeout(() => 
         {
             faqs.style.height = "0px"
             faqs.classList.remove("faqs--hide")
         }
         , 1200)
     })