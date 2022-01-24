async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.create-btn').addEventListener('click', newFormHandler);