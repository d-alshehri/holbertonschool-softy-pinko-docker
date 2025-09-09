# Use latest Ubuntu
FROM ubuntu:latest

# Update and upgrade
RUN apt-get update && apt-get upgrade -y

# Install Python3 and pip3
RUN apt-get install -y python3 python3-pip

# Remove EXTERNALLY-MANAGED if needed
RUN rm -f /usr/lib/python*/EXTERNALLY-MANAGED

# Install Flask and CORS
RUN pip3 install flask flask-cors

# Set working directory
WORKDIR /app

# Copy the Flask app
COPY ./api.py /app/api.py

# Run Flask server
CMD ["python3", "api.py"]
