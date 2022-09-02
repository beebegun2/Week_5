// menu drivin app - assignment
// I am going to create a menu for a music artists and songs

class Song {
    constructor(name, singer) {
        this.name = name;
        this.singer = singer;
    }

    describe() {
        return `${this.name} has this song by ${this.singer} on it their album.`;
    }
}

class Artist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    addSong(song) {
        if (song instanceof Song) {
            this.songs.push(song);
        }else {
            throw new Error(` This is not a correct song: ${song}`);
        }
    }


describe(){
    return `${this.name} is one of ${this.songs.length}
    songs.`;
    }
}

class Menu {
    constructor() {
        this.artists = [];
        this.selectedArtists = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createArtist();
                    break;
                case '2':
                    this.viewArtist();
                    break;
                case '3':
                    this.deleteArtist();
                    break;
                case '4':
                    this.displayArtists();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }

    alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) Create new Artist
        2) View Artist
        3) Delete Artist
        4) Display all Artists
        `);
    }

    showArtistMenuOptions(artistInfo){
        return prompt(`
        0) back
        1) Create Song
        2) Delete Song
        -------------
        ${artistInfo}
        `);
    }

    displayArtists() {
        let artistString = '';
        for (let i = 0; i < this.artists.length; i++) {
            artistString += i +') ' + this.artists [i].name + '\n';
        }
        alert(artistString);
    }
    displaySongs() {
        let songString = '';
        for (let i = 0; i < this.songs; i++) {
            songString += i +') ' + this.songs [i].name + '\n';
        }
        alert(songString);
    }
    createArtist(){
        let name = prompt('Enter name of new Artist:');
        this.artists.push(new Artist(name));
    }

    deleteArtist(){
        let index = prompt('Enter the index of the Artist you wish to delete:');
        if (index > -1 && index < this.artists.length) {
            this.artists.splice(index, 1);
        }
    }

    viewArtist(){
        let index = prompt('Enter the index of the Artist you wish to view:');
        if (index > -1 && index < this.artists.length) {
            this.selectedArtist = this.artists[index];
            let description = 'Artist Name: ' + this.selectedArtist.name + '\n';

        for (let i = 0; i < this.selectedArtist.songs.length; i++) {
            description =+ i + ') ' + this.selectedArtist.songs[i].name + ' - ' + this.selectedArtist.songs[i].singer + '\n';
        }

        let selection = this.showArtistMenuOptions(description);
        switch (selection) {
            case '1':
                this.createSong();
                break;
            case '2':
                this.deleteSong();
                break;
            }    
        }
    }
    
    createSong(){
        let name = prompt('Enter name of the new Song:');
        let singer = prompt('Enter name of Artist')
            this.selectedArtist.songs.push(new Song(name, singer));
    }

    viewSong(){
         let index = prompt('Viewing songs');
         if (index > -1 && index < this.songs.length) {
            this.selectedSong = this.songs[index];
            let description = 'Song Name: ' + this.selectedSong.name + '\n';

        for (let i = 0; i < this.selectedSong.songs.length; i++) {
            description =+ i + ') ' + this.selectedSong.songs[i].singer + ' - ' + this.selectedSong.songs[i].singer + '\n';
        }

        let selection = this.showSongMenuOptions(description);
        switch (selection) {
            case '1':
                this.displaySongs();
            }    
        }
    }
    deleteSong(){
        let index = prompt('Enter the index of the Song you wish to delete:');
        if (index > -1 && index < this.selectedArtist.songs.length) {
            this.selectedArtist.songs.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();