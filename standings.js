// Data for Tournament would be updated here
const standingsData = [
    { team: "Leopards FC", played: 5, won: 3, drawn: 1, lost: 1, points: 10 },
    { team: "Phantom FC", played: 5, won: 2, drawn: 2, lost: 1, points: 8 },
    { team: "Total Futbol", played: 5, won: 1, drawn: 1, lost: 3, points: 4 }
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
