const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.json());

const SUBSCRIBERS_FILE = path.join(__dirname, "data", "subscribers.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const puzzles = {
  english: require("./data/english"),
  srpski: require("./data/srpski"),
};

app.get("/english/preview", (req, res) => {
  const { name } = req.query;
  const previewData = puzzles.english.map(
    ({ name, main_image, variations, description, history }) => ({
      name,
      main_image,
      variations,
      description,
      history,
    })
  );

  if (name) {
    const result = previewData.filter(
      (puzzle) => puzzle.name.toLowerCase() === name.toLowerCase()
    );
    return res.json(result);
  }

  res.json(previewData);
});

app.get("/srpski/preview", (req, res) => {
  const { name } = req.query;
  const previewData = puzzles.srpski.map(
    ({ name, main_image, variations, description, history }) => ({
      name,
      main_image,
      variations,
      description,
      history,
    })
  );

  if (name) {
    const result = previewData.filter(
      (puzzle) => puzzle.name.toLowerCase() === name.toLowerCase()
    );
    return res.json(result);
  }

  res.json(previewData);
});

app.get("/english", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = puzzles.english.filter(
      (puzzle) => puzzle.name.toLowerCase() === name.toLowerCase()
    );
    return res.json(filtered[0]);
  }
  res.json(puzzles.english);
});

app.get("/srpski", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = puzzles.srpski.filter(
      (puzzle) => puzzle.name.toLowerCase() === name.toLowerCase()
    );
    return res.json(filtered[0]);
  }
  res.json(puzzles.srpski);
});

app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  let subscribers = [];
  if (fs.existsSync(SUBSCRIBERS_FILE)) {
    try {
      subscribers = JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, "utf8"));
    } catch {
      subscribers = [];
    }
  }

  if (subscribers.some((s) => s.email === email)) {
    return res.status(409).json({ error: "Already subscribed" });
  }

  subscribers.push({ email, subscribedAt: new Date().toISOString() });
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
