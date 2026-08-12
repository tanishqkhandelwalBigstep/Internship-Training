import fs from 'fs/promises';

export async function saveCache(username, data) {
  await fs.mkdir('cache', { recursive: true });

  await fs.writeFile(
    `cache/${username}.json`,
    JSON.stringify(data, null, 2)
  );
}

export async function loadCache(username) {
  try {
    const file = await fs.readFile(
      `cache/${username}.json`,
      'utf8'
    );

    return JSON.parse(file);
  } catch {
    return null;
  }
}