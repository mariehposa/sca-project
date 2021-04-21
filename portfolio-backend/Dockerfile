FROM node:12.18.3

LABEL version="1.0"

LABEL description="This is the base docker image for my portfolio backend API."

LABEL maintainer="marieposahh@gmail.com"

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN dir

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "server"]