# ParserUsdRate

## Features

- **Email Subscription**
    - Users can subscribe via email to receive updates.

- **Current USD/UAH Exchange Rate**
    - Get the latest USD to UAH exchange rate.

## Starting the App Locally

To get started with running the app on your local machine, follow these steps:

1. **Clone or Download the Project**
    - Clone the repository or download the project files to your local machine.

2. **Configure Environment Variables**
    - Update the environment variables in the Docker Compose file:
        - `NODEMAILER_EMAIL`: The email address Nodemailer will use to send daily rate emails.
        - `NODEMAILER_PASSWORD`: The application password for `NODEMAILER_EMAIL`. (Note: The application password is not the same as the password you use to log into your account. Learn more about [Gmail app passwords](https://support.google.com/accounts/answer/185833?hl=en).)

3. **Build and Run the App**
    - Execute the following command to build and run the application:
      ```sh
      docker compose up --build
      ```

## Tech Stack

### API
- **NestJS**
- **PostgreSQL**
- **Docker Compose**

## License

This project is licensed under the [MIT License](LICENSE).