function checkAnswer(button, status) {
    // 禁用所有按鈕
    const buttons = document.querySelectorAll('.answer-buttons button');
    buttons.forEach(btn => btn.disabled = true);

    // 根據回答狀態改變按鈕顏色
    if (status === 'correct') {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        // 顯示正確答案
        document.getElementById('correct-answer').classList.remove('hidden');
    }
}