export interface presence {
	spotify: spotify;
	listening_to_spotify: boolean;
	discord_user: user;
	discord_status: string;
	activities: activity[];
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
}

export interface activity {
	type: number;
	state: string;
	name: string;
	id: string;
	emoji?: emoji;
	created_at: number;
	application_id: null | string;
	timestamps?: timestamps;
	sync_id?: string;
	session_id?: string;
	party?: party;
	flags?: number;
	details?: string;
	assets?: assets;
}

interface assets {
	large_text: string;
	large_image: string;
	small_text?: string;
	small_image?: string;
}

interface emoji {
	id: string;
	name: string;
}

interface party {
	id: string;
}

interface timestamps {
	start: number;
	end?: number;
}

export interface user {
	username: string;
    display_name: string;
	public_flags: number;
	id: string;
	avatar: string;
}

export interface spotify {
	track_id: string;
	timestamps: timestamps;
	song: string;
	artist: string;
	album_art_url: string;
	album: string;
}