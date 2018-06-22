frontend-nanodegree-feed-reader-testing
===============================

# Project Overview

This project is based on a web-based application that reads RSS feeds. The project's purpose is implementing testing, based on [Jasmine](http://jasmine.github.io/). Jasmine is a behavior-driven development framework for testing JavaScript code. The project made for the [Udacity Front-End Web Developer Nanodegree](http://udacity.com/course/front-end-web-developer-nanodegree--nd001).


## Instructions

To run the Feed-Reader application simply open `index.html` file in your browser. All necessary setup is already done to use Jasmine for testing the application. Jasmine tests supported across many browsers (Safari, Chrome, Firefox, PhantomJS, Microsoft Edge, and new Internet Explorer).


## Tests suits

* Test suit `"RSS feeds"`:
  1. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
  2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Test suite `"The menu"`:
  1. Test that ensures the menu element is hidden by default.
  2. Test that ensures the menu changes visibility when the menu icon is clicked.
* Test suite `"Initial Entries"`:
  1. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Test suite `"New Feed Selection"`:
  1. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.


## Contributing

This repository is my project made for Udacity. I will not accept pull requests.
