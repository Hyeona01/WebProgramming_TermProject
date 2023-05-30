let search_btn = document.querySelector('.search');
let star_btn = document.querySelector('.star');
let star_click = 0;

function search(){
    let recipe_name = prompt("찾으시는 레시피를 입력해주세요!");
}

function liked_recipe(){
    star_click++;
    if(star_click % 2 ==1){
        star_btn.innerHTML = '★';
        star_btn.style.color = 'yellow';
        alert("이 레시피를 찜하였습니다!")
    }else{
        star_btn.innerHTML = '☆';
        star_btn.style.color = 'black';
        alert("찜 해제 되었습니다!")
    }
}

search_btn.addEventListener('click', search);
star_btn.addEventListener('click', liked_recipe);

