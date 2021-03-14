document.addEventListener('DOMContentLoaded', () => {  
    
    
    const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}


    
  const tab_header=document.querySelector('.tab__header'),
    tabContentBloks=tab_header.querySelectorAll('.tab-content'),
    tabLinks=tab_header.querySelectorAll('.tab-link');


//функция скрывающая табы      
function HideTabContent() {
tabContentBloks.forEach(item => {
  item.style.display="none";
});
}

//функция показывающая блок i      
function ShowTabContent(i) {
tabContentBloks[i].style.display="block";
}

//При загрузке все скрываем
HideTabContent();

//При загрузке проверяем у какого таба id=tab__defaultOpen
tabLinks.forEach((item, i) => {
  if (item.id=='tab__defaultOpen') {
    HideTabContent();
    ShowTabContent(i) ;   
  }
});  

//Закрытие все и отображения таба по клику
tab_header.addEventListener('click', (event)=> {
  const target=event.target;

  if (target && target.classList.contains('tab-link')) {

    tabLinks.forEach((item, i) => {

      if (target==item) {
        HideTabContent();
        ShowTabContent(i) ;   
      }

    });  
  }
});

});