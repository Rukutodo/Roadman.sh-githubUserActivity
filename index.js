console.log(`---- Github User Activity ----`);
const username = process.argv[2];
console.log(username === null, username);
if (username) {
  const response = await githubApiCall(username);
  const result = await response.json();
  let pushEventscounter = 0;

  const githubEvents = result.filter((events) => {
    if (events.type === "CreateEvent") {
      const createRepoName = events.repo.name;
      console.log(`Created repo  ${createRepoName} `);
    }
    if (events.type === "PushEvent") {
      pushEventscounter++;
      const reponame = events.repo.name;
      console.log(`Pushed ${pushEventscounter} commits to ${reponame} `);
    }
  });
} else {
  console.log("Please Enter a valid username:");
}

// Sample Json Data

// const dummyData = [
//   {
//     id: "7173998742",
//     type: "PushEvent",
//     actor: {
//       id: 133564946,
//       login: "Rukutodo",
//       display_login: "Rukutodo",
//       gravatar_id: "",
//       url: "https://api.github.com/users/Rukutodo",
//       avatar_url: "https://avatars.githubusercontent.com/u/133564946?",
//     },
//     repo: {
//       id: 1127685705,
//       name: "Rukutodo/Roadmap.sh-luckyGuessGame",
//       url: "https://api.github.com/repos/Rukutodo/Roadmap.sh-luckyGuessGame",
//     },
//     payload: {
//       repository_id: 1127685705,
//       push_id: 29468835561,
//       ref: "refs/heads/main",
//       head: "01e53679b3e0c4aac6bc99456ba800260f9b4daa",
//       before: "499163c908ae8a01b69cf924789d76283fa27617",
//     },
//     public: true,
//     created_at: "2026-01-04T12:19:41Z",
//   },
//   {
//     id: "7173976388",
//     type: "PushEvent",
//     actor: {
//       id: 133564946,
//       login: "Rukutodo",
//       display_login: "Rukutodo",
//       gravatar_id: "",
//       url: "https://api.github.com/users/Rukutodo",
//       avatar_url: "https://avatars.githubusercontent.com/u/133564946?",
//     },
//     repo: {
//       id: 1127685705,
//       name: "Rukutodo/Roadmap.sh-luckyGuessGame",
//       url: "https://api.github.com/repos/Rukutodo/Roadmap.sh-luckyGuessGame",
//     },
//     payload: {
//       repository_id: 1127685705,
//       push_id: 29468813256,
//       ref: "refs/heads/main",
//       head: "499163c908ae8a01b69cf924789d76283fa27617",
//       before: "6e556c72151f00b62131384a1465c0588173cbcb",
//     },
//     public: true,
//     created_at: "2026-01-04T12:18:07Z",
//   },
//   {
//     id: "7173966135",
//     type: "PushEvent",
//     actor: {
//       id: 133564946,
//       login: "Rukutodo",
//       display_login: "Rukutodo",
//       gravatar_id: "",
//       url: "https://api.github.com/users/Rukutodo",
//       avatar_url: "https://avatars.githubusercontent.com/u/133564946?",
//     },
//     repo: {
//       id: 1127685705,
//       name: "Rukutodo/Roadmap.sh-luckyGuessGame",
//       url: "https://api.github.com/repos/Rukutodo/Roadmap.sh-luckyGuessGame",
//     },
//     payload: {
//       repository_id: 1127685705,
//       push_id: 29468803006,
//       ref: "refs/heads/main",
//       head: "6e556c72151f00b62131384a1465c0588173cbcb",
//       before: "0556142efdca0cec0b6ae3ddc6e4edef106c1a82",
//     },
//     public: true,
//     created_at: "2026-01-04T12:17:24Z",
//   },
//   {
//     id: "7173905112",
//     type: "PushEvent",
//     actor: {
//       id: 133564946,
//       login: "Rukutodo",
//       display_login: "Rukutodo",
//       gravatar_id: "",
//       url: "https://api.github.com/users/Rukutodo",
//       avatar_url: "https://avatars.githubusercontent.com/u/133564946?",
//     },
//     repo: {
//       id: 1127685705,
//       name: "Rukutodo/Roadmap.sh-luckyGuessGame",
//       url: "https://api.github.com/repos/Rukutodo/Roadmap.sh-luckyGuessGame",
//     },
//     payload: {
//       repository_id: 1127685705,
//       push_id: 29468741693,
//       ref: "refs/heads/main",
//       head: "0556142efdca0cec0b6ae3ddc6e4edef106c1a82",
//       before: "ba2f36374c580a5fb5de3d3e6ebadb7c6a2d6036",
//     },
//     public: true,
//     created_at: "2026-01-04T12:12:45Z",
//   },
//   {
//     id: "7173791800",
//     type: "CreateEvent",
//     actor: {
//       id: 133564946,
//       login: "Rukutodo",
//       display_login: "Rukutodo",
//       gravatar_id: "",
//       url: "https://api.github.com/users/Rukutodo",
//       avatar_url: "https://avatars.githubusercontent.com/u/133564946?",
//     },
//     repo: {
//       id: 1127685705,
//       name: "Rukutodo/Roadmap.sh-luckyGuessGame",
//       url: "https://api.github.com/repos/Rukutodo/Roadmap.sh-luckyGuessGame",
//     },
//     payload: {
//       ref: "main",
//       ref_type: "branch",
//       full_ref: "refs/heads/main",
//       master_branch: "main",
//       description: "Creating a projects following roadmap.sh for backend",
//       pusher_type: "user",
//     },
//     public: true,
//     created_at: "2026-01-04T12:03:47Z",
//   },
//   {
//     id: "6898940966",
//     type: "CreateEvent",
//     actor: {
//       id: 133564946,
//       login: "Rukutodo",
//       display_login: "Rukutodo",
//       gravatar_id: "",
//       url: "https://api.github.com/users/Rukutodo",
//       avatar_url: "https://avatars.githubusercontent.com/u/133564946?",
//     },
//     repo: {
//       id: 1120551509,
//       name: "Rukutodo/InternalProject",
//       url: "https://api.github.com/repos/Rukutodo/InternalProject",
//     },
//     payload: {
//       ref: "main",
//       ref_type: "branch",
//       full_ref: "refs/heads/main",
//       master_branch: "main",
//       description: null,
//       pusher_type: "user",
//     },
//     public: true,
//     created_at: "2025-12-21T13:16:58Z",
//   },
// ];

// List of all the events present in Github API

// const eventsList = [
//   "CommitCommentEvent",
//   "CreateEvent",
//   "DeleteEvent",
//   "DiscussionEvent",
//   "ForkEvent",
//   "GollumEvent",
//   "IssueCommentEvent",
//   "IssuesEvent",
//   "MemberEvent",
//   "PublicEvent",
//   "PullRequestEvent",
//   "PullRequestReviewEvent",
//   "PullRequestReviewCommentEvent",
//   "PushEvent",
//   "ReleaseEvent",
//   "WatchEvent",
// ];

async function githubApiCall(username) {
  return await fetch(`https://api.github.com/users/${username}/events`);
}
