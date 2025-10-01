# Docker & Nginx Deployment Guide

This guide explains how to deploy the React application using Docker and Nginx.

## Prerequisites

- Docker installed on your system
- Basic knowledge of Docker commands

## Build and Run Instructions

1. Build the Docker image:
   ```
   docker build -t personal-portfolio .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 personal-portfolio
   ```

3. Access the application at:
   ```
   http://localhost:3000
   ```

## Configuration Details

- The application runs on port 3000
- Nginx is configured to handle client-side routing (React Router)
- Static files are served from the `/usr/share/nginx/html` directory inside the container

## Troubleshooting

If you encounter any issues:

1. Check if the container is running:
   ```
   docker ps
   ```

2. View container logs:
   ```
   docker logs [container-id]
   ```

3. Ensure port 3000 is not being used by another application on your host machine

## Additional Commands

- Stop the container:
  ```
  docker stop [container-id]
  ```

- Remove the container:
  ```
  docker rm [container-id]
  ```

- Remove the image:
  ```
  docker rmi personal-portfolio
  ```