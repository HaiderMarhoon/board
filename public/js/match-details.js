document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const matchId = urlParams.get('id');
    
    if (!matchId) {
        document.getElementById('matchDetails').innerHTML = `
            <div class="alert alert-danger">لم يتم تحديد مباراة</div>
        `;
        return;
    }

    try {
        const response = await fetch(`/api/matches/${matchId}`);
        const match = await response.json();

        if (!response.ok) throw new Error(match.error || 'فشل تحميل البيانات');

        renderMatchDetails(match);
    } catch (err) {
        document.getElementById('matchDetails').innerHTML = `
            <div class="alert alert-danger">
                خطأ في تحميل التفاصيل: ${err.message}
            </div>
        `;
    }
});

function renderMatchDetails(match) {
    document.getElementById('matchTitle').textContent = 
        `${match.teamA.name} ${match.teamA.score} - ${match.teamB.score} ${match.teamB.name}`;

    document.getElementById('matchDetails').innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <h3>${match.teamA.name}</h3>
                <p>الأهداف: ${match.teamA.score}</p>
                ${renderPlayers(match.teamA.players)}
            </div>
            <div class="col-md-6">
                <h3>${match.teamB.name}</h3>
                <p>الأهداف: ${match.teamB.score}</p>
                ${renderPlayers(match.teamB.players)}
            </div>
        </div>
        <div class="mt-4">
            <h4>أحداث المباراة</h4>
            <ul class="list-group">
                ${match.events.map(event => `
                    <li class="list-group-item">
                        [${event.time}] ${event.text}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function renderPlayers(players) {
    return `
        <h5>اللاعبين:</h5>
        <table class="table">
            <thead>
                <tr>
                    <th>الاسم</th>
                    <th>أهداف</th>
                    <th>إنذارات</th>
                    <th>طرد</th>
                </tr>
            </thead>
            <tbody>
                ${players.map(player => `
                    <tr>
                        <td>${player.name}</td>
                        <td>${player.goals || 0}</td>
                        <td>${player.yellowCards || 0}</td>
                        <td>${player.redCards || 0}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}