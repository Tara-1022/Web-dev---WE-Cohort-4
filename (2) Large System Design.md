## 26-02-24
# Encryption

Problem at the backdrop
- Abdul and Bhim, star crossed lovers, want to send messages but Man-in-the-Middle
- look at the insides of API

Caesar Cipher:
- Simplest symmetric encryption (if we shift by some number other than 13)
- Param - number to be shifted by
- i.e, official Caeser has the key 13
- Security? Pretty bad. Only as secure as knowing a number 1-26. Can be broken by iterating through numbers

AES or Rijndale
- more convolutional method.
- `ciphertext = transform(text, key)`, `plaintext = inverse_transform(cipher_text, key)`
- uses matrix\* transformations (\* => reversible)
- uses a secret key
- more secure - significant task to guess key

What about a passphrase?
- Kerchkoff - a cryptosystem must be secure even if everything about the system except key is public knowledge
- Doors of Durin - bad; arcane knowledge accessible. What if the dwarves used hashing?

Hashing
- function such that 
	- data1 = data2 => hash(data1) must be = hash(data2)
	- data1 != data2 => hash(data1) very preferably != hash(data2) (avoid collisions) - effect of having a smaller range than domain
- one way, not easily invertible
- bad hash - number characters, open door if sum is 71 (easy to fool, many collision)
- useless unless password is strong though - if you broke into a db and saw multiple similar password, you could guess at the hashed value.
- Rainbow tables can be created based on popular passwords - using statistics. so,

Salt
- Beat statistics. Generate random string & add to password before hashing a common password
- completely random. Salt stored in database - not harmful to be seen
- not worth it for someone to figure out salts
- **bCrypt/Blowfish** - 22 character salt + full hash

The trouble with Symmetric encryption - key distribution
- If Abdul is an investigative journalist? Informant must be anonymous. 
- often, the first contact with any system is going to be anonymous
- you have to deal with keeping anonymity on internet

Asymmetric encryption! 
- abdul locks the box. sends to bhim who locks with a second one. abdul unlocks his end and then bhim unlocks his to get the content
- pretty expensive
- process to generate a pair of keys. one to encrypt and one to decrypt
- abdul gives the public key, you encrypt it into a token, abdul decrypts using his private key (never shared)
- doesn't matter who gets the public key. abdul is not scared of spam
- this is more like adbul sending out locks and keeping the key 

Think about the possible attack vectors
- Enter a system unauthorised
- read a message you're not allowed to
- modify/replace a message in transit (identity theft of sender or receiver, shooting the mailman)

How do you know that someone is the true sender? message is not sent by dwight
- *Signing* 
- what kinds of documents need signatures?
Needs
- good hashing function that generates a compact hash (md5) (its param is shared) - small changes in input have large changes in output - follows rules set by randomised key, that are irreversible.
- good asymmetric encryption technique (RSA)
Steps
- generate an md5 hash of  your message 
- generate an RSA key pair
- messaging
	- encrypt the hash of the message using priv_key to et a sign
	- if the decrypted sign (using pub_key) is exactly the hashed message, it has not been changed
	- message is sent unhashed with sign and public key
- if hacker receives the triples? they get the message, the output and one of the inputs of RSA
- RSA should be good at keeping the private key safe given all that info - Kerchkoff

This `signing` underpins JWTs. 
- header
- payload
- *signature*
can be signed with RSA, HMAC, base64 encoding - makes it possible to sign via hashing or RSA
- RSA used to verify identity. identity providers maintain a list of public keys for easy verification

OpenID connect specifications
 - aruvi.com / \_known_endpoints_ - outsource password checking, authentication to identify provider using JWT standard

RSA used for two applications - complementary tasks
- to talk to Abdul secretly
- to make sure Abdul is Abdul

task of RSA key generation (pair generation)
- find a combo `e, d, m` such that $(m^e)^d = m(mod n)$ the remainder given by m is the same as the remainder of $(m^e)^d$ by n. provable by euclid's algo and other generalisations - see derivation on RSA wiki
- relatively modern algos whose large prime numbers p, q
	- compute p*\q - this is n
	- Totient function = lcm(p-1, q-1)
	- choose a convenient e
	- choose a convenient d
	- (if d is chosen and used to calculate e, decryption is easier)
- e, d interchangable - public key and private key generalisable without loss of generality due to laws of exponentiation

Think about the HTTPS handshake
- info sent must be encrypted. Symmetric keys must be exchanged - once keys are exchanged, symmetric is amazing
- Sequence of ops:
	- client (browser) is server's public key and certificate. Certificate - proof of identity - given by GeoTrust. signed by GeoTust's private key. Browser verifies certificates using public key. GT locks all certficates & gives browsers the key to check that the lock is right. after decrypting the encryption that could only have been created by GeoTrust, the browser reads 'Google certificate'. The certificate is refreshed after a certain validity period. What stops my broswer from relaying the certificate to pretend to be google? Combination of the need to be registered with DNS, respond to request, and have the cert (maybe) adds some security
	![image](images/Screenshot%202024-02-26%20205835.png)
	![image](images/Screenshot%202024-02-26%20205903.png)
	
	- provide client details encrypted with public key of server. Ask for credentials for this session
	- server then decrypts using private key. 
	- client creates a symmetric encryption (secret key) for this session.
	- incognito browser would ensure to kill the session when the window is closed
- session ends if anything sus happens or if session actually ends
- asymmetric encryption for trust and symmetric encryption for secrecy
## OAuth
allows one to register a third party app with your account, granting limited access. third party is main one's client in this case
- provide a way for LeafScroll (3rd party) to authenticate itself for access to Podhaar (account) to access content from the app

Auth stands for authorisation, not authentication. uses JWTs as standard token format.

OpenIDConnect - provides authentication using similar mechanisms

**Note:** in cryptography, time is of crucial concern. Some things are time sensitive. However, since time is the main safeguard, efficient quantum computing can destroy bets of irreversibility

![comic](images/Comic_2024-02-26%20210839.png)

SSH
- means to communicates, remote login & authenticate
# REST
- set of constraints a good API must obey
- Stateless - each request must carry all info, including authentication details (if sensitive resource is being accessed). Does not keep track of sessions or global state. Each request is self contained. Advantage - scalability & parallelisability
- implies idempotent requests - making the request 1000 times is same as making it once - independent result each time

>Look up
- [ ] *the SSH handshake* - how does it compare to HTTPS
- [ ] What stops my browser from relaying the certificate to impersonate google? - replay attacks
- [ ] function-as-a-server
- [ ] nodempotence
- [ ] CAP theorem
- [ ] Can two public keys have a common private key? (No)