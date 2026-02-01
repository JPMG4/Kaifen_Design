export async function handler(event) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405 };
    }

    const body = JSON.parse(event.body || "{}");

    console.log("TRACK_EVENT:", {
      event: body.name,
      time: new Date().toISOString(),
      ip: event.headers["x-forwarded-for"],
      ua: event.headers["user-agent"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch {
    return { statusCode: 500 };
  }
}
