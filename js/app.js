/**
 * Created by Alpha on 2014-12-10.
 */

//* first, we start by assigning a variable to work on

var catpic = $(".cat-photo img");

//* then, we assign a function in order to add a click listener and add a function to it

$(catpic).click(function() {
    alert($(this).attr("alt"));
});


