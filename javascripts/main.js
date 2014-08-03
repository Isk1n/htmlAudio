var soundsElem = document.getElementById('sounds');
soundsElem.onclick = function(e) {
    if (e.target.tagName !== 'LI') return;
    hear(e.target.innerText, soundUrls, htmlSounds);
}
soundsElem.onmousedown = soundsElem.onselectstart = function() {
    return false;
}
var playElem = document.getElementById('play');
play.onclick = function() {
    hear(document.querySelector('input[name="musicSelect"]:checked').value, musicUrls, htmlMusic);
}

var htmlSounds = {};
var htmlMusic = {};
var modDefaultVolume = 1; // Default volume (between 0 and 1)
// Distinct sounds' volumes
var soundVolumes = {
    'http://sound.mp3': 0.2
};

var soundsLoadedProgressBar = document.getElementById('soundsLoadedProgressBar');
var soundsLoaded = 0;
var soundsTotal = 0;

function initSounds(urls, audios) {
    for (var trigger in urls) {
        if (!urls[trigger]) continue;
        var numOfSounds = urls[trigger].length;
        audios[trigger] = [];

        for (var i = 0; i < numOfSounds; i++) {
            var currentAudio = audios[trigger][i] = new Audio();
            currentAudio.src = urls[trigger][i];
            currentAudio.preload = 'auto';
            currentAudio.volume = soundVolumes[currentAudio.src] || modDefaultVolume;
            if (urls === musicUrls) continue;
            currentAudio.onloadeddata = function() {
                soundsLoaded++;
                soundsLoadedProgressBar.style.width = Math.floor(soundsLoaded * 100 / soundsTotal) + '%';
                soundsLoadedProgressBar.innerText = soundsLoaded + '/' + soundsTotal;
            }
            soundsTotal++;
            // currentAudio.playbackRate = 0.5;
        }
    }
}

function hear(trigger, urls, audios) {
    if (!urls[trigger]) {
        console.warn('There is no ' + trigger);
        return;
    }
    var len = urls[trigger].length;
    if (!len) return;
    var idx = Math.floor(Math.random() * len);

    audios[trigger][idx].play();
}

var musicUrls = {
    olive: [
        'https://www.youtube.com/watch?v=GMGuSX3lYsI',
        'https://www.youtube.com/watch?v=z754_a_aAHA',
        'https://www.youtube.com/watch?v=ziX_f7rdFD4',
        'https://www.youtube.com/watch?v=hkDXNSWJLuo',
        'https://www.youtube.com/watch?v=XheJnmLAwhk',
        'https://www.youtube.com/watch?v=uH1wfrOcvHg'
    ],
    indigo: [
        'https://www.youtube.com/watch?v=2f1FN4VldnQ',
        'https://www.youtube.com/watch?v=1JQ6-E43aiE',
        'https://www.youtube.com/watch?v=UDwRgJhdxl4',
        'https://www.youtube.com/watch?v=nEYPpi1PtQM',
        'https://www.youtube.com/watch?v=CQlX2nJK12Q',
        'https://www.youtube.com/watch?v=qY6Lg7rry14',
        'https://www.youtube.com/watch?v=Tr7wovtbcYk',
        'https://www.youtube.com/watch?v=_dIUM4LRVsE',
        'https://www.youtube.com/watch?v=dCrg23o1oIU',
        'https://www.youtube.com/watch?v=R1rWSxektRU'
    ],
    // sandy: [
    //     'https://www.youtube.com/watch?v=XQBGq42E8dw',
    //     'https://www.youtube.com/watch?v=2kotK9FNEYU',
    //     'https://www.youtube.com/watch?v=xiGKxCAg_0o',
    //     'https://www.youtube.com/watch?v=wJkFehapkEU',
    //     'https://www.youtube.com/watch?v=RxabLA7UQ9k',
    //     'https://www.youtube.com/watch?v=k-hgbQOjTFQ',
    //     'https://www.youtube.com/watch?v=G99FfalLFWQ',
    // ]
    sandy: [
        "http://s1download-universal-soundbank.com/mp3/sounds/16272.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16273.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16274.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16275.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16276.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16277.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16278.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16279.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16280.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16281.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16282.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16283.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16284.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16285.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16286.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16287.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16288.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16289.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16290.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16291.mp3",
    ],
}

var soundUrls = {
    accordion: [
        "http://s1download-universal-soundbank.com/mp3/sounds/16272.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16273.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16274.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16275.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16276.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16277.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16278.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16279.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16280.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16281.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16282.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16283.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16284.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16285.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16286.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16287.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16288.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16289.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16290.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/16291.mp3",
    ],

    bass: [
        "http://s1download-universal-soundbank.com/mp3/sounds/18434.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18435.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18436.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18437.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18438.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18439.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18440.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18441.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18442.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18443.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18444.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18445.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18446.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18447.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18448.mp3",
    ],

    cello: [
        "http://s1download-universal-soundbank.com/mp3/sounds/19310.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19311.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19312.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19313.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19314.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19315.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19316.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19317.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19318.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19319.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19320.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19321.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19322.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19323.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19324.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19325.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19326.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19327.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19328.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19329.mp3",
    ],

    drum: [
        "http://s1download-universal-soundbank.com/mp3/sounds/4974.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/4975.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/2294.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/2295.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/2298.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/2297.mp3",
    ],

    flute: [
        "http://s1download-universal-soundbank.com/mp3/sounds/17081.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17082.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17083.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17084.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17085.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17086.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17087.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17088.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17089.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17090.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17091.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10259.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10260.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10261.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10262.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10263.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10264.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/10265.mp3",
    ],

    harmonica: [
        "http://s1download-universal-soundbank.com/mp3/sounds/18641.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18642.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18643.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18644.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18645.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18646.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18647.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18648.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18649.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18650.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18651.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18652.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18653.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18654.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18655.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18656.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18657.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18658.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18659.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/18660.mp3",
    ],

    harp: [
        "http://s1download-universal-soundbank.com/mp3/sounds/520.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/521.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/516.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/523.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/7356.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/7357.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/7358.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17807.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17808.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17809.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17810.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17811.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17812.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17813.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17814.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17815.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17816.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17817.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17818.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/17819.mp3",
    ],

    kalimba: [
        "http://s1download-universal-soundbank.com/mp3/sounds/21129.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21130.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21131.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21132.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21133.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21134.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21135.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21136.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21137.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21138.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21139.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21140.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21141.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21142.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21143.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21144.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21145.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21146.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21147.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21148.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/21149.mp3",
    ],

    mandoline: [
        "http://s1download-universal-soundbank.com/mp3/sounds/19284.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19285.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19286.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19287.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19288.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19289.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19290.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19291.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19292.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19293.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19294.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19295.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19296.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19297.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19298.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19299.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19300.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19301.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19302.mp3",
        "http://s1download-universal-soundbank.com/mp3/sounds/19303.mp3",
    ],
};

initSounds(soundUrls, htmlSounds);
initSounds(musicUrls, htmlMusic);