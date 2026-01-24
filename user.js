// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fetch user from localStorage
    try {
        const userJSON = localStorage.getItem("user");
        
        if (userJSON) {
            const user = JSON.parse(userJSON);
            
            // Update username if element exists
            const usernameElement = document.getElementById("username");
            if (usernameElement && user.name) {
                usernameElement.innerText = user.name;
            }
        }
    } catch (error) {
        // Fail gracefully if JSON parsing fails
        console.warn("Could not parse user data from localStorage");
    }
});