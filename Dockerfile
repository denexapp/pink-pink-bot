# https://github.com/nodejs/docker-node/blob/master/README.md
# https://docs.docker.com/engine/reference/builder/#cmd
# https://towardsdatascience.com/learn-enough-docker-to-be-useful-b0b44222eef5

FROM node:12

# Install dependencies
RUN npm ci

# Build project
RUN npm run build

# Remove source code
RUN rm -rf ./src

# Add builded project to the container filesystem
COPY . .

# EXPOSE 8080

# Specify command to run container
CMD [ "npm", "start" ]
