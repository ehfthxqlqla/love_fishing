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

const step1 = `

`

const container = document.querySelector(".container")

window.onload = () => {
    const qs = queryString(window.location.search)

    console.log(qs)

    if (!qs?.step) {
        console.log(`mainpage`)

        container.innerHTML

        document.querySelector(".css-step1-welcome").style.transform = `translateY(0px)`
        document.querySelector(".css-step1-subwelcome").style.transform = `translateY(0px)`
        document.querySelector(".css-step1-termsbox").style.transform = `translate(-50%, -50%)`
    }
}