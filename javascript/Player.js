//This is the object that controls the behavior of our player character
var Banjoe = {

    //Direction will be a boolean, true for right, false for left
    direction : true,
    x_position : 0,
    y_position : -1825,
    y_velocity : -40,
    y_max : -1865,
    y_min : -1825,
    speed : -10,
    y_fall : 1,
    gifs : ["images/BanjoGuyRunning.gif", "images/BanjoGuyRunningLeft.gif", "images/BanjoGuyJump.gif", "images/BanjoGuyJumpLeft.gif"],
    $images : null,
 
    // initializes our character object
    init : function(){
        this.$images = $.preload(this.gifs);
        $("div#Banjoe").empty().append(this.$images[0]);
    },

    //These methods will control the direction of our character
    goRight : function(){
        $("div#Banjoe").empty().append(this.$images[0]);
        this.direction = true;
        this.speed = -10;
    },
    goLeft : function(){
        $("div#Banjoe").empty().append(this.$images[1]);
        this.direction = false;
        this.speed = 10;
    },

    //Handles character jumps
    jumpRight : function(){
        $("div#Banjoe").empty().append(this.$images[2]);
    },

    jumpLeft : function(){
        $("div#Banjoe").empty().append(this.$images[3]);
    },

    jump : function(){
        if(this.y_position > this.y_max){
            this.y_position += this.y_velocity;      
        }
        if(this.direction === true){
            this.jumpRight();
        }
        else if(this.direction === false){
            this.jumpLeft();
        }
    },

    run : function(){
        if(this.y_position < this.y_min + 1 /*&& this.y_position != -1*/){
            this.y_position += this.y_fall;
            this.x_position += this.speed;
        }
        else if (this.y_position === this.y_min +1) {
            this.y_position = this.y_min;
            if(this.direction === true){
                this.goRight();
            }
            else{
                this.goLeft();
            }
        }
    }
}

//This controls user input
// WASD control
//https://www.w3schools.com/jsref/event_key_keycode.asp
//https://keycode.info/

//Preloads an array of images into a jQuery object
//from Kent Jones' Coyote example
$.preload = function( arr ) {
    return $.map(arr, function( val ){
        var $img = $('<img/>');
        $img[0].src = val;
        return $img[0];
    });
}