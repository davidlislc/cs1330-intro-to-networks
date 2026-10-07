# ethernet switching

**1. At which OSI layers does Ethernet operate?**

- A) Physical and Data Link layers
- B) Network and Transport layers
- C) Data Link and Network layers
- D) Application and Presentation layers

**2. Which sublayer is responsible for identifying which network layer protocol is used for a frame?**

- A) MAC Sublayer
- B) LLC Sublayer
- C) Physical Sublayer
- D) Network Sublayer

**3. What is the primary responsibility of the MAC sublayer?**

- A) Routing packets between different networks
- B) Data encapsulation and media access control
- C) End-to-end flow control
- D) Physical cable signaling

**4. Which field in the Ethernet frame is used for error detection?**

- A) Preamble
- B) SFD
- C) FCS
- D) OUI

**5. What is the minimum size of an Ethernet frame (excluding the preamble and SFD)?**

- A) 46 bytes
- B) 64 bytes
- C) 128 bytes
- D) 1518 bytes

**6. What is a frame called if its size is less than 64 bytes?**

- A) Jumbo frame
- B) Baby giant frame
- C) Collision fragment or runt frame
- D) Unicast frame

**7. How many bits are in an Ethernet MAC address?**

- A) 24 bits
- B) 32 bits
- C) 48 bits
- D) 64 bits

**8. What does 'OUI' stand for in a MAC address?**

- A) Operational User Identification
- B) Organizationally Unique Identifier
- C) Original User Index
- D) Ordered Uniform Identity

**9. What does a NIC do when it receives a frame and the destination MAC address does not match its own?**

- A) Broadcasts it to all other ports
- B) Passes it to the Network layer
- C) Discards the frame
- D) Stores it in the CAM table

**10. Which protocol is used to determine the destination MAC address for an IPv4 address?**

- A) ICMP
- B) DNS
- C) ARP
- D) ND

**11. What is the destination MAC address for an Ethernet broadcast frame?**

- A) 01-00-5E-00-00-00
- B) FF-FF-FF-FF-FF-FF
- C) 00-00-00-00-00-00
- D) 33-33-00-00-00-00

**12. Which destination MAC address prefix is used for IPv6 multicast packets?**

- A) 01-00-5E
- B) FF-FF
- C) 33-33
- D) AA-AA

**13. On what basis does a Layer 2 switch make its forwarding decisions?**

- A) Source IP addresses
- B) Destination IP addresses
- C) Destination MAC addresses
- D) TCP port numbers

**14. What is the state of the MAC address table when a switch is first turned on?**

- A) It is pre-populated with gateway addresses
- B) It is empty
- C) It contains all broadcast addresses
- D) It contains the OUI of the manufacturer

**15. How does a switch learn new MAC addresses?**

- A) By examining the destination MAC address of incoming frames
- B) By querying a DHCP server
- C) By examining the source MAC address of incoming frames
- D) By broadcasting an ARP request

**16. What is the default refresh timer for an entry in a switch's MAC address table?**

- A) 30 seconds
- B) 1 minute
- C) 5 minutes
- D) 10 minutes

**17. What happens if a switch receives a unicast frame and the destination MAC address is not in its table?**

- A) The switch drops the frame
- B) The switch forwards it out all ports except the incoming port
- C) The switch stores it until the address is learned
- D) The switch sends an ICMP error message

**18. What is a frame called when a switch floods it because the destination MAC is missing from the table?**

- A) Broadcast
- B) Multicast
- C) Unknown unicast
- D) Runt frame

**19. What is another common name for a switch's MAC address table?**

- A) Routing table
- B) ARP cache
- C) CAM table
- D) NAT table

**20. What action does a switch take if it receives a broadcast frame?**

- A) Forwards it to the router only
- B) Floods it out all ports except the incoming port
- C) Filters it and sends it to a single port
- D) Drops it immediately

