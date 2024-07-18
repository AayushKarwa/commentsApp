

# CommentsApp

Welcome to the CommentsApp repository! This application is designed to manage and display comments. It is built using a modern tech stack and containerized using Docker for easy deployment and scaling.

## Features

- **User Authentication**: Secure user authentication and authorization.
- **Comment Management**: Create, edit, and delete comments.
- **Real-time Updates**: Comments are updated in real-time using websockets.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Scalable**: Easily deployable and scalable using Docker.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Containerization**: Docker

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker

### Installation

1. **Pull the Docker image**
   ```sh
   docker pull ayushkarwa/route_app
   ```

2. **Run the Docker container**
   ```sh
   docker run -p 3000:3000 ayushkarwa/route_app
   ```

3. **Access the application**
   Open your web browser and go to `http://localhost:3000`.

4. **PORT CONFIG FIXES**
   If port 3000 isn't working try changing it to (3001,3001,...) according to you.

### Usage

- **Creating a Comment**: Click on the "Add Comment" button, fill out the form, and submit.
- **Editing a Comment**: Click the edit icon next to a comment, modify the text, and save.
- **Deleting a Comment**: Click the delete icon next to a comment to remove it.

### File Structure

- **/client**: Contains the React frontend.
- **/server**: Contains the Node.js backend.
- **/docker-compose.yml**: Configuration for Docker Compose.
- **/Dockerfile**: Dockerfile for containerizing the application.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Aayush Karwa - ayushkarwa18@gmail.com - https://www.linkedin.com/in/ayush-karwa-1936a82aa/

Project Link: [https://github.com/AayushKarwa/commentsApp](https://github.com/AayushKarwa/commentsApp)

