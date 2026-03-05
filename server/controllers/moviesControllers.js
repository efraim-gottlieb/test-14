import fs from 'fs/promises'


export async function getMovies(req, res) {
  const movies = await fs.readFile("./data/movies.json", "utf-8");
  res.send(JSON.parse(movies));
}