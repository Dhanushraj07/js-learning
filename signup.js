async function signup() {
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const message = document.getElementById('signup-message');
  
    try {
      if (!newUsername || !newPassword) {
        throw new Error("Please enter both username and password.");
      }
  
      // Save credentials to localStorage
      const userData = { username: newUsername, password: newPassword };
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('User data saved:', userData);
      message.style.color = 'green';
      message.textContent = "✅ Account created! You can now login.";
    } catch (error) {
      message.style.color = 'red';
      message.textContent = error.message;
    }
  }
  