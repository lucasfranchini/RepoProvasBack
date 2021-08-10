# RepoProvas

An Web application to post and see all the old tests for a determined college.

Try it out now at https://repo-provas-front-n128ghmoy-lucasfranchini.vercel.app

## About

This is an application with which lots of people can share old tests made in college. Below are the implemented features:

- Save in Database all tests
- Link a test to a subject
- Link a test to a professor
- get all tests of a professor
- get all tests of subject
- add new subjects for a professor

By using this app anyone can share important tests for study and help community college grow.

## Technologies

The following tools and frameworks were used in the construction of the project:<br>

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</p>

## How to run

1. Clone this repository
2. create a postgres Database named pokedex
3. create a .env like .env.example with your database values
4. Install dependencies

```
npm i
```

5. create and run migrations for your database with:

```
npm run build
```

6.start server with:

```
npm run dev
```

7.Finally access http://localhost:4000/routename changing 'routename' for the route you wanna call on postman or in front-end: https://github.com/lucasfranchini/RepoProvasFront
