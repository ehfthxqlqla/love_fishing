/**
 * 
 * @param {*} target
 * @returns {object}
 */
const queryString = (target) => {
    let a = target.substring(1).split('&');
    if (a == "") return {};
    let b = {};
    for (let i = 0; i < a.length; ++i) {
        let p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

const step1WelcomeText = document.querySelector(".css-step1-welcome"),
step1SubWelcomeText = document.querySelector(".css-step1-subwelcome")

const container = document.querySelector(".container")

window.onload = () => {
    setTimeout(() => {
        document.querySelector(".css-step1-welcome").innerText = `연애운 테스트에 오신것을 환영합니다!`
    }, 1);

    const qs = queryString(window.location.search)

    console.log(qs)

    if (!qs?.step) {
        console.log(`mainpage`)

        step1WelcomeText.style.transform = `translateY(15px)`
        step1SubWelcomeText.style.transform = `translateY(0px)`
        document.querySelector(".css-step1-termsbox").style.transform = `translate(-50%, -50%)`
    }
}

// window.onbeforeunload = () => { return "아직 테스트가 완료되지 않았습니다. 정말로 나가시겠습니까?" }

const nextButton1 = document.querySelector(".js-next-step1"),
termsAcceptButton = document.querySelector(".js-accept-terms"),
termsDenyButton = document.querySelector(".js-deny-terms")

termsAcceptButton.addEventListener("click", function() {
    nextButton1.disabled = false
})

termsDenyButton.addEventListener("click", function() {
    nextButton1.disabled = true
})

nextButton1.addEventListener("click", function() {
    document.querySelector(".css-step1-termsbox").style.opacity = 0

    document.querySelector(".css-step2-information").style.display = `block`
    setTimeout(() => {
        document.querySelector(".css-step1-termsbox").remove()
        document.querySelector(".css-step2-information").style.transform = `translateX(0px)`
        step1WelcomeText.innerText = `테스트에 필요한 정보를 입력하세요.`
        step1SubWelcomeText.innerText = `개인정보는 수집 목적 외에 사용되지 않습니다.`
    }, 2000);
})