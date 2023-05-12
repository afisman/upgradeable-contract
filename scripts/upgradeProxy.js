const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x337A169836280a23c3cD0c6143DC8C5482DE2282';

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log("The current contract owner is: " + upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}

main();