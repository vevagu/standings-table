// Data for Tournament would be updated here
document.addEventListener('DOMContentLoaded', function() {
const standingsData = [
    { team: "Leopards FC", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
    { team: "Phantom FC", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
    { team: "Total Futbol", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Unity FC", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "DM United ", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Tsa98red ", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Blue Angels", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Indomitable Lions", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Infinity", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Amigos", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "BULLDOGS", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "DGO", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Fire Ferrets ", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Not Like Us", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Phoenix FC", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "MeliMo", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "PHX MLS", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Team Name", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    { team: "Team Name", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    
];

const tableBody = document.getElementById('standings-table');
    
    data.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="team-name">${item.team}</td>
            <td>${item.played}</td>
            <td>${item.won}</td>
            <td>${item.drawn}</td>
            <td>${item.lost}</td>
            <td>${item.gf}</td>
            <td>${item.ga}</td>
            <td>${item.gd}</td>
            <td>${item.points}</td>
        `;
        
        tableBody.appendChild(row);
    });
});
