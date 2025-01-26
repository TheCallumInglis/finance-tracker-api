FROM node:lts-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
RUN npm prune --production
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
