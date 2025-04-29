import type { APIContext } from 'astro';
import { fetchDiscordActivity } from '../../utils/SpotifyWrapper';

export async function GET({ request, url, cookies }: APIContext): Promise<Response> {
    try {
    const activity = await fetchDiscordActivity();
    
    if (!activity) {
      return new Response(JSON.stringify({
          song: null,
          artist: null,
          album_art_url: null
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    }

    return new Response(JSON.stringify({
        song: activity.song,
        artist: activity.artist,
        album_art_url: activity.album_art_url
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return new Response(JSON.stringify({
      song: null,
      artist: null,
      album_art_url: null
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}