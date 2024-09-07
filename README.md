# Phishing-Simulation-Training

## Overview

This project demonstrates a phishing attack simulation for educational purposes. It includes a fake login page designed to capture user credentials and an error page that simulates a server error after submission. The server captures and logs credentials and handles redirection based on the number of reloads.

## Project Structure

- **`server.js`**: The Node.js server script that handles credential capturing, error page display, and redirection.
- **`sdanlknjsaflndasf.html`**: A fake error page displayed after capturing credentials, simulating an HTTP 500 error.
- **`index.html`**: The fake login page designed to capture user credentials and display CAPTCHA for added realism.
- **`styles.css`**: The stylesheet used for styling the login page and error page.
- **`login-success.html`**: A page displayed to the user after a successful login simulation.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Shrinkhal01/Phishing-Simulation-Training.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Phishing-Simulation-Training
    ```
3. Install the required Node.js packages:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    node server.js
    ```
2. Open your web browser and navigate to `http://localhost:3000` to view the phishing simulation.

## File Descriptions

- **`server.js`**: Contains the server logic for handling form submissions and redirection. The server listens on port 3000.
- **`sdanlknjsaflndasf.html`**: Displays a fake HTTP 500 error page with a reload button.
- **`index.html`**: The main login page with input fields for username and password, along with a CAPTCHA simulation.
- **`styles.css`**: Contains styles for the login page and error page, including layout and design specifications.
- **`login-success.html`**: Displays a success message after the login attempt.



**Note:** This project was tested on macOS 14.6.1.

### Step-by-Step Description
## User Accesses the Login Page:

- The user navigates to the login page, which displays a form for entering a username, password, and CAPTCHA code.
- The login form includes input fields for the username and password, a CAPTCHA code displayed within a white box, and a submit button.


## User Submits the Login Form:

- The user fills in the username, password, and CAPTCHA code, then submits the form.
- The form data is sent to the server via a POST request to the /capture route.


## Server Captures Credentials:

- The server receives the form data and extracts the username and password.
- The credentials are appended to a file named credentials.txt for storage.
- After storing the credentials, the server redirects the user to a fake error page by sending a redirect response to the /error route.


## Fake Error Page Handling:

- The server serves a fake error page that displays an error message and a reload button.
- The error page includes JavaScript to handle automatic redirection after a certain number of reloads.


## Reload Counter Management:

- The server uses cookies to keep track of the number of times the user has reloaded the error page.
- Each time the user reloads the error page, the server increments the reload count stored in a cookie.
- If the reload count reaches a specified limit (e.g., 3 reloads), the server redirects the user to the actual login site (https://student.geu.ac.in/).
- If the reload count is below the limit, the server serves the fake error page again and updates the reload count.


## Redirection to Actual Login Site:

- Once the reload count reaches the specified limit, the server redirects the user to the actual login site (https://student.geu.ac.in/), making the process appear legitimate.

## License

This project is intended for educational purposes only. Use responsibly and do not deploy or use for malicious activities.

## Contributing

If you'd like to contribute to this project, please submit a pull request or open an issue for discussion.

## Contact

For any questions or feedback, please reach out to [shrinkhalshrinkhal22@gmail.com](mailto:shrinkhalshrinkhal22@gmail.com).
