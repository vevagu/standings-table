// Data for Tournament would be updated here
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

function updateStandingsTable() {
    const tableBody = document.getElementById('standings-table-body');
    tableBody.innerHTML = ''; // Clear existing rows

    standingsData.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', updateStandingsTable);
