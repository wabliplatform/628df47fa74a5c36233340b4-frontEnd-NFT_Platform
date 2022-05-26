const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','HOMEPAGE.html')));
			this.app.get('/HOMEPAGE', (req, res) => res.sendFile(path.join(__dirname,'html','HOMEPAGE.html')));
			this.app.get('/HOMEPAGE/:id', (req, res) => res.sendFile(path.join(__dirname,'html','HOMEPAGE.html')));
			this.app.get('/viewNFT', (req, res) => res.sendFile(path.join(__dirname,'html','viewNFT.html')));
			this.app.get('/viewNFT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','viewNFT.html')));
			this.app.get('/createNFT', (req, res) => res.sendFile(path.join(__dirname,'html','createNFT.html')));
			this.app.get('/createNFT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','createNFT.html')));
			this.app.get('/CreateCategory', (req, res) => res.sendFile(path.join(__dirname,'html','CreateCategory.html')));
			this.app.get('/CreateCategory/:id', (req, res) => res.sendFile(path.join(__dirname,'html','CreateCategory.html')));
			this.app.get('/CreateUser', (req, res) => res.sendFile(path.join(__dirname,'html','CreateUser.html')));
			this.app.get('/CreateUser/:id', (req, res) => res.sendFile(path.join(__dirname,'html','CreateUser.html')));
			this.app.get('/ViewUser', (req, res) => res.sendFile(path.join(__dirname,'html','ViewUser.html')));
			this.app.get('/ViewUser/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ViewUser.html')));
			this.app.get('/UpdateNFT', (req, res) => res.sendFile(path.join(__dirname,'html','UpdateNFT.html')));
			this.app.get('/UpdateNFT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','UpdateNFT.html')));
			this.app.get('/UpdateUser', (req, res) => res.sendFile(path.join(__dirname,'html','UpdateUser.html')));
			this.app.get('/UpdateUser/:id', (req, res) => res.sendFile(path.join(__dirname,'html','UpdateUser.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;