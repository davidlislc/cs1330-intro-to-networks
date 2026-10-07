# transport layer2

**1. What are the two major components that make up a TCP sequence number?**

- A) The segment number and the total window size
- B) The byte-stream number of the first data byte in the segment
- C) The IP address and the port number combined
- D) The total number of segments sent in the session

**2. In TCP, what does an Acknowledgement (ACK) number represent?**

- A) The sequence number of the last byte successfully received
- B) The total number of bytes received in the current session
- C) The sequence number of the next byte expected from the other side
- D) A random number used to verify the connection

**3. How does TCP handle a cumulative acknowledgement?**

- A) It acknowledges each individual packet with a unique ID
- B) It acknowledges all bytes up to, but not including, the 'next byte expected' number
- C) It only acknowledges the very last packet of a file transfer
- D) It sends one acknowledgement for every ten segments received

**4. What is the primary purpose of the 'EstimatedRTT' calculation in TCP?**

- A) To determine the maximum speed of the network interface
- B) To calculate a weighted moving average of the Round Trip Time to set timeout values
- C) To negotiate the window size between the client and server
- D) To count how many hops a packet takes to reach the destination

**5. Which event triggers a retransmission in TCP's reliable data transfer?**

- A) The receiver sending a NAK (Negative Acknowledgement)
- B) The expiration of a retransmission timer or receiving triple duplicate ACKs
- C) A change in the source IP address
- D) The completion of the three-way handshake

**6. What is 'Fast Retransmit' in TCP?**

- A) Sending data before the connection is fully established
- B) Retransmitting a segment before the timer expires if triple duplicate ACKs are received
- C) Increasing the transmission speed when the network is clear
- D) Using UDP headers to bypass TCP congestion control

**7. TCP Flow Control is implemented to prevent which scenario?**

- A) The sender overwhelming the network routers
- B) The sender overwhelming the receiver's buffer
- C) Unauthorized users from intercepting the data stream
- D) The receiver from sending too many acknowledgements

**8. What does the 'rwnd' (Receive Window) value in the TCP header indicate?**

- A) The total amount of RAM available on the host machine
- B) The amount of free space remaining in the receiver's buffer
- C) The maximum speed of the receiver's processor
- D) The number of duplicate ACKs currently being tracked

**9. What are the three steps in the TCP Three-Way Handshake?**

- A) SYN, SYN-ACK, ACK
- B) HELLO, WAIT, GO
- C) REQUEST, VERIFY, CONNECT
- D) FIN, FIN-ACK, ACK

**10. During the TCP connection closing process, which flag is used to initiate the teardown?**

- A) RST (Reset)
- B) PSH (Push)
- C) FIN (Finish)
- D) URG (Urgent)

**11. Congestion control differs from flow control because congestion control is concerned with:**

- A) The receiver's buffer capacity
- B) The capacity of the network infrastructure (routers/links)
- C) The security of the data transmission
- D) The specific application layer protocol being used

**12. What is the 'Slow Start' phase in TCP Congestion Control?**

- A) When the sender limits speed because the battery is low
- B) The initial phase where cwnd starts at 1 MSS and doubles every RTT
- C) The process of waiting for a user to log in
- D) A delay added to the first packet to check for firewall rules

**13. In the Congestion Avoidance phase, how does the Congestion Window (cwnd) typically grow?**

- A) It doubles every Round Trip Time (RTT)
- B) It increases linearly by 1 MSS every Round Trip Time (RTT)
- C) It stays at a fixed size determined during the handshake
- D) It decreases by half every time an ACK is received

**14. What happens to the cwnd when a loss event is detected via a timeout in TCP Reno?**

- A) It stays the same size
- B) It is cut in half
- C) It is reset to 1 MSS
- D) It increases to the maximum buffer size

**15. What is the purpose of the 'ssthresh' (Slow Start Threshold) variable?**

- A) To define the maximum number of ports a server can open
- B) To indicate the cwnd level where TCP should switch from Slow Start to Congestion Avoidance
- C) To set the minimum time a connection must remain idle
- D) To limit the number of users connected to a single socket

**16. TCP is described as 'Full Duplex'. What does this mean?**

- A) Two separate cables are required for communication
- B) Bi-directional data flow is possible on the same connection
- C) Data can only be sent in one direction at a time
- D) The connection is always twice as fast as UDP

**17. Which field in the TCP header is used to signal that the Acknowledgement field is valid?**

- A) The SYN bit
- B) The ACK bit
- C) The Checksum field
- D) The Sequence Number

**18. What is the MSS (Maximum Segment Size)?**

- A) The maximum size of the application layer message
- B) The maximum amount of data that can be grabbed and placed into a single segment
- C) The total size of the IP packet including headers
- D) The maximum number of segments that can be sent in one second

**19. In the context of congestion control, what does 'Additive Increase, Multiplicative Decrease' (AIMD) mean?**

- A) Double the speed on success, subtract 10 on failure
- B) Increase cwnd by 1 MSS per RTT, and halve cwnd on a triple duplicate ACK loss
- C) Add a fixed delay to every packet, and multiply the timeout by two
- D) Increase the number of ports used, and decrease the packet size

**20. Why is the TCP Three-Way Handshake necessary?**

- A) To encrypt the data before it leaves the host
- B) To ensure both sender and receiver are ready and to agree on initial sequence numbers
- C) To find the fastest path through the internet routers
- D) To verify that the user has a valid subscription

