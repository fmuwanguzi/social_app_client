## ERD
![images](./images/mongo_relations.png)


### User stories
-------------------------------------------------------------
User logins
User can view other users 
User can follow other users
User can unfollow other users
User can delete theirs account
User can post status
User can comment on other user's status


----------------------------------------------------------
## Routes

### Current:
-------------
| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| TEST/GET | api/users/test | Test | Test |
| GET | api/user/register | Signup.js | Signup Page |
| GET | api/user/login | Login.js | Login Page |
| GET | api/user/about | About.js | About Page |
| GET | api/user/profile | Profile.js | User Profile |


### To be made:
----------------

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | api/users/all | users.js | view all users in database |
| PUT | api/users/follow | users.js | add followers to user|
| PUT | api/users/unfollow | users.js | unfollow a user|
| DELETE | api/users/id | profile.js | delete the user account|


### Possible routes would require small changes to the schema’s:
-----------------------------------------------------------------

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| POST | api/users/status | users.js | user can post status |
| GET | api/users/view_status | users.js | view all status’ by all users|
| GET | api/users/view_status/id | users.js | view one status|
| POST | api/users/status/id | profile.js | users can comment on status|
| DELETE | api/users/view_status/id | profile.js | delete one status|



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start : .env`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




