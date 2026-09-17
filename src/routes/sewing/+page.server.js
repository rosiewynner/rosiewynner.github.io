import { INSTAGRAM_ACCESS_TOKEN, APP_ID } from '$env/static/private';

export const prerender = true;

export const load = async ({ fetch }) => {
	const url = new URL(`https://graph.instagram.com/v21.0/${APP_ID}/media`);

	// ?fields=id,caption,comments_count,like_count,media_url,video_url,media_type,permalink

	url.searchParams.set(
		'fields',
		['id', 'caption', 'media_type', 'media_url', 'permalink', 'thumbnail_url', 'timestamp'].join(
			','
		)
	);

	url.searchParams.set('access_token', INSTAGRAM_ACCESS_TOKEN);

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Instagram API error: ${response.status}`);
	}

	const data = await response.json();

	return {
		posts: data.data
	};
};
