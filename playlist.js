// Small dropdown for selecting the tracks in the floating CR7 player.
const playlistButtons = document.querySelectorAll("#playlist-tracks [data-track-index]");
const playlistToggle = document.getElementById("toggle-playlist-btn");
const playlistMenu = document.getElementById("playlist-tracks");

function closePlaylistMenu() {
    if (!playlistToggle || !playlistMenu) return;
    playlistToggle.setAttribute("aria-expanded", "false");
    playlistMenu.classList.add("hidden");
}

function syncPlaylistButtons(activeIndex) {
    playlistButtons.forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === activeIndex));
    });
}

const originalLoadTrack = loadTrack;
loadTrack = function (index) {
    originalLoadTrack(index);
    syncPlaylistButtons(index);
    closePlaylistMenu();
};

if (playlistToggle && playlistMenu) {
    playlistToggle.addEventListener("click", () => {
        const isOpen = playlistToggle.getAttribute("aria-expanded") === "true";
        playlistToggle.setAttribute("aria-expanded", String(!isOpen));
        playlistMenu.classList.toggle("hidden", isOpen);
    });
}

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
