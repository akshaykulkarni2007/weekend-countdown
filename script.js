Date.prototype.setDay = function(dayOfWeek) {
    this.setDate(this.getDate() - this.getDay() + dayOfWeek);
};

let startWeekend = new Date();
startWeekend.setDay(5);
startWeekend.setHours(18, 00, 0);
startWeekend = startWeekend.getTime();

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

}, 1000);

$(".main-footer span").html(new Date(startWeekend));
