// var HTMLMemberName = '<div class="member-description"><h5 class="member-name">%data%%linkedin_data%</h5><div class="short-divider"></div>';
var HTMLLinkedInIcon = '&nbsp<img src="img/linkedin.svg" alt="LinkedIn" onclick="window.open(\'%data%\',\'mywindow\');" style="cursor: pointer; vertical-align: 0px;" width="16" height="16"/>'
// var HTMLPhoto = '<div class="col-md-4 event-container"><div class="team-member"><img src="%data%"></div>';
// var HTMLPhoto = '<div class="col-md-4 event-container"><div class="event"><div class="core-team-container center-block" style="background-image:url(%data%);"></div>';
var HTMLPhoto = '<div class="col-md-4 team-member-container"><div class="core-team-container center-block"><img class="core-team-photo" style="background-image:url(%data%);">'; //src=%data% class="core-team-photo"></div>';
var HTMLOverlayText = '<div class="overlay"><div class="team-member-info">%data%</div></div>';
var HTMLMemberName = '<div class="team-member-name">%data%</div>';
var HTMLPosition = '<div class="team-member-position">%data%</div>';
var HTMLProgram = '<h5 class="event-time">%data%</h5></div></div></div>';
var HTMLClosingDiv = '</div>';

var HTMLHexTeamMember = '<li class="hex"><div class="hexIn"><div class="hexLink">';
var HTMLHexImage = '<img src="%data%" alt="" />';
// var HTMLMemberName = '<h1>%data%</h1>';
// var HTMLMemberName = '<div class="team-member-info">%data%</div>';
// var HTMLPosition = '<p>%data%</p>';
var HTMLHexEnd = '</div></div></li>';

var executives = [];

var leadershipRoles = ["President", "Vice President Internal", "Vice President External"];
var internalRoles = ["Treasurer", "Administration", "Graphic Designer", "Web Developer"];
var externalRoles =  ["Marketing", "Event Coordinator", "External Affairs"];

var leadershipHTML = '';
var internalHTML = '';
var externalHTML = '';

var members = [
{
    name: "Sophia T.",
    position: "President",
    program: "Biology - Biotechnology Specialization",
    image: "img/sophia_tan.jpeg",
    linkedin: "https://www.linkedin.com/in/sophia-tan1"
},
{
    name: "Jayanjali B.",
    position: "Vice President Internal",
    program: "Biomedical Science",
    image: "img/jayanjali.jpeg",
    linkedin: ""
},
{
    name: "Margaret S.",
    position: "Vice President External",
    program: "Pharmacy",
    image: "img/margaret_su.png",
    linkedin: "https://www.linkedin.com/in/margaretsu/"
},
{
    name: "Martha Z.",
    position: "Treasurer",
    program: "Mathematics/Chartered Professional Accountancy",
    image: "img/martha_zhu.jpeg",
    linkedin: "https://www.linkedin.com/in/martha-zhu/"
},
{
    name: "Diana S.",
    position: "Administration",
    program: "Computer Science - Statistics Minor",
    image: "img/diana_surducan.jpeg",
    linkedin: "https://www.linkedin.com/in/diana-surducan"
},
{
    name: "Catherine C.",
    position: "Graphic Designer",
    program: "Computer Engineering",
    image: "img/catherine.jpeg",
    linkedin: "https://www.linkedin.com/in/catherinejjchen/"
},
{
    name: "Richa P.",
    position: "Graphic Designer",
    program: "Honours Science",
    image: "img/richa_patel.jpeg",
    linkedin: "https://www.linkedin.com/in/richa-patel-8301/"
},
{
    name: "Angela D.",
    position: "Web Developer",
    program: "Software Engineering",
    image: "img/angela.jpeg",
    linkedin: "https://www.linkedin.com/in/angela-dietz/"
},
{
    name: "Andreea P.",
    position: "Event Coordinator",
    program: "Biomedical Science",
    image: "img/andreea2.jpeg",
    linkedin: "https://www.linkedin.com/in/andreeapalage/"
},
{
    name: "Tong Yin H.",
    position: "Event Coordinator",
    program: "Systems Design Engineering",
    image: "img/tong_yin.jpeg",
    linkedin: "https://www.linkedin.com/in/tongyin-han/"
},
{
    name: "Helena L.",
    position: "Marketing",
    program: "Science and Business - Biochemistry Specialization",
    image: "img/helena_seung-min_lee.png",
    linkedin: "https://www.linkedin.com/in/helenasmlee/"
},
{
    name: "Toni O.",
    position: "Marketing",
    program: "Science and Business - Biotechnology Specialization",
    image: "img/toni.jpeg",
    linkedin: "https://www.linkedin.com/in/toni-oguntunde-74a096194"
},
{
    name: "Alicia L.",
    position: "External Affairs",
    program: "Honours Mathematics",
    image: "img/alicia_lin.jpeg",
    linkedin: "http://www.linkedin.com/in/aliciajlin"
},
{
    name: "Yvone Y.",
    position: "External Affairs",
    program: "Management Engineering",
    image: "img/yvone_yang.jpeg",
    linkedin: "https://www.linkedin.com/in/yvone-yang/"
}
]

function display() {
    initializeSubteams();
    populateMembersOnIndex();
    finalizeSubteams();
    updateHTMLTeams();
}

function initializeSubteams(){
    internalHTML = '<ul id="hexGrid">';
    externalHTML = '<ul id="hexGrid">';
}

function finalizeSubteams(){
    internalHTML = internalHTML.concat('</ul>');
    externalHTML = externalHTML.concat('</ul>');
}

function updateHTMLTeams() {
    console.log('here');
    console.log(leadershipHTML);
    $("#leadership").append(leadershipHTML);
    $("#internal").append(internalHTML);
    $("#external").append(externalHTML);
}

function isRoleInternal(role){
    for (i = 0; i < internalRoles.length; i++){
        if (role === internalRoles[i]){
            return true;
        }
    }
    return false;
}

function isRoleExternal(role){
    for (i = 0; i < externalRoles.length; i++){
        if (role === externalRoles[i]){
            return true;
        }
    }
    return false;
}

function replaceMemberWithHTML(member) {
    member.position = HTMLPosition.replace("%data%", member.position);
    member.program = HTMLProgram.replace("%data%", member.program);
    member.image = HTMLPhoto.replace("%data%", member.image);
    member.name = HTMLMemberName.replace("%data%", member.name);
    // if (member.linkedin !== ""){
    //     member.name = member.name.replace("%linkedin_data%", HTMLLinkedInIcon.replace("%data%", member.linkedin));
    // }
    // else{
    //     member.name = member.name.replace("%linkedin_data%", "");
    // }
}

function replaceMemberWithHexHTML(member) {
    member.position = HTMLPosition.replace("%data%", member.position);
    member.program = HTMLProgram.replace("%data%", member.program);
    member.image = HTMLHexImage.replace("%data%", member.image);
    member.name = HTMLMemberName.replace("%data%", member.name);
    // if (member.linkedin !== ""){
    //     member.name = member.name.replace("%linkedin_data%", HTMLLinkedInIcon.replace("%data%", member.linkedin));
    // }
    // else{
    //     member.name = member.name.replace("%linkedin_data%", "");
    // }
}

function replaceMembersWithHTML() {
    var team;
    var hasLinkedin = true;
    executives.forEach(function(member) {
        // replaceMemberWithHTML(member);
        // var memberHTML = HTMLHexTeamMember + member.image + member.name + HTMLHexEnd;

        if (isRoleInternal(member.position)){
            replaceMemberWithHexHTML(member);
            var memberHTML = HTMLHexTeamMember + member.image + HTMLOverlayText.replace("%data%", member.name + member.position)+ HTMLHexEnd;
            internalHTML = internalHTML.concat(memberHTML);
        }
        else if (isRoleExternal(member.position)){
            replaceMemberWithHexHTML(member);
            var memberHTML = HTMLHexTeamMember + member.image + HTMLOverlayText.replace("%data%", member.name + member.position)+ HTMLHexEnd;
            // externalHTML = externalHTML.concat(memberHTML);
            internalHTML = internalHTML.concat(memberHTML);
        }
        else{
            replaceMemberWithHTML(member);
            var memberHTML = member.image + HTMLOverlayText.replace("%data%", member.name + member.position) + HTMLClosingDiv + HTMLClosingDiv;
            leadershipHTML = leadershipHTML.concat(memberHTML);
        }

        // if (member.linkedin == ""){
        //     hasLinkedin = false;
        // }
        // else hasLinkedin = true;

        // $(team).append(member.image + HTMLOverlayText.replace("%data%", member.name + member.position) + HTMLClosingDiv + HTMLClosingDiv);
        // $(team).append(HTMLHexTeamMember + member.image + member.name + member.position + HTMLHexEnd);
    })

}

function populateMembersOnIndex() {
    console.log("second");
    var i = 0;
    while (i < members.length) {
        let temp = {
            name: members[i].name,
            position: members[i].position,
            program: members[i].program,
            image: members[i].image,
            linkedin: members[i].linkedin
        };
        executives.push(temp);
        i++;
    }
    replaceMembersWithHTML();
}

display();
