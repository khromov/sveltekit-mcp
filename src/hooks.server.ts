import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('Handling request:', event.request.method, event.url.pathname, event.request.headers);

	const response = await resolve(event);

	response.headers.set('X-Accel-Buffering', 'no');
	response.headers.set('cache-control', 'no-cache');

	return response;
};
