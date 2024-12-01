let song_list=["Treat You Better","Señorita","In My Blood","Wonder","Mercy","There's Nothing Holdin' Me Back","If I Can't Have You"];
function updateSongList(){
    song_list.innerHTML = "";
    songs.forEach(song => {
        const listItem = document.createElement("li")
        listItem.textContent = song;
        songList.appendChild(listItem);
    })

}

/*
song_list =["Treat You Better","Señorita","In My Blood","Wonder","Mercy","There's Nothing Holdin' Me Back","If I Can't Have You"];
console.log("Initial Songs:", song_list);
song_list.push("Song 5");
console.log("After Adding a New Song:",song_list);
song_list.splice(1, 1); 
console.log("After Deleting Second Song:",song_list);
song_list.forEach((song, index) => {
    console.log(`Song ${index + 1}: ${song}`);

});
function showAler(event){
    event.preventDefault();
    const name=document.getElementById ('name').value;
    alert('My name is'+ name);
}
    */
    



