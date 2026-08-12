import { getGitHubData } from './github.js';
import { saveCache, loadCache } from './cache.js';
import { logger } from './logger.js';

const usernames = process.argv.slice(2);

if (usernames.length === 0) {
  console.log('Please enter a GitHub username');
  process.exit();
}

for (const username of usernames) {
  logger.emit('log', `Checking ${username}...`);

  let data = await loadCache(username);

  if (data) {
    logger.emit('log', 'Loaded from cache');
  } else {
    logger.emit('log', 'Fetching from GitHub');

    try {
      data = await getGitHubData(username);
      await saveCache(username, data);
    } catch {
      console.log('User not found');
      continue;
    }
  }

  console.log('-------------------------');
  console.log('Username :', data.profile.login);
  console.log('Name     :', data.profile.name);
  console.log('Followers:', data.profile.followers);
  console.log('Repos    :', data.profile.public_repos);

  console.log('Repository Names:');

  for (const repo of data.repos) {
    console.log('-', repo.name);
  }

  console.log('-------------------------\n');
}