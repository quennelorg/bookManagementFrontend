---
sidebar_position: 1
---

## How to Run The Project

- `git clone` From the [Git Repo](https://github.com/quennelorg/bookManagement)

- `cd backend`
- Find the directory: bookAPI and use IDEA open it
- Then use `./gradlew install` the dependency. By the way, you need have environment setup in [Intro](/docs/intro)
- you need use docker to lunch mongoDB 
  - `docker pull mongo`
  - `docker run -d -p 27017:27017 your-images-name`
- If success, you can run the project by `./gradlew bootRun`
- Then you can call the api by localhost:8080/book
- If you have any question or problem, please send email to me!