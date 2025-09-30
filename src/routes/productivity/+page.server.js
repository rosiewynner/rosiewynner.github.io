
export async function load({ params, fetch }) {
    const response = await fetch("api/calendar");

    const events = await response.json();
    
    return {events}
}