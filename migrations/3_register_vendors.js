/* eslint-disable no-unused-vars */
const SupplyChain = artifacts.require('SupplyChain');

const vendors = [
  '0xeceffab2caf1ec535d407d366d747b575018d65e',
  '0xead172adb6cd5fe0b58150301ca25598c0dd1613',
  '0x18b0de3577c6f97522b1335344ad3d05cf3a6e2c',
  '0x75711d62a3db9f945ed901fea25f2ba6ae4cc5cc',
  '0x1d4a5d98356eb2db352294c07156a8f4ef70f161',
];

module.exports = async (deployer) => {
  const supplyChain = await SupplyChain.deployed();
  const vendorRegistrations = vendors.map(vendor => supplyChain.registerVendor(vendor));
  // eslint-disable-next-line no-console
  console.log('vendor registered');
  await Promise.all(vendorRegistrations);
};
