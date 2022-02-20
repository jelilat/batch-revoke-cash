//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Revoke {

    modifier ERC721(address[] memory _token, uint[] memory _tokenId) {
        require(_token.length == _tokenId.length);
        require(_token.length > 0 && _tokenId.length > 0);
        require(_token.length < 10 && _tokenId.length < 10);

        _;
    }

    function batchrevokeERC721(address[] memory _token, uint[] memory _tokenId) public ERC721(_token, _tokenId) {
        for (uint i = 0; i < _token.length; i++) {
            IERC721 token = IERC721(_token[i]);
            token.approve(0x0000000000000000000000000000000000000000, _tokenId[i]);
        }
    }

    modifier ERC20(address[] memory _token) {
        require(_token.length > 0 && _token.length < 10);

        _;
    }

    function batchrevokeERC20(address[] memory _token) public ERC20(_token) {
        for (uint i = 0; i < _token.length; i++) {
            IERC20 token = IERC20(_token[i]);
            token.approve(_token[i], 0);
        }
    }
}