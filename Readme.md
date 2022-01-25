# Readme



## Front-End of application

![KryptoExchange](https://user-images.githubusercontent.com/73552321/151007816-5986f2b9-0de6-4162-a5e1-3f4205452229.png)




## How to run the project

**Run under client folder** 

### Install the dependencies (**Run inside client folder inside terminal** )

```
npm install
```

### Run the project (**Run inside client folder** )

```
npm run dev
```


## Packages Used

**Run under client folder** 

### Vite used with React (**Run under client folder** )

```
npm init vite@latest
```

### Tailwind CSS (**Run under client folder** )

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### React-icons (**Run under client folder** )

**Note:** The ethers package will help us to interact with the blockchain and with our smart contract

```
npm install react-icons ethers
```

### Install hardhat and testing framework CHAI (**Run under client folder** )

**Note:** This will install hardhat and CHAI

```
npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```



### Creating Hardhat project(**Run under client folder** )

**Note:** This will create hardhat project

```
npx hardhat
```



### To run testing (**Run under client folder** )

**Note:** This will install hardhat and CHAI

```
npx hardhat test
```
### Deploy command (**Run under client folder** )

**Note:** This will run deploy the smart contract and give you an address back.

```
npx hardhat run scripts/deploy.js --network ropsten
```

### Smart Contract deployed to Address (**Run under client folder** )

**Note:** We are going to use this in our client side of the application.


```
0x8514F2dc1B9716684343fcbA3b7B6376B8069d91
```














## Folder Usages

### client folder

```
This is the folder where our complete react code will be stored
```

### client -> src -> components

```
This will contain all the react component used in our application
```

