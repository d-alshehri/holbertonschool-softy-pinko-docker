rm Dockerfile
cat << 'EOF' > Dockerfile
# Start from Ubuntu latest
FROM ubuntu:latest

# Update and upgrade
RUN apt-get update && apt-get upgrade -y

# Install Python3 and pip3
RUN apt-get install -y python3 python3-pip

# Remove EXTERNALLY-MANAGED if pip install fails
RUN rm -f /usr/lib/python*/EXTERNALLY-MANAGED

# Install Flask using pip3
RUN pip3 install flask

# Set working directory
WORKDIR /app

# Copy our Flask app
COPY ./api.py /app/api.py

# Run Flask app by default
CMD ["python3", "api.py"]
EOF
