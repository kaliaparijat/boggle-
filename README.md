Boggle Project
==============

Running
-------

To run this project, you need to kickstart APACHE on your local machine. This can be done in two ways:

1. Download MAMP, follow the setup process, place the unzipped folder inside of your htdocs folder of your MAMP directory.
2. If you have apache installed or need to set that up, follow instructions here: https://discussions.apple.com/docs/DOC-3083  and then unzip the folder and place it in your sites directory.

Libraries
----------

This project uses the following libraries:
1. Backbone
2. Handlebars
3. Underscore
4. jQuery-1.8.3

These are loaded via a CDN on the index.html page, that is, they are not found inside of this directory.

Assignment
----------

Your assignment is to build a browser-based version of the game Boggle. If you're not familiar with Boggle, it's a word game where you try to make words from adjacent letters in a grid of letters. The longer the word, the more points you score.

The functionality should be implemented according to the following specification:

### I. Game Grid

When the page loads, the game UI is displayed, including a 5-by-5 grid of the Boggle dice.

* The page displays a 5-by-5 grid of dice from the following list:

        aaafrs
        aaeeee
        aafirs
        adennn
        aeeeem
        aeegmu
        aegmnn
        afirsy
        bjkqxz
        ccenst
        ceiilt
        ceilpt
        ceipst
        ddhnot
        dhhlor
        dhlnor
        dhlnor
        eiiitt
        emottt
        ensssu
        fiprsy
        gorrvw
        iprrry
        nootuw
        ooottu

    (Each row in this list corresponds to a die, with each letter being one face of the die. For example, the first row represents a single die with the six faces "a", "a", "a", "f", "r", and "s".)

* Each die is displayed in a random position in the grid.
* The letter "Q" is displayed as (and counts for scoring as) "Qu".
* The letter (or first letter in the case of "Qu") is capitalized.
* A "Current Word" section shows the current word being built.
* A "Score" table shows all the words played, their point value, and the total score for the session.

### II. Core Gameplay

Gameplay involves clicking on dice one by one to build up a word. You can only click on dice that are adjacent to your last selected die and that are not already selected; you cannot wrap around the game board, but you can select dice diagonally adjacent to the last selected die.

* Clicking any die when no dice are currently selected selects that die.
    * Selecting a die changes its color and adds its letter to the "Current Word" display.
* Clicking on a non-selected die adjacent to the last selected die (diagonals included) additionally selects that die.
* The most recently selected die can be unselected by clicking on it, which removes its letter from the "Current Word" display.
    * This process can be repeated to un-select all selected dice by clicking them in reverse order.
* Clicking the "Submit Word" button adds the word to the "Score" list along with its point value and updates the total score.
    * Submitting a word deselects all currently selected dice.

### III. Scoring

Point values for words scored in Boggle are determined by the length of the word submitted. Do not worry about checking the validity of submitted words (just assume any word submitted is a real word).

* Words already submitted score no points (and do not appear in the score list a second time).
* Submitted words are scored as follows based on the length of the word:
    * 1-2 letters: 0 points
    * 3-4 letters: 1 point
    * 5 letters: 2 points
    * 6 letters: 3 points
    * 7 letters: 5 points
    * 8 or more letters: 11 points

### UI Styling

See the `specification/colors.png` file to see a rough draft of the UI you should implement. It does not need to be pixel-perfect, but you should make an effort to replicate the styles shown. The game UI should be centered horizontally on the page.

Making Your Changes
-------------------

You can find various files in the `public` directory of this project in which you will make your changes:

* `public/index.html`: the HTML file rendered by visiting the root URL in your browser (was a .ejs file)
* `public/js/main.js`: the JavaScript file in which to place your game and UI logic and behavior
* `public/js/folders`: distributed JS files application logic
* `public/css/main.css`: Using a bare bones CSS file (I am familiar with JS)

You may make other changes to the project, including loading 3rd party JavaScript libraries or installing additional Node.js modules, if you wish to do so. Please be sure to modify this README to include any special instructions for running your modified application, if any apply.

UPDATED CHANGES
-------------------



* `public/index.html`: the HTML file rendered by visiting the root URL in your browser
