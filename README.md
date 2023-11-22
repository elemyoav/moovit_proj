# Hello World App Readme

## Prerequisites

Before using this application, ensure that you have the following prerequisites installed on your system:

- **Node.js:** Make sure you have Node.js installed.
- **Docker:** Docker is required for containerization.

## Building the Docker Image

To build the Docker image for the Hello World App, follow these steps:

1. Open a terminal and navigate to the directory containing the `Dockerfile.hello-world-app` file.
2. Run the following command to build the Docker image:

    ```bash
    docker build -t <your-image-name> -f Dockerfile.hello-world-app .
    ```

    Replace `<your-image-name>` with the desired name for your Docker image.

## Running the App

To run the Hello World App, use the following command:

```bash
docker run -p 8080:8080 <your-image-name>
```

Replace `<your-image-name>` with the name you gave to your Docker image during the build process.

## Bonus Functionalities

### 1. Automatic Container Restart

To enable automatic container restart, you can use the following command:

```bash
docker run -p 8080:8080 --restart always <your-image-name>
```

This will ensure that the container restarts automatically unless explicitly stopped.

### 2. Nginx Reverse Proxy

For an additional bonus functionality using Nginx as a reverse proxy, you can use Docker Compose. Run the following command:

```bash
docker-compose up --build
```

This command will build both the Hello World App image and the Nginx image, creating a reverse proxy. The main app will be accessible on port 8080 via the Nginx proxy running on port 80.

Now you can access the Hello World App by navigating to http://localhost in your web browser.
