document.addEventListener('DOMContentLoaded', function () {
    // Get Modal and Buttons
    const modal = document.getElementById('registration-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Switch Between Tabs
    loginTab.addEventListener('click', function () {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    });

    signupTab.addEventListener('click', function () {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    });

    // Close Modal
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Open Modal (for example, attach to a button in your app)
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'flex';
        });
    });
});
