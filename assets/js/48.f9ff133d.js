(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{247:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview-of-antara-modules-part-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-antara-modules-part-i","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview of Antara Modules - Part I")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Welcome to an "),a("b",[e._v("Overview of Antara Modules - Part I.")])]),e._v(" "),a("p",[e._v("Part I of this discussion covers the basic aspects of Antara modules, without delving deeply into the technical aspects of the technology.")]),e._v(" "),a("p",[e._v("The conversation should be attainable for a normal developer in the Komodo ecosystem, as well as for non-developers who otherwise possess experience in the blockchain industry.")]),e._v(" "),a("p",[e._v("A later discussion, "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-tutorials/overview-of-antara-modules-part-ii.html"}},[a("b",[e._v("Overview of Antara Modules - Part II")])]),e._v(", covers additional conceptual aspects of this technology. Part II is recommended for anyone who intends to utilize Antara technology in a development environment.")],1),e._v(" "),a("h2",{attrs:{id:"smart-contracts-on-the-komodo-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts-on-the-komodo-platform","aria-hidden":"true"}},[e._v("#")]),e._v(" Smart Contracts on the Komodo Platform")]),e._v(" "),a("p",[e._v("Komodo is built on the Bitcoin protocol, which features a simple programming language, called Bitcoin Script, that allows a developer to perform rudimentary scripting tasks.")]),e._v(" "),a("p",[e._v('Traditionally, Bitcoin Script is considered to be incapable of supporting the complex "smart contracts" found on other blockchain platforms. This limitation is mostly from the fact that Bitcoin Script is (intentionally) not Turing complete.')]),e._v(" "),a("p",[e._v("Now, the capabilities of extending Bitcoin Script into a competitive, and arguably stronger, method for creating smart-contract-like modules is changing through Komodo's Antara Framework. This framework integrates a broader technology, called CryptoConditions, which allows for complex utxo-based logic.")]),e._v(" "),a("p",[e._v("As is often the case, Komodo Platform is leading the blockchain industry in this brand new technology. This section will explain Antara's implementation of CryptoConditions, how it works, and how utxo-based smart contracts will dramatically alter the blockchain landscape.")]),e._v(" "),a("h2",{attrs:{id:"a-brief-review-of-bitcoin-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-review-of-bitcoin-script","aria-hidden":"true"}},[e._v("#")]),e._v(" A Brief Review of Bitcoin Script")]),e._v(" "),a("p",[e._v("The very first block in the Bitcoin blockchain was mined on or around January 3, 2009. Since then, this revolutionary technology has exploded, forever changing the way we think of money and currency. We owe many of these developments to Satoshi Nakamoto and his original Bitcoin-core code.")]),e._v(" "),a("p",[e._v("The Bitcoin-core code itself is written in C++. A time-tested and well-known programming language, C++ is Turing complete and can therefore do all that any other Turing complete programming language can do.")]),e._v(" "),a("p",[e._v('However, Bitcoin transactions are not executed with C++. Instead, transactions are carried out with a special protocol called Bitcoin Script. This scripting language has a number of "opcodes", or commands, that tell nodes how to deal with any specific transaction request.')]),e._v(" "),a("p",[e._v('While most computer programming languages are considered Turing complete, Bitcoin Script is not. It’s widely accepted that this was an intentional decision. But before we can discuss the relative merits of making a programming language Turing complete, let’s take a moment to understand what exactly "Turing complete" means.')]),e._v(" "),a("h2",{attrs:{id:"turing-completeness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#turing-completeness","aria-hidden":"true"}},[e._v("#")]),e._v(" Turing Completeness")]),e._v(" "),a("p",[e._v("In 1936, a British computer scientist and mathematician named Alan Turing published an academic paper called “On Computable Numbers, with an Application to the Entscheidungsproblem.” It is a seminal essay in the fields of computer science and computational theory.")]),e._v(" "),a("p",[e._v("In the essay, Turing describes a hypothetical machine that, when granted a few basic assumptions, can theoretically “compute any computable sequence.” This basically means it can solve any mathematical problem that uses only computable numbers. According to Turing’s definition, “a number is computable if its decimal can be written down by a machine.”")]),e._v(" "),a("p",[e._v("Turing called this device a “universal machine” but it is now better known as a “Turing machine.”")]),e._v(" "),a("p",[e._v("Turing machines are generally described in this way: Imagine a simple device that can read and write numbers. This device also has the ability to store data. (Turing assumes that the device has an infinitely large storage capacity, but this is not essential to understanding the concept of Turing completeness.)")]),e._v(" "),a("p",[e._v("Now, imagine that this simple machine moves from left to right along a thin, infinitely long piece of tape. It reads a number, decides what to do based on a series of instructions to which it is bound, and then executes the instructions accordingly.")]),e._v(" "),a("p",[e._v("In simply reading numbers, executing commands, and writing numbers, this simple machine can solve any computational sequence. It may take an arbitrarily long period of time but, theoretically, the machine would eventually solve the problem.")]),e._v(" "),a("p",[e._v("So what does all of this actually mean? Why is it important?")]),e._v(" "),a("p",[e._v("The idea of something being “Turing complete” is derived from this idea of a Turing machine. While we know that no machine has an infinitely large memory, we can use the basic theoretical framework to decide whether or not a machine can solve any computable sequence.")]),e._v(" "),a("p",[e._v("It is in this sense that computer languages are said to be Turing complete. A language is Turing complete if it can solve any mathematical problem made up of computable numbers.")]),e._v(" "),a("p",[e._v("As we noted above, Bitcoin Script is not Turing complete. This means that there are some problems and sequences that Bitcoin Script is not capable of solving.")]),e._v(" "),a("h2",{attrs:{id:"gas-based-smart-contract-platforms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-based-smart-contract-platforms","aria-hidden":"true"}},[e._v("#")]),e._v(" Gas-based Smart Contract Platforms")]),e._v(" "),a("p",[e._v("This is where the gas-based smart contract platforms of Ethereum, EOS, NEO, and many other blockchain platforms enter the picture. We will focus on Ethereum, as it is the originator of this model, and it is currently the most popular.")]),e._v(" "),a("p",[e._v("In December 2013, Vitalik Buterin released "),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/White-Paper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum’s first white paper."),a("OutboundLink")],1),e._v(" One of the major contributions Ethereum offered was a Turing complete programming language, called Solidity, that can be used to write smart contracts.")]),e._v(" "),a("p",[e._v("In fact, Buterin makes this perfectly clear on the first page of the white paper:")]),e._v(" "),a("p",[e._v("“What Ethereum intends to provide is a blockchain with a built-in fully fledged Turing-complete programming language that can be used to create 'contracts' that can be used to encode arbitrary state transition functions, allowing users to create any of the systems described above, as well as many others that we have not yet imagined, simply by writing up the logic in a few lines of code.”")]),e._v(" "),a("p",[e._v("In many ways, Ethereum's 'smart-contract' language is an improvement over Bitcoin Script. It allows “systems which automatically move digital assets according to arbitrary pre-specified rules”, and this opened up a new world of possibilities for blockchain technology.")]),e._v(" "),a("p",[e._v("At the same time, Turing completeness creates a few vulnerabilities. Let’s discuss.")]),e._v(" "),a("h2",{attrs:{id:"pros-and-cons-of-turing-completeness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pros-and-cons-of-turing-completeness","aria-hidden":"true"}},[e._v("#")]),e._v(" Pros and Cons of Turing Completeness")]),e._v(" "),a("p",[e._v("Any Turing complete programming language has the ability to create “loops.” A loop just means that a certain operation or set of commands can be written once but commanded to execute an arbitrary number of times.")]),e._v(" "),a("p",[e._v("In a language that is not Turing complete, like Bitcoin Script, loops are not available. A programmer needs to copy and paste the same piece of code "),a("code",[e._v("X")]),e._v(" number of times when he wants a computer to execute the operation "),a("code",[e._v("X")]),e._v(" times.")]),e._v(" "),a("p",[e._v("While loops are beneficial in some ways, they also present vulnerabilities. A programmer may accidentally write an infinite loop into a smart contract, unnecessarily burdening the network with an infinite number of meaningless operations to perform.")]),e._v(" "),a("p",[e._v("If malicious spammers want to attack an unprepared network that runs on a Turing-complete language, they can unleash a great number of smart contracts each bearing infinite loops. These pointless, endless operations can cause crippling congestion.")]),e._v(" "),a("p",[e._v("To avoid this possibility, Buterin introduced the idea of “gas” to the Ethereum network.")]),e._v(" "),a("h2",{attrs:{id:"gas-a-way-to-avoid-infinite-loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-a-way-to-avoid-infinite-loops","aria-hidden":"true"}},[e._v("#")]),e._v(" Gas: A Way to Avoid Infinite Loops")]),e._v(" "),a("p",[e._v("In short, users must pay a fee for every single operation that they want the network’s nodes to perform. These fees are simply called “gas.” Gas prices discourage malicious actors from spamming the network. It also encourages developers to write efficient contracts that require as few processes as possible.")]),e._v(" "),a("p",[e._v("Moreover, gas prevents an accidental infinite loop from wreaking havoc on the network, because once all the gas is used up, the network stops processing the contract. The loop runs out of gas and the nodes stop executing the loop.")]),e._v(" "),a("p",[e._v("An important benefit the gas-based platform brought to the world is that it broke the barrier for allowing developers to decentralize software execution in a p2p environment.")]),e._v(" "),a("p",[e._v("For example, in a non-decentralized p2p software application, users typically must rely on a centralized server or other impersonal third-party to maintain sanity in the execution of software instructions. Decentralized applications allow users to interact with software while relying not on a centralized server, but on the decentralized blockchain.")]),e._v(" "),a("h2",{attrs:{id:"the-problem-with-the-gas-based-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-problem-with-the-gas-based-model","aria-hidden":"true"}},[e._v("#")]),e._v(" The Problem with the Gas-based Model")]),e._v(" "),a("p",[e._v("While the concept of gas is a clever innovation, it also makes complex applications prohibitively expensive, and it hinders innovation and audience growth.")]),e._v(" "),a("p",[e._v("If a particular contract or dApp needs the network to perform a large number of operations to function as designed, it costs too much money to keep it running.")]),e._v(" "),a("p",[e._v("Take these two competing statements from Buterin by way of illustration. In January of 2014 he said, “...Our goal is to provide a platform for decentralized applications – an android of the cryptocurrency world, where all efforts can share a common set of APIs, trustless interactions and no compromises.” "),a("a",{attrs:{href:"https://www.coindesk.com/vitalik-ethereum-app-builders-screwed-scaling-limits/",target:"_blank",rel:"noopener noreferrer"}},[e._v("But later, in July 2018, Buterin had this to say:"),a("OutboundLink")],1),e._v(" “If you want to build a decentralized Uber and Lyft on top of an unscalable Ethereum, you are screwed. Full stop.”")]),e._v(" "),a("p",[e._v("The \"Uber\" reference is to a popular phone app where users can hail and share a freelance-taxi service. On average, this app processes 12 financial transactions per second. At the time of Buterin's statement, Ethereum can process 15 transactions per second. Let's make a rough analysis of the cost to maintain this one dApp on Ethereum.")]),e._v(" "),a("p",[e._v("The value of the gas fees for an Uber-like decentralized app would have to cover ~80% of the cost of maintaining the Ethereum blockchain ("),a("code",[e._v("(12 txs / 15 txs) * 100 = 80%")]),e._v("). Today (cr. 2018-2019), it costs about "),a("a",{attrs:{href:"http://www.crypto51.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("$150,000 USD per hour"),a("OutboundLink")],1),e._v(" to maintain the Ethereum hash rate. The dApp developer and their end-users would be responsible for 80% of this, so they would have to pay gas fees of at least $120,000 per hour, which translates to ~$30 per second.")]),e._v(" "),a("p",[e._v("Therefore, looking only at the costs, and not at the lack of space for multiple dApps, we begin to see the enormous flaws of the gas-based model. While existing large corporations and their customer bases may be able to afford this financial burn rate, it is difficult to conceive of a startup that can afford it. The ongoing gas fees to continually maintain the functionality of this dApp are simply too expensive.")]),e._v(" "),a("p",[e._v("All this is assuming that the dApp only processes one transaction per ride, per customer. If the dApp is instead a game that has a looping function, the gas fees can grow even more absurd.")]),e._v(" "),a("p",[e._v("Furthermore, all dApps on the Ethereum platform have to share the same gas, and the same blockchain, and this compounds the problem. If an existing business running a dApp on the platform becomes suddenly popular, the surge of people wanting to use the dApp must purchase gas, and this causes the price of gas to rapidly rise. The burst of activity can also cause the blockchain to grind to a halt.")]),e._v(" "),a("p",[e._v("While the spike in the price of gas can be advantageous for financial speculation, the spike is arguably terrible for many necessary blockchain use cases. For example, a startup business that wants to serve a new customer base using the same gas-based platform must now convince their potential customers to purchase the platform's gas at an unpredictably high price.")]),e._v(" "),a("p",[e._v("Until blockchain technology is capable of processing potentially billions, if not trillions, of transactions per second on a single blockchain, the gas-based blockchain platform is fundamentally flawed for today's market. The more popular a gas-based platform becomes, the more difficult, expensive, and prohibitive it is for businesses to develop on it, and for users to buy into it.")]),e._v(" "),a("p",[e._v("Having observed crucial flaws in the currently popular gas-based smart-contract platform, we are now prepared to turn to the smart-contract solution Komodo proposes.")]),e._v(" "),a("h2",{attrs:{id:"introducing-antara-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-antara-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Introducing Antara Modules")]),e._v(" "),a("p",[e._v("Recall that Satoshi Nakamoto's Bitcoin Script is not Turing complete. This choice was deliberate. Leaving Bitcoin Script in a simple form was a quicker, safer alternative to a Turing complete language. This is true because it removes the possibility of infinite loops clogging the Bitcoin network.")]),e._v(" "),a("p",[e._v("However, at the same time, the lack of Turing completeness also prevented smart-contract like functionality on Bitcoin-protocol based blockchains — until now.")]),e._v(" "),a("p",[e._v("Komodo now offers Antara Modules. These modules allow for the same functionalities found in smart contracts, and even more advanced features. This new technology is compatible with Bitcoin-protocol based blockchains, and this includes all Komodo Smart Chains.")]),e._v(" "),a("p",[e._v("Furthermore, Antara Modules gain more usefulness when combined with Komodo's unique design. Recall that Komodo is built not to require all developers and users to function on the main Komodo blockchain. Rather, Komodo empowers developers with their own independent blockchain, each secured with the hash rate of Bitcoin. This facilitates an interconnected network between all Smart Chains through Komodo's other technologies, such as atomic-swaps, cross-chain syncing, and more.")]),e._v(" "),a("p",[e._v("This combination of Komodo technologies overcomes the challenges of the currently popular, gas-based, single-blockchain platforms.")]),e._v(" "),a("p",[e._v("With Antara Modules, the developer can maintain interactivity with the Komodo ecosystem, while also being able to run on a private blockchain. Because the developer has the full blockchain all to themselves, they are able to safely occupy the full transaction capacity without fear of interruption by activity elsewhere in the ecosystem. Developers of highly active blockchains can even split their single blockchain into multiple blockchains, using the Antara framework.")]),e._v(" "),a("p",[e._v("Likewise, end-users of a blockchain service in the Komodo ecosystem need only purchase the currency of the developer's Smart Chain; there is no need to purchase KMD. Therefore, for the end-user, the price of participating in the developer's business is tied only to the design and success of the developer's blockchain software, and not to the unpredictability of the ecosystem at large.")]),e._v(" "),a("p",[e._v("In short, if you want to use blockchain technology to compete with the Uber taxi app, Komodo is the platform for you.")]),e._v(" "),a("h2",{attrs:{id:"antara-modules-are-based-on-utxo-technology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-modules-are-based-on-utxo-technology","aria-hidden":"true"}},[e._v("#")]),e._v(" Antara Modules are Based on Utxo Technology")]),e._v(" "),a("p",[e._v('Antara Modules function in a completely different manner from the popular gas-based model of other platforms. Before we can explain how Antara Modules work, we must first briefly explain the concept of an "unspent transaction", also called a "utxo," for short. Utxos are integral to a blockchain\'s functionality, but many users do not know they exist.')]),e._v(" "),a("p",[e._v("A utxo is simply a bill of value sitting in your digital wallet — much like the many small fiat dollar bills you may have sitting in your physical wallet. The collection of utxos in your digital wallet make up the total balance.")]),e._v(" "),a("p",[e._v("For example, a user could have in their digital wallet a utxo worth 1 KMD, another utxo worth 2 KMD, and another worth 7 KMD. Altogether, in the software interface the user would see that they have 10 KMD total. Most users would never know that they actually have three separate utxos that make up the full balance, as utxos are typically managed automatically by blockchain software.")]),e._v(" "),a("p",[e._v('When the user spends money, the blockchain software automatically splits the money they spend into new utxos. If our user desires to spend 6 KMD, the software splits the 7 KMD utxo into two pieces: a 6 KMD utxo is sent to the destination address, as the user instructed, and the remaining 1 KMD is returned to the user as "change."')]),e._v(" "),a("p",[e._v("The user now has a 1 KMD utxo, a 2 KMD utxo, and another 1 KMD utxo. The total that they see in their wallet is 4 KMD.")]),e._v(" "),a("h2",{attrs:{id:"antara-modules-utxo-based-smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-modules-utxo-based-smart-contracts","aria-hidden":"true"}},[e._v("#")]),e._v(" Antara Modules: Utxo-based Smart Contracts")]),e._v(" "),a("p",[e._v("Coming to this from a programmer's perspective, a utxo is a programmable object. As with many objects, it allows software to add and subtract properties from it, including properties that allow for Turing-complete programming. In Komodo, utxos allow us to create a smart-contract functionality that is dramatically cheaper to utilize, and more secure in practice; than the gas-based models of other platforms.")]),e._v(" "),a("p",[e._v("In its simplest form, an Antara Module locks a utxo in a publicly-known address and prevents it from being spent until a certain set of conditions are met. Once the conditions are fulfilled, the utxo is unlocked and sent to the appropriate address. The idea behind it really is that simple.")]),e._v(" "),a("p",[e._v("It is fundamentally different than the gas-based model. In the gas-based model, a user has a total balance and they instruct their blockchain software to execute a smart-contract either until the contract is complete, or their total balance is gone.")]),e._v(" "),a("p",[e._v("With Komodo's Antara Modules, a user locks a series of utxos in a contract with a set of instructions that must be met before the utxo can be sent to its final destination.")]),e._v(" "),a("p",[e._v("This is a dramatically more secure setup. Only the utxos that have been indicated as belonging to an instance of an Antara Module can be spent. This is different from the gas-based model, where a bug in the software can (and frequently does) allow a faulty smart contract to drain the full balance of a wallet.")]),e._v(" "),a("p",[e._v("Before diving any deeper into Antara Modules, we need to understand a few things about Bitcoin Scripts.")]),e._v(" "),a("h2",{attrs:{id:"how-antara-modules-interact-with-bitcoin-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-antara-modules-interact-with-bitcoin-script","aria-hidden":"true"}},[e._v("#")]),e._v(" How Antara Modules Interact with Bitcoin Script")]),e._v(" "),a("p",[e._v("There are several different ways to execute a Bitcoin payment. In particular, there are pay-to-pubkey payments, pay-to-pubkey-hash payments, and pay-to-script-hash payments. These three payment types represent the overwhelming majority of Bitcoin transactions, and each type of payment is limited in the possibilities it allows to the user and the developer.")]),e._v(" "),a("p",[e._v('Now, Komodo has implemented an additional type of payment script that designates a utxo as belonging to a specific instance of an Antara Module. In other words, this new payment script puts constraints on the utxo. The name of this new script is called a "CryptoCondition," and we explore the specifications of this script in later articles.')]),e._v(" "),a("h4",{attrs:{id:"antara-modules-maintain-scarcity-within-the-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-modules-maintain-scarcity-within-the-module","aria-hidden":"true"}},[e._v("#")]),e._v(" Antara Modules Maintain Scarcity Within the Module")]),e._v(" "),a("p",[e._v('Every Antara Module has its own unique code, called an "EVAL" code, and this keeps funds in one module separate from another, and separate from the main Smart Chain\'s coins.')]),e._v(" "),a("p",[e._v("When a user spends funds in a manner that links a utxo with an Antara Module, the utxo is locked to this EVAL code in the utxo-data structure.")]),e._v(" "),a("p",[e._v("This keeps the utxo associated with the Antara Module, and thus the utxo is not free to enter into another Antara Module unless the current module allows this behavior.")]),e._v(" "),a("h4",{attrs:{id:"a-user-has-a-unique-address-for-each-antara-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-user-has-a-unique-address-for-each-antara-module","aria-hidden":"true"}},[e._v("#")]),e._v(" A User Has a Unique Address for Each Antara Module")]),e._v(" "),a("p",[e._v("For each Antara Module, the user has a unique address that can only be used with funds created as a part of this module. This keeps funds that are created within an Antara Module separate from funds that are created in other Antara Modules. In this manner, there is never any confusion about where funds are sent.")]),e._v(" "),a("h4",{attrs:{id:"each-module-has-a-global-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#each-module-has-a-global-address","aria-hidden":"true"}},[e._v("#")]),e._v(" Each Module Has a Global Address")]),e._v(" "),a("p",[e._v("Each Antara Module also has a global address that is known and usable by everyone. Even the private key to this address is public.")]),e._v(" "),a("p",[e._v("Making the private key public allows users to interact with the module using lite-mode software (i.e. syncing the blockchain is not required). Also, the global address serves as a repository of information for all users within the module.")]),e._v(" "),a("p",[e._v("The global address allows all users to query the state of the module and discover current and past behavior.")]),e._v(" "),a("h4",{attrs:{id:"developers-set-the-rules-for-each-module-related-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developers-set-the-rules-for-each-module-related-transaction","aria-hidden":"true"}},[e._v("#")]),e._v(" Developers Set the Rules for Each Module-Related Transaction")]),e._v(" "),a("p",[e._v("At the same time, the funds within this module cannot be moved until all the conditions of the module are satisfied.")]),e._v(" "),a("p",[e._v("For example, the module can require that funds only be spent to a specific and approved address, as set in advance by a group of collaborating users. This is similar to the Bitcoin Lightning Network's intended effect, yet dramatically simpler in design.")]),e._v(" "),a("p",[e._v("With these rules in place, an Antara Module effectively becomes a miniature consensus mechanism. The module forces consensus for its participants, just like the master consensus mechanism of the Smart Chain.")]),e._v(" "),a("p",[e._v("Now let's take a closer look at the many advantages of Antara Modules.")]),e._v(" "),a("h2",{attrs:{id:"advantages-of-antara-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantages-of-antara-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Advantages Of Antara Modules")]),e._v(" "),a("h4",{attrs:{id:"access-to-established-and-turing-complete-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-to-established-and-turing-complete-languages","aria-hidden":"true"}},[e._v("#")]),e._v(" Access to Established and Turing Complete Languages")]),e._v(" "),a("p",[e._v("Antara Modules are hard-coded into the Komodo code base, which means they can be written in C and C++. They can also be written in any compiled programming language that can create a linkable library capable of calling and being called by C/C++ functions. In that sense, Komodo’s utxo-based contracts are language agnostic.")]),e._v(" "),a("p",[e._v("The C and C++ programming languages are widely understood, time-tested, and, perhaps most importantly, Turing complete. Thus, utxo-based smart contracts can be programmed to do anything that any other existing program or application is able to do.")]),e._v(" "),a("h4",{attrs:{id:"no-need-for-a-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-need-for-a-virtual-machine","aria-hidden":"true"}},[e._v("#")]),e._v(" No Need for a Virtual Machine")]),e._v(" "),a("p",[e._v("Because Antara Modules on Komodo run in the daemon, developers can avoid the limitations and hassles of having to run code in a virtual machine, as is the case with the many gas-based smart contract platforms. On Komodo, you have far more speed, flexibility, and power. This is made possible by our unique design of connecting independent blockchains together, rather than forcing all users to run on a layer-one main chain.")]),e._v(" "),a("h4",{attrs:{id:"utxos-are-more-secure-than-balance-based-programming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utxos-are-more-secure-than-balance-based-programming","aria-hidden":"true"}},[e._v("#")]),e._v(" Utxos are More Secure Than Balance-Based Programming")]),e._v(" "),a("p",[e._v("Utxo-based modules are more secure than balance-based smart contracts. This is true in several ways. For example, because Komodo’s modules are utxo-based, it is far more difficult, if not impossible, to use a module to flood the main chain's coin supply with illegitimate coins.")]),e._v(" "),a("p",[e._v("This is not the case with balance-based smart contracts. Because the smart contracts are linked to balances, rather than blockchain-enforced utxos, a malicious actor can manipulate balances to disastrous ends. We have seen this happen again and again and again.")]),e._v(" "),a("h4",{attrs:{id:"rpcs-make-module-consumption-easy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpcs-make-module-consumption-easy","aria-hidden":"true"}},[e._v("#")]),e._v(" RPCs Make Module Consumption Easy")]),e._v(" "),a("p",[e._v("Utxo-based smart contracts are also essentially an extension of the Bitcoin protocol, so a series of Remote Procedure Calls (RPCs) can be established. With an RPC, a normal developer can bring the functionality of an existing Antara Module into a foreign software environment with a simple command.")]),e._v(" "),a("p",[e._v("With many Antara Modules, a Graphic User Interface (GUI) can allow non-technical users to make use of the technology without needing to work through the command line. Eventually, once a large variety of RPC calls are available, a normal developer should be able to build decentralized software using RPC calls alone.")]),e._v(" "),a("h4",{attrs:{id:"instantaneous-confirmation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantaneous-confirmation","aria-hidden":"true"}},[e._v("#")]),e._v(" Instantaneous Confirmation")]),e._v(" "),a("p",[e._v("A challenge that many developers face in the blockchain industry is the aspect of creating software that must wait for decentralized consensus before the software's users can assume finality.")]),e._v(" "),a("p",[e._v("Antara Modules allow the developer to overcome this challenge. Antara Modules allow for zero-confirmation micro-payments. These micro-payments are secured by Komodo’s delayed Proof of Work security mechanism. The payments are fully peer-to-peer, and are considered confirmed as soon as they are initiated.")]),e._v(" "),a("h4",{attrs:{id:"no-need-for-gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-need-for-gas","aria-hidden":"true"}},[e._v("#")]),e._v(" No Need for Gas")]),e._v(" "),a("p",[e._v("Antara Modules do not require a shared “gas” coin for every process executed. Recall that the smart contracts and dApps built on Ethereum must pay in Ethereum's ecosystem-wide gas (Ether) for every single step of progress. The tremendous expense placed on common users and developers makes complex blockchain-based software nigh impossible.")]),e._v(" "),a("p",[e._v("Komodo, on the other hand, is far more scalable as the cost of blockchain processing is tied only to an individual Smart Chain's native coin, and not to the main Komodo coin (KMD) that ties the ecosystem together.")]),e._v(" "),a("h2",{attrs:{id:"difficult-to-create-but-easy-to-reuse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#difficult-to-create-but-easy-to-reuse","aria-hidden":"true"}},[e._v("#")]),e._v(" Difficult to Create, but Easy to Reuse")]),e._v(" "),a("p",[e._v("Creating a new Antara Module is more difficult than creating a new smart contract on a gas-based platform. However, the functionality of a module need only be programmed once, and then other users in the Komodo ecosystem can reuse the finished module.")]),e._v(" "),a("p",[e._v("Building and designing a new Antara Module requires a strong proficiency in blockchain technology and in advanced programming techniques. The module must be stable and secure enough to withstand the pressure of the wild-open Internet.")]),e._v(" "),a("p",[e._v("However, once created, other users may rely on the module's RPC commands to utilize the module's functionality without having to understand how the module functions.")]),e._v(" "),a("p",[e._v("For example, consider how the MuSig Antara Module serves non-blockchain developers. This module relies on Antara to enable a complicated technology called Schnorr Signatures, which are a new method for creating multi-signature blockchain transactions. The RPC's for this module allow any developer of essentially any skill level to adopt the MuSig functionality into the developer's software without having to gain an in-depth understanding of Schnorr technology.")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/musig.html#introduction"}},[e._v("See the MuSig module documentation here")])],1),e._v(" "),a("p",[e._v("As the library of available modules grows, so too do the advantages to the many types of developers in the Komodo ecosystem. For this reason, members of the Komodo community express gratitude to the more experienced blockchain developers who build and share Antara Modules via open-source ideology.")]),e._v(" "),a("h2",{attrs:{id:"komodo-is-developing-and-testing-default-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komodo-is-developing-and-testing-default-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" Komodo is Developing and Testing Default Modules")]),e._v(" "),a("p",[e._v("The Komodo team has already created many Antara Modules that are freely available for all developers in the Komodo ecosystem. The team is also exhaustively testing the Antara Modules' code prior to implementation, to ensure a quality and bug-free environment.")]),e._v(" "),a("p",[e._v("Once complete, the modules are embedded into the default source code of a Komodo Smart Chain. This technology is provided using open-source philosophy, and thus anyone can verify the code of the modules.")]),e._v(" "),a("p",[e._v("If you would like to have an Antara Module available that is not already in the code base, submit a Pull Request to the Komodo repository on Github with the details of your desired module. If accepted, Komodo will write the module and make it available to all users during our next hard fork. This occurs on an annual or semi-annual basis.")]),e._v(" "),a("p",[e._v("To our knowledge, no other blockchain project has successfully implemented utxo-based contracts on a live chain. Considering atomic swaps, on-demand scalability, cross-chain interoperability syncing, and utxo-based modules, the Komodo team continues to develop technologies at the bleeding edge of the blockchain industry.")]),e._v(" "),a("p",[e._v("Join us for Part II of this discussion. Part II delves a little deeper into the methods of Antara Module functionality, and continues preparing the developer for Antara Module utilization.")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-tutorials/overview-of-antara-modules-part-ii.html"}},[a("b",[e._v("Link to Part II of an Overview of Antara Modules")])])],1)])},[],!1,null,null,null);t.default=n.exports}}]);