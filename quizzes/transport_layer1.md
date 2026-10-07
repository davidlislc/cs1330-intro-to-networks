# transport layer1

**1. What is the primary responsibility of the Transport Layer?**

- A) Routing packets across different networks
- B) Defining electrical and physical specifications for devices
- C) Logical communication between processes running on different hosts
- D) Managing physical hardware addresses

**2. Where are transport layer protocols implemented?**

- A) Network routers
- B) Core network switches
- C) End systems (hosts)
- D) Physical cables

**3. What does the sender do with application messages at the transport layer?**

- A) Encrypts them for security
- B) Breaks them into segments and passes them to the network layer
- C) Converts them into bits for physical transmission
- D) Determines the best path to the destination

**4. How does the receiver handle segments at the transport layer?**

- A) Discards them after reading
- B) Reassembles segments into messages and passes them to the application layer
- C) Routes them to the next host
- D) Checks for physical hardware errors

**5. Which of the following describes the 'Network Layer' in contrast to the Transport Layer?**

- A) Communication between processes
- B) Logical communication between hosts
- C) Application-specific data formatting
- D) Session management

**6. What are the two main transport protocols used in the Internet?**

- A) HTTP and FTP
- B) IP and ICMP
- C) TCP and UDP
- D) Ethernet and Wi-Fi

**7. Which service is provided by UDP?**

- A) Congestion control
- B) Flow control
- C) Unreliable, unordered delivery
- D) Connection setup

**8. TCP provides which of the following services?**

- A) Delay guarantees
- B) Bandwidth guarantees
- C) Reliable, in-order delivery
- D) Unordered packet delivery

**9. What is 'Multiplexing' at the transport layer sender?**

- A) Dividing one message into multiple segments
- B) Handling data from multiple sockets and adding transport headers
- C) Sending data to multiple hosts simultaneously
- D) Combining multiple IP addresses into one

**10. What is 'Demultiplexing' at the transport layer receiver?**

- A) Delivering received segments to the correct socket
- B) Choosing the best network path
- C) Translating URLs to IP addresses
- D) Checking for bit errors in the physical layer

**11. How is a UDP socket identified during demultiplexing?**

- A) Source IP and Source Port only
- B) Destination IP and Destination Port only
- C) A 4-tuple of Source and Destination IPs/Ports
- D) MAC address and Port number

**12. Which values are used to identify a TCP socket (the 4-tuple)?**

- A) Source IP, Source Port, Dest IP, Dest Port
- B) Source MAC, Dest MAC, Protocol ID, TTL
- C) Sequence Number, ACK Number, Window Size, Port
- D) Application ID, Hostname, Port, Protocol

**13. Why would an application use UDP instead of TCP?**

- A) To ensure no data is lost
- B) To avoid connection establishment delay
- C) To automatically handle network congestion
- D) To guarantee in-order delivery of segments

**14. Which common application typically uses UDP?**

- A) HTTP (Web)
- B) SMTP (Email)
- C) DNS
- D) Telnet

**15. What is the purpose of the UDP checksum?**

- A) To correct bit errors automatically
- B) To detect 'errors' (flipped bits) in the transmitted segment
- C) To route the segment to the correct destination
- D) To identify the application process

**16. What happens if a UDP checksum detects an error at the receiver?**

- A) The receiver requests a retransmission
- B) The segment is fixed using parity bits
- C) The segment is discarded or passed to the app with a warning
- D) The sender is notified to slow down

**17. UDP is described as 'connectionless'. What does this mean?**

- A) It cannot connect to the internet
- B) There is no handshaking between sender and receiver
- C) It only works on local area networks
- D) It does not use IP addresses

**18. In the transport layer segment structure, how many bits are typically allocated for the Source Port Number?**

- A) 8 bits
- B) 16 bits
- C) 32 bits
- D) 64 bits

**19. Which of these is NOT a feature of UDP?**

- A) Small header size
- B) No congestion control
- C) Connection state management at the server
- D) Best effort delivery

**20. If two different TCP segments have different source IP addresses but the same destination port, how are they handled?**

- A) They are directed to the same socket
- B) They are directed to two different sockets
- C) The second segment is discarded as a duplicate
- D) They are combined into a single message

