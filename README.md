# Social Network APIs

## Description

- In the modern day social network could be a useful tools to help people share their thought

- Helping people share their thought and take advantage of other opinion also connected with others

- a simple social network back-end application

- MongoDb, Express, Dotenv, software design and architecture, async/await, and more

## Table of Contents

- [How To Use](#how-to-use)
- [Installation](#installation)
- [Acceptance_Criteria](#acceptance-criteria)
- [Helpful Resources](#helpful-resources)
- [How to Contribute](#how-to-contribute)

## How To Use

tech Talk and how to run, walkthrough video on ([Goggle Dirve](https://drive.google.com/file/d/14gh0f0EzkngPL31a3TuwdSnjPxBVS_Ls/view?usp=sharing))

How to use APIs, walkthrough video on ([Goggle Dirve](https://drive.google.com/file/d/18rgPBry2VNOg3a44K3fbQFAjzaz71meb/view?usp=sharing))

))


## Installation

```
npm install
npm start

```

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Helpful Resources

[MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)


## How to Contribute

Challenges repository
This is an open-source project which has Licensed by MIT which allows you to contribute and used open source codes used in this repo (All Branches).
More info: https://g.co/kgs/QWcHhF

- Branches are named as modules [n] and each one of them is a unique challenge.
- Master Branch contains the last solved challenge. (the read me you are reading through, it is a default guide when NO challenge is available to help you do a pre-setup.)

# How to use the module and deploy

- Clone the repo and make it own

  # Https URL :

        git clone https://github.com/miladesmailpour/challanges.git

  # ssh URL :

        git clone git@github.com:miladesmailpour/challanges.git

  # Checking the fetch/pull and push URL :

        git remote -v

  # Modifing origin URL :

        git remote add origin [https/ssh URL of your repo] https://docs.github.com/en/get-started/quickstart/create-a-repo

  # Verifing the fetch/pull and push URL :

        git remote -v https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories

  # Chacking the status of local :

        git status

        "if local NOT updated"
        git add .
        git commit -m "[your comment]"
        git push origin master/main

- Checkout the module (the challenge you want to use and deploy)
  # Checkout to the desired challenge :
       git checkout module[n]
  # Verifing :
       git status
  # [Make the change you wish to have]
       What do you think needed to improve?
  # Commiting to local and updating the GitHub repo:
         git add .
         git commit -m "[your comment]"
         git push origin [your module name]
- Moving Modules to Master Branch and deploying:
  # Creating a pull request to update the master/main :
       https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  # Deploy through the GitHub :
       https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

