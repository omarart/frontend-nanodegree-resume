// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'omar aldosri' ,
    role: 'web Developer' ,
    contacts: {
        mobile: '966501684966' ,
        email: 'om.sd2012@gmail.com',
        github: 'omarart' ,
        twitter: 'omstudioo' ,
        location: 'Riyadh'
    },
    welcomeMessage: 'I am freelancer . I am a brand designer and a professional UX designeer for web and mobile application. I am very passionate about designing interfaces while taking into consideration the latest UX trends and techniques  ',
    skills: [
        'Designer' , 'Thinker' , 'Leadership and Team work' , 'Self Learning' , 'Developer'
    ] , 
    bioPic: 'images/upwork.jpeg' ,
    displayBio:function(){
        var formattedName = HTMLheaderName.replace('%data%', bio.name);        
        var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
        
        // //  append in add the last  *** prepend in add the begging
         $('#header').prepend(formattedRole);
         $('#header').prepend(formattedName);
        
         var formattedWelcome = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
         $('#header').append(formattedWelcome);
        
         var formattedPic = HTMLbioPic.replace('%data%',bio.bioPic);
         $('#header').append(formattedPic);
        
        var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
    
        var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
        $('#topContacts').append(formattedEmail);
    
        var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
        $('#topContacts').append(formattedTwitter);
    
        var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
        $('#topContacts').append(formattedGithub);
    
        var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
        $('#topContacts').append(formattedLocation);
        
        if( bio.skills.length > 0 ) {
            $('#header').append(HTMLskillsStart);
            var formattedSkills = HTMLskills.replace('%data%',bio.skills[0]);
            $('#skills').append(formattedSkills);
            formattedSkills = HTMLskills.replace('%data%',bio.skills[1]);
            $('#skills').append(formattedSkills);
            formattedSkills = HTMLskills.replace('%data%',bio.skills[2]);
            $('#skills').append(formattedSkills);
            formattedSkills = HTMLskills.replace('%data%',bio.skills[3]);
            $('#skills').append(formattedSkills);
        }
    }
} ;
bio.displayBio();

var work = {
    jobs: [
        {
            employer: 'Freelancer',
            title: ' Brand Identity and Developer UI/UX',
            dates: 'Sep 2014 - Present',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
            location: 'Riyadh'
        } ,
        {
            employer: 'CoFounder',
            title: 'Weesaam.com',
            dates: 'Jun 2015 - Present',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' ,
            location: 'Riyadh - Website'
        } 
    ] ,
    displayWork:function(){
        for( var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
    
            var formattedEmployer = HTMLworkEmployer.replace('%data%' , work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%' , work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
    
            var formattedWorkLocation = HTMLworkLocation.replace('%data%' , work.jobs[job].location);
            $('.work-entry:last').append(formattedWorkLocation);
    
            var formattedDates = HTMLworkDates.replace('%data%' , work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);
    
    
            var formattedDescription = HTMLworkDescription.replace('%data%' , work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
} ;
work.displayWork();

var projects = {
    projects: [
        {
            title: 'Co-founder hamza.co' ,
            dates: '2017' ,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            images: [
                'images/spalch.png' , 'images/result.png'
            ]
        }
    ] ,
    displayProject:function() {
        for( var project in projects.projects) {
            $('#projects').append(HTMLprojectStart);
    
            var formattedTitle = HTMLprojectTitle.replace('%data%',projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);
    
            var formattedDates = HTMLprojectDates.replace('%data%',projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);
    
            var formattedDescription = HTMLprojectDescription.replace('%data%',projects.projects[project].description);
            $('.project-entry:last').append(formattedDescription);
    
            if (projects.projects[project].images.length > 0 ) {
                for ( var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};
projects.displayProject();

var education = {
    schools: [
        {
            name: 'Al-Imam Universit' ,
            city: 'Riyadh' ,
            degree: 'Bacalors' ,
            majors: ['Computer Science'] ,
            dates : '2018' ,
            url : 'https://imamu.edu.sa/Pages/default.aspx'
        },
        {
            name: 'Al Shifa High School' ,
            city: 'Riyadh' ,
            degree: 'High school' ,
            majors: ['General'] ,
            dates : '2012' ,
            url : '#'
        }
    ] ,
    onlineCourses: [
        {
            title: 'Javascript Crash Course ',
            school:'Udacity',
            dates: 2014 ,
            url: 'http://www.udacity.com/course/ud804'
        } ,
        {
            title: 'ELM Course, Ios track ',
            school:'ELM',
            dates: '2016' ,
            url: 'https://holom.elm.sa/'
        } ,
        {
            title: 'Arduino 101 Course ',
            school:'geeksvalley',
            dates: '2017' ,
            url: 'http://geeksvalley.com//'
        }

    ] ,
    displayEducation:function(){
        for( var school in education.schools) {
            $('#education').append(HTMLschoolStart);
    
            var formattedSchoolName = HTMLschoolName.replace('%data%' , education.schools[school].name) ;
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%' , education.schools[school].degree) ;        
            var formattedNameDeqreeSchool = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolDates = HTMLschoolDates.replace('%data%' , education.schools[school].dates) ;
            var formattedSchoolMajors = HTMLschoolMajor.replace('%data%' , education.schools[school].majors) ;
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%' , education.schools[school].city) ;
        
            $('.education-entry:last').append(formattedNameDeqreeSchool);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolMajors);
            $('.education-entry:last').append(formattedSchoolLocation);    
        }
    
        $('.education-entry:last').append(HTMLonlineClasses);
        
        for( var online in education.onlineCourses) {
    
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%' , education.onlineCourses[online].title) ;
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%' , education.onlineCourses[online].school) ;
            var formattedTitleSchoolOnline = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace('%data%' , education.onlineCourses[online].dates) ;
            var formattedOnlineUrl = HTMLonlineURL.replace('%data%' , education.onlineCourses[online].url) ;
        
            $('.education-entry:last').append(formattedTitleSchoolOnline);
            $('.education-entry:last').append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineUrl);    
        }
    }
};
education.displayEducation();

$('#mapDiv').append(googleMap);

function displayFooter(){
    var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
    $('#footerContacts').append(formattedMobile);
    
    var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
    $('#footerContacts').append(formattedEmail);
    
    var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
    $('#footerContacts').append(formattedTwitter);
    
    var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
    $('#footerContacts').append(formattedGithub);
    
    var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
    $('#footerContacts').append(formattedLocation);
}
displayFooter();




$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
  
    logClicks(x,y);
  });
  
// function inName(name) {
//       name = name.trim().split(" ");
//       console.log(name);
//       name[1] = name[1].toUpperCase();
//       name[0] = name[0].slice(0,1).toUpperCase() + 
//       name[0].slice(1).toLowerCase();
  
//       return name[0] + ' ' + name[1];
// }
  
// $('#main').append(internationalizeButton);
  



// ************************************ Test 
// work.position = 'Course Developer';
// work.employer = 'Udacity';
// work.years = 0.3 ;

// education['name'] = 'univercity';
// education['years']='2012 - 2016' ;
// education['city']= 'Riyadh' ;
 
//  $('#main').prepend(education.name);
//  $('#main').prepend(work['position']);

 