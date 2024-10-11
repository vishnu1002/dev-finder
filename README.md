<p align="center"><img src="https://github.com/vishnu1002/dev-finder/blob/main/public/icons/android-icon-192x192.png" alt="FuseColor Logo"></p>
<h1 align="center">devfinder.</h1>

<div align="center">
  
  <a href="https://react.dev/">![REACT JS](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)</a>
  
</div>

<div align="center">
  
  <a href="">[![Static Badge](https://img.shields.io/badge/Licence-MIT-%23CA0404?style=flat-square&logo=mit&logoColor=white)](https://choosealicense.com/licenses/mit/)</a>
  
</div>

**DevFinder** is a React-based web app that enables users to search and view GitHub profiles using the GitHub API. It provides essential details like repositories, followers, and activity, helping users connect and collaborate with developers. With a sleek, responsive design and optimized performance, DevFinder simplifies the process of exploring GitHub profiles, offering a smooth and efficient user experience.

# ✨ Features

- **GitHub User Search:** Instantly search for GitHub users by username.
- **Profile Overview:** Displays user avatar, name, bio, location, and other key profile details.
- **Real-time API Fetching:** Utilizes GitHub’s API for up-to-date profile data.

# 🚀 Deployment
- fusecolor is deployed using [Cloudflare Pages](https://pages.cloudflare.com/). 
- Visit the deployment page [devfinder.pages.dev](https://thedevfinder.pages.dev/) to access the live version of the application.

# 💡 Getting Started

> **Note:** The GitHub access token is essential for accessing its `REST API` [learn more.](https://docs.github.com/en/rest)
- Create a `.env` file in the root of the folder with the following contents:
```
VITE_TOKEN={your_token}
```
- Obtain a GitHub personal access token here [https://github.com/settings/tokens](https://github.com/settings/tokens)
- Generate new token (classic)

## 🖥️ Local Setup:

1. Clone the repository
```
https://github.com/vishnu1002/dev-finder.git
```
```
cd dev-finder
```
2. Install dependencies
````
npm install
````
3. Build project
```
npm build
```
4. Run the app locally
```
npm run dev
```

## 🐳 Docker Setup:

1. Clone the repository
```
https://github.com/vishnu1002/dev-finder.git
```
```
cd dev-finder
```
2. Build and run the container
```
docker-compose up -d
```
3. Stop the container
```
docker-compose down
```


# Credits
devfinder is developed and maintained by Vishnu

# License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

![devfindersocial](https://github.com/user-attachments/assets/8502ab04-8bda-49d6-835c-aadc1df1e844)


