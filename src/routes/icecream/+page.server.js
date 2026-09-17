import { INSTAGRAM_APP_ID_ICD, INSTAGRAM_ACCESS_TOKEN_ICD } from '$env/static/private';

export const prerender = true;

export const load = async ({ fetch }) => {
	const url = new URL(`https://graph.instagram.com/v21.0/${INSTAGRAM_APP_ID_ICD}/media`);

	url.searchParams.set(
		'fields',
		['id', 'caption', 'media_type', 'media_url', 'permalink', 'thumbnail_url', 'timestamp'].join(
			','
		)
	);

	url.searchParams.set('access_token', INSTAGRAM_ACCESS_TOKEN_ICD);
	url.searchParams.set('limit', '100');

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Instagram API error: ${response.status}`);
	}

	const data = await response.json();

	return {
		posts: data.data
	};
};
