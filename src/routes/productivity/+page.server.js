import calendarData from '../../../static/cal-events.json';

export async function load() {
	const events = calendarData.items;
	return { events };
}
