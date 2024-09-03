//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract YourContract {

	struct profile {
		string name;
		string surname;
		string jobTitle;
		string desc;
		string github;
		string linkedin;
	}

	mapping (address => profile) public profiles; 

	function addProfile(string memory _name,string memory _surname,string memory _job,string memory _desc,string memory _github,string memory _linkedin ) public{
		profiles[msg.sender].name = _name;
		profiles[msg.sender].surname = _surname;
		profiles[msg.sender].jobTitle = _job;
		profiles[msg.sender].desc = _desc;
		profiles[msg.sender].github = _github;
		profiles[msg.sender].linkedin = _linkedin;
	}



}
