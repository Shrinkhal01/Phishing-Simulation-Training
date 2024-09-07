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


## License

This project is intended for educational purposes only. Use responsibly and do not deploy or use for malicious activities.

## Contributing

If you'd like to contribute to this project, please submit a pull request or open an issue for discussion.

## Contact

For any questions or feedback, please reach out to [shrinkhalshrinkhal22@gmail.com](mailto:shrinkhalshrinkhal22@gmail.com).
