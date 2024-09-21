document.getElementById('play-theme-button').addEventListener('click', function () {
    const audio = document.getElementById('theme-audio');
    const button = this;
    if (audio.paused) {
        audio.play();
        button.textContent = 'Stop Theme';
    } else {
        audio.pause();
        button.textContent = 'Play Theme';
    }
});

document.getElementById('theme-audio').addEventListener('ended', function () {
    document.getElementById('play-theme-button').textContent = 'Play Theme';
});
