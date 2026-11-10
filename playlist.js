// Adds direct selection for the CR7 music playlist.
const playlistButtons = document.querySelectorAll("#playlist-tracks [data-track-index]");

function syncPlaylistButtons(activeIndex) {
    playlistButtons.forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === activeIndex));
    });
}

const originalLoadTrack = loadTrack;
loadTrack = function (index) {
    originalLoadTrack(index);
    syncPlaylistButtons(index);
};

syncPlaylistButtons(currentTrackIndex);

playlistButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.trackIndex);
        if (!Number.isInteger(index) || !playlist[index]) return;

        currentTrackIndex = index;
        loadTrack(index);
        bgAudio.play().then(() => {
            bgMusicIcon.className = "fa-solid fa-pause text-sm";
        }).catch(() => {
            bgMusicIcon.className = "fa-solid fa-play text-sm ml-0.5";
        });
    });
});
