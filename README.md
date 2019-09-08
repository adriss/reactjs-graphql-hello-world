# reactjs-graphql-hello-world

#### A Hello World [ReactJS](https://reactjs.org/) app using [GraphQL](https://graphql.org/).

This sample is a simple ReactJS application that prints a `Hello World` string from a GraphQL API.

## Installing
### Clone Git Repo
Download this sample to your local machine.
```sh
$ git clone git@github.com:adriss/reactjs-graphql-hello-world.git
```
Browse contents to get an understanding of this sample' structure.
```sh
$ cd reactjs-graphql-hello-world
$ ls
  README.md  app.yaml api        www
```
##### app.yaml
The `app.yaml` file defines this sample' stack by providing definitions to the following components:
1. `parameters`: defines shared parameters to be used within the yaml file.
2. `resources`: defines the GraphQL API as `api` and the Cloud Folder as `www`.
3. `outputs`: defines the stack outputs that will be pushed into the app as environment variables.
#### api
The `api` directory contains the GraphQL schema and resolvers.
#### www
The `www` directory contains the contents that will be uploaded the a Folder and to be exposed via `http`. 
### Create an Adriss remote
Adriss uses Git remotes to deploy your code.
```sh
$ adriss create
  Creating app... done, ▲ reactjs-graphql-hello-world
  https://reactjs-graphql-hello-world.adrissapp.com/ | https://git.adriss.com/reactjs-graphql-hello-world.git
```
## Deploying
To deploy your app to Adriss, you typically use the git push command to push the code from your local repository’s master 
branch to your adriss remote, like so:
```sh
$ git push adriss master
  Initializing repository, done.
  updating 'refs/heads/master'
  ...
```
Use this same command whenever you want to deploy the latest committed version of your code to Adriss.

Note that Adriss only deploys code that you push to the `master` branch of the `adriss` remote. Pushing code to another 
branch of the remote has no effect.
## Updating
Upon deploying your app, Adriss detects which resources of the app, as defined in `app.yaml`, need to be updated.
