
document.addEventListener('DOMContentLoaded', function () {
    // بيانات الفرق واللاعبين
    const allTeams = {
        'ذو الفقار': [
            { id: 1, name: 'حسين بوحميد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: 'عبدالله عباس بوحميد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: ' عبدالله عبادي', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: ' احمد جمعه  ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: 'علي حامد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: 'محمد مهدي عيسى بوحميد ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: 'محمد رضا عيسى بوحميد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: 'رضا عباس', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: ' شهاب  ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: 'علي بوحميد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: 'عبدالكريم احمد ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 12, name: 'قمبر ميرز', goals: 0, yellowCards: 0, redCards: 0 },
        ],
        'المهدي المنتظر ': [
            { id: 1, name: 'مهدي محمد خليل ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: 'علي جعفر راشد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: 'يوسف احمد محمد ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: ' محمد علي حسين   ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: 'يوسف احمد عبد الكريم', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: 'مصطفى محمد امين ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: 'عبد العزيز محمد جعفر', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: 'إبراهيم خليل إبراهيم ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: ' علي مجيد سعيد  ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: 'حسين علي عباس', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: 'حسين مجيد سعيد   ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 12, name: 'فارس علي حسين', goals: 0, yellowCards: 0, redCards: 0 },
        ],
        'اسد الله الغالب': [
            { id: 1, name: 'حسن شاكر', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: 'هشام هاني', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: '  قاسم ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: ' احمد محمد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: 'علي عباس', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: 'عبدالله عيسى', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: 'محمد عباس', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: 'مجتبى ابراهيم', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: 'حسن علي ', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: 'حسين جمعة', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: 'محمد جعفر', goals: 0, yellowCards: 0, redCards: 0 },
        ],
        'خيبر': [
            { id: 1, name: 'حسن الموت', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: 'علي محمد جمعة', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: 'أحمد الرفاعي', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: 'طه مجيد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: 'رضا علي يوسف', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: 'عبدالله خلف', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: 'محمد ضياء احمد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: 'عبدالله عيسى صالح عيد', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: 'محمد علي عبد الله', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: 'عبد الله عبادي', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: 'محمود حسين حبيب الفردان', goals: 0, yellowCards: 0, redCards: 0 },
            { id: 12, name: 'رضا علي عبد الرضا', goals: 0, yellowCards: 0, redCards: 0 }
        ],
        "المنتظر": [
            { id: 1, name: "علي احمد عباس", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: "محمد عماد الشيخ", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: "عبدالله علي رمضان", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: "يوسف احمد مكي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: "عبدلله محمد علي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: "سيدهشام علي مجيد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: "سيد نزار محمد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: "احمد حسين أحمد عبادي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: "علي ياسر جمعه", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: "حسين احمد صالح عاشور", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: "مجتبى عبدالنبي الشيخ", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 12, name: "علي حسن عبادي", goals: 0, yellowCards: 0, redCards: 0 }
        ],
        "المختار": [
            { id: 1, name: "سيد هادي عبدالله الوداعي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: "علي حبيب", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: "علي عبدالواحد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: "أحمد محمد امين", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: "حيدر فتحي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: "نواف عبدالنبي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: "جاسم محمد جعفر", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: "حسين علي نجف", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: "باسل عباس مهدي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: "محمد عباس عيد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: "شيخ جعفر", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 12, name: "حسن عبدالله اللمعي", goals: 0, yellowCards: 0, redCards: 0 }
        ],
        "حامل_اللواء": [
            { id: 1, name: "علي حسن إسماعيل", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: "حسين محمد عيد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: "علي حسين مكي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: "سيد هاشم حمزة", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: "سيد هاشم ماجد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: "سيد محمد شبر", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: "حيدر قاسم منصور", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: "حسن عبدالواحد", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: "جواد عبدالله درويش", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 10, name: "عبدالله عباس خاتم", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 11, name: "سيد هادي حمزة", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 12, name: "كرار حيدر الكش", goals: 0, yellowCards: 0, redCards: 0 }
        ],
        "سيف_الله": [
            { id: 1, name: "محمد إبراهيم", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 2, name: "  محمد كاظم", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 3, name: "احمد هادي المدهون", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 4, name: "جواد المهدي", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 5, name: "علي عقيل", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 6, name: "ادم علي علي الشيخ", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 7, name: "مازن خليل", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 8, name: "منتظر ", goals: 0, yellowCards: 0, redCards: 0 },
            { id: 9, name: "حسون", goals: 0, yellowCards: 0, redCards: 0 },
        ]
    };

    // متغيرات التطبيق
    const teams = {};
    let timerInterval;
    let seconds = 0;
    let currentSubstitution = {
        team: null,
        playerOutId: null
    };
    let isMatchEnded = false;

    // عناصر واجهة المستخدم
    const timerDisplay = document.getElementById('timer');
    const startTimerBtn = document.getElementById('startTimer');
    const stopTimerBtn = document.getElementById('stopTimer');
    const resetTimerBtn = document.getElementById('resetTimer');
    const halfTimeBtn = document.getElementById('halfTime');
    const fullTimeBtn = document.getElementById('fullTime');
    const teamDropdownA = document.getElementById('teamDropdownA');
    const teamDropdownB = document.getElementById('teamDropdownB');
    const selectedTeamsContainer = document.getElementById('selectedTeamsContainer');
    const eventsList = document.getElementById('eventsList');
    const substitutionModal = new bootstrap.Modal(document.getElementById('substitutionModal'));
    const substituteSelect = document.getElementById('substituteSelect');
    const playerOutName = document.getElementById('playerOutName');
    const confirmSubstitutionBtn = document.getElementById('confirmSubstitution');
    // Initialize team dropdowns after DOM is loaded
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize Bootstrap dropdown components
        const teamDropdownA = new bootstrap.Dropdown(document.getElementById('teamDropdownA'));
        const teamDropdownB = new bootstrap.Dropdown(document.getElementById('teamDropdownB'));

        // Populate dropdown menus
        populateTeamDropdowns();
    });
    // تهيئة القوائم المنسدلة
    function initializeTeamDropdowns() {
        const teamListA = document.getElementById('teamListA');
    const teamListB = document.getElementById('teamListB');
        // Clear existing options
        teamListA.innerHTML = '';
        teamListB.innerHTML = '';

        // Add teams to both dropdowns
        Object.keys(allTeams).forEach(teamName => {
            // For Team A dropdown
            const itemA = document.createElement('li');
            const linkA = document.createElement('a');
            linkA.className = 'dropdown-item';
            linkA.href = '#';
            linkA.textContent = teamName;
            linkA.addEventListener('click', (e) => {
                e.preventDefault();
                selectTeam('A', teamName);
            });
            itemA.appendChild(linkA);
            teamListA.appendChild(itemA);

            // For Team B dropdown
            const itemB = document.createElement('li');
            const linkB = document.createElement('a');
            linkB.className = 'dropdown-item';
            linkB.href = '#';
            linkB.textContent = teamName;
            linkB.addEventListener('click', (e) => {
                e.preventDefault();
                selectTeam('B', teamName);
            });
            itemB.appendChild(linkB);
            teamListB.appendChild(itemB);
        });

        // Initialize Bootstrap dropdowns
        if (teamDropdownA && teamListA) {
            new bootstrap.Dropdown(teamDropdownA);
        }
        if (teamDropdownB && teamListB) {
            new bootstrap.Dropdown(teamDropdownB);
        }
    }

    // اختيار فريق
    function selectTeam(teamLetter, teamName) {
        if (isMatchEnded) return;

        const dropdownBtn = document.getElementById(`teamDropdown${teamLetter}`);
        if (dropdownBtn) {
            dropdownBtn.textContent = teamName;
            teams[teamLetter] = {
                name: teamName,
                score: 0,
                players: JSON.parse(JSON.stringify(allTeams[teamName]))
            };
            checkTeamsSelected();
        }
    }

    // التحقق من اختيار الفريقين
    function checkTeamsSelected() {
        if (teams.A && teams.B) {
            showTeamsControlPanel();
        }
    }

    // عرض لوحة التحكم
    function showTeamsControlPanel() {
        selectedTeamsContainer.style.display = 'block';
        selectedTeamsContainer.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="team-display" id="teamA">
                        <div class="team-name">${teams.A.name}</div>
                        <div class="score" id="scoreA">0</div>
                        <div class="score-controls">
                            <button class="btn btn-success add-goal" data-team="A" ${isMatchEnded ? 'disabled' : ''}>هدف +</button>
                            <button class="btn btn-danger remove-goal" data-team="A" ${isMatchEnded ? 'disabled' : ''}>هدف -</button>
                        </div>
                        <div class="players-list" id="playersA"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="team-display" id="teamB">
                        <div class="team-name">${teams.B.name}</div>
                        <div class="score" id="scoreB">0</div>
                        <div class="score-controls">
                            <button class="btn btn-success add-goal" data-team="B" ${isMatchEnded ? 'disabled' : ''}>هدف +</button>
                            <button class="btn btn-danger remove-goal" data-team="B" ${isMatchEnded ? 'disabled' : ''}>هدف -</button>
                        </div>
                        <div class="players-list" id="playersB"></div>
                    </div>
                </div>
            </div>
        `;

        renderPlayers('A');
        renderPlayers('B');

        // إضافة مستمعي الأحداث
        document.querySelectorAll('.add-goal').forEach(btn => {
            btn.addEventListener('click', function () {
                if (isMatchEnded) return;
                const team = this.dataset.team;
                addTeamGoal(team);
                addEvent(`هدف لـ ${teams[team].name}`, 'goal');
            });
        });

        document.querySelectorAll('.remove-goal').forEach(btn => {
            btn.addEventListener('click', function () {
                if (isMatchEnded) return;
                const team = this.dataset.team;
                removeTeamGoal(team);
                addEvent(`تم إلغاء هدف لـ ${teams[team].name}`, 'goal');
            });
        });
    }

    // عرض اللاعبين
    function renderPlayers(team) {
        const playersList = document.getElementById(`players${team}`);
        playersList.innerHTML = '';

        teams[team].players.forEach(player => {
            const playerEl = document.createElement('div');
            playerEl.className = 'player';
            playerEl.dataset.playerId = player.id;

            playerEl.innerHTML = `
                <div class="player-info">
                    <span class="player-name">${player.name}</span>
                    <span class="player-stats">
                        ⚽ ${player.goals} | 🟨 ${player.yellowCards} | 🟥 ${player.redCards}
                    </span>
                </div>
                <div class="player-actions">
                    <button class="btn btn-sm btn-success" data-action="goal" ${isMatchEnded ? 'disabled' : ''}>هدف</button>
                    <button class="btn btn-sm btn-warning" data-action="yellow" ${isMatchEnded ? 'disabled' : ''}>إنذار</button>
                    <button class="btn btn-sm btn-danger" data-action="red" ${isMatchEnded ? 'disabled' : ''}>طرد</button>
                    <button class="btn btn-sm btn-secondary" data-action="sub" ${isMatchEnded ? 'disabled' : ''}>استبدال</button>
                </div>
            `;

            if (!isMatchEnded) {
                playerEl.querySelectorAll('.player-actions button').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        handlePlayerAction(team, player.id, btn.dataset.action);
                    });
                });
            }

            playersList.appendChild(playerEl);
        });
    }

    // معالجة أحداث اللاعبين
    function handlePlayerAction(team, playerId, action) {
        if (isMatchEnded) return;

        const player = teams[team].players.find(p => p.id === playerId);
        if (!player) return;

        switch (action) {
            case 'goal':
                player.goals++;
                addTeamGoal(team);
                addEvent(`هدف للاعب ${player.name} (${teams[team].name})`, 'goal');
                break;
            case 'yellow':
                player.yellowCards++;
                if (player.yellowCards >= 2) {
                    player.redCards = 1;
                    addEvent(`طرد للاعب ${player.name} (${teams[team].name}) بسبب إنذارين`, 'red');
                } else {
                    addEvent(`إنذار للاعب ${player.name} (${teams[team].name})`, 'yellow');
                }
                break;
            case 'red':
                player.redCards = 1;
                addEvent(`طرد للاعب ${player.name} (${teams[team].name})`, 'red');
                break;
            case 'sub':
                initiateSubstitution(team, playerId);
                break;
        }
        renderPlayers(team);
    }

    // بدء عملية الاستبدال
    function initiateSubstitution(team, playerOutId) {
        if (isMatchEnded) return;

        const playerOut = teams[team].players.find(p => p.id === playerOutId);
        if (!playerOut) return;

        currentSubstitution = { team, playerOutId };
        playerOutName.textContent = playerOut.name;

        // تعبئة قائمة البدلاء
        substituteSelect.innerHTML = '';
        const substitutes = teams[team].players.filter(p => p.id > 0 && p.id !== playerOutId);

        if (substitutes.length === 0) {
            substituteSelect.innerHTML = '<option value="">لا يوجد بدلاء متاحين</option>';
            confirmSubstitutionBtn.disabled = true;
        } else {
            substitutes.forEach(sub => {
                const option = document.createElement('option');
                option.value = sub.id;
                option.textContent = sub.name;
                substituteSelect.appendChild(option);
            });
            confirmSubstitutionBtn.disabled = false;
        }

        substitutionModal.show();
    }

    // تأكيد الاستبدال
    confirmSubstitutionBtn.addEventListener('click', function () {
        if (isMatchEnded) return;

        const playerInId = parseInt(substituteSelect.value);
        if (!playerInId) return;

        const { team, playerOutId } = currentSubstitution;
        const playerOut = teams[team].players.find(p => p.id === playerOutId);
        const playerIn = teams[team].players.find(p => p.id === playerInId);

        if (playerOut && playerIn) {
            addEvent(`استبدال: ${playerOut.name} يخرج و ${playerIn.name} يدخل (${teams[team].name})`, 'substitution');
            substitutionModal.hide();
            renderPlayers(team);
        }
    });

    // إضافة هدف للفريق
    function addTeamGoal(team) {
        teams[team].score++;
        updateTeamScore(team);
    }

    // إزالة هدف من الفريق
    function removeTeamGoal(team) {
        if (teams[team].score > 0) {
            teams[team].score--;
            updateTeamScore(team);
        }
    }

    // تحديث نتيجة الفريق
    function updateTeamScore(team) {
        document.getElementById(`score${team}`).textContent = teams[team].score;
    }

    // إضافة حدث للمباراة
    function addEvent(text, type) {
        const eventEl = document.createElement('div');
        eventEl.className = `event ${type}`;
        eventEl.innerHTML = `
            <span class="event-time">[${timerDisplay.textContent}]</span>
            <span class="event-text">${text}</span>
        `;
        eventsList.prepend(eventEl);
    }

    // مؤقت المباراة
    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    startTimerBtn.addEventListener('click', function () {
        if (isMatchEnded) return;
        if (!timerInterval) {
            timerInterval = setInterval(function () {
                seconds++;
                updateTimer();
            }, 1000);
        }
    });

    stopTimerBtn.addEventListener('click', function () {
        if (isMatchEnded) return;
        clearInterval(timerInterval);
        timerInterval = null;
    });

    resetTimerBtn.addEventListener('click', function () {
        if (isMatchEnded) return;
        clearInterval(timerInterval);
        timerInterval = null;
        seconds = 0;
        updateTimer();
    });

    halfTimeBtn.addEventListener('click', function () {
        if (isMatchEnded) return;
        addEvent('نصف المباراة', 'half-time');
    });

    fullTimeBtn.addEventListener('click', function () {
        if (isMatchEnded) return;
        addEvent('نهاية المباراة', 'full-time');
        clearInterval(timerInterval);
        timerInterval = null;
        isMatchEnded = true;
        disableAllControls();
        enableSaveButton();
    });

    // تعطيل جميع عناصر التحكم
    function disableAllControls() {
        // تعطيل أزرار المؤقت
        startTimerBtn.disabled = true;
        stopTimerBtn.disabled = true;
        resetTimerBtn.disabled = true;
        halfTimeBtn.disabled = true;
        fullTimeBtn.disabled = true;

        // تعطيل أزرار الأهداف
        document.querySelectorAll('.add-goal, .remove-goal').forEach(btn => {
            btn.disabled = true;
        });

        // تعطيل أزرار اللاعبين
        document.querySelectorAll('.player-actions button').forEach(btn => {
            btn.disabled = true;
        });

        // تعطيل زر تأكيد الاستبدال إذا كان مفتوحًا
        confirmSubstitutionBtn.disabled = true;
    }

    async function saveMatchData() {
        const saveBtn = document.getElementById('saveResultsBtn');
        saveBtn.disabled = true;
        saveBtn.textContent = 'جاري الحفظ...';

        try {
            // Prepare data
            const matchData = {
                teamA: teams.A,
                teamB: teams.B,
                events: Array.from(document.querySelectorAll('#eventsList .event')).map(el => ({
                    time: el.querySelector('.event-time').textContent.replace(/[\[\]]/g, ''),
                    text: el.querySelector('.event-text').textContent,
                    type: el.className.replace('event ', '')
                }))
            };

            // Send request
            const response = await fetch('/api/matches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Language': 'ar' // For Arabic error messages
                },
                body: JSON.stringify(matchData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'فشل الاتصال بالسيرفر');
            }

            // Success
            alert('تم حفظ المباراة بنجاح ✓');
            console.log('Saved match:', result.data);

        } catch (err) {
            console.error('Save failed:', err);

            // Show detailed error
            alert(`❌ خطأ في الحفظ:\n${err.message}\n\nيرجى المحاولة مرة أخرى`);

            // For debugging
            if (confirm('عرض تفاصيل الخطأ للمطور؟')) {
                prompt('تفاصيل الخطأ (أرسل هذه للمطور):', err.stack || err.message);
            }
        } finally {
            saveBtn.disabled = false;
            saveBtn.textContent = 'حفظ النتائج';
        }
    }

    // Attach event listener
    document.getElementById('saveResultsBtn').addEventListener('click', saveMatchData);
    // تمكين زر الحفظ فقط

    function addEvent(text, type) {
        // Normalize Arabic text
        const normalizedText = text.normalize();

        const eventEl = document.createElement('div');
        eventEl.className = `event ${type}`;
        eventEl.innerHTML = `
    <span class="event-time">[${timerDisplay.textContent}]</span>
    <span class="event-text">${normalizedText}</span>
  `;

        eventsList.prepend(eventEl);
    }

    // أضف زر الحفظ في واجهة المستخدم
    const saveBtn = document.createElement('button');
    saveBtn.id = 'saveResultsBtn';
    saveBtn.textContent = 'حفظ النتائج';
    saveBtn.className = 'btn btn-success mt-3 w-100';
    saveBtn.disabled = true;
    saveBtn.onclick = saveToDatabase;
    document.querySelector('.container').appendChild(saveBtn);

    // تهيئة التطبيق
    initializeTeamDropdowns();
});