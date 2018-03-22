Date.prototype.setDay = function(dayOfWeek) {
    this.setDate(this.getDate() - this.getDay() + dayOfWeek);
};

let startWeekend = new Date();
startWeekend.setDay(5);
startWeekend.setHours(18, 00, 0);
startWeekend = startWeekend.getTime();

// if(new Date().getDay() == )
let interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = startWeekend - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    $(".days span").html(days);
    $(".hours span").html(hours);
    $(".mins span").html(mins);
    $(".seconds span").html(seconds);

    setStyles(days, hours);

}, 1000);

function setStyles(days,hours) {
    if(days < 1) {
        $(".days").css({
            "background": "#48a70b",
            "border": "1px solid #256f15"
        });
    } else if (days > 2 && hours>=12) {
        $(".days").css({
            "background": "#ed462f",
            "border": "1px solid #c1272d"
        });
    }
}

$(".main-footer span").html(new Date(startWeekend));
