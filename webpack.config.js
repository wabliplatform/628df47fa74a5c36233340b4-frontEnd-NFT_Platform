const path = require('path');

module.exports = {
  entry: {
	'HOMEPAGE' : './javascript/HOMEPAGE.js',
	'viewNFT' : './javascript/viewNFT.js',
	'createNFT' : './javascript/createNFT.js',
	'CreateCategory' : './javascript/CreateCategory.js',
	'CreateUser' : './javascript/CreateUser.js',
	'ViewUser' : './javascript/ViewUser.js',
	'UpdateNFT' : './javascript/UpdateNFT.js',
	'UpdateUser' : './javascript/UpdateUser.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};