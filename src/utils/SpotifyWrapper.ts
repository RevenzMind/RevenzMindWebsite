interface LanyardResponse {
  data: {
    listening_to_spotify: boolean;
    spotify?: {
      timestamps: {
        start: number;
        end: number;
      };
      album: string;
      album_art_url: string;
      artist: string;
      song: string;
      track_id: string;
    };
  };
  success: boolean;
}

interface SpotifyActivity {
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  track_id: string;
}

export async function fetchDiscordActivity(): Promise<SpotifyActivity | null> {
  try {
    const response = await fetch('https://api.lanyard.rest/v1/users/1286544389073534976');
    const data: LanyardResponse = await response.json();
    
    if (data.data.listening_to_spotify && data.data.spotify) {
      return data.data.spotify;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching Spotify activity:', error);
    return null;
  }
}
