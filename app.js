document.addEventListener('DOMContentLoaded', function () {
  // Handle sign-up form submission
  const signUpForm = document.getElementById('signup-form');
  if (signUpForm) {
    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      alert('Sign up successful!');
      window.location.href = 'dashbod.htm'; // Redirect to login page
    });
  }

  // Handle login form submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailLogin = document.getElementById('email-login').value;
      const passwordLogin = document.getElementById('password-login').value;

      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (emailLogin === storedEmail && passwordLogin === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashbod.htm'; // Redirect to dashboard
      } else {
        alert('Invalid credentials');
      }
    });
  }

  // Handle log out
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      alert('Logged out successfully!');
      window.location.href = 'login.htm'; // Redirect to login page
    });
  }
});
