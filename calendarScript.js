import { google } from 'googleapis';
import fs from 'fs';
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const getCalendarEvents = async () => {
	const auth = new google.auth.GoogleAuth({
		keyFile: './user.json',
		scopes: SCOPES
	});

	const calendar = google.calendar({ version: 'v3', auth });

	const res = await calendar.events.list({
		calendarId: 'rosievermoss@gmail.com', // or the specific calendar ID you shared
		timeMin: new Date('2025-09-01').toISOString(),
		timeMax: new Date('2025-09-30').toISOString(),
		singleEvents: true,
		orderBy: 'startTime'
	});

	fs.writeFileSync('static/cal-events.json', JSON.stringify(res.data));
};

await getCalendarEvents();
