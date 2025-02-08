const leadershipRoles = ["Co-President", "President", "Vice President Internal", "Vice President External"];
const internalRoles = ["Treasurer", "Administration", "Graphic Designer", "Web Developer"];
const externalRoles = ["Marketing", "Event Coordinator", "External Affairs"];

const teamSections = ["Core", "Internal", "External"];

let leadershipHTML = ``;

function display() {
  replaceMembersWithHTML(members);
  $("#team-display").append(leadershipHTML);
}

function execMemberCircle(member) {
  return `
    <div 
      style="
        width: 200px; 
        margin: 20px;
        text-align: center;
        box-sizing: border-box;
      "
    >
      <div 
        style="
          display: flex; 
          flex-direction: column; 
          align-items: center;
        "
      >
        <div 
          style="
            width: 200px; 
            height: 200px; 
            background-size: cover; 
            background-position: 50% 50%; 
            border-radius: 50%; 
            margin-bottom: 10px; 
            background-image: url(${member.image});
            margin: 0 auto;
          "
          aria-label="${member.name}"
        >
        </div>
        <h4 style="font-weight: bold; margin: 8px auto; 4px;">
          ${member.name}
        </h4>
        <h4 style="margin: 0px auto;">
          ${member.position}
          </h4>
      </div>
    </div>
  `;
}

const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

function replaceMembersWithHTML(executives) {
  const groupedExecs = groupBy("team")(executives);

  for (const team in groupedExecs) {
    if (teamSections.includes(team)) {
      leadershipHTML += `
        <div 
          style="
            margin: 50px auto;
            max-width: 1200px;
          "
        >
          <h2 
            style="
              text-align: center; 
              margin-bottom: 10px;
            "
          >
            ${team}
          </h2>
          <div 
            style="
              display: flex; 
              flex-wrap: wrap; 
              justify-content: center;
            "
          >
      `;

      groupedExecs[team].forEach((member) => {
        leadershipHTML += execMemberCircle(member);
      });

      leadershipHTML += `
          </div>
        </div>
      `;
    }
  }
}

// Finally, render the team members
display();
