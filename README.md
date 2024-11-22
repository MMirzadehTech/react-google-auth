# Google OAuth React App

## Overview 🎉

This project is a simple React application that allows users to authenticate using Google OAuth 2.0. It displays user information after successful login and provides a logout option.

## Features 🌟

- Google login integration using OAuth 2.0
- Display user profile information
- Logout functionality

## Tech Stack 🛠️

- **React** 
- **React Bootstrap** 
- **Google OAuth Provider**
- **JWT Decode**

## Getting Started 🚀

### Prerequisites

- Ensure you have **Node.js** and **npm** installed on your machine.
- A Google Cloud project with OAuth 2.0 credentials.

### Setup Instructions

1. **Clone the repo**

      git clone https://github.com/MMirzadehTech/react-google-auth.git
   cd react-google-auth
   

2. **Install dependencies**

      npm install
   

3. **Set up Google OAuth 2.0**

   - Go to the Google Cloud Console (https://console.cloud.google.com/).
   - Create a new project.
   - Navigate to APIs & Services > Credentials.
   - Create OAuth 2.0 credentials (Web application).
   - Add your authorized redirect URIs.

4. **Add your client ID to the .env file**

   Create a .env file in the root directory and add your Google Client ID:

      REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
   

5. **Run the application**

      npm start
   

   Your application should now be running on http://localhost:3001 🎈.

## Usage 💻

- Click the "Sign in with Google" button.
- After logging in, your user profile information will be displayed.
- Click the logout button to sign out from the application.

## Contributing 🤝

If you would like to contribute to this project, please fork the repository and create a pull request.

## License 📄

This project is licensed under the MIT License.

## Acknowledgments 🙏

- React (https://reactjs.org/)
- React Bootstrap (https://react-bootstrap.github.io/)
- Google OAuth Documentation (https://developers.google.com/identity/protocols/oauth2)
