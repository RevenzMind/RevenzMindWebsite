import type { APIRoute } from 'astro';
import { fetchDiscordActivity } from '../../utils/SpotifyWrapper';

export const GET: APIRoute = async () => {
  try {
    const activity = await fetchDiscordActivity();
    
    if (!activity) {
      return new Response(JSON.stringify({
        song: null,
        artist: null,
        album_art_url: null
      }), {
        status: 200,
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
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch Spotify data'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}