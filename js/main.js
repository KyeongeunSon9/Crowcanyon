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
    const cloneLast = slideInner.lastElementChild.cloneNode(true)

    slideInner.insertBefore(cloneLast.slideInner.firstChild)
    slideInner.appendChild(cloneFirst)

    const radioContainer = document.querySelector(`.radio-container`)

    // 슬라이드 갯수만큼 라디오 버튼 만들기
    for(let i = 0; i < slideInner.childElementCount; i++) {
        const radioBt = document.createElement("button")
        radioBt.classList.add("radio-bt")
        radioContainer.appendChild(radioBt)

        // 클릭했을때 인덱스에 맞게 버튼에 색 넣기
        radioBt.addEventListener('click', ()=> {
            index = i + 1 
            moveSlide(true)
            selectedRadio()
        })
    }

    radioContainer.firstChild.classList.add("selected")


    const 슬라이드너비 = slideContent.clientWidth

    // 중복작동 안되도록 moveChecker가 true일때만 작동하기
    let moveChecker = true

    let index = 1
    moveSlide(false)

    slideInner.addEventListener("click", () => {
        if (moveChecker) {
            moveChecker = false
            index++
            moveSlide(true)

            selectedRadio()

            // 1초뒤에 마지막 인덱스에 도달했을때 인덱스 1로 바꿔주고 moveSlide실행
            setTimeout(()=>{
                moveChecker = true
                if (index === slideInner.childElementCount - 1) {
                    index = 1
                    moveSlide(false)
                }
            }, 1000)  
        }
    });


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
            radioContainer.children[0].classList.add("selceted")
        } else if (index === 0) {
            radioContainer.children[slideInner.childElementCount - 3].classList.add("selceted")
        } else {
            radioContainer.children[index - 1].classList.add("selceted")
        }
    }

    
    // 4초마다 다음 슬라이드로 이동
    function fourSecondSlide() {
        setInterval ( () => {
            
        }, 4000)
    }
}





// 동영상 재생버튼 일시정지버튼
var hz = document.getElementsByClassName(".hz")
play = document.getElementsByClassName(".play")
pause = document.getElementsByClassName(".pause")

play.addEventListener('click', playVideo)
pause.addEventListener('click', pauseVideo)

function playVideo() { 
    hz.play(); 
} 

function pauseVideo() { 
    hz.pause(); 
}





//헤더 메인메뉴 클릭했을때 펼쳐지게
const mainMenu = document.querySelector(`.main-menu`)
const listHide = document.querySelector(`.list-hide`)

// listHide.childElementCount.offsetHeight

function toggleAccordion() {
    for (i=0; i < mainMenu.childElementCount; i++) {
        mainMenu.addEventListener(click() => {
            listHide.classList.add("active")
        })
    
    }
    
}




// if (listHide.style.maxHeight === 0) {
//     listHide.style.maxHeight = null
// } else {

// }