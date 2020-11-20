const work = {
  jobs: [
    {
      employer: "Veriforce/PEC Safety",
      title: "Front End Software Developer",
      location: "Mandeville, LA",
      dates: "2018-Present",
      description:
        "Developed and improved new and existing user-facing features using modern javascript concepts including asynchronous programming and ES6 features. Contributed to multiple single-page applications in React and Typescript. Constructive code reviews. Built some cool stuff as part of a great team.",
      url: "http://veriforce.com/",
    },
    {
      employer: "Veriforce/PEC Safety",
      title: "Tech Support Supervisor",
      location: "Mandeville, LA",
      dates: "2014-2018",
      description:
        "Expanded department responsibilities to include system administration, 3 new software applications, and interdepartmental projects, increasing departmental productivity by 50%. Directed and performed system administration to create and modify web content in order to achieve data collection goals of over 40 major clients across over 8,000 contractors. Wrote and maintained 8 system training manuals and 17 standards of operation. Trained and coordinated a team of three technical support representatives to train over 12,000 external users across 7 software applications, maintaining 95% customer satisfaction ratings.",
      url: "http://veriforce.com/",
    },
    {
      employer: "Christ Lutheran Church",
      title: "Director of Education",
      location: "San Antonio, TX",
      dates: "2012-2013",
      description:
        "Planned, wrote, and managed multiple educational programs and events which individually involved up to 150 participants.	Recruited, trained, and managed over 45 volunteers for multiple programs and events, proportionately distributed workloads and catered to multiple scheduling conflicts. Gathered and analyzed feedback from over 100 individuals and surveys in order to alter programs so as to address evolving objectives. Taught history, ethics, and theology lessons to and handled crises for students ranging in age from 5 to 22 years old.",
      url: "http://clcah.org/",
    },
  ],
  display: function () {
    for (let index = 0; index < work.jobs.length; index++) {
      $("#workExperience").append(HTMLworkStart);
      const formattedEmployer = HTMLworkEmployer.replace(
        "%data%",
        work.jobs[index].employer
      ).replace("#", work.jobs[index].url);
      const formattedTitle = HTMLworkTitle.replace(
        "%data%",
        work.jobs[index].title
      );
      const formattedEmployerTitle = formattedEmployer + formattedTitle;
      const formattedWorkLocation = HTMLworkLocation.replace(
        "%data%",
        work.jobs[index].location
      );
      const formattedDates = HTMLworkDates.replace(
        "%data%",
        work.jobs[index].dates
      );
      const formattedDescription = HTMLworkDescription.replace(
        "%data%",
        work.jobs[index].description
      );
      $(".work-entry:last").append(
        formattedEmployerTitle,
        formattedWorkLocation,
        formattedDates,
        formattedDescription
      );
    }
  },
};

const education = {
  schools: [
    {
      name: "Boston College",
      location: "Chestnut Hill, MA",
      degree: "M.Ed.",
      majors: ["Education - GPA: 3.73"],
      dates: "2010-2012",
      url: "http://www.bc.edu/",
    },
    {
      name: "Baylor University",
      location: "Waco, TX",
      degree: "BA, cum laude",
      majors: ["Religious Studies - GPA: 3.79"],
      dates: "2005-2009",
      url: "http://www.baylor.edu/",
    },
  ],
  display: function () {
    for (let index = 0; index < education.schools.length; index++) {
      $("#education").append(HTMLschoolStart);
      const formattedSchoolName = HTMLschoolName.replace(
        "%data%",
        education.schools[index].name
      ).replace("#", education.schools[index].url);
      const formattedDegree = HTMLschoolDegree.replace(
        "%data%",
        education.schools[index].degree
      );
      const formattedSchoolDegree = formattedSchoolName + formattedDegree;
      const formattedSchoolLocation = HTMLschoolLocation.replace(
        "%data%",
        education.schools[index].location
      );
      const formattedDates = HTMLschoolDates.replace(
        "%data%",
        education.schools[index].dates
      );
      const formattedMajor = HTMLschoolMajor.replace(
        "%data%",
        education.schools[index].majors
      );
      $(".education-entry:last").append(
        formattedSchoolDegree,
        formattedSchoolLocation,
        formattedDates,
        formattedMajor
      );
    }
  },
};

work.display();
education.display();
