function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('login-status').textContent = 'Logged in successfully!';
    })
    .catch(error => {
      document.getElementById('login-status').textContent = error.message;
    });
}