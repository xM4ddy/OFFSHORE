let played = false;

function togglePlaying() {
	played ? player.stop() : player.play();
	played = !played;
}

const onMetadata = (metadata) => {
	document.getElementById("metadata").innerHTML = metadata.StreamTitle;
	console.log(metadata)
};
const player = new IcecastMetadataPlayer("https://azuracast.wileyradio.org/listen/wiley_radio/radio.mp3", { onMetadata });
