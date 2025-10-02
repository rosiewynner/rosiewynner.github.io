import { google } from 'googleapis';
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

export async function GET() {
	const auth = new google.auth.GoogleAuth({
		keyFile: 'src/routes/api/calendar/user.json',
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

	return new Response(JSON.stringify(res.data.items));
}
