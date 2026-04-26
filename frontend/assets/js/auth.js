document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phoneInput');
    const submitBtn = document.getElementById('submitBtn');
    const consentCheck = document.getElementById('check'); // Это для регистрации

    function validateForm() {
        // Если элементов нет на странице, выходим, чтобы не было ошибок
        if (!phoneInput || !submitBtn) return;

        const phoneValue = phoneInput.value.trim();
        
        // Условие: ровно 12 символов (например, +79001112233)
        const isPhoneValid = phoneValue.length === 12 && phoneValue.startsWith('+7');
        
        // Если мы на странице регистрации (есть чекбокс), проверяем его. 
        // Если мы на входе (чекбокса нет), считаем что всё ок.
        const isConsentValid = consentCheck ? consentCheck.checked : true;

        if (isPhoneValid && isConsentValid) {
            submitBtn.disabled = false;
            submitBtn.classList.add('is-active'); // Делает текст черным по твоему CSS
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('is-active');
        }
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            let value = phoneInput.value;

            // Запрещаем стирать +7
            if (!value.startsWith('+7')) {
                value = '+7';
            }

            // Оставляем только + и цифры
            const cleaned = '+' + value.substring(1).replace(/\D/g, '');
            phoneInput.value = cleaned.substring(0, 12);

            validateForm();
        });
    }

    // Слушаем чекбокс, если он есть
    if (consentCheck) {
        consentCheck.addEventListener('change', validateForm);
    }

    // Логика перехода
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (!this.disabled) {
                // Переход на уровень выше к index.html
                window.location.href = '../index.html';
            }
        });
    }

    // Проверяем форму сразу при загрузке
    validateForm();
});