let formattedminutes = 0;
let formatteddays = 0;
let formattedhours = 0;

function formatTime(minutes) {
    formattedminutes = minutes % 60;
    formattedhours = (minutes - formattedminutes) / 60;
    if (formattedhours >= 24) {
        formatteddays = parseInt(formattedhours / 24);
        formattedhours = formattedhours - formatteddays * 24;
    }
    return formatteddays + ' day(s) ' + formattedhours + ' hour(s) ' + formattedminutes + ' minutes';
}


formatTime(120); //=> 0 day(s) 2 hour(s) 0 minute(s).
formatTime(59); //=> 0 day(s) 0 hour(s) 59 minute(s).
formatTime(3601); //=> 1 day(s) 0 hour(s) 1 minute(s).