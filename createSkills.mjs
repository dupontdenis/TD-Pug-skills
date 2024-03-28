import fs from "fs/promises";

const skills = [
  {
    name: "langace C",
    rating: 3,
  },
  {
    name: "CSS",
    rating: 2,
  },
  {
    name: "Python",
    rating: 4,
  },
  {
    name: "JavaScript",
    rating: 5,
  },
  {
    name: "Computer Science",
    rating: 3,
  },
  {
    name: "HTML",
    rating: 4,
  },
  {
    name: "React",
    rating: 2,
  },
];

export async function writeSkills() {
  await fs.writeFile("skills.json", JSON.stringify(skills, null, 2));
}
