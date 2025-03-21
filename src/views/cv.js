function generateCV() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const photo = document.getElementById('photo').files[0];
    const evidenceFiles = document.getElementById('evidence').files;
    const recruiterEmail = document.getElementById('recruiterEmail').value;

    let cvContent = `
        <h3>CV Cá Nhân</h3>
        <p><strong>Họ và Tên:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số Điện Thoại:</strong> ${phone}</p>
    `;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cvContent += `<img src="${e.target.result}" alt="Ảnh cá nhân">`;
            updatePreview(cvContent, experience, education, evidenceFiles);
        };
        reader.readAsDataURL(photo);
    } else {
        updatePreview(cvContent, experience, education, evidenceFiles);
    }

    document.getElementById('sendButton').disabled = false;
}

function updatePreview(cvContent, experience, education, evidenceFiles) {
    cvContent += `
        <p><strong>Kinh Nghiệm Làm Việc:</strong></p>
        <p>${experience}</p>
        <p><strong>Học Vấn:</strong></p>
        <p>${education}</p>
    `;

    if (evidenceFiles.length > 0) {
        cvContent += `<p><strong>Minh Chứng:</strong></p><ul>`;
        for (let file of evidenceFiles) {
            cvContent += `<li>${file.name}</li>`;
        }
        cvContent += `</ul>`;
    }

    document.getElementById('cvContent').innerHTML = cvContent;
}

function sendCV() {
    const recruiterEmail = document.getElementById('recruiterEmail').value;
    const cvContent = document.getElementById('cvContent').innerHTML;

    if (!recruiterEmail) {
        alert('Vui lòng nhập email nhà tuyển dụng!');
        return;
    }

    console.log('Gửi CV tới:', recruiterEmail);
    console.log('Nội dung CV:', cvContent);

    alert(`CV đã được gửi tới ${recruiterEmail}! (Đây là bản demo - cần backend để gửi thật)`);

    document.getElementById('cvForm').reset();
    document.getElementById('cvContent').innerHTML = '';
    document.getElementById('sendButton').disabled = true;
}