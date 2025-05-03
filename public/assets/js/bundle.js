$(".countnumber").each(function (index, element) {
    var count = $(this),
        zero = {val: 0},
        num = count.data("number"),
        split = (num + "").split("."),
        decimals = split.length > 1 ? split[1].length : 0;

    let thisTwoFraction = $(this).data("two-fraction") === true
    let thisResultPlus = $(this).data("result-plus") === true

    gsap.to(zero, {
        val: num,
        duration: 2,
        scrollTrigger: element,
        onUpdate: function () {
            if (thisTwoFraction) {
                if (thisResultPlus)
                    count.text(zero.val.toLocaleString('tr-TR', {maximumFractionDigits: 0}) + "+");
                else
                    count.text(zero.val.toLocaleString('tr-TR', {maximumFractionDigits: 0}));
            } else {
                if (thisResultPlus)
                    count.text(zero.val.toFixed(decimals) + "+");
                else
                    count.text(zero.val.toFixed(decimals));
            }
        }
    });
});

const generalModal = gsap.timeline({
    paused: "true",
});

generalModal.to(".general-modal", 0.60, {
    autoAlpha: 1,
    visibility: "visible",
    ease: Power3.easeIn,
});

generalModal.to(".general-content", 1, {
    autoAlpha: 1,
    visibility: "visible",
    duration: 1,
    y: 0,
    ease: Power3.easeOut,
});

generalModal.from(
    ".general-close",
    {
        opacity: 0,
        // rotate: "180deg",
    },
);

function generalClose() {
    generalModal.reverse();
    smoother.paused(false);
}