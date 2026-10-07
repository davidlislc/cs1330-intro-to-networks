# cs1330 network layer

**1. What are the four basic operations performed by the network layer?**

- A) Addressing, Encapsulation, Routing, and De-encapsulation
- B) Segmentation, Sequencing, Flow Control, and Error Recovery
- C) Framing, Error Detection, Media Access, and Physical Addressing
- D) Encryption, Compression, Session Management, and Translation

**2. Which two protocols are the principal communication protocols at the network layer?**

- A) TCP and UDP
- B) Ethernet and Wi-Fi
- C) IPv4 and IPv6
- D) HTTP and HTTPS

**3. What is the primary function of IP encapsulation?**

- A) To compress transport layer segments
- B) To wrap a transport layer segment in a network layer packet
- C) To establish a secure connection between hosts
- D) To convert digital signals into analog signals

**4. What happens to the IP addressing as a packet traverses from its source to its destination?**

- A) It changes at every router
- B) It is encrypted by every Layer 3 device
- C) It does not change
- D) The destination address is removed

**5. Which characteristic of IP means it does not establish a connection before sending data?**

- A) Best Effort
- B) Media Independent
- C) Connectionless
- D) Scalable

**6. What is meant by the 'Best Effort' characteristic of IP?**

- A) IP guarantees that all packets will reach the destination
- B) IP does not guarantee delivery and does not resend lost data
- C) IP uses the fastest possible media to send data
- D) IP provides synchronization and acknowledgments

**7. What does 'Media Independent' mean in the context of the network layer?**

- A) IP can only run over copper cables
- B) IP requires specific hardware for wireless signals
- C) IP can be sent over various media types like copper, fiber, or wireless
- D) IP functions independently of the operating system

**8. Which protocol is typically used at the transport layer to provide connection-oriented traffic that IP lacks?**

- A) UDP
- B) TCP
- C) ICMP
- D) ARP

**9. What is the Maximum Transmission Unit (MTU)?**

- A) The maximum speed of a network link
- B) The total time a packet can live on the network
- C) The maximum size of the PDU that can be communicated
- D) The number of routers a packet can cross

**10. Which statement regarding fragmentation is true according to the text?**

- A) IPv6 fragments packets more efficiently than IPv4
- B) Fragmentation improves network speed and reduces latency
- C) IPv6 does not fragment packets
- D) Fragmentation is performed at the Physical layer

**11. What are the two most important fields in the IPv4 header?**

- A) Version and TTL
- B) Protocol and Header Checksum
- C) Source and Destination IP Addresses
- D) Flags and Fragment Offset

**12. What is the purpose of the 'Time to Live' (TTL) field in an IPv4 header?**

- A) To track the total time the packet takes to reach the destination
- B) To prevent packets from looping indefinitely by discarding them when the count reaches zero
- C) To determine the priority of the packet for Quality of Service
- D) To record the time the packet was sent

**13. What is the size of an IPv4 address?**

- A) 16 bits
- B) 32 bits
- C) 64 bits
- D) 128 bits

**14. The IPv4 'Protocol' field (8 bits) is used to identify what?**

- A) The version of IP being used
- B) The hardware manufacturer of the router
- C) The next-level protocol like TCP or UDP in the data portion
- D) The type of media being used at Layer 1

**15. What is the minimum length of an IPv4 header?**

- A) 10 bytes
- B) 20 bytes
- C) 40 bytes
- D) 60 bytes

**16. Which field is used to detect corruption in the IPv4 header?**

- A) Identification
- B) Differentiated Services
- C) Header Checksum
- D) Fragment Offset

**17. In the context of IPv4 header fields, what does the 'Differentiated Services' (DS) field provide?**

- A) Security and encryption
- B) Quality of Service (QoS)
- C) Fragmentation control
- D) Routing table updates

**18. What happens during the 'De-encapsulation' process at the destination host?**

- A) The host adds a header to the data
- B) The host checks the IP header and then removes it to pass the segment to Layer 4
- C) The host fragments the packet into smaller units
- D) The host changes the source IP address

**19. Which field in the IPv4 header prevents a packet from being fragmented if set?**

- A) More Fragments (MF) flag
- B) Don't Fragment (DF) flag
- C) Time to Live (TTL)
- D) Version

**20. How are IPv4 packet headers read in diagrams?**

- A) Right to left, 8 bytes per line
- B) Left to right, 4 bytes per line
- C) Top to bottom, 1 byte per line
- D) Diagonally, 2 bytes per line

