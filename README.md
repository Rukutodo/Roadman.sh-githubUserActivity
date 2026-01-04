# GitHub User Activity (CLI)

A Node.js command-line application that fetches and displays recent GitHub activity for a given user using the GitHub Events API.

This project is built based on the **roadmap.sh GitHub User Activity project**.

🔗 Project reference: https://roadmap.sh/projects/github-user-activity

---

## 📌 Description

This CLI tool accepts a GitHub username as a command-line argument and:

- Fetches the user’s recent GitHub activity from the GitHub Events API.
- Parses the returned event data.
- Detects specific event types such as:
  - Repository creation (`CreateEvent`)
  - Push (commit) events (`PushEvent`)
- Displays a simple summary to the terminal.

This demonstrates how to handle asynchronous API calls, parse JSON, and work with conditionals in a Node.js CLI environment.

---

## 🚀 How to Run

### Prerequisites

- Node.js v18 or higher (required for native `fetch` support)

### Installation

Clone the repository:
   ```bash
   git clone https://github.com/Rukutodo/Roadmap.sh-luckyGuessGame.git
   cd Roadmap.sh-luckyGuessGame
   node index.js <github-username>
   node index.js Rukutodo
   ```
###🧠 How It Works

1.The GitHub username is read from command-line arguments using process.argv.

2.The application calls the GitHub Events API:

3.https://api.github.com/users/{username}/events


4.The response is parsed using response.json().

5.The event list is iterated and filtered.
    The following events are currently handled:
    CreateEvent → Displays repository creation
    PushEvent → Displays commit push activity with a running count

###🧪 Example Output
---- Github User Activity ----
```
Created repo Rukutodo/Roadmap.sh-luckyGuessGame
Pushed 1 commits to Rukutodo/Roadmap.sh-luckyGuessGame
Pushed 2 commits to Rukutodo/Roadmap.sh-luckyGuessGame
```
###🛠️ Tech Stack

Node.js

JavaScript (ES Modules)

Native fetch

GitHub REST API
###🛠️ Tech Stack

Node.js

JavaScript (ES Modules)

Native fetch

GitHub REST API
