import fs from 'fs/promises';

export async function readSkills() {
  let rawdata = await fs.readFile('skills.json');
  let skills = JSON.parse(rawdata);
  return skills;
}