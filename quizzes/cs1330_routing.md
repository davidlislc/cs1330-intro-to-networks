# cs1330 routing

**1. What is the primary reason for the development of IPv6?**

- A) To increase network latency for security
- B) IPv4 address depletion
- C) To mandate the use of NAT
- D) To increase the complexity of network headers

**2. How many bits are used in an IPv6 address?**

- A) 32 bits
- B) 64 bits
- C) 128 bits
- D) 256 bits

**3. Which field was removed from the IPv4 header when designing the IPv6 header to improve performance?**

- A) Version
- B) Hop Limit
- C) Header Checksum
- D) Source Address

**4. What is the fixed length of the IPv6 packet header?**

- A) 20 Bytes
- B) 40 Bytes
- C) 60 Bytes
- D) 80 Bytes

**5. Which IPv6 header field is used to inform devices to handle identical packets in the same way?**

- A) Traffic Class
- B) Next Header
- C) Flow Label
- D) Payload Length

**6. What is the IPv6 equivalent of the IPv4 'Time to Live' (TTL) field?**

- A) Next Header
- B) Hop Limit
- C) Flow Label
- D) Traffic Class

**7. Approximately how many addresses are available in the IPv6 address space?**

- A) 4 billion
- B) 340 trillion
- C) 340 undecillion
- D) 1 quadrillion

**8. Which mechanism was created to extend the life of IPv4 but caused a lack of end-to-end connectivity?**

- A) OSPF
- B) Private addressing and NAT
- C) DHCPv6
- D) Static Routing

**9. What is the IPv6 loopback address (the address for 'itself')?**

- A) 127.0.0.1
- B) ::1
- C) 255.255.255.255
- D) fe80::1

**10. How does an IPv4 source device determine if a destination is local or remote?**

- A) It uses Router Solicitation
- B) It checks the Flow Label
- C) It uses its own IP address, subnet mask, and the destination IP
- D) It queries the default gateway immediately

**11. Where does a host forward traffic if the destination is on a remote network?**

- A) To the loopback address
- B) To the default gateway
- C) Directly to the remote host via Layer 2
- D) To the nearest switch

**12. Which device can typically serve as a default gateway?**

- A) A Layer 2 hub
- B) An unmanaged switch
- C) A router or Layer 3 switch
- D) Any host on the network

**13. How does an IPv6 host typically learn about its default gateway?**

- A) Through NAT translation
- B) Router Solicitation (RS) or manual configuration
- C) By checking the 127.0.0.1 address
- D) By querying the Header Checksum

**14. What happens if a device has a 'bad' or missing default gateway?**

- A) It can only send traffic to remote networks
- B) Traffic will not be able to leave the local LAN
- C) The router will automatically fix the configuration
- D) It will use the Flow Label to find a new path

**15. Which type of route is automatically added to a routing table when an interface is active?**

- A) Static route
- B) Remote route
- C) Directly connected route
- D) Default route

**16. What is a characteristic of static routing?**

- A) It automatically discovers new networks
- B) It must be configured and adjusted manually by an administrator
- C) It is best for large, redundant networks
- D) It uses protocols like OSPF to share information

**17. What is the purpose of a 'Default Route' in a router?**

- A) To block all incoming traffic
- B) To forward traffic when there is no specific match in the routing table
- C) To connect only to directly connected networks
- D) To assign IPv6 addresses to hosts

**18. Which of these is an advantage of dynamic routing?**

- A) Requires manual updates for every topology change
- B) It is only used for local LAN traffic
- C) It can find new best paths automatically when a topology changes
- D) It eliminates the need for a routing table

**19. In the IPv6 header, what does the 'Next Header' field identify?**

- A) The next router in the path
- B) The next level protocol (e.g., TCP, UDP, ICMP)
- C) The size of the source address
- D) The total number of hops remaining

**20. Which 4-bit value represents the Version field in an IPv6 header?**

- A) 0100
- B) 0110
- C) 1010
- D) 1100

