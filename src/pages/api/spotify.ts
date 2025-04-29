import type { APIContext } from 'astro';
import { fetchDiscordActivity } from '../../utils/SpotifyWrapper';

export async function GET({ request, url, cookies }: APIContext): Promise<Response> {
    try {
        const activity = await fetchDiscordActivity();
        
        if (!activity) {
            return Response.json({
                song: null,
                artist: null,
                album_art_url: null
            }, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        return Response.json({
            song: activity.song,
            artist: activity.artist,
            album_art_url: activity.album_art_url
        }, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Access-Control-Allow-Origin': '*'
            }
        });
        
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
        return Response.json({
            song: null,
            artist: null,
            album_art_url: null
        }, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}