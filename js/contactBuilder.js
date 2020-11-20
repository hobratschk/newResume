var contacts = {
  mobile: "832-640-8157",
  email: "hobratschkbl@gmail.com",
  location: "Covington, LA",
  github: "https://github.com/hobratschk",
  display: function () {
    var formattedEmail = HTMLemail.replace("%data%", contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
    var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
    var formattedContactLocation = HTMLlocation.replace(
      "%data%",
      contacts.location
    );
    $("#contact").append(
      formattedEmail,
      formattedMobile,
      formattedGithub,
      formattedContactLocation
    );
  },
};

contacts.display();
