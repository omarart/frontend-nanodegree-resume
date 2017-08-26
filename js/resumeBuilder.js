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
            location: 'Riyadh'
        } 
    ] ,
    displayWork:function(){
        work.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%' , job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%' , job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
    
            var formattedWorkLocation = HTMLworkLocation.replace('%data%' , job.location);
            $('.work-entry:last').append(formattedWorkLocation);
    
            var formattedDates = HTMLworkDates.replace('%data%' , job.dates);
            $('.work-entry:last').append(formattedDates);
    
            var formattedDescription = HTMLworkDescription.replace('%data%' , job.description);
            $('.work-entry:last').append(formattedDescription);
        });
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
        projects.projects.forEach(function(project){
            $('#projects').append(HTMLprojectStart);
            
            var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
            $('.project-entry:last').append(formattedTitle);
    
            var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
            $('.project-entry:last').append(formattedDates);
    
            var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);
            $('.project-entry:last').append(formattedDescription);
    
            if (project.images.length > 0 ) {
                for ( var image in project.images) {
                    var formattedImage = HTMLprojectImage.replace('%data%', project.images[image]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        });
    }
};
projects.displayProject();

var education = {
    schools: [
        {
            name: 'Al-Imam Universit' ,
            location: 'Riyadh' ,
            degree: 'Bacalors' ,
            majors: ['Computer Science'] ,
            dates : '2018' ,
            url : 'https://imamu.edu.sa/Pages/default.aspx'
        },
        {
            name: 'Al Shifa High School' ,
            location: 'Riyadh' ,
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
        education.schools.forEach(function(school){
            $('#education').append(HTMLschoolStart);
            
            var formattedSchoolName = HTMLschoolName.replace('%data%' , school.name) ;
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%' , school.degree) ;        
            var formattedNameDeqreeSchool = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolDates = HTMLschoolDates.replace('%data%' , school.dates) ;
            var formattedSchoolMajors = HTMLschoolMajor.replace('%data%' , school.majors) ;
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%' , school.location) ;
        
            $('.education-entry:last').append(formattedNameDeqreeSchool);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolMajors);
            $('.education-entry:last').append(formattedSchoolLocation);   
        });

    
        $('.education-entry:last').append(HTMLonlineClasses);
        
        education.onlineCourses.forEach(function(online){
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%' , online.title) ;
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%' , online.school) ;
            var formattedTitleSchoolOnline = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace('%data%' , online.dates) ;
            var formattedOnlineUrl = HTMLonlineURL.replace('%data%' , online.url) ;
        
            $('.education-entry:last').append(formattedTitleSchoolOnline);
            $('.education-entry:last').append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineUrl);    
        });
    }
};
education.displayEducation();

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


$('#mapDiv').append(googleMap);

 