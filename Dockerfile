FROM node:16-alpine
ARG NPM_TOKEN
WORKDIR /usr/src/app
RUN npm install --global pm2
COPY .npmrc ./
RUN echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build --omit=dev
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]