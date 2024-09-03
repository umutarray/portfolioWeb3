# Decentralized Profile Management DApp

## Overview

This project is a decentralized application (DApp) built on the Ethereum blockchain that allows users to create and manage their personal profiles. Each profile includes details such as name, surname, job title, a short description, GitHub link, and LinkedIn link. The DApp securely stores this information on the blockchain, allowing users to maintain complete control over their data.

## Smart Contract

The core of this DApp is a Solidity smart contract named `YourContract`. The contract enables users to:

- Create or update a personal profile.
- Retrieve any user's profile using their Ethereum address.

### Contract Details

- **Profile Structure**: The contract defines a `profile` struct with the following fields:
  - `name`: The user's first name.
  - `surname`: The user's last name.
  - `jobTitle`: The user's current job title.
  - `desc`: A brief description about the user.
  - `github`: The user's GitHub profile link.
  - `linkedin`: The user's LinkedIn profile link.

- **Mapping**: The contract uses a mapping to associate each Ethereum address with a `profile` struct:


      mapping (address => profile) public profiles;



## Getting Started

### Prerequisites

- Node.js and npm installed
- MetaMask or any other Ethereum wallet extension

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/umutarray/portfolioWeb3.git
   cd portfolioWeb3
