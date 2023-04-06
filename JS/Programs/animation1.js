// Staggering 

function () {
    let e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (let r of document.querySelectorAll('link[rel="modulepreload"]')) t(r);
        new MutationObserver(e => {
            for (let r of e)
                if ("childList" === r.type)
                    for (let i of r.addedNodes) "LINK" === i.tagName && "modulepreload" === i.rel && t(i)
        }).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        let r = function e(r) {
            let t = {};
            return r.integrity && (t.integrity = r.integrity), r.referrerpolicy && (t.referrerPolicy = r.referrerpolicy), "use-credentials" === r.crossorigin ? t.credentials = "include" : "anonymous" === r.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, r)
    }
};
const u = e => e,
    l = (e, r, t) => (((1 - 3 * t + 3 * r) * e + (3 * t - 6 * r)) * e + 3 * r) * e,
    a = 1e-7,
    f = 12;

function d(e, r, t, i, n) {
    let o, s, c = 0;
    do(o = l(s = r + (t - r) / 2, i, n) - e) > 0 ? t = s : r = s; while (Math.abs(o) > 1e-7 && ++c < 12);
    return s
}

function y(e, r, t, i) {
    if (e === r && t === i) return u;
    let n = r => d(r, 0, 1, e, t);
    return e => 0 === e || 1 === e ? e : l(n(e), r, i)
}
const p = {
    ease: [.25, .1, .25, 1],
    easeIn: [.42, 0, 1, 1],
    easeInOut: [.42, 0, .58, 1],
    linear: [0, 0, 0, 0]
};

function g(e, r, t, i = !1) {
    let n = i ? 0 : r;
    document.querySelectorAll(e).forEach((e, i) => {
        if (i > 0) {
            let o = y.call(p[t])(i);
            n = n + o + r
        }
        console.log("Delay", n), e.style.transitionDelay = `${n}ms`
    })
}
window.delayTransitions = g;



/* Wrap chars*/
function wrapChars(str, tmpl) {
    return str.replace(/\w/g, tmpl || "<span>$&</span>");
}

const buttonStatic = document.querySelector(".btn---text.x-static div");
const buttonHover = document.querySelector(".btn---text.x-hover div");
buttonStatic.innerHTML = wrapChars(
    buttonStatic.textContent,
    "<span class='btn---char'>$&</span>"
);
buttonHover.innerHTML = wrapChars(
    buttonStatic.textContent,
    "<span class='btn---char'>$&</span>"
);
/* Reinit Webflow IX engine now the DOM has been modified*/
Webflow.require("ix2").init();

/* Staggered options */
delayTransitions(".btn---text.x-static span", 3, "easeOut");
delayTransitions(".btn---text.x-hover span", 3, "easeOut");
