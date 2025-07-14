document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load top scorers
        const scorersResponse = await fetch('/api/players?sort=-goals&limit=10');
        const topScorers = await scorersResponse.json();
        
        const scorersList = document.getElementById('topScorers');
        scorersList.innerHTML = topScorers.map((player, index) => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${index + 1}. ${player.name} (${player.team})</span>
                <span class="badge bg-primary rounded-pill">${player.goals || 0} ⚽</span>
            </li>
        `).join('');

        // Load team stats
        const teamsResponse = await fetch('/api/teams/stats');
        const teamsStats = await teamsResponse.json();
        
        const teamsTable = document.getElementById('teamsStatsTable').getElementsByTagName('tbody')[0];
        teamsTable.innerHTML = teamsStats.map(team => `
            <tr>
                <td>${team.name}</td>
                <td>${team.matchesPlayed || 0}</td>
                <td>${team.wins || 0}</td>
                <td>${team.draws || 0}</td>
                <td>${team.losses || 0}</td>
                <td>${team.goalsFor || 0}</td>
                <td>${team.goalsAgainst || 0}</td>
                <td>${(team.goalsFor || 0) - (team.goalsAgainst || 0)}</td>
            </tr>
        `).join('');

    } catch (err) {
        console.error('Error loading stats:', err);
        document.getElementById('statsContainer').innerHTML = `
            <div class="alert alert-danger">
                خطأ في تحميل الإحصائيات: ${err.message}
            </div>
        `;
    }
});