/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
//  var awesomethoughts = "I am Nikhil and i know that i am awesome";
//  var age = 22;
//  var funthoughts = awesomethoughts.replace("awesome","fun");
//  var role ="UI developer";
//  var formattedName = HTMLheaderName.replace("%data%","Nikhil Raina");
//  var formattedRole = HTMLheaderRole.replace("%data%",role);
//  //console.log(formattedName);
//  //console.log(formattedRole);
//    $("#header").prepend(formattedRole);
//    $("#header").prepend(formattedName);
// var s = "audacity";

// var udacityizer = function(s) {  
//     // Right now, the variable s === "audacity"
//     // Manipulate s to make it equal to "Udacity"
//     // Your code goes here!
//     s=s.slice(1);
//     //console.log(s);
//     return s.charAt(0).toUpperCase()+s.slice(1);
// };

// // Did your code work? The line below will tell you!
// //console.log(udacityizer(s));
// var num = ["one","two","three"];
// var number = num;
// num.push('four');
// //console.log(number);
// num.shift();
// //console.log(number);
// var sampleArray = [0,0,7];

// var incrementLastArrayElement = function(_array) {
//     var newArray = [];
//     // Your code should make newArray equal to an array that has the same
//     // values as _array, but the last number has increased by one.
//    newArray = _array.slice(1);
//     var lastNumber = newArray.pop();
//     //console.log(lastNumber);
//     newArray.push(lastNumber + 1);
//     // For example:
//     // _array = [1, 2, 3];
//     // turns into:
//     // newArray = [1, 2, 4];
    
//     // Your code goes in here!
    
    
//     // Don't delete this line!
//     return newArray;
// };

// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));
// var charEscape = function(_html) {
//     var newHTML = _html;
//     // How will you make sure that newHTML doesn't contain any < or > ?
//     // Your code goes here!
// newHTML = _html.replace(/</g, "&lt;");
//     newHTML = newHTML.replace(/>/g, "&gt;");
//     // Don't delete this line!
//     return newHTML;
// };
var bio = {
			"name" : "Nikhil Raina",
			"role" : "UI Developer",
			"contact" :{
            			"email":"nikhil.raina@hashworks.co",
 		    			"github": "nikhilraina775",
 						"twitter": "@Nikhilraina7",
						"location": "Bangalore,Karnataka,India"   
        				},
        	"welcomeMessage": "I'm currently working as a UI Developer in the Banglore,India. I love solving problems and providing solutions that save people time and money and help their day to day lives. Thanks for stopping by!",
        	"biopic":"https://pbs.twimg.com/profile_images/805977303901581312/g10JlAoG.jpg",
			"skills":["HTML5","CSS3","SCSS","JAVASCRIPT"] 
};


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioPic =HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contact.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contact.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contact.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contact.location));
for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

	var work = {
  "jobs": [
    {
      "employer": "HASHWORKS",
      "title": "UI Developer",
      "location": "Bangalore, Karnataka",
      "dates": "December 2016 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
function displayWork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployee = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedEmployeeTitle = formattedEmployee + formattedTitle + formattedDates +formattedLocation+ formattedDescription ;
	$(".work-entry:last").append(formattedEmployeeTitle);
}
}
 displayWork();

var project = {
"jobs" :[
{
      "title": "Little Brahma DESIGNER PLATFORM",
      "dates": "july 2017 - Current",
      "description": "Little Brahma is the all creating eye in the design cosmos. Inspired by the vast expanse of artistic Shastras, complete with UI/UX services, mobile/web apps, and digital innovations. Little Brahma is a fearless trendsetter, leaving a remarkable impression in every new creation."
    },
    {
      "title": "Little Brahma-CREATIVE STUDIO",
      "dates": "Dec 2016 - July 2017",
      "description": "Little Brahma is the all creating eye in the design cosmos. Inspired by the vast expanse of artistic Shastras, complete with UI/UX services, mobile/web apps, and digital innovations. Little Brahma is a fearless trendsetter, leaving a remarkable impression in every new creation."
    }
  ]};
projects.display = function(){
	for (job in project.jobs){
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",project.jobs[job].title);
	var formattedDates = HTMLprojectDates.replace("%data%",project.jobs[job].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",project.jobs[job].description);
	var formattedEmployeeTitle = formattedTitle + formattedDates + formattedDescription;
	$(".project-entry:last").append(formattedEmployeeTitle);
}
}
projects.display();



var education = {
	"schools" :[
	{
		"name" : "SSBT",
		"datesAttended": "2012 - 2016",
		"location" : "Maharashtra",
		"degree": "B.E. E&TC Engineering",
		"major" : "Electronics and Telecommunication"
	}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "July 2017",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "february 2017",
			"url": "https://www.udacity.com/course/ud304"
		}
	]
};
 education.display = function(){
	for (school in education.schools){
	$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			var formattedEmployeeschool = formattedName + formattedSchoolDegree + formattedSchoolDates + formattedLocation + formattedMajor;
	$(".education-entry:last").append(formattedEmployeeschool);
			}
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool +formattedOnlineDates +formattedOnlineURL);
	
			}
		
}
education.display();


$("#mapDiv").append(googleMap);