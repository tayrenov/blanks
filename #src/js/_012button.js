/****Скрыть все dropdown_content__all на странице */
const dropdown_content__all = document.querySelectorAll('.dropdown-content');

dropdown_content__all.forEach((item) => {
  item.style.display='none';
});

/*****Обработка клика переключения стиля display */
document.addEventListener('click', (e)=>{
  const target =e.target;

  if (target.classList.value === 'dropbtn' ) {
    const drop_down = target.parentElement,
    dropdown_content = drop_down.querySelector('.dropdown-content');

    if (getComputedStyle(dropdown_content).display=='none') {
      dropdown_content.style.display="flex";
    } else if (getComputedStyle(dropdown_content).display=='flex') {
      dropdown_content.style.display="none";
    }
  }
});
