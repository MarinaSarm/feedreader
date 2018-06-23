/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('have URLs', () => {
             allFeeds.forEach((feed) => {
               expect(feed.url).toBeDefined();
               expect(feed.url).toMatch(/^(https|http):\/\//);
             });
         });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('have names', () => {
             allFeeds.forEach((feed) => {
               expect(feed.name).toBeDefined();
               expect(feed.name).not.toEqual('');
             });
         });
    });


    /* New test suite named "The menu" */

    describe('The menu', () => {

        /* Test that ensures the menu element is
         * hidden by default.
         */

         it('is hidden by default', () => {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */

          it('changes visibility when the menu icon is clicked', () => {
              var menuIcon = document.querySelector('.menu-icon-link');
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).not.toBe(true);
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });


    /* Test suite named "Initial Entries" */

    describe('Initial Entries', () => {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach((done) => {
               loadFeed(0, () => {
                 done();
               });
         });

         it('contain at least one element', (done) => {
            var entry = $('.feed .entry');
            var entries = entry.length;
            expect(entries).toBeGreaterThan(0);
            done();
         });

    });

    /* Test suite named "New Feed Selection" */

    describe('New Feed Selection', () => {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

         var initialFeed;
         var feed = document.querySelector('.feed');

         beforeEach((done) => {
               loadFeed(0, () => {
                 initialFeed = feed.innerHTML;
                 loadFeed(1, () => {
                   done();
                 });
               });
         });

         it('leads to change of content', () => {
             expect(feed.innerHTML).not.toEqual(initialFeed);
         });

    });
}());
