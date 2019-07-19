FROM node:dubnium-alpine

# Create app directory
WORKDIR /app

# Copy files
COPY . .

EXPOSE 3000 80 443

CMD ["yarn", "docs:dev"]