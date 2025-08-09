import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';
import { writeFile } from 'fs/promises';

export const load: PageServerLoad = async () => {
	const user = requireLogin();
	const games = db.query.user.findMany();
	return { user, games };
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/demo/lucia/login');
	},
	insert: async (event) => {
			const formData = await event.request.formData();
			const title = formData.get('title');
			const cover = formData.get('cover') as File;
			//const coverFile = formData.get('cover_base');
			const animation = formData.get('animation') as File;
			//const animationFile = formData.get('animation_base');
			const floppy = formData.get('floppyColor');

			await writeFile(`images/${cover.name}`, cover.stream());
			await writeFile(`images/${animation.name}`, animation.stream());
			
			//writeFile(coverFile, `${cover}`);
			//writeFile(animationFile, `${animation}`)

			try {

				await db.insert(table.game).values({ title, cover: 'images/' + cover.name, 'animation': 'images/' + animation.name, floppy });
	
			} catch {
				return fail(500, { message: 'An error has occurred' });
			}
		}
};

/*
function writeFile(data, filename) {
	let chunkSize = 1024; 
	let decodedData = Buffer.alloc(0);

	for (let i = 0; i < data.length; i += chunkSize) {
	let chunk = data.substr(i, chunkSize);
	decodedData = Buffer.concat([decodedData, Buffer.from(chunk, "base64")]);
	}

	writeFileSync(filename, decodedData);
} */

function requireLogin() {
	const { locals } = getRequestEvent();

	if (!locals.user) {
		return redirect(302, '/demo/lucia/login');
	}

	return locals.user;
}
