export async function POST(req) {
  try {
    const { fullName, bio } = await req.json();
    const prompt = `Write a short, engaging student portfolio introduction for ${fullName}, based on the following bio and also write it as in first person mode according to the bio and dont give like random examples, just write an enhance for a job profile level: ${bio}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error Response:", data);
      return Response.json({ error: "Gemini API error" }, { status: 500 });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return Response.json({ intro: text || "No intro generated." });
  } catch (err) {
    console.error("Gemini API error:", err);
    return Response.json({ error: "Gemini API failed" }, { status: 500 });
  }
}
