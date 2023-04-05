<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://chat-gpt-interface-omega.vercel.app/">
    <img src="https://user-images.githubusercontent.com/95110967/229977955-c0200624-3729-4be2-8475-9b706a66655a.png" alt="Logo" width="170" height="170">
  </a>
  <h3 align="center">Chat AI App: BACKEND</h3>

  <p align="center">
    Click below to see a preview of the project!
    <br />
    <a href="https://chat-gpt-interface-omega.vercel.app/"><strong>Explore the app »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Chat GPT (Generative Pre-trained Transformer) is a natural language processing (NLP) model developed by OpenAI. It is a deep learning model based on the Transformer architecture that is trained on a large corpus of conversational data. Chat GPT is designed to generate human-like responses to user input, allowing for natural conversations with a virtual assistant.

Chat AI App is a project based on the `text-davinci-003` model of Chat GPT 3.5. It's just another interface to simulate that we are talking with an artificial intelligence.

Training model data: _Up to Jun 2021_

<p align="right"><a href="#readme-top">Subir</a></p>

### Built With

Technologies used to develop this project.

- [![javascript][javascript]][javascript-url]
- [![node][node.js]][node-url]
- [![express][express.js]][express-url]
- [![mongodb][mongodb]][mongodb-url]
- [![nodemon][nodemon]][nodemon-url]
- [![jwt][jwt]][jwt-url]


   ```json
   {
     "dependencies": {
       "bcrypt": "^5.1.0",
       "cors": "^2.8.5",
       "dotenv": "^16.0.3",
       "express": "^4.18.2",
       "jsonwebtoken": "^9.0.0",
       "mongoose": "6.5.2",
       "multer": "^1.4.5-lts.1",
       "nodemailer": "^6.9.1",
       "openai": "^3.1.0",
       "uuid": "^9.0.0",
       "yup": "^1.0.0"
     },
     "devDependencies": {
       "nodemon": "^2.0.22"
     }
   }
   ```

<p align="right"><a href="#readme-top">Subir</a></p>

<!-- GETTING STARTED -->

## Getting Started

For this project, it is necessary to have:

- a <a href="https://mongodb.com/"><strong>MongoDB</strong></a> account with access to the database
- a <a href="https://myaccount.google.com/security"><strong>Gmail</strong></a> account with a password for applications
- OpenAI <a href="https://platform.openai.com/account/api-keys"><strong>API Key »</strong></a>
- an optional account on <a href="https://mailtrap.io/home"><strong>mailtrap.io »</strong></a>

### Prerequisites

Install <a href="https://nodejs.org/"><strong>Node.js »</strong></a>

- npm: _current version_

  ```sh
  node -v
  v14.17.6

  npm -v
  6.14.15
  ```

### Installation

Assuming you’ve already installed Node.js:

1. Clone the repo
   ```sh
   git clone https://github.com/elviocepeda/chat-gpt-backend.git
   ```
2. Enter chat-gpt-backend folder
   ```sh
   cd chat-gpt-backend
   ```
3. Install NPM packages
   ```sh
   npm i
   ```
4. Enter your credencials in `.env` file
   ```js
   PORT = "ENTER APP PORT";
   MONGODB_NAME = "ENTER MONGODB NAME"; // OPTIONAL
   MONGODB_USER = "ENTER YOUR MONGODB USERNAME";
   MONGODB_PASSWORD = "ENTER YOUR MONGODB PASSWORD";
   MAILTRAP_USERNAME = "ENTER YOUR MAILTRAP USERNAME"; // OPTIONAL
   MAILTRAP_PASSWORD = "ENTER YOUR MAILTRAP PASSWORD"; // OPTIONAL
   JWT_PRIVATE_KEY = "ENTER YOUR JSON WEB TOKEN SECRET";
   OPENAI_API_KEY = "ENTER YOUR OPEN AI API KEY";
   ```
5. Start project!

   ```sh
   npm start
   ```

   _or using nodemon_

   ```sh
   npm run dev
   ```


<p align="right"><a href="#readme-top">Subir</a></p>

<!-- LICENSE -->

## License

Distributed under the ISC License. See `LICENSE.txt` for more information.

[![ISC License][license-shield]][license-url]

<p align="right"><a href="#readme-top">Subir</a></p>

<!-- CONTACT -->

## Contact

Elvio Cepeda - cepedaelvio@gmail.com

[![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/elviocepeda/chat-gpt-backend.git](https://github.com/elviocepeda/chat-gpt-backend.git)

<p align="right"><a href="#readme-top">Subir</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0A66C2
[linkedin-url]: https://www.linkedin.com/in/elviocepeda/
[javascript]: https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[javascript-url]: https://developer.mozilla.org/es/docs/Web/JavaScript
[node.js]: https://img.shields.io/badge/Nodejs-20232A?style=for-the-badge&logo=nodedotjs&logoColor=339933
[node-url]: https://nodejs.org/
[express.js]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=FFFFFF
[express-url]: https://expressjs.com/
[mongodb]: https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=mongodb&logoColor=47A248
[mongodb-url]: https://mongodb.com/
[jwt]: https://img.shields.io/badge/JWT-20232A?style=for-the-badge&logo=jsonwebtokens&logoColor=61DAFB
[jwt-url]: https://www.npmjs.com/package/jsonwebtoken
[nodemon]: https://img.shields.io/badge/Nodemon-20232A?style=for-the-badge&logo=nodemon&logoColor=#76D04B
[nodemon-url]: https://www.npmjs.com/package/nodemon
