document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phoneInput');
    const submitBtn = document.getElementById('submitBtn');
    const consentCheck = document.getElementById('check');

    function validateForm() {
        if (!phoneInput || !submitBtn) return;

        const phoneValue = phoneInput.value.trim();
        // Номер должен быть +7 и 10 цифр (итого 12 символов)
        const isPhoneValid = phoneValue.length === 12 && phoneValue.startsWith('+7');
        const isConsentValid = consentCheck ? consentCheck.checked : true;

        if (isPhoneValid && isConsentValid) {
            submitBtn.disabled = false;
            submitBtn.classList.add('is-active');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('is-active');
        }
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            let value = phoneInput.value;
            if (!value.startsWith('+7')) value = '+7';
            const cleaned = '+' + value.substring(1).replace(/\D/g, '');
            phoneInput.value = cleaned.substring(0, 12);
            validateForm();
        });
    }

    if (consentCheck) {
        consentCheck.addEventListener('change', validateForm);
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (!this.disabled) {
                // Сохраняем состояние входа в памяти браузера
                localStorage.setItem('isLoggedIn', 'true');
                // Переход на главную (выход из папки auth/ через ../)
                window.location.href = '../index.html';
            }
        });
    }

    validateForm();
});