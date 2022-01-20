import React, {useEffect, useState} from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

//Since we are using metamask we getting access to an ethereum object which we can get by the following
//In google chrome inspect and type window.ethereum to see the object that we are getting
const {ethereum} = window;

//Using a special function which is going to fetch our ethereum contract
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({children}) => {
    return(
        // We are wrapping alll of our data which we are passing through children below
        <TransactionContext.Provider value={{value:'test'}}>
            {children}
        </TransactionContext.Provider>
    );
}