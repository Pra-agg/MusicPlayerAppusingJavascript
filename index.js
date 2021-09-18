const music = document.querySelector("audio")
const play = document.getElementById("play");
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "music1" ,
        title : "Dil Ke Pass",
        artist:"Arjit Singh",
        image : "image2"
    },
    {
        name: "music2" ,
        title : "Mt Aazma Re",
        artist:"Pritam",
        image : "image3"
    },
    {
        name: "music3" ,
        title : "Kitni Hasrat Hai",
        artist:"Kumar Sanu",
        image : "image4"
    },
    {
        name: "music4" ,
        title : "Chal Wahna Jate Hai",
        artist:"Arjit Singh",
        image : "image5"
    },
    {
        name: "music5" ,
        title : "Tum Hi Aana",
        artist:"Jubin Nautiyal",
        image : "image6"
    },
    {
        name: "music6" ,
        title : "Yaara",
        artist:"Mamta Sharma",
        image : "image7"
    }
]







let isplaying = false;

const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    image.classList.add("anime")
};

const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    image.classList.remove("anime")
};

play.addEventListener("click", () => {
    if (isplaying) {
        pauseMusic();
    }
    else {
        playmusic();
    }
})

const loadsongs = (songs) =>
{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `musics/${songs.name}.mp3`;
    image.src = `images/${songs.image}.jpg`;
}

 let songindex = 0
const nextsong = () =>
{
    songindex = (songindex +1)% songs.length;
    loadsongs(songs[songindex]);
    playmusic();
}

const previoussong = () =>{
    songindex =(songindex- 1 + songs.length) % songs.length ;
    loadsongs(songs[songindex]);
    playmusic();
}


next.addEventListener("click",nextsong)
previous.addEventListener("click",previoussong)