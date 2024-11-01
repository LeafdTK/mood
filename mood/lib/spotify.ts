import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export default spotifyApi;

// app/types.ts
export interface Genre {
    id: string;
    name: string;
}

export interface Mood {
    id: string;
    name: string;
    valence: number;
    energy: number;
}
