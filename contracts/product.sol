//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract product {
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        address owner;
        bool isAuthentic;
    }
    
    mapping (uint256 => Product) public products;
    uint256 public productCount;
    
    constructor() {
        productCount = 0;
    }
    
    function createProduct(string memory _name, uint256 _price) public {
        productCount++;
        products[productCount] = Product(productCount, _name, _price, msg.sender, true);
    }
    
    function verifyProductAuthenticity(uint256 _id) public view returns (bool) {
        return products[_id].isAuthentic;
    }
    
    function markProductAsFake(uint256 _id) public{
        require(products[_id].owner == msg.sender, "Only the product owner can verify authenticity");
        products[_id].isAuthentic = false;
    }
    function markProductAsReal(uint256 _id) public{
        require(products[_id].owner == msg.sender, "Only the product owner can verify authenticity");
        products[_id].isAuthentic = true;
    }
    
    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](productCount);
        
        for (uint256 i = 1; i <= productCount; i++) {
            allProducts[i - 1] = products[i];
        }
        return allProducts;
    }
    
    function getProduct(uint256 _id) public view returns (Product memory) {
        return products[_id];
    }
}
