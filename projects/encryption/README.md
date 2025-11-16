# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 2
My Partner's Key: 2

Our initial shared key: 4

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|      Ywekm      |      Usagi      |  4  |
|    Vabbdtpt     |     Chiikawa    |  19 |
|    Tmotuimdq    |     Hachiware   |  12 |
|      Dfdfexr    |      Momonga    |  17 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: a2ezdU

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01100001 00000010     01100101 01111010 01100100 01010101

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Alice]
    Destination: [Erin]  
    Sequence: 1/3
    Data: [01100001] [00000010]
    =========
    Packet 2:

    Source: [Alice]
    Destination: [Erin]
    Sequence: 2/3 
    Data: [01100101] [01111010]
    =========
    Packet 3:

    Source: [Alice]
    Destination: [Erin]
    Sequence: 3/3
    Data: [01100100] [01010101]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? Symmetric encryption has the same key, while asymmetric symmetry uses different keys. Theres a public key that everyone can use to encode messages and a private key only you have that's the only one capable of decoding a message encoded with your public key.
- Why is it important that this protocol uses a new key for each message? Because people can see the old key and will be able to decode all of the messages.
- Why is it important that you never share your secret key? You should never share your secret key because then peaople will be able to decode all the messages that you receive.
- In the transport layer, do these messages use TCP or UDP? Why? The messages use TCP because it needs to be delivered safely and int/act.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. In the internet layer it determines the path the packet will take based on interent traffic. IN the link layer it's the actual data transmission and how it's recieved by your recieving computer.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see? They can still see where it's sent from and the IP adress of the destination, they also see the size of the packet, time stamps and message frequency.
