# https

**1. What is HTTPS composed of according to the networking stack overview?**

- A) HTTP layered over UDP
- B) HTTP layered over TLS
- C) FTP layered over TCP
- D) DNS layered over TLS

**2. Which protocol is responsible for ensuring reliable delivery in the HTTPS stack?**

- A) TLS
- B) IP
- C) TCP
- D) HTTP

**3. What is the first step in the breakdown of an HTTPS connection?**

- A) TLS Handshake
- B) HTTP Request
- C) DNS Lookup
- D) TCP Handshake

**4. During the TCP handshake, what packet does the server send back after receiving a SYN?**

- A) ACK
- B) FIN
- C) SYN-ACK
- D) ClientHello

**5. What is the primary purpose of the TLS Handshake?**

- A) To establish physical layer connectivity
- B) To negotiate encryption parameters and authenticate the server
- C) To route packets across the internet
- D) To compress application data

**6. Which message starts the TLS negotiation process?**

- A) ServerHello
- B) TCP SYN
- C) ClientHello
- D) ChangeCipherSpec

**7. What information is typically included in a ClientHello message?**

- A) Server's digital certificate
- B) Supported TLS versions and cipher suites
- C) The final encrypted HTTP response
- D) The server's IP address

**8. How does a server prove its identity to a client during the TLS handshake?**

- A) By sending its digital certificate (usually X.509)
- B) By sending a TCP ACK
- C) By sending a plaintext password
- D) By sending a SYN-ACK packet

**9. At what point is the secure encrypted channel officially established?**

- A) After the TCP Handshake
- B) After the Client sends a SYN
- C) After the TLS Handshake result
- D) After the first HTTP GET request

**10. What does the 'ChangeCipherSpec' message indicate?**

- A) The connection is closing
- B) Both sides are switching to encrypted communication
- C) The server needs a new IP address
- D) The TCP window size has changed

**11. In the TLS handshake, what is used to verify that the handshake was successful and untampered?**

- A) A hashed summary of the handshake (Finished message)
- B) The server's MAC address
- C) The TCP sequence number
- D) A ClientHello retry

**12. Which layer does the actual HTTP request (like GET /index.html) occur in?**

- A) Transport Layer
- B) Application Layer data over TLS
- C) Network Layer
- D) Data Link Layer

**13. What tool is suggested in the slides to inspect TLS handshakes and network traffic?**

- A) Visual Studio
- B) Wireshark
- C) Adobe Reader
- D) PowerPoint

**14. Which of the following is NOT a core feature provided by TLS?**

- A) Encryption
- B) Integrity
- C) Authentication
- D) Physical routing of cables

**15. What is the correct order of the high-level 'recipe' for HTTPS?**

- A) HTTP Request -> TCP Handshake -> TLS Handshake
- B) TLS Handshake -> TCP Handshake -> HTTP Request
- C) TCP Handshake -> TLS Handshake -> HTTP Request over TLS
- D) TCP Handshake -> HTTP Request -> TLS Handshake

