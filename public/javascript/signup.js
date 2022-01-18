function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
    }
  }
  
document.querySelector('.signup-btn').addEventListener('click', signupFormHandler);
  