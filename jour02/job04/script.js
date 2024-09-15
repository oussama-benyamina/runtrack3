document.addEventListener('keypress', function(event) {
    if (event.key.match(/[a-z]/i)) {
        const keylogger = document.getElementById('keylogger');
        keylogger.value += event.key;
        if (document.activeElement === keylogger) {
            keylogger.value += event.key;
        }
    }
});