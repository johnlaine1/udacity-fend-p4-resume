var bio = {
  "name": "John Laine",
  "role": "Web Developer",
  "contactInfo": {
    "mobile": "602.741.0261",
    "email": "john.laine5896@gmail.com",
    "github": "https://github.com/johnlaine1",
    "location": "Mesa, Arizona",
    "blog": "johnlaine.me",
    "twitter": "https://twitter.com/JohnLaine11"
  },
  "picture": "images/head-shot.jpg",
  "welcomeMssg": "Coding... Creating... Collaborating...",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "Jquery",
    "Grunt",
    "Gulp"
  ]
};

var work = {};
work.position = "Owner";
work.employer = "ClearView Properties";
work.yearsWorked = "15";
work.city = "Mesa";

var education = {};
education["schoolName"] = "Lawrence High School";
education["yearsAttended"] = "1988 - 1992";
education["city"] = "Lawrence, MA";

var education = {
  "onlineCourses": [
    {
      "name": "Udacity",
      "type": "online",
      "degree": "Front End Developer",
      "skills": ["HTML", "CSS", "Javascript", "Jquery"],
      "graduation": "2016"
    },
    {
      "name": "Free Code Camp",
      "type": "online",
      "degree": "Front End Developer",
      "skills": ["HTML", "CSS", "Javascript", "Jquery"],
      "graduation": "2016"
    }
  ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name),
    formattedRole = HTMLheaderRole.replace("%data%", bio.role),
    formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile),
    formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email),
    formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github),
    formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location),
    formattedPicture = HTMLbioPic.replace("%data%", bio.picture),
    formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMssg),
    formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter),
    formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
    //formattedSkills = [];

    /*for (var i = 0; i < bio.skills.length; i++) {
      formattedSkills.push(HTMLskills.replace("%data%", bio.skills[i]));
    }*/


// Header
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(formattedName);
$("#header").prepend(formattedPicture);
$("#header").append(formattedWelcome);

// Skills
$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

// Top contacts
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);

$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

// Work experience
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(work["position"]);

// Education
$("#education").append(HTMLschoolStart);
$(".education-entry").append(education.schoolName);

