const fs = require('fs');
const pug = require('pug');

const html = pug.renderFile('./views/skills-list.pug',
{
    skills: [
      {
        name: 'langace C',
        rating: 7
      },
      {
        name: 'CSS',
        rating: 6
      },
      {
        name: 'JS',
        rating: 8
      },
      {
        name: 'Nuitdelinfo',
        rating: 1
      },
    ]
  }
);

fs.writeFileSync("index.html", html);
