require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom process outside venture strong response shift pudding give end army gauge'; 
let testAccounts = [
"0xd99a8492e524adc6cde87a6341bdac4f370cc322f2b260b905f234b134750cc4",
"0x72fc55357868afcfb1c2b6b5834395e412ea42f9a15e40ba4f617845f2cf0b31",
"0xb1515de794219019be9c9e0dc499f739f8c32001a6399e8140f1869ff823d57a",
"0x0be3d86a963433d9df879ca2ff54aea1c46744ecbab19124f453409d7eeaac6a",
"0x01425f7daae433994d4573071321068ca08815468b3e6a98b6613d41fe1d9b14",
"0x4f4a48acaeef7a099793e4d42a6f7124b77797fa5dde3e3ad74f304a697630d9",
"0x9c928e2d3f66caed0cf20100eda64595091696565b5601c4498796358f63b2ba",
"0x1c80cb593e937bf728904d8092375ac824407a3a3ac977e08e594f8597bd27fb",
"0xce71da797bae337c35ed410dd23481905aa3c35a23729b7a29b68c4bceb39c1c",
"0x8e0a24625da536be4f53c708febf0f2661f6a9c8647c13183e711cb7671b5b35"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

