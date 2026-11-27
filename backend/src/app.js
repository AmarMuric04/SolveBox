const express = require("express");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

const DATA_DIR = path.join(__dirname, "data");
// accounts.json and subscribers.json hold personal data and are not committed.
// Without them the server falls back to the committed *.example.json files.
const ACCOUNTS_FILE = process.env.ACCOUNTS_FILE || path.join(DATA_DIR, "accounts.json");
const SUBSCRIBERS_FILE =
  process.env.SUBSCRIBERS_FILE || path.join(DATA_DIR, "subscribers.json");

function readJson(file, fallbackFile) {
  const source = fs.existsSync(file) ? file : fallbackFile;
  try {
    return JSON.parse(fs.readFileSync(source, "utf8"));
  } catch {
    return [];
  }
}

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const puzzles = {
  english: require("./data/english.json"),
  srpski: require("./data/srpski.json"),
};

// Each account is { email, passwordHash } (bcrypt). Hashes never leave the server.
const accounts = readJson(ACCOUNTS_FILE, path.join(DATA_DIR, "accounts.example.json"));
const reviews = require("./data/reviews.json");
const apiData = require("./data/api.json");

app.get("/reviews", (_req, res) => res.json(reviews));
app.get("/api-data", (_req, res) => res.json(apiData));

const findAccount = (email) =>
  typeof email === "string"
    ? accounts.find((a) => a.email.toLowerCase() === email.trim().toLowerCase())
    : undefined;

// Tells sign-up whether an email is already taken by a server-side account.
app.get("/accounts/exists", (req, res) => {
  res.json({ exists: Boolean(findAccount(req.query.email)) });
});

app.post("/auth/signin", async (req, res) => {
  const { email, password } = req.body || {};
  const account = findAccount(email);
  const ok =
    account &&
    typeof password === "string" &&
    (await bcrypt.compare(password, account.passwordHash));
  if (!ok) return res.status(401).json({ error: "Invalid email or password" });
  res.json({ email: account.email });
});

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

  const subscribers = readJson(
    SUBSCRIBERS_FILE,
    path.join(DATA_DIR, "subscribers.example.json")
  );

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
