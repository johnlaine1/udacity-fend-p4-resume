
var bio = {
  "name": "John Laine",
  "role": "Web Developer",
  "contacts": {
    "mobile": "602.741.0261",
    "email": "john.laine5896@gmail.com",
    "github": "johnlaine1",
    "location": "Mesa, Arizona"
  },
  "welcomeMessage": "Coding... Creating... Collaborating...",
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "Jquery",
    "Grunt",
    "Gulp"
  ],
  "biopic": "images/head-shot.jpg",
};
bio.display = function() {

  // Name and Role.
  // These need to go in this order for the '#topContacts' element to be
  // placed correctly.
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  // Top Contacts.
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  // Bio pic.
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

  // Welsome Message.
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  // Skills
  // Loop through the skills array and add them to the page.
  if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
}

var work = {
  "jobs": [
    {
      "employer": "ClearView Properties",
      "title": "Owner",
      "dates": "2001 - Present",
      "location": "Mesa, Arizona",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis eget turpis in fermentum. Duis feugiat nisi eu felis accumsan ornare. Integer sagittis diam nec urna finibus, eget pellentesque velit consectetur. Curabitur vitae interdum leo, eget lobortis justo. Cras id nibh id ligula vehicula iaculis at porttitor diam. Phasellus accumsan ac leo sed aliquet. Nam consectetur augue at elementum luctus. "
    },
    {
      "employer": "Tempe Kia",
      "title": "Master Technician",
      "dates": "1995 - 2006",
      "location": "Mesa, Arizona",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis eget turpis in fermentum. Duis feugiat nisi eu felis accumsan ornare. Integer sagittis diam nec urna finibus, eget pellentesque velit consectetur. Curabitur vitae interdum leo, eget lobortis justo. Cras id nibh id ligula vehicula iaculis at porttitor diam. Phasellus accumsan ac leo sed aliquet. Nam consectetur augue at elementum luctus. "
    }
  ]
};
work.display = function() {
  this.jobs.forEach(function(job) {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  });
};

var education = {
  "schools": [
    {
      "name": "Hard Knocks",
      "location": "Lawrence, MA",
      "degree": "Life",
      "majors": ["spanish", "cooking"],
      "dates": "1996 - 2000",
      "url": "http://someschool.com"
    },
    {
      "name": "Harvard",
      "location": "Boston, MA",
      "degree": "Computer Science",
      "majors": ["software development", "cooking"],
      "dates": "2000 - 2004",
      "url": "http://someschool.com"
    }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "Front End Developer",
      "dates": "2015-2016",
      "url": "http://udactiy.com"
    },
    {
      "school": "Free Code Camp",
      "title": "Front End Developer",
      "dates": "2015-2016",
      "url": "http://freecodecamp.com"
    }
  ]
};
education.display = function() {

  // Loop through each school.
  this.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    $(".education-entry:last").append(
        HTMLschoolName.replace("%data%", school.name),
        HTMLschoolDegree.replace("%data%", school.degree),
        HTMLschoolDates.replace("%data%", school.dates),
        HTMLschoolLocation.replace("%data%", school.location),
        HTMLschoolMajor.replace("%data%", school.major)
    );
  });
  // Place the "Online Courses" header
  $("#education").append(HTMLonlineClasses);

  // Loop through each online class.
  this.onlineCourses.forEach(function(course) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(
        HTMLonlineTitle.replace("%data%", course.title),
        HTMLonlineSchool.replace("%data%", course.school),
        HTMLonlineDates.replace("%data%", course.dates),
        HTMLonlineURL.replace("%data%", course.url)
    );
  });
};

var projects = {
  "projects": [
    {
      "title": "Project 1",
      "dates": "2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis eget turpis in fermentum. Duis feugiat nisi eu felis accumsan ornare. Integer sagittis diam nec urna finibus, eget pellentesque velit consectetur. Curabitur vitae interdum leo, eget lobortis justo. Cras id nibh id ligula vehicula iaculis at porttitor diam. Phasellus accumsan ac leo sed aliquet. Nam consectetur augue at elementum luctus. ",
      "images" : [
        "https://placehold.it/100x100",
        "https://placehold.it/100x100"
      ]
    },
    {
      "title": "Project 2",
      "dates": "2020",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis eget turpis in fermentum. Duis feugiat nisi eu felis accumsan ornare. Integer sagittis diam nec urna finibus, eget pellentesque velit consectetur. Curabitur vitae interdum leo, eget lobortis justo. Cras id nibh id ligula vehicula iaculis at porttitor diam. Phasellus accumsan ac leo sed aliquet. Nam consectetur augue at elementum luctus. ",
      "images" : [
        "https://placehold.it/100x100",
        "https://placehold.it/100x100"
      ]
    }
  ]
};
projects.display = function() {
  // Start off the project section, this will set up a needed class.
  $("#projects").append(HTMLprojectStart);

  // Here we loop through each of the projects, format the HTML and append it
  // to the page.
  this.projects.forEach(function(project) {
    $(".project-entry:last").append(
        HTMLprojectTitle.replace("%data%", project.title),
        HTMLprojectDates.replace("%data%", project.dates),
        HTMLprojectDescription.replace("%data%", project.description)
      );

    // Images is an array so we need to loop through it.
    project.images.forEach(function(image) {
      $(".project-entry:last")
        .append(HTMLprojectImage.replace("%data%", image));
    });
  });


}

function displayAll() {
bio.display();
work.display();
projects.display();
education.display();
}

displayAll();










$("#mapDiv").append(googleMap);

