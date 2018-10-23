FROM beevelop/nodejs

# Init service
EXPOSE 8080
EXPOSE 8081

# Defining enviroments
ENV MONGODB_USER dbuser
ENV MONGODB_PWD dbuser
ENV MONGODB_NAME app
ENV MONGODB_HOST localhost

# Install Dependencies
RUN apt-get update
RUN apt-get install -y git

# Configuring
RUN mkdir -p /opt/app
RUN mkdir -p /opt/scripts

WORKDIR /opt/app

COPY . .
RUN rm -rf ./node_modules/
RUN rm -rf ./.env

RUN npm install

CMD ["npm", "start"]
