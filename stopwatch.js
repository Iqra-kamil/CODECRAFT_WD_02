let startTime = 0;
let elapsed = 0;
let timerInterval = null;
let laps = [];

        function updateDisplay() {
            let time = elapsed;
            if (timerInterval) {
                time += Date.now() - startTime;
            }
            let ms = Math.floor((time % 1000) / 10);
            let s = Math.floor((time / 1000) % 60);
            let m = Math.floor((time / (1000 * 60)) % 60);
            let h = Math.floor((time / (1000 * 60 * 60)));
            document.getElementById('display').textContent =
                `${h.toString().padStart(2, '0')}:` +
                `${m.toString().padStart(2, '0')}:` +
                `${s.toString().padStart(2, '0')}.` +
                `${ms.toString().padStart(2, '0')}`;
        

         const lapsList = document.getElementById('laps');
    if (lapsList) {
        lapsList.innerHTML = laps.map((lap, i) =>
            `<li>Lap ${i + 1}: ${lap}</li>`
        ).join('');
    }
}

function startStopwatch() {
            if (!timerInterval) {
                startTime = Date.now();
                timerInterval = setInterval(updateDisplay, 10);
            }
        }

        function stopStopwatch() {
            if (timerInterval) {
                elapsed += Date.now() - startTime;
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }

        function resetStopwatch() {
            elapsed = 0;
            startTime = 0;
            clearInterval(timerInterval);
            timerInterval = null;
            laps = [];
            updateDisplay();
        }

        function lapStopwatch() {
    let time = elapsed;
    if (timerInterval) {
        time += Date.now() - startTime;
    }
    let ms = Math.floor((time % 1000) / 10);
    let s = Math.floor((time / 1000) % 60);
    let m = Math.floor((time / (1000 * 60)) % 60);
    let h = Math.floor((time / (1000 * 60 * 60)));
    const lapTime =
        `${h.toString().padStart(2, '0')}:` +
        `${m.toString().padStart(2, '0')}:` +
        `${s.toString().padStart(2, '0')}.` +
        `${ms.toString().padStart(2, '0')}`;
    laps.push(lapTime);
    updateDisplay();
}

        updateDisplay();
