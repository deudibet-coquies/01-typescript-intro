
interface AudioPlayer{
    audioVolumen: number, 
    sonfDuration: number, 
    song: string,
    details: Details,
}

interface Details{
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    sonfDuration: 95,
    song: "la Nubesita",
    details:{
        author:"Saya", 
        year:2011
    }
}



// const { song:holasong, sonfDuration:dr } = audioPlayer;
// const { author:cole, year:a } = audioPlayer.details;
// console.log("song",holasong);
// console.log("sonfDuration",dr);
// console.log("autor", cole);
// console.log("año", a);


const [p1,p2,p3]: string[] = ["Goku","vegeta","trunks"]

console.table({p1,p2,p3});


export{};





