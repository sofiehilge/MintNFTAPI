
require('dotenv').config()
const axios = require('axios');
const {URL} = require('url'); //import the URL module

const clientSecret = process.env.CLIENT_SECRET;
const projectId = process.env.PROJECT_ID;
const nftId = process.env.NFT_ID;

const baseUrl = `https://staging.crossmint.com/api/2022-06-09/collections/default-polygon/nfts/`;
const url = new URL(nftId, baseUrl);

const headers = {
  'x-client-secret': clientSecret,
  'x-project-id': projectId
};

axios.get(url.toString(), {headers})
.then(response => {
  //check the delivery status in the response
  const onChainStatus = response.data.onChain.status;

  if (onChainStatus === 'delivered'){
    console.log('NFT has been delivered!');
    //Perform any UI update or user notification here
  } else {
    console.log('NFT delivery is still pending. check again later.')
  }
})
.catch(error=> console.error('error:', error))


/* const data = {
    recipient: 'email:sofie.hilge@gmail.com:polygon',
    metadata: {
      name: 'My first Mint API NFT',
      image: 'https://www.crossmint.com/assets/crossmint/logo.png',
      description: 'My NFT created via the mint API!'
    }
};

const options = {
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'x-client-secret': 'sk_test.ce3d07f6.5995bd4aeed476d3be9fbd1e620ae3fc',
    'x-project-id': 'fbce2e64-efbb-4561-a3ec-459617cc2d85'
  },
};

axios.post(url, data, options)
.then(response => console.log(response.data))
.catch(error => console.error('error:', error)) */