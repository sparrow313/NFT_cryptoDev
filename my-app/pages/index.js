import Head from "next/head";
import { Contract, providers, utils } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { CONTRACT_ADDRESS, abi } from "../constants";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [presaleStarted, setPresaleStarted] = useState(false);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);

  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");

  const web3ModalRef = useRef();

  const startpreSale = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const nftContract = new Contract(CONTRACT_ADDRESS, abi, signer);
      const tx = await nftContract.startPresale();
      setLoading(true);
      await tx.wait();
      setLoading(false);
      await checkIfPresaleStarted();
    } catch (error) {
      console.error(error);
    }
  };

  const presaleMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const nftContract = new Contract(CONTRACT_ADDRESS, abi, signer);
      const tx = await nftContract.presaleMint({
        value: utils.parseEther("0.01"),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("You have successfully minted a cryptodev!");
    } catch (error) {
      console.error(error);
    }
  };

  const publicMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const nftContract = new Contract(CONTRACT_ADDRESS, abi, signer);
      const tx = await nftContract.mint({
        value: utils.parseEther("0.01"),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      window.alert("You have successfully minted a cryptodev!");
    } catch (error) {
      console.error(error);
    }
  };

  const getOwner = async () => {
    try {
      const provider = await getProviderOrSigner();

      const nftContract = new Contract(CONTRACT_ADDRESS, abi, provider);

      const owner = await nftContract.owner();

      const signer = await getProviderOrSigner(true);

      const address = await signer.getAddress();

      if (owner.toLowerCase() === address.toLowerCase()) {
        setIsOwner(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfPresaleStarted = async () => {
    try {
      const provider = await getProviderOrSigner();

      const nftContract = new Contract(CONTRACT_ADDRESS, abi, provider);

      const _presaleStarted = await nftContract.presaleStarted();

      if (!_presaleStarted) {
        getOwner(); //doubt here
      }
      setPresaleStarted(_presaleStarted);
      return _presaleStarted;
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfPresaleEnded = async () => {
    const provider = await getProviderOrSigner();

    const nftContract = new Contract(CONTRACT_ADDRESS, abi, provider);

    const _presaleEnded = await nftContract.presaleEnded();

    const hasEnded = _presaleEnded.lt(Math.floor(Date.now() / 1000));

    if (hasEnded) {
      setPresaleEnded(true);
    } else {
      setPresaleEnded(false);
    }
    return hasEnded;
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change network to Goerli");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const getTokenIdsMinted = async () => {
    try {
      const provider = await getProviderOrSigner();

      const nftContract = new Contract(CONTRACT_ADDRESS, abi, provider);

      const tokenIds = await nftContract.tokenIds();

      setTokenIdsMinted(tokenIds.toString());
      return tokenIds;
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      if (!walletConnected) {
        web3ModalRef.current = new Web3Modal({
          network: "goerli",
          providerOptions: {},
          disableInjectedProvider: false,
        });
        connectWallet();

        const _presaleStarted = checkIfPresaleStarted();
        if (_presaleStarted) {
          checkIfPresaleEnded();
        }

        getTokenIdsMinted();

        const presaleStartedInterval = setInterval(async () => {
          const _presaleStarted = await checkIfPresaleStarted();
          if (_presaleStarted) {
            const _presaleEnded = await checkIfPresaleEnded();
            if (_presaleEnded) {
              clearInterval(presaleStartedInterval);
            }
          }
        }, 5000);

        setInterval(async () => {
          await getTokenIdsMinted();
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  }, [walletConnected]);

  const renderButton = () => {
    if (!walletConnected) {
      return (
        <button className={styles.button} onClick={connectWallet}>
          Connect Wallet
        </button>
      );
    }
    if (loading) {
      return <button className={styles.button}>Loading</button>;
    }
    if (presaleStarted && !presaleEnded) {
      return (
        <div>
          <div className={styles.description}>
            Presale has started!!! If your address is whitelisted, Mint a Crypto
            Dev 🥳
          </div>
          <button className={styles.button} onClick={presaleMint}>
            Presale Mint 🚀
          </button>
        </div>
      );
    }
    if (presaleStarted && presaleEnded) {
      return (
        <button className={styles.button} onClick={publicMint}>
          Public mint 🚀
        </button>
      );
    }
    if (!presaleStarted && !isOwner) {
      return <button className={styles.button}>Presale hasn't started</button>;
    }
    if (!presaleStarted && isOwner) {
      return (
        <button className={styles.button} onClick={startpreSale}>
          start Presale!
        </button>
      );
    }
  };
  return (
    <div>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            Its an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {tokenIdsMinted}/20 have been minted
          </div>
          {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./cryptodevs/0.svg" />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  );
}
