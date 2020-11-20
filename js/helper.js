// Index helpers
const HTMLheaderName = '<h1 id="name">%data%</h1>';
const HTMLheaderRole = '<h2 class="bold">%data%</h2><hr>';
const HTMLbioPic =
  '<img src="%data%" class="biopic" alt="My current headshot">';
const HTMLwelcomeMsgr = '<span class="welcome-message">%data%</span>';
const HTMLskillsStart = '<h2>Skills at a Glance:</h3><ul id="skills"></ul>';
const HTMLskills = '<li class="bold"><span>%data%</span></li>';

//Resume helpers
const HTMLworkStart = '<div class="work-entry"></div>';
const HTMLworkEmployer = '<a href="#" target=_blank>%data%';
const HTMLworkTitle = " - %data%</a>";
const HTMLworkDates = "<div>%data%</div>";
const HTMLworkLocation = "<div>%data%</div>";
const HTMLworkDescription = "<p>%data%</p>";

const HTMLschoolStart = '<div class="education-entry"></div>';
const HTMLschoolName = '<a class="schoolName" href="#" target=_blank>%data%';
const HTMLschoolDegree = " -- %data%</a>";
const HTMLschoolDates = "<div>%data%</div>";
const HTMLschoolLocation = "<div>%data%</div>";
const HTMLschoolMajor = "<em>Major: %data%</em>";

//Contact helpers
const HTMLcontactGeneric = "<li><span>%contact%</span><span>%data%</span></li>";
const HTMLmobile = "<li><span>mobile: </span><span>%data%</span></li>";
const HTMLemail = "<li><span>email: </span><span>%data%</span></li>";
const HTMLgithub = "<li><span>github: </span><span>%data%</span></li>";
const HTMLlocation = "<li><span>location: </span><span>%data%</span></li>";
