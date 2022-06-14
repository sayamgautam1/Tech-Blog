<h1>Tech Blog</h1>
  
 ![badge](https://img.shields.io/badge/license-MIT-yellow)<br />

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. App is following the MVC paradigm in its architectural structure, and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. It was developed over some starter code and deployed to Heroku.

## Installation

To install the files into your local repo, using Git Bash Terminal:

Create a folder locally to nominate for cloning from online repo

```
https://github.com/sayamgautam1/Tech-Blog.git
```

Install dependencies

```
npm i init -y
npm i
npm i bcrypt
npm i connect-session-sequelize
npm i dotenv
npm i express
npm i express-handlebars
npm i express-session
npm i handlebars
npm i inquirer
npm i mysql2
npm i nodemon
npm i sequelize

```

Open up MySQL shell and input

```
source db/schema.sql
```

Then quit MySQL shell and input the following in your terminal

```
npm run seeds/seed.js
```

to start running application simply input

```
node server.js
```

or

```
npm start
```

Open http://localhost:3001/ in your browser and use the application

## Usage

Used to allow developers to post and comment on eachother's posts.

## License

![badge](https://img.shields.io/badge/license-MIT-yellow)
<br />
This application is covered by the MIT license.

## Contributing

Sayam Gautam

## Questions

contact me<br />
<br />
Find me on GitHub: [sayamgautam1](https://github.com/sayamgautam1)<br />
<br />
✉️ Email me with any questions: sayamgautam1@gmail.com<br /><br />
