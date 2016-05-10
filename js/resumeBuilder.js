
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
    "Gulp",
    "Git",
    "Node",
    "Express"
  ],
  "biopic": "images/head-shot.jpg",
};
bio.display = function() {
  'use strict';
  ////////// HEADER //////////

  // Name and Role.
  // These need to go in this order for the '#topContacts' element to be
  // placed correctly.
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  // Top Contacts.
  $("#topContacts").append(
    HTMLmobile.replace("%data%", bio.contacts.mobile),
    HTMLemail.replace("%data%", bio.contacts.email),
    HTMLgithub.replace("%data%", bio.contacts.github),
    HTMLlocation.replace("%data%", bio.contacts.location)
  );

  // Bio pic.
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

  // Welsome Message.
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  // Skills
  // Loop through the skills array and add them to the page.
  if (bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0, len = bio.skills.length; i < len; i++) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

  ////////// FOOTER //////////

  $("#footerContacts").append(
    HTMLmobile.replace("%data%", bio.contacts.mobile),
    HTMLemail.replace("%data%", bio.contacts.email),
    HTMLgithub.replace("%data%", bio.contacts.github),
    HTMLlocation.replace("%data%", bio.contacts.location)
  );
};

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
  'use strict';

  // Loop through each job.
  this.jobs.forEach(function(job) {

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(
      HTMLworkEmployer.replace("%data%", job.employer) +
      HTMLworkTitle.replace("%data%", job.title),
      HTMLworkDates.replace("%data%", job.dates),
      HTMLworkLocation.replace("%data%", job.location),
      HTMLworkDescription.replace("%data%", job.description)
    );
  });
};

var education = {
  "schools": [
    {
      "name": "Harvard",
      "location": "Boston, MA",
      "degree": "Masters",
      "majors": ["CS"],
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
  'use strict';

  // Loop through each school.
  this.schools.forEach(function(school) {

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(
        HTMLschoolName.replace("%data%", school.name) +
        HTMLschoolDegree.replace("%data%", school.degree),
        HTMLschoolDates.replace("%data%", school.dates),
        HTMLschoolLocation.replace("%data%", school.location),
        HTMLschoolMajor.replace("%data%", school.majors[0])
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
      "dates": "2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis eget turpis in fermentum. Duis feugiat nisi eu felis accumsan ornare. Integer sagittis diam nec urna finibus, eget pellentesque velit consectetur. Curabitur vitae interdum leo, eget lobortis justo. Cras id nibh id ligula vehicula iaculis at porttitor diam. Phasellus accumsan ac leo sed aliquet. Nam consectetur augue at elementum luctus. ",
      "images" : [
        "https://placehold.it/100x100",
        "https://placehold.it/100x100"
      ]
    }
  ]
};
projects.display = function() {
  'use strict';

  // Start off the project section, this will set up a needed class.
  $("#projects").append(HTMLprojectStart);

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


//Loop through each sections' display method.
function display(sections) {
  'use strict';

  sections.forEach(function(section) {
    section.display();
  });

  // Add a map
  $("#mapDiv").append(googleMap);
}

// Display all sections.
display([bio, work, projects, education]);