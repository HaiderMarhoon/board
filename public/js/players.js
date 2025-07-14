document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load teams first for filter
        const teamsResponse = await fetch('/api/teams');
        const teams = await teamsResponse.json();
        
        // Populate team filter
        const teamFilter = document.getElementById('teamFilter');
        teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.name;
            option.textContent = team.name;
            teamFilter.appendChild(option);
        });

        // Load all players initially
        await loadPlayers();

        // Setup event listeners
        document.getElementById('filterForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            await loadPlayers();
        });

        document.getElementById('resetFilters').addEventListener('click', async () => {
            document.getElementById('teamFilter').value = '';
            document.getElementById('minGoals').value = '';
            await loadPlayers();
        });

    } catch (err) {
        console.error('Initialization error:', err);
        document.getElementById('playersTable').innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-danger">
                    خطأ في تحميل البيانات: ${err.message}
                </td>
            </tr>
        `;
    }
});

async function loadPlayers() {
    try {
        const team = document.getElementById('teamFilter').value;
        const minGoals = document.getElementById('minGoals').value;
        
        let url = '/api/players?';
        if (team) url += `team=${encodeURIComponent(team)}&`;
        if (minGoals) url += `minGoals=${minGoals}`;

        const response = await fetch(url);
        const players = await response.json();

        const tableBody = document.getElementById('playersTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';

        if (players.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center">لا توجد نتائج</td>
                </tr>
            `;
            return;
        }

        players.forEach(player => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.goals || 0}</td>
                <td>${player.yellowCards || 0}</td>
                <td>${player.redCards || 0}</td>
                <td>${player.matchesPlayed || 0}</td>
            `;
        });

    } catch (err) {
        console.error('Load players error:', err);
        throw err;
    }
}