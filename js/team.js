var HTMLMemberName = '<div class="event-description"><h5 class="event-title">%data%</h5>';
var HTMLPhoto = '<div class="col-md-4 event-container"><div class="event"><div class="member-photo" style="background-image:url(%data%); background-size: cover;border-radius: 20px 20px 0 0;"></div>';
var HTMLPosition = '<h5 class="event-time">%data%</h5>';
var HTMLProgram = '<h5 class="event-time">%data%</h5></div></div></div>';

var executives = [];
var members = [{
    name: "Aditi Lohtia",
    position: "Event Coordinator",
    program: "2A Computer Engineering",
    image: "img/aditi_lohtia.png"
},
{
    name: "Tamara Khalaf",
    position: "Secretary",
    program: "2B Physics and Astronomy",
    image: "img/tamara_khalaf.png"
}]

function display() {
    populateMembersOnIndex();
}

function replaceMembersWithHTML() {
    executives.forEach(function(member) {
        member.name = HTMLMemberName.replace("%data%", member.name);
        member.position = HTMLPosition.replace("%data%", member.position);
        member.program = HTMLProgram.replace("%data%", member.program);
        member.image = HTMLPhoto.replace("%data%", member.image);
        $("#executives").append(member.image + member.name + member.position + member.program);
    })
}

function populateMembersOnIndex() {
    var i = 0;
    while (i < members.length) {
        let temp = {
            name: members[i].name,
            position: members[i].position,
            program: members[i].program,
            image: members[i].image,
        };
        executives.push(temp);
        i++;
    }
    replaceMembersWithHTML();
}

display();
