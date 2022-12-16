// 만들고싶은것 : 4초마다 자동으로 넘어가고 라디오버튼 눌렀을때 해당슬라이드 보여주기

// index에 따라서 슬라이드를 조절하는 구조로 만들고
// 버튼을 누르면 해당버튼에 맞는 인덱스로 교체
// ex 3번 버튼을 누르면 -> index = 3 ; 슬라이드위치이동();



makeSlider()

function makeSlider() {
    const slideInner = document.querySelector(`.slide-inner`)
    const slideContent = document.querySelector(`.slide-content`)

    // 첫번째 마지막번째 슬라이드 복사해주기
    const cloneFirst = slideInner.firstElementChild.cloneNode(true)
    // const cloneLast = slideInner.lastElementChild.cloneNode(true)

    // slideInner.insertBefore(cloneLast, slideInner.firstChild)
    slideInner.appendChild(cloneFirst)

    const radioContainer = document.querySelector(`.radio-container`)

    // 슬라이드 갯수만큼 라디오 버튼 만들기
    for(let i = 0; i < slideInner.childElementCount - 1; i++) {
        const radioBt = document.createElement("button")
        radioBt.classList.add("radio-bt")
        radioContainer.appendChild(radioBt)

        // 클릭했을때 인덱스에 맞게 버튼에 색 넣기
        radioBt.addEventListener('click', ()=> {
            index = i
            moveSlide(true)
            selectedRadio()
        })
    }

    radioContainer.firstElementChild.classList.add("selected")


    const 슬라이드너비 = slideContent.clientWidth

    // 중복작동 안되도록 moveChecker가 true일때만 작동하기
    let moveChecker = true

    let index = 0
    moveSlide(false)

    // slideInner.addEventListener("click", () => {
    //     if (moveChecker) {
    //         moveChecker = false
    //         index++
    //         moveSlide(true)

    //         selectedRadio()

    //         // 1초뒤에 마지막 인덱스에 도달했을때 인덱스 0으로 바꿔주고 moveSlide실행
    //         setTimeout(()=>{
    //             moveChecker = true
    //             if (index === slideInner.childElementCount - 1) {
    //                 index = 0
    //                 moveSlide(0)
    //             }
    //         }, 1000)  
    //     }
    // });


    // 반복해서 쓰이는 식 함수화하기
    function moveSlide(transition) {
        if(transition){
            slideInner.style.transition = `1s`
        }else{
            slideInner.style.transition = `0s`
        }

        slideInner.style.transform = `translateX(-${index*슬라이드너비}px`
    }


    function selectedRadio () {
        // 라디오 컨테이너 자식갯수만큼 버튼 색 초기화
        for(let i = 0; i < radioContainer.childElementCount; i++) {
            radioContainer.children[i].classList.remove("selected")
        }
        // 인덱스에 따라서 버튼에 색 넣기
        if (index === slideInner.childElementCount - 1) {
            radioContainer.children[0].classList.add("selected")
        } else {
            radioContainer.children[index].classList.add("selected")
        }
    }


    // 4초마다 다음 슬라이드로 이동
    function fourSecondSlide() {
        setInterval ( () => {
            
        }, 4000)
    }
}





// 동영상 재생과 일시정지 버튼
var hz = document.querySelector(`#hz`)
const play = document.querySelector(`#play`)
const pause = document.querySelector(`#pause`)

play.addEventListener('click', playVideo)
pause.addEventListener('click', pauseVideo)

function playVideo() { 
    hz.play(); 
} 

function pauseVideo() { 
    hz.pause(); 
}

// 재생 클릭하면 -> 일시정지 이미지로 바꾸기
function toggleicon() {
    if (playVideo) {
        document.getElementById(`#play-icon`).src = "./img/pause-icon.png"
    } else {
        document.getElementById(`#play-icon`).src = "./img/play-icon.png"
    }
}




// main-menu를 전부 가져온다 getElementsByClassName
// 반복문 이용해서 가져온 main-menu들한테 이벤트리스너 넣어준다
// <이벤트리스너 내용>
// 모든 main-menu의 height 50px로 만들어주고
// 클릭된 자신은 자신(50px) + 자식갯수(50px * 자식갯수) 만큼 크기로 설정되게
// calc(50px + 50px * 4);    .active


const mainMenu = document.getElementsByClassName(`main-menu`);
const subMenu = document.getElementsByClassName(`sub-menu`);

for(let i = 0; i < mainMenu.length; i++) {
    // offsetHeight - padding, border 값을 포함한 컨텐츠의 높이를 가져온다. (margin은 포함 X)
    const menuHeight = mainMenu.offsetHeight;

    mainMenu.addEventListener(click, () => {
        subMenu.style.height = "50px";
        menuHeight + subMenu.childElementCount(menuHeight * subMenu.childElementCount);
        if () {
            mainMenu.classList.add("active")
        } else {
            mainMenu.classList.remove("active")
        }
    })
};











// //메인메뉴 클릭했을때 서브메뉴 펼쳐지게
// const mainMenu = document.querySelectorAll(`.main-menu`)
// const subMenu = document.querySelectorAll(`.sub-menu`)

// // event listener
// mainMenu.forEach(function (el) {
//     el.addEventListener('click', toggleAccordion)
// });

// // function
// function toggleAccordion(el) {
//     var targetText = el.currentTarget.nextElementSibling.classList;
//     var targetAccIcon = el.currentTarget.children[0];
//     var target = el.currentTarget;
    
//     if (targetText.contains('show')) {
//         targetText.remove('show');
//         targetAccIcon.classList.remove('anime');
//         target.classList.remove('accordionTitleActive');
//     } 
//     else {
//        accordionBtn.forEach(function (el) {
//           el.classList.remove('accordionTitleActive');
          
//           allTexts.forEach(function (el) {
//              el.classList.remove('show');
//           })
          
//           accIcon.forEach(function (el) {
//            el.classList.remove('anime');
//           }) 
          
//        })
       
//           targetText.add('show');
//           target.classList.add('accordionTitleActive');
//           targetAccIcon.classList.add('anime');
//     }  
//  }











// listHide.childElementCount.offsetHeight

// function toggleAccordion() {
//     for (i=0; i < mainMenu.childElementCount; i++) {
//         mainMenu.addEventListener(click, () => {
//             listHide.classList.add("active")
//         })
    
//     }
    
// }

