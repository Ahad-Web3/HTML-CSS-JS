// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

// Import the ERC20 token interface
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";



// Define the contract
contract SlabDeposit {
    // Define the number of slabs and their capacity
    uint256 SLAB_COUNT = 5;
    uint256[] SLAB_CAPACITIES = [100, 200, 300, 400, 500];
    // Define the ERC20 token to be deposited
    IERC20 token;

    // Define a mapping to track the deposit in each slab
    mapping (uint256 => uint256) public slabDepositCount;

    // Define a function to deposit the token into the slabs
    function deposit(IERC20 _token) public {
        // Verify that the contract is not paused
        require(!isPaused(), "Contract is paused");

        // Verify that the token is the correct token
        require(_token == token, "Incorrect token");

        // Loop through the slabs in reverse order
        for (uint256 i = SLAB_COUNT; i > 0; i--) {
            // If the slab is not at capacity, deposit the token into the slab
            if (slabDepositCount[i] < SLAB_CAPACITIES[i - 1]) {
                slabDepositCount[i]++;
                break;
            }
        }
    }

    // Define a function to query the deposit status of the token
    function queryDeposit() public view returns (uint256) {
        // Loop through the slabs in reverse order
        for (uint256 i = SLAB_COUNT; i > 0; i--) {
            // If the deposit count is non-zero, return the slab number
            if (slabDepositCount[i] > 0) {
                return i;
            }
        }
        // If no deposit was found, return zero
        return 0;
    }

    // Define a function to pause the contract
    function pause() public {
        // Verify that the caller is the contract owner
        require(msg.sender == owner, "Only the contract owner can pause the contract");

        // Set the paused flag to true
        isPaused = true;
    }

    // Define a function to unpause the contract
    function unpause() public {
        // Verify that the caller is the contract owner
        require(msg.sender == owner, "Only the contract owner can unpause the contract");

        // Set the paused flag to false
        isPaused = false;
    }

    // Define a function to check if the contract is paused
    function isPaused() public view returns (bool) {
        return isPaused;
    }

    // Define the contract owner and the paused flag
    address public owner;
    bool isPaused;

    // Define the constructor to set the contract owner
    constructor(string memory usage) public {
        owner = msg.sender;
    }
}
