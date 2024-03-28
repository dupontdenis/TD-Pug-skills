import { readSkills } from "./readSkills.mjs";
import { writeHTML } from "./writeHTML.mjs";
import { writeSkills } from "./createSkills.mjs";

async function main() {
  // First, create the skills.json file
  await writeSkills();

  let skills = await readSkills();

  // Sort the skills by rating in descending order
  skills.sort((a, b) => b.rating - a.rating);

  // Limit the skills to the top 3
  skills = skills.slice(0, 3);

  await writeHTML(skills);
}

main();
