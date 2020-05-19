
## Top Clothing
This is a sample online clothing app, build as a side project while practicing some
new Frontend technologies.

### Front End Tech Stack
<ul>
<li>React - Frontend frame work for the App.</li>
<li>Redux - State management for the FE.</li>
<li>Redux Persist - Persist the redux state in FE.</li>
<li>Reselect - To create actions to be used by the Redux Store.</li>
<li>Redux Sagas - Used to handle all async logic for FE and fire actions for state management.</li>
<li>Redux Logger - Used in dev mode to log the redux actions</li>
<li>Axios - FE wrapper for the fetch to fire API calls.</li>
<li>HTML/CSS - Basic Html and CSS for the layout.</li>
<li>Jest/Enzyme - For the FE testing.(Note - Tests are still worked on)</li>
</ul>

### BackEnd Tech Stack
<ul>
<li>Express - Backend server for the App.</li>
<li>Node -JS runtime environment.</li>
<li>Concurrently - To run the BE and FE server in parallel in dev mode.</li>
<li>Firebase - Backend for the App, to manage the Authentication and Data storage.</li>
<li>Stripe - To handle the Payments for the Apps.</li>
</ul>

### Project Commands
The project is live on Heroku, but it can be hosted on any server.The scripts for the dev and Heroku are given in the package.json.

### `npm run dev`
To run the backend and frontend server in parallel.
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Steps for Local development
<ul>
<li>Run npm install under the root and the client folder</li>
<li>To run both the BE and FE server run 'npm run dev' from the root folder.</li>
<li>To run only the FE server run 'npm run start' from the client folder. This will give you full access to the FE APP minus the payment feature.</li>
<li>
Don't forget to Add your Stripe key and Firebase Keys
There are two `.env.example' files, one in the root folder and one in the client folder.
They need to be renamed to '.env' and filled with your secret keys.
The file under root folder, holds the key for the Stripe integration.
The one under client folder, has the keys for the Firebase integration. 
</li>
<li>To run Test, run 'npm run test' from the client folder.</li>
</ul> 

### You Can get the demo cards to be used for Stripe payment from https://stripe.com/docs/testing.

### `npm run heroku-postbuild`
Heroku build command, that run on the Heroku server.


**Note: Special thanks to Andrei Neagoie and Yihua Zhang form Udemy for the wonderful lesson.**

