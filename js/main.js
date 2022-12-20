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
    play.style.display = 'none'
    pause.style.display = 'block'
} 

function pauseVideo() { 
    hz.pause(); 
    pause.style.display = 'none'
    play.style.display = 'block'
}






// main-menu를 전부 가져온다 getElementsByClassName
// 반복문 이용해서 가져온 main-menu들한테 이벤트리스너 넣어준다
// <이벤트리스너 내용>
// 모든 main-menu의 height 50px로 만들어주고
// 클릭된 자신은 자신(50px) + 자식갯수(50px * 자식갯수) 만큼 크기로 설정되게

// mainMenu를 누르면 mainMenu의 height가 커져야한다
// 다른 mainMenu가 열려있다면 그 녀석은 50px만큼 줄어들어야 한다
// 그 mainMenu가 갖고있는 자식요소 * 50px 한 만큼 커진다


const mainMenu = document.getElementsByClassName(`main-menu`);

// mainMenu[i]번째에 이벤트 리스너 들어가야한다
for (let i = 0; i < mainMenu.length; i++) {

    mainMenu[i].addEventListener('click', () => {

        mainMenu[i].classList.add("active")

        for(let j = 0; j < mainMenu.length; j++){
            mainMenu[j].style.height = '50px' //먼저 height를 50px로 줄여준다 - 초기화

            mainMenu[j].addEventListener('click', () => {
                mainMenu[j].style.height = '50px'
            })
        }
        mainMenu[i].style.height = `${mainMenu[i].firstElementChild.childElementCount * 50}px`
    })
}







// PF 라인 이미지 스크롤 애니메이션

const pfContent = document.getElementsByClassName("pf-content")

for (let i = 0; i < pfContent.length; i++) {
    
    window.addEventListener("scroll", () => {

        if (pfContent[i].getBoundingClientRect().top - (window.innerHeight / 3) * 2 < 0) {
            pfContent[i].classList.remove("pf-animation")
        }

    })

}


const search = document.getElementById('search');

search.innerText = "Enter keywords to search.";








// 이미지 스크롤 애니메이션
const pdContent = document.getElementsByClassName("img-ani")

for (let i = 0; i < pdContent.length; i++) {
    
    window.addEventListener("scroll", () => {

        if (pdContent[i].getBoundingClientRect().top - (window.innerHeight / 3) * 2 < 0) {
            pdContent[i].classList.remove("rise")
        }

    })

}