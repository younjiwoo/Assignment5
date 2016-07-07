
// Practice with JavaScript OOP Concepts (20 points)


// step 1
//var ANIMAL = ANIMAL || {};
//    ANIMAL.Cat = function() {
//    
//    }
//    ANIMAL.Dog = function() {
//        
//    }    

    
// step 2
//var Cat = {
//    breed: 'Persian',
//    sex: 'male'
//};
//var Dog = function() {
//    return {
//        breed: 'Corgi',
//        sex: 'female'
//    }
//};


// step 3 
//var Casey = new Dog();


// step 4
//var Animal = function() {
//    console.log("The Animal has been created.");
//    return {
//        
//    }
//}


// step 5
//var Animal = function(message) {
//    console.log(message);
//    return {
//        
//    }
//}


// step 6
//var Animal = function(type, breed, color, height, length) {
//        this.type= type;
//        this.breed= breed;
//        this.color= color;
//        this.height= height;
//        this.length= length;
//}
//var dog = new Animal('dog', 'corgi', 'brown', '40 inches', '80 inches');


// step 7
//for (var animalTrait in dog) {
//    console.log(animalTrait + ': ' + dog[animalTrait]);
//}


// step 8
//Animal.prototype.speak = function() {
//    if (this.type === 'dog') {
//        console.log('The ' + this.color + ' dog is barking!');
//    } 
//    if (this.type === 'cat') {
//        console.log('The ' + this.color + ' cat is meowing!');
//    } 
//}
//var dog = new Animal('dog', 'corgi', 'brown', '40 inches', '80 inches');


// step 9
//var Animal = function(type, breed, color, height, length) {
//        var type= type;
//        var breed= breed;
//        var color= color;
//        var height= height;
//        var length= length;
//this.checkType = function() {
//        if (type === 'dog') {
//            return 'dog';        
//        } else {
//            return 'cat';
//        }
//    }
//}
//Animal.prototype.speak = function() {
//    return 'The ' + this.checkType() + ' has made a noise!';
//}
//var dog = new Animal('dog', 'corgi', 'brown', '40 inches', '80 inches');


// step 10
//String.prototype.findWords = function(substring) {
//    var count = 0;
//    this.split(' ').forEach(function(word) {
//        if (word === substring) {
//            count++;
//        }
//    });
//    return count;
//}


// The Recipe Card (15 points)	
//var recipe = {
//    title: 'Guacamole',
//    serves: 4,
//    ingredients: ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'],
//    callRecipe: function () {
//        console.log(this.title);
//        console.log('Serves: ' + this.serves);
//        console.log('Ingredients:')
//        for(i = 0; i < this.ingredients.length; i++) {
//            console.log('- ' + this.ingredients[i]);
//        }
//    } // end callRecipe function
//    
//}; // end recipe object
//
//recipe.callRecipe();


// The Reading List (15 points)
//var arrBooks = [
//{
//    title: 'WHEN BREATH BECOMES AIR',
//    author: 'Paul Kalanithi',
//    alreadyRead: true
//},
//{
//    title: 'GRIT',
//    author: 'Angela Duckworth',
//    alreadyRead: false
//},
//{
//    title: 'OUTLIERS',
//    author: 'Malcolm Gladwell',
//    alreadyRead: false
//},
//{
//    title: 'THE BOYS IN THE BOAT',
//    author: 'Daniel James Brown',
//    alreadyRead: true
//},
//{
//    title: 'THE WRIGHT BROTHERS',
//    author: 'David McCullough',
//    alreadyRead: true
//},
//{
//    title: 'ALEXANDER HAMILTON',
//    author: 'Ron Chernow',
//    alreadyRead: false
//}
//]
//for (i = 0; i < arrBooks.length; i++) {
//    console.log(arrBooks[i].title + " by " + arrBooks[i].author);
//    if (arrBooks[i].alreadyRead === true) {
//        console.log('You already read \"' + arrBooks[i].title + '" by ' + arrBooks[i].author);
//    } else {
//        console.log('You still need to already read \"' + arrBooks[i].title + '" by ' + arrBooks[i].author);
//    }
//}