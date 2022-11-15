# Using Node.js and NPM to manage JavaScript dependencies

* Download the repository.
* Open the HTML and JavaScript files in a text editor.
* View the files in a browser (make sure you use a web server). * Open the console.log to see the output from the program.

This simple application uses the Luxon library (https://moment.github.io/luxon/#/). It's a simple library for working with dates and time in JavaScript. Have a look at the file *app.js*. See how the Luxon library is used to generate times for different zones of the world.

* Add a couple more lines of code to output the time in a different time zone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for a list of time zones.

At the moment the Luxon library has been loaded by linking to a *luxon.js* file from a Content delivery Network (CDN), have a look in the HTML page i.e.

```html
<script src="https://cdn.jsdelivr.net/npm/luxon@3.1.0/build/global/luxon.min.js"></script>
```
We did exactly the same thing when we used the Leaflet library for the map application a couple of weeks ago.

## Using Node.js and npm
Instead of using a CDN, front-end web developers often using Node.js and npm (Node Package Manager) to manage the loading of libraries for an application.

To start with we need to declare this is a Node.js project.

* Open the Node.js command prompt
* In the command prompt navigate to this project folder. We did look at this previously when working with Sass. See https://github.com/CHT2531/intro-to-sass-node/blob/master/intro-to-command-prompt.md for advice on using the Windows Command Prompt.
* To make sure you have navigated to the correct folder. Type in
```
dir
```
And you should see *index.html* and the *js* folder listed. i.e. something like:

```
    Directory: K:CHT2531\nodejs
    Name
    ----
    js
    index.html
    README.md
```

Next, we want to specify this folder is a Node.js project. Type in the following

```
npm init -y
```
* This will create a *package.json* file with default settings.
* *package.json* is like a configuration file for a Node.js project.
  * Open this in a text editor to see the default settings. You don't need to change any of them for now.

### Installing a JavaScript library into the project
Still in the Command Prompt enter the following:-
```
npm install --save luxon
```
You should get some feedback that Luxon is being downloaded and installed.

* If you look in the *package.json* file you should see that the dependencies section has updated to include Luxon.
    - The flag ```--save``` tells Node.js to add the library to the list of dependencies in the *package.json* file.

```
  "dependencies": {
    "luxon": "^3.1.1"
  },
```
* You should also find that you have a new *node_modules* folder in your project and inside here there should be a luxon folder.  
* Open *app.js* change the code to use the node package instead of the CDN version of Luxon.
  * Comment out the first line
    ```
    const DateTime = luxon.DateTime;
    ```
  * And add the following at the top of the file
    ```
    import {DateTime} from '../node_modules/luxon/build/es6/luxon.js';
    ```
  * This uses an ES2015 ```import``` statement to load the Luxon library from the *node_modules* folder.
  * We no longer need to link to the CDN, so you can comment out the first ```<script>``` element in the *index.html*.
  * Save the file and make sure this still works.

* We can install any library in the same way. You just need to find the library on the NPM website (https://www.npmjs.com/).


## Using a module bundler
There are still two problems with this approach:
1. Only modern browser understand ES2015 modules.
2. By default when we add a library to a project the entire library is imported. It would be nice if we just imported the bits of a library that we actually use. It's possible to do this using a process known as tree shaking.

A module bundler is a tool that can solve these problems for us. Essentially a module bundler looks through all the JavaScript code in our application, including the libraries and it generates a single JavaScript file that will work across all browsers.

We will use a module bundler known as rollup.js (https://rollupjs.org/guide/en/). Back in the command prompt, enter the following:-

```
npm install --global rollup
```
Next we need to tell rollup that we want to create a single JavaScript file for our entire app. Enter the following into the Command Prompt

```
 rollup ./js/app.js --file ./js/bundle.js --format iife
```
You should find this generates a *bundle.js* file that contains both the Luxon library code and the code we have written.

Finally, change the ```<script>``` element in the HTML page to link to *bundle.js*.
```
<script src="js/bundle.js"></script>
```
Finally, test this works.

## Learning more
* https://www.impressivewebs.com/npm-for-beginners-a-guide-for-front-end-developers/
* https://www.agiliq.com/blog/2019/01/using-npm-to-manage-frontend-libraries/
* https://css-tricks.com/why-npm-scripts/
