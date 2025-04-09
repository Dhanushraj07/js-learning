async function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
  
    // Simulated user credentials (hardcoded)
    const correctUsername = "admin";
    const correctPassword = "123";
  
    try {
      
  
      if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "✅ Login successful!";
        // Optionally redirect to dashboard.html
        // window.location.href = "dashboard.html";
      } else {
        throw new Error("❌ Invalid username or password");
      }
  
    } catch (error) {
      message.style.color = "red";
      message.textContent = error.message;
    }
  }
  