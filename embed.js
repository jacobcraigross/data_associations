var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST ---> title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

// USER ---> email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String, 
   posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

var newUser = new User({
   email: "kill@them_all.com", 
   name: "Gunter Von Probstkrieg"
 });

newUser.posts.push({
    title: "They are feeding on our souls.",
    content: "The shadows are moving. They are crawling like insects."
 });

newUser.save(function(err, user){
    if (err) {
       console.log(err);
    } else {
       console.log(user);
    }
 });

var newPost = new Post({
    title: "Why is god trying to kill me?",
    content: "Every two years god comes down from heaven and tries to murder me in my sleep."
 });

newPost.save(function(err, post){
    if (err) {
       console.log(err);
    } else {
       console.log(post);
    }
 });

User.findOne({name: "Gunter Von Probstkrieg"}, function(err, user){
   if (err) {
      console.log(err);
   } else {
      user.posts.push({
         title: "I will kill you.",
         content: "Minesota Fritz and the party of gloom. Now go lay down."
      });
      user.save(function(err, user){
         if (err) {
            console.log(err);
         } else {
            console.log(user);
         }
      });
   }
});



