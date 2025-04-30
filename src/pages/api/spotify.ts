import type { APIContext } from 'astro';
import { fetchDiscordActivity } from '../../utils/SpotifyWrapper';


import type { APIRoute } from 'astro';

export const  GET: APIRoute = async ({ params, request }) => {
    const activity = await fetchDiscordActivity();
        
    if (!activity) {
        return Response.json({
            song: null,
            artist: null,
            album_art_url: null
        });
    }

    return Response.json({
        song: activity.song,
        artist: activity.artist,
        album_art_url: activity.album_art_url
    });

}

