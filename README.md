# Olimpiadas INET 2019 - Carlos Paz

## Requeriments

  - Node.js
  - NPM
  - MongoDB (Locally or dockerized)

## Installing

First install all the server's dependencies:

    $ npm install

Pull MongoDB's image: (Optional if DB is local) 

    $ docker pull mongo

Run a container with MongoDB's pulled image: (Optional if DB is local) 

    $ docker run -d -p 27017-27019:27017-27019 --name mongodb mongo

Finally, run the development server:

    $ npm run dev