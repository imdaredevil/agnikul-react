<h1>Agnikul Website</h1>

This is the source code of the offical website of Agnikul. 

Initially, the pages are designed as individual html pages.
In order to have professional route names and data transfer between routes, the project is revamped to run over React Js. 
Hence, the files will not be of pure react nature.


<h2>Folder Structure</h2>

<code>
agnikul-react<br/>
|<br>
|---public<br>
|   └───images<br>
|        └───team-photos <br>/* The photos of the team members should be kept inside the public folder since it is being referenced dynamically in the js/team.js file */<br>
|---src<br>
    ├───css<br>
    │   └───poppins<br>
    ├───images<br>
    │   ├───about<br>
    │   │   ├───advisors<br>
    │   │   ├───customers<br>
    │   │   ├───investors<br>
    │   │   └───partners<br>
    │   ├───book<br>
    │   ├───book-complete<br>
    │   ├───career<br>
    │   ├───form-icons<br>
    │   ├───home<br>
    │   ├───launch<br>
    │   ├───news<br>
    │   ├───products<br>
    │   └───team<br>
    └───js<br>    
    |<br>
    /* The html pages for each route */<br>
    |---Home-Page.js<br>
    |---About-Page.js<br>
    |---Products-Page.js<br>
    |---Team-Page.js<br>
    |---Career-Page.js<br>
    |---News-Page.js<br>
    |---Launch-Page.js<br>
    |---Book-Page.js<br>
    |---BookComplete-Page.js<br>
    /* The file where the route is mapped to the component */<br>
    |---App.js    
</code>


<h2>File naming</h2>
<ul>
<li>The component files are named as //Route//-Page.js</li>
<li>The js files are named as //Route//.js. common.js has the function required for making navbar responsive</li>
<li>The css files are named as //Route//.css. styles.css has the css for navbar, footer and the privacy policy modal.</li>
</ul>

<h2>CSS Files</h2>
<ul>
<li>Each file is separated into sections by comments</li>
<li>All classes should have the component name as prefix since in React, the css files which are not included in the page can also be loaded sometimes.</li>
</ul>

<h2>JS Files</h2>
<ul>
<li>All the functions are wrapped into a outer function called Init.</li>
<li>The component calls the corresponding Init function before rendering</li>
</ul>



<h2>Running the code base</h2>

After cloning the repository, run:

### 'npm instaal --save'

This will load all the libraries needed.

Then, in the project directory, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
