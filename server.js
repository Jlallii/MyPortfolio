import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post('/api/chat', async (req, res) => {

  const userMessage = req.body.message;

  // Basic filter: only answer tech questions
  const techKeywords = ['react', 'javascript', 'frontend', 'backend', 'api', 'node', 'career', 'developer', 'programming', 'css', 'html', 'job', 'framework', 'firebase', 'cloud', 'ai', 'tech', 'software', 'web', 'mobile', 'app', 'database', 'git', 'github', 'devops'];

  const isTech = techKeywords.some(word =>
    userMessage.toLowerCase().includes(word)
  );

  if (!isTech) {
  return res.json({ reply: "Sorry, I only answer questions about tech. 🤖💻" });
}

const messages = [
  {
    role: "system",
    content:
      "You are a helpful and humorous tech career advisor. Always reply in **1-2 sentences** max. Keep answers short, practical, and friendly. Avoid long explanations.",
  },
  {
    role: "user",
    content: userMessage,
  },
];

try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000' // Replace with your domain if deployed
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3-haiku', // You can try others like 'anthropic/claude-3-haiku'
        messages,
        temperature: 0.7,
        max_tokens: 75, // Limit response length
      })
    });

  const data = await response.json();
    console.log("OpenRouter response:", JSON.stringify(data, null, 2));

    const reply = data.choices?.[0]?.message?.content || "Hmm, I’m out of ideas for now.";
    res.json({ reply });
  } catch (err) {
    console.error('OpenRouter fetch error:', err);
    res.status(500).json({ reply: "Something went wrong. Try again later." });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
