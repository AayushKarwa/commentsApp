FROM node:20
WORKDIR C:\Users\ayush\OneDrive\Desktop\route_app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node","index.js"]