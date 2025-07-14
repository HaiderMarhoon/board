document.addEventListener('DOMContentLoaded', function () {
    fetchMatches();

    // Function to fetch all matches
    function fetchMatches() {
        fetch('/api/matches')
            .then(response => response.json())
            .then(matches => {
                const matchesList = document.getElementById('matchesList');
                matchesList.innerHTML = '';

                if (matches.length === 0) {
                    matchesList.innerHTML = '<div class="alert alert-info">لا توجد مباريات مسجلة</div>';
                    return;
                }

                // Create table structure
                const table = document.createElement('table');
                table.className = 'table table-striped';
                table.innerHTML = `
                    <thead class="table-dark">
                        <tr>
                            <th>الفرق</th>
                            <th>النتيجة</th>
                            <th>التاريخ</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody id="matchesTableBody"></tbody>
                `;
                matchesList.appendChild(table);

                const tbody = document.getElementById('matchesTableBody');
                
                matches.forEach(match => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${match.teamA.name} vs ${match.teamB.name}</td>
                        <td>${match.teamA.score} - ${match.teamB.score}</td>
                        <td>${new Date(match.createdAt).toLocaleDateString('ar-EG')}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <a href="/match-details.html?id=${match._id}" class="btn btn-sm btn-primary">
                                    <i class="fas fa-eye"></i> عرض
                                </a>
                                <button class="btn btn-sm btn-danger delete-match" data-id="${match._id}">
                                    <i class="fas fa-trash"></i> حذف
                                </button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(row);
                });

                // Initialize delete handlers after creating the table
                setupDeleteHandlers();
            })
            .catch(error => {
                console.error('Error fetching matches:', error);
                document.getElementById('matchesList').innerHTML =
                    '<div class="alert alert-danger">حدث خطأ أثناء جلب بيانات المباريات</div>';
            });
    }

    // Function to setup delete button handlers
    function setupDeleteHandlers() {
        document.addEventListener('click', async (e) => {
            if (e.target.closest('.delete-match')) {
                const button = e.target.closest('.delete-match');
                const matchId = button.dataset.id;
                
                if (confirm('هل أنت متأكد من حذف هذه المباراة؟ هذا الإجراء لا يمكن التراجع عنه.')) {
                    button.disabled = true;
                    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الحذف...';
                    
                    try {
                        const response = await fetch(`/api/matches/${matchId}`, {
                            method: 'DELETE'
                        });

                        if (!response.ok) {
                            throw new Error(await response.text());
                        }

                        // Remove the row from the table
                        button.closest('tr').remove();
                        
                        // Check if table is empty now
                        const tbody = document.getElementById('matchesTableBody');
                        if (tbody.rows.length === 0) {
                            document.getElementById('matchesList').innerHTML = 
                                '<div class="alert alert-info">لا توجد مباريات مسجلة</div>';
                        }
                        
                        alert('تم حذف المباراة بنجاح');
                    } catch (err) {
                        console.error('Delete error:', err);
                        button.disabled = false;
                        button.innerHTML = '<i class="fas fa-trash"></i> حذف';
                        alert(`خطأ في الحذف: ${err.message}`);
                    }
                }
            }
        });
    }
});