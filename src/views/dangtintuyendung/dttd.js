let jobList = [];

function searchJobs() {
    const keyword = document.getElementById('keyword').value;
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('job-type').value;

    if (keyword || location || jobType) {
        alert(`Tìm kiếm: Từ khóa: ${keyword}, Địa điểm: ${location}, Loại công việc: ${jobType}`);
    } else {
        alert('Vui lòng nhập ít nhất một trường tìm kiếm!');
    }
}

function postJob() {
    const title = document.getElementById('job-title').value;
    const description = document.getElementById('job-description').value;
    const location = document.getElementById('job-location').value;
    const salary = document.getElementById('job-salary').value;

    if (title && description && location && salary) {
        const job = {
            title: title,
            description: description,
            location: location,
            salary: salary,
            id: Date.now()
        };

        jobList.push(job);
        displayJobs();
        clearForm();
        alert('Tin tuyển dụng đã được đăng thành công!');
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}

function displayJobs() {
    const jobListElement = document.getElementById('jobList');
    jobListElement.innerHTML = '';

    jobList.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Mô tả:</strong> ${job.description}</p>
            <p><strong>Địa điểm:</strong> ${job.location}</p>
            <p><strong>Mức lương:</strong> ${job.salary}</p>
            <button class="delete-btn" onclick="deleteJob(${job.id})">Xóa</button>
        `;
        jobListElement.appendChild(jobItem);
    });
}

function deleteJob(jobId) {
    jobList = jobList.filter(job => job.id !== jobId);
    displayJobs();
}

function clearForm() {
    document.getElementById('job-title').value = '';
    document.getElementById('job-description').value = '';
    document.getElementById('job-location').value = '';
    document.getElementById('job-salary').value = '';
}