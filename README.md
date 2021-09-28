<p align="center">
  <h3 align="center">The Trading Post</h3>
  <p align="center">
    A sustainable marketplace where users can trade unwanted items with other users!
    <br />
    <br />
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Features of The Trading Post:
* Search for items users have posted and view additonal information about items
* Post unwanted items that other users can view
* Keep a running list of the items you have saved
* Message users about items you are interested in
* Add to your wishlist so users can see items you are looking for 

### Built With

* React
* Ruby on Rails
* Websockets
* Firebase Storage 

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/johnshellabarger/trading-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the JSON server
   ```sh
   json-server --watch db.json
   ```
4. Start the App
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Landing Page
Sign up and create an Account to login.
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/22285810/135146023-7807133f-be60-40e1-92d2-5543395a7724.gif"/>
</p>


### Browse items 
Upon login, you will be greeted with all the items other users have posted. Click on the thumbnail to view more details about these items.  



### Upload items
Click on "Upload" to upload a photo of an item you want to get rid of. Select the photo and click add photo. Fill out the details for the item and click "Post" 



### Message users about their items
If you are viewing an items detail, there is a option to message a user. Once this button is clicked, it will initiate a conversation with the other user. You can then message them about their item and see if they are willing to trade. 


### Update your wishlist
Add or delete items to your wishlist so other users can see what items you are looking for! 


<!-- CONTACT -->
## Contact

John Shellabarger - [GitHub](https://github.com/johnshellabarger) | [LinkedIn](https://www.linkedin.com/in/johnshellabarger/) | [Email](johnwilliamshellabarger@gmail.com)

Project Link: [https://github.com/johnshellabarger/trading-app](https://github.com/johnshellabarger/trading-app)
