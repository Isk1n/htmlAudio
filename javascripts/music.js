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
            this.trackno = this.trackno < len - 1 ? this.trackno + 1 : 0;
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
    cm.trackno = cm.trackno < cm.len - 1 ? cm.trackno + 1 : 0;
    cm.src = musicUrls[cm.trigger][cm.trackno];
    cm.play();
}

function prevMusic() {
    var cm = audioMusic.currentMusic;
    if (!cm) return;
    cm.trackno = cm.trackno > 0 ? cm.trackno - 1 : cm.len - 1;
    cm.src = musicUrls[cm.trigger][cm.trackno];
    cm.play();
}

var musicUrls = {
    USA: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Evening%20Melodrama.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Heavy%20Interlude.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Conflicted.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Gaslamp%20Funworks.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Juniper.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Impact%20Lento.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Tabuk.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Reign.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Skye%20Cuillin.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Sleep_and_Then.mp3',
    ],
    USSR: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Broken%20Reality.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Neo%20Western.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Cold%20Funk.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Sock%20Hop.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Steel%20Rods.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Future%20Gladiator.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Harmful%20or%20Fatal.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Call%20to%20Adventure.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Hitman.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Hero%20Down.mp3',
    ],
    GERMANY: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Five%20Armies.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Movement%20Proposition.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Summon%20the%20Rawk.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Bet%20You%20Can.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Take%20the%20Lead.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Noise%20Attack.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Riptide.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Welcome%20to%20the%20Show.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Chipper.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Big%20Rock.mp3',
    ],
    Background: [
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Reawakening.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Perspectives.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Space%201990.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Easy%20Lemon.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Healing.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Porch%20Swing%20Days%20-%20faster.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Last%20Kiss%20Goodnight.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Revival.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Wish%20Background.mp3',
        'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Frozen%20Star.mp3',
    ],
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