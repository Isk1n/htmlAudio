var playElem = document.getElementById('play');
var pauseElem = document.getElementById('pause');
var nextElem = document.getElementById('next');
var prevElem = document.getElementById('prev');
playElem.onclick = function() {
    playMusic(document.querySelector('input[name="musicSelect"]:checked').value);
}
pauseElem.onclick = function() {
    pauseMusic();
}
nextElem.onclick = function() {
    nextMusic();
}
prevElem.onclick = function() {
    prevMusic();
}

var audioMusic = {};
var musicDefaultVolume = 1;
// Distinct sounds' volumes
var srcVolumes = {
    'http://sound.mp3': 0.2
};

function initMusic() {
    for (var trigger in musicUrls) {
        if (!musicUrls[trigger]) continue;
        var len = musicUrls[trigger].length;
        if (!len) continue;
        var currentAudio = audioMusic[trigger] = new Audio();
        var currentTrack = currentAudio.trackno = Math.floor(Math.random() * len);
        currentAudio.src = musicUrls[trigger][currentTrack];
        currentAudio.trigger = trigger;
        currentAudio.volume = srcVolumes[currentAudio.src] || musicDefaultVolume;
        currentAudio.len = len;
        currentAudio.onended = function() {
            this.trackno = this.trackno < len - 2 ? ++this.trackno : 0;
            this.src = musicUrls[this.trigger][this.trackno];
            audioMusic.currentMusic = this;
            this.play();
        }
    }
}

function playMusic(trigger) {
    if (!musicUrls[trigger]) {
        console.warn('There is no ' + trigger);
        return;
    }
    if (audioMusic.currentMusic) audioMusic.currentMusic.pause();
    audioMusic.currentMusic = audioMusic[trigger];
    audioMusic.currentMusic.play();
}

function pauseMusic() {
    if (!audioMusic.currentMusic) {
        return;
    }
    audioMusic.currentMusic.pause();
}

function nextMusic() {
    var cm = audioMusic.currentMusic;
    if (!cm) return;
    cm.trackno = cm.trackno < cm.len - 2 ? ++cm.trackno : 0;
    cm.src = musicUrls[cm.trigger][cm.trackno];
    cm.play();
}

function prevMusic() {
    var cm = audioMusic.currentMusic;
    if (!cm) return;
    cm.trackno = cm.trackno > 0 ? --cm.trackno : cm.len - 1;
    cm.src = musicUrls[cm.trigger][cm.trackno];
    cm.play();
}

var musicUrls = {
    aggressive: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Black%20Vortex.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/The%20Complex.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Go%20Cart.mp3'
    ],
    dark: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Reign%20Supreme.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Drums%20of%20the%20Deep.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/The%20Builder.mp3'
    ],
    intense: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Undaunted.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Unity.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Dark%20Fog.mp3'
    ]
};

// var music = {
//     faturenet: [
//     {
//         artist: 'Waverine',
//         title: 'Launch',
//         album: 'Vintage',
//         year: 2014,
//         genre: 'electro pop rock new age piano brass',
//         url: 'http://archive.org/download/FNet058/01.Launch.mp3'
//     },
//     {
//         artist: 'Incentive',
//         title: 'Because He Loves You',
//         album: 'Eschatology',
//         year: 2013,
//         genre: 'noise drone post-industrial idm technoid',
//         url: 'http://archive.org/download/FNet054/02.Incentive-Because_He_Loves_You.mp3'
//     },
//     ],
// };

initMusic();