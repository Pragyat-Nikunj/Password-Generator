# Password Generator

> 🚀 **Check out the live app:** [Password Generator Live Demo](https://password-generator-eta-hazel-43.vercel.app/)

## Project Overview

A simple and customizable password generator built with React. This application allows users to generate secure passwords with adjustable length and options to include numbers and special characters. The password generation uses cryptographically secure random values and provides a password strength indicator.

## Features

- Generate random, secure passwords
- Adjustable password length (6-100 characters)
- Option to include numbers
- Option to include special characters
- Ensures at least one number/special character if selected
- Cryptographically secure random password generation
- Password strength indicator (Too Weak, Moderate, Good, Strong)
- Copy generated password to clipboard
- Responsive and modern UI

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pragyat-Nikunj/Password-Generator.git
   cd Password-Generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

- Adjust the password length using the slider.
- Toggle the checkboxes to include numbers and/or special characters.
- The password will always include at least one number or special character if selected.
- View the password strength indicator below the controls.
- Click "Copy" to copy the generated password to your clipboard.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
