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
    kiwi6: [
        'http://k007.kiwi6.com/hotlink/ijr85aciol/Kelly_Clarkson_-_My_Life_Would_Suck_Without_You_-_Piano_Cover.mp3',
        'http://k007.kiwi6.com/hotlink/ts1mwp3a1c/Accelerated_Heartbeat_Rain_Soaked_Mix_.mp3',
        'http://k007.kiwi6.com/hotlink/3k676w8niy/Daft_Punk_-_Get_Lucky_Ask_You_In_Gray_8-BIT_.mp3',
        'http://k007.kiwi6.com/hotlink/i5jbbmvxjr/Ballad_of_Fallen_Angels.mp3',
        'http://k007.kiwi6.com/hotlink/wv3lwe5aen/Electric_Fence_feat._Shift_-_La_carciuma_de_la_drum_dj_waveSound_vs_leftside_remix_.mp3',
        'http://k007.kiwi6.com/hotlink/pu1uer096y/Echo_Of_MyYouth_Utah_Raptors_.mp3'
    ],
    aggrotech: [
        'http://promodj.com/download/3375041/Electrocore%20%E2%80%93%20The%20Entity%20and%20the%20Fault%20%28promodj.com%29.mp3',
    ]
}

initMusic();