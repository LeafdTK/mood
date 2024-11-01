declare module 'spotify-web-api-node' {
    interface SpotifyWebApiNode {
        setAccessToken(token: string): void;
        getMe(): Promise<{ body: { id: string } }>;
        getRecommendations(options: {
            seed_genres: string[];
            limit: number;
            target_valence: number;
            target_energy: number;
        }): Promise<{
            body: {
                tracks: Array<{
                    uri: string;
                }>;
            };
        }>;
        createPlaylist(
            userId: string,
            options: {
                name: string;
                description?: string;
                public?: boolean;
            }
        ): Promise<{
            body: {
                id: string;
                external_urls: {
                    spotify: string;
                };
            };
        }>;
        addTracksToPlaylist(
            playlistId: string,
            tracks: string[]
        ): Promise<any>;
    }

    export default class SpotifyWebApi implements SpotifyWebApiNode {
        constructor(credentials?: {
            clientId?: string;
            clientSecret?: string;
            redirectUri?: string;
        });
        setAccessToken(token: string): void;
        getMe(): Promise<{ body: { id: string } }>;
        getRecommendations(options: {
            seed_genres: string[];
            limit: number;
            target_valence: number;
            target_energy: number;
        }): Promise<{
            body: {
                tracks: Array<{
                    uri: string;
                }>;
            };
        }>;
        createPlaylist(
            userId: string,
            options: {
                name: string;
                description?: string;
                public?: boolean;
            }
        ): Promise<{
            body: {
                id: string;
                external_urls: {
                    spotify: string;
                };
            };
        }>;
        addTracksToPlaylist(
            playlistId: string,
            tracks: string[]
        ): Promise<any>;
    }
}