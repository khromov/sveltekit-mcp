import { z } from 'zod';
import type { RequestHandler } from './$types';
import { createMcpHandler } from '@vercel/mcp-adapter';

const handler = createMcpHandler(
	(server) => {
		server.tool(
			'roll_dice',
			'Rolls an N-sided die',
			{ sides: z.number().int().min(2) },
			async ({ sides }) => {
				console.log({ sides });
				const value = 1 + Math.floor(Math.random() * sides);
				return {
					content: [{ type: 'text', text: `🎲 You rolled a ${value}!` }]
				};
			}
		);
	},
	{},
	{
		maxDuration: 5,
		basePath: '/mcp',
		verboseLogs: true,
		redisUrl: 'redis://localhost:6379'
	}
);

export const GET: RequestHandler = async ({ request }) => {
	console.log('GET request received');
	return handler(request);
};

export const POST: RequestHandler = async ({ request }) => {
	return handler(request);
};

export const DELETE: RequestHandler = async ({ request }) => {
	return handler(request);
};
