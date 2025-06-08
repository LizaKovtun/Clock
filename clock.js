$("document").ready(function() {
    function time() {
        const d = new Date();
let s = d.getSeconds();
let m = d.getMinutes();
let h = d.getHours();
$("#S_seconds").val(s).trigger('change');
$("#S_minutes").val(m).trigger('change');
$("#S_hours").val(h).trigger('change');

$("#K_seconds").val(s).trigger('change');
$("#K_minutes").val(m).trigger('change');
$("#K_hours").val(h).trigger('change');
    }
$("#K_seconds").knob({
    'min':0,
    'max':60,
    'width': 125,
    'height': 125,
    'thickness': 0.2,
    'fgColor': '#00ff00',
    'displayInput': false
});
$("#K_minutes").knob({
    'min':0,
    'max':60,
    'width': 245,
    'height': 245,
    'thickness': 0.45,
    'fgColor': '#4dc3ff',
    'displayInput': false
});
$("#K_hours").knob({
    'min':0,
    'max':24,
    'width': 375,
    'height': 375,
    'thickness': 0.3,
    'fgColor': '#ffff00',
    'displayInput': false
});
setInterval(time,1000);
})