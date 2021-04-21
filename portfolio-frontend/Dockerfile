FROM node:12.18.3

LABEL version="1.0"

LABEL description="This is the base docker image for my portfolio frontend"

LABEL maintainer="marieposahh@gmail.com"

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]