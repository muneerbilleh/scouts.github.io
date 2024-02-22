let data = [];

function saveUsername() {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value.trim();

    if (username !== '') {
        const currentDate = new Date().toLocaleString();
        const listItem = `${username} - ${currentDate}`;
        data.push([username, currentDate]);

        const usernameList = document.getElementById('usernameList');
        const li = document.createElement('li');
        li.textContent = listItem;
        usernameList.appendChild(li);

        usernameInput.value = '';
    } else {
        alert('Please enter a valid username.');
    }
}

function downloadExcel() {
    if (data.length === 0) {
        alert('No data to download.');
        return;
    }

    const ws = XLSX.utils.aoa_to_sheet([['Username', 'Date'], ...data]);
    const wb = XLSX.utils.book_new();
    
    const currentDate = new Date().toLocaleDateString().replaceAll('/', '-');

    XLSX.utils.book_append_sheet(wb, ws, 'Usernames');
XLSX.writeFile(wb, `${currentDate}.xlsx`);
}