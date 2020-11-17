require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind hospital hockey private olympic suffer'; 
let testAccounts = [
"0x260c3d8c13ebfcc807f084c464acf2568fb7deb006435cab52f7cf7643772b17",
"0x5a7337fbc761043526c8e955771c02e4642f8de73080bbb5f0e5fc8d4fc23f68",
"0xd2cb29abe19409eaf029c94cb333e21307c54c0cff4c09d454f611b04c4f04f4",
"0x484b32b4193da535818947042bcd1b7a00d4dcc00b2172f0476100f580b9beda",
"0xb74af2e217dba342121bb8ee872f04424c1d4d6edfc2e1ef9406cdf5e8df6c9f",
"0x02fecc86653778f0cb4f9562142df9dab67472f717447159eb7e3db18ccb3110",
"0x9d1ffc177ce9f4f16a928a19b6311205268b1794f1755c6de066aaa68a3d117f",
"0x68f066dfb7a222d4e23516add7196a4150caa010eec280e2ccf2f2ccd729e546",
"0x00ab73521d94daeb755fe1033329cf506d4f82ac23b57f170f286454c3af9547",
"0x921c88f98d55ab4d082be905143375c563df289ea5d14968be77dfb8967e09c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
