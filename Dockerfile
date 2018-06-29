FROM node:8

ENV NPM_CONFIG_LOGLEVEL warn

# Create service directory
RUN mkdir -p /srv/service
WORKDIR /srv/service
# Install service dependencies
COPY package.json /srv/service/
RUN npm install
# Bundle service source
COPY dist /srv/service/dist

EXPOSE 3000

CMD [ "npm", "start" ]