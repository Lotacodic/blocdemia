import web3 from "@/assets/images/web3.png";
import blockchain from "@/assets/images/blockchain.png";
import nft from "@/assets/images/nfts.png";
import wallet from "@/assets/images/wallets.png";
import smartContract from "@/assets/images/smart_contracts.png";

const courses = [
  {
    title: "Blockchain",
    category: "Blockchain",
    description:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: blockchain,
    lessons: [
      {
        title: "What is Blockchain",
        duration: "2mins",
        courseImage: blockchain,
        source:
          "https://drive.google.com/file/d/1rGFiKXcWJWhhWcRVWINX6a9NkE7TAaC4/preview",
      },
      {
        title: "How does a Blockchain work",
        duration: "3mins",
        courseImage: blockchain,
        source:
          "https://drive.google.com/file/d/1SRbdQyqYEjdQ2kkN9nCH1twsZNTurpwZ/preview",
      },
      {
        title: "Types of Blockchain",
        duration: "4mins",
        courseImage: blockchain,
        source:
          "https://drive.google.com/file/d/1UEYzfcOVicJd_9Zc3mBuuSY_-8GAgmxw/preview",
      },
      {
        title: "Uses of Blockchain",
        duration: "6mins",
        courseImage: blockchain,
        source:
          "https://drive.google.com/file/d/10Qp2wY7ymYFzTpglR6m-5IrhB90nUgGM/preview",
      },
      {
        title: "Why does Blockchain matter",
        duration: "5mins",
        courseImage: blockchain,
        source:
          "https://drive.google.com/file/d/11pQUrNtXj19fpbt0UaME4YJR2sSOdIWl/preview",
      },
    ],
    quiz: [
      {
        question: "What is a blockchain?",
        options: [
          { value: "A type of centralized database", isCorrect: false },
          {
            value: "A digital ledger shared across multiple computers",
            isCorrect: true,
          },
          {
            value: "A programming language used for web development",
            isCorrect: false,
          },
          { value: "A cloud storage system for companies", isCorrect: false },
          { value: "A single record stored in one location", isCorrect: false },
        ],
      },
      {
        question:
          "Which of the following is an example of a public blockchain?",
        options: [
          { value: "A company’s internal database", isCorrect: false },
          { value: "Bitcoin", isCorrect: true },
          { value: "A private supply chain network", isCorrect: false },
          { value: "A voting system for a small group", isCorrect: false },
          { value: "A bank’s transaction records", isCorrect: false },
        ],
      },
      {
        question: "What is the primary benefit of using a private blockchain?",
        options: [
          { value: "Full transparency for everyone", isCorrect: false },
          { value: "Slower transaction speeds", isCorrect: false },
          { value: "Restricted access and better privacy", isCorrect: true },
          { value: "No need for verification", isCorrect: false },
          { value: "Anyone can add or edit records", isCorrect: false },
        ],
      },
      {
        question:
          "Which type of blockchain combines features of both public and private blockchains?",
        options: [
          { value: "Public blockchain", isCorrect: false },
          { value: "Private blockchain", isCorrect: false },
          { value: "Consortium blockchain", isCorrect: false },
          { value: "Hybrid blockchain", isCorrect: true },
          { value: "Decentralized blockchain", isCorrect: false },
        ],
      },
      {
        question: "What are smart contracts?",
        options: [
          { value: "A form of digital money", isCorrect: false },
          {
            value: "Self-executing contracts with terms in code",
            isCorrect: true,
          },
          { value: "Legal contracts stored online", isCorrect: false },
          {
            value: "A way to track goods in the supply chain",
            isCorrect: false,
          },
          { value: "A type of public blockchain", isCorrect: false },
        ],
      },
    ],
  },

  {
    title: "Web3 Wallets",
    category: "Wallets",
    description:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "10mins",
    courseImage: wallet,
    lessons: [
      {
        title: "Introduction to Web3 wallet",
        duration: "7mins",
        courseImage: wallet,
        source:
          "https://drive.google.com/file/d/1b-u5oqpkFht0O7v0hkMKX0QsLVdIbbc-/preview",
      },
      {
        title: "How to create Web3 wallet",
        duration: "3mins",
        courseImage: wallet,
        source:
          "https://drive.google.com/file/d/1EMiEahaof7uKQ_Qyhs_fMVxcI7sbxyik/preview",
      },
      {
        title: "How to fund Web3 wallet",
        duration: "6mins",
        courseImage: wallet,
        source:
          "https://drive.google.com/file/d/1a1JwIdhIEnsd6438rcNEzWKOJCp7zBEe/preview",
      },
    ],
    quiz: [
      {
        question: "What is a Web3 wallet primarily used for?",
        options: [
          { value: "Storing social media data", isCorrect: false },
          { value: "Managing and storing cryptocurrency", isCorrect: true },
          { value: "Holding personal files", isCorrect: false },
          { value: "Writing code for websites", isCorrect: false },
          { value: "Sending and receiving emails", isCorrect: false },
        ],
      },
      {
        question: "How do you connect your Web3 wallet to a blockchain app?",
        options: [
          { value: "By downloading a separate app", isCorrect: false },
          { value: "By scanning a QR code", isCorrect: false },
          {
            value:
              "By clicking a “Connect Wallet” button and confirming in your wallet app",
            isCorrect: true,
          },
          {
            value: "By entering your password on the website",
            isCorrect: false,
          },
          {
            value: "By sending an email to the app developers",
            isCorrect: false,
          },
        ],
      },
      {
        question: "How can you fund a Web3 wallet?",
        options: [
          { value: "By transferring crypto from an exchange", isCorrect: true },
          { value: "By connecting it to a physical bank", isCorrect: false },
          { value: "By mining it directly", isCorrect: false },
          {
            value: "By receiving crypto from another wallet",
            isCorrect: false,
          },
          { value: "By buying crypto from a store", isCorrect: false },
        ],
      },
      {
        question: "Which of the following is a common Web3 wallet?",
        options: [
          { value: "MetaMask", isCorrect: true },
          { value: "PayPal", isCorrect: false },
          { value: "Coinbase Wallet", isCorrect: true },
          { value: "Trust Wallet", isCorrect: true },
          { value: "Google Wallet", isCorrect: false },
        ],
      },
      {
        question: "What is your Web3 wallet address?",
        options: [
          { value: "The same as your email address", isCorrect: false },
          { value: "A unique string of numbers and letters", isCorrect: true },
          { value: "Your home address", isCorrect: false },
          { value: "Your social security number", isCorrect: false },
          {
            value: "A password you create when setting up the wallet",
            isCorrect: false,
          },
        ],
      },
    ],
  },

  {
    title: "Web3",
    category: "Web3",
    description:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: web3,
    lessons: [
      {
        title: "Introduction to Blockchain",
        duration: "3mins",
        courseImage: web3,
        source: "",
      },
      {
        title: "How Web3 works",
        duration: "10mins",
        courseImage: web3,
        source: "",
      },
      {
        title: "Importance of Web3",
        duration: "12mins",
        courseImage: web3,
        source: "",
      },
    ],
    quiz: [
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: "It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
      // Duplicate questions removed for brevity
    ],
  },

  {
    title: "NFTs",
    category: "NFTs",
    description:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: nft,
    lessons: [],
  },

  {
    title: "Smart Contracts",
    description:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: smartContract,
    lessons: [],
  },
];

export default courses;
