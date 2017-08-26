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
    biopic: 'images/upwork.jpeg' ,
    display:function(){

        var formattedName = HTMLheaderName.replace('%data%', bio.name);        
        var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
        
        // //  append in add the last  *** prepend in add the begging
         $('#header').prepend(formattedName, formattedRole);
        
         var formattedWelcome = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);        
         var formattedPic = HTMLbioPic.replace('%data%',bio.biopic);

         $('#header').append(formattedWelcome, formattedPic);
        
        var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
        var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);

        $('#topContacts').append(formattedMobile , formattedEmail , formattedTwitter , formattedGithub , formattedLocation);
        $('#footerContacts').append(formattedMobile , formattedEmail , formattedTwitter , formattedGithub , formattedLocation);
        
        
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            if (skill.length  > 0 ) {
                var formattedSkills = HTMLskills.replace('%data%',skill);
                $('#skills').append(formattedSkills);
            } 
            // else {
            //     console.log(skill);
            // }        
        });
    }
} ;
bio.display();

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
    display:function(){
        work.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%' , job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%' , job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedWorkLocation = HTMLworkLocation.replace('%data%' , job.location);
            var formattedDates = HTMLworkDates.replace('%data%' , job.dates);    
            var formattedDescription = HTMLworkDescription.replace('%data%' , job.description);

            $('.work-entry:last').append(formattedEmployerTitle, formattedWorkLocation, formattedDates, formattedDescription);
        });
    }
} ;
work.display();

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
    display:function() {
        projects.projects.forEach(function(project){
            $('#projects').append(HTMLprojectStart);
            
            var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);    
            var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);

            $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);
    
            if (project.images.length > 0 ) {
                project.images.forEach(function(image){
                    var formattedImage = HTMLprojectImage.replace('%data%', image);
                    $('.project-entry:last').append(formattedImage);
                });
            }
        });
    }
};
projects.display();

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
            dates: '2014' ,
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
    display:function(){
        education.schools.forEach(function(school){
            $('#education').append(HTMLschoolStart);
            
            var formattedSchoolName = HTMLschoolName.replace('%data%' , school.name) ;
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%' , school.degree) ;        
            var formattedNameDeqreeSchool = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolDates = HTMLschoolDates.replace('%data%' , school.dates) ;
            var formattedSchoolMajors = HTMLschoolMajor.replace('%data%' , school.majors) ;
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%' , school.location) ;
        
            $('.education-entry:last').append(formattedNameDeqreeSchool, formattedSchoolDates, formattedSchoolMajors, formattedSchoolLocation);  
        });

    
        $('.education-entry:last').append(HTMLonlineClasses);
        
        education.onlineCourses.forEach(function(online){
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%' , online.title) ;
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%' , online.school) ;
            var formattedTitleSchoolOnline = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace('%data%' , online.dates) ;
            var formattedOnlineUrl = HTMLonlineURL.replace('%data%' , online.url) ;
        
            $('.education-entry:last').append(formattedTitleSchoolOnline, formattedOnlineDates, formattedOnlineUrl);  
        });
    }
};
education.display();

$('#mapDiv').append(googleMap);

 