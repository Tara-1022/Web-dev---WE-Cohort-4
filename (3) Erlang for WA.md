*Application server ( @Tl here is where all your erlang stuff comes )* 

[Doc](https://docs.google.com/document/d/16_Lsvxs9lKWN1aAMr7TPAXrhCP_pW_O3nSI_hT_gmsg/edit?usp=drivesdk)
[CometChat](https://www.cometchat.com/blog/whatsapps-architecture-and-system-design)
[Medium](https://medium.com/@info.vikaasyadav/whatsapp-architecture-2d24c6ae067d)
[LYEFGG](https://learnyousomeerlang.com/introduction#kool-aid)
[Erlang SOlutions](https://www.erlang-solutions.com/blog/20-years-of-open-source-erlang-openerlang-interview-with-anton-lavrik-from-whatsapp/)

[Joe Armstrong PHd thesis - what creatrs read](https://erlang.org/download/armstrong_thesis_2003.pdf)
[Ericsson to WhatsApp : The Story of Erlang](https://thechipletter.substack.com/p/ericsson-to-whatsapp-the-story-of) !!!!!

[The soul of erlang and elixir](https://www.youtube.com/watch?v=JvBT4XBdoUE)
[Scaling erlang cluster](https://www.youtube.com/watch?v=FJQyv26tFZ8)
[Erlang: The Movie](https://youtu.be/xrIjfIjssLE?si=B7VpBgr3MDk5AxpO) from 8 to 10
What sets whatsapp server apart? Why erlang?
- scalability
- very very high concurrency

So we've looked at User Interface & Communication. Let's look at the server point of view

WhatsApp uses a ton of languages for front-end - from Jave to Swift & C#.

Moving on the the back-end, the best speculations so far are
- OS - FreeBSD
- XMPP server - Ejabberd
- Erlang based VMs and DBs

What Erlang?
- functional, process-based model
- processes create new processes, send messages & modify state (in or out of core) - self healing
- can be used for distributed systems out-of-the-box
"It's very easy to write robust systems" - the erlang movie
"Erlang is particularly well suited to juggling communications from a huge number of users, and it lets engineers deploy new code on the fly. But Mahdavi says that the trick is as much about attitude as technology."- [Wired](https://www.wired.com/2015/09/whatsapp-serves-900-million-users-50-engineers/) ... minimalistic approach to solving
 programming languages that are designed for _concurrency_

Haskell - academic outcome
Erlang - by Ericsson - for high speed phone newtroks. Built a language to meet a need - scalability & reliability. At the time, phone networkds were what displayed those properties (80s)
what else? whatsapp! replaces phone texting
- on the fly- customers won't be happy!
- - switching system to handle simultaneous calls - sound familar?
add a few personal preferences - drawn to Prolog. initially just added concorrency
(they made a movie!)
went open source after banned internally.
"Open-source Erlang-based projects started to appear. One of these was [ejabberd](https://en.wikipedia.org/wiki/Ejabberd), originally developed by Alexey Shchepin starting in 2003, which provided high-quality software to implement a system that allowed chat messages to be sent between a large number of users."
a way of deploying new code to an application even as the application continues to run
"Erlang code scales incredibly well with the number of CPUs, and OTP can make your code insanely robust. I'm not aware of any other language or supporting infrastructure that lets you update code on a live system between individual transactions"

"iPhone and Android users could send text messages to each other, but doing so was costly, with charges on a per-text basis. By contrast, the amount of data used for each message was tiny, even in the context of the small data transfer allowances granted to users at the time, ....set out to build a system where users could send each other messages using their data allowances."

Immense strength - problem fit perfectly into Erlang's strengths. distributed application that can be updated while being run???
extremely lightweight processs, each with mailboxes for message passing, each independent.
Built in resilience - allowed to fail. built to scale - simply add more machines!
fun fact ICM almost joined forces with Ericson to get into telecoms equipment
cpu distribution - seamlessly scales across all cpus it has acccess to
'stumbled across Joe Armstrong PhD thesis' - solved their problems - right things at right time
"not only does Erlang seem to solve the problems most teams are having- it seems to have a solution to some of the sticky distributed problems I knew I was punting into the future."


DBMS - Mnesia - temporary messages - only DB in Erlang! easier, explicit interfacing
- server saves a message sent in the db queue. once user opens the app, it is routed, delivered, deleted

VM - BEAM virtual machine - - coiles & executes Erlang - an opiniated JVMthere is Erjang (running on JVM) - concurrency. very good at orchestration - executes code in Erlang Runtime System
[A brief BEAM primer](https://www.erlang.org/blog/a-brief-beam-primer/)
YAWS - Erlang based web server for dynamic content - real-time sending & receiving multimedia data (only)

They did not use them drectly! they have customised FreeBSD and Erlang

hot code loading capabilities - uptime
## FreeBSD

Open Source OS - uses BSD instead of GPL (Linux) licensing - does not require 
"we have had very few problems that have occurred at the OS level."
"FreeBSD happened because both Jan and I have experience with FreeBSD from Yahoo!. FreeBSD has a nicely tuned network stack and extremely good reliability. We find managing FreeBSD installations to be quite straightforward" - [Wired](https://www.wired.com/2015/10/whatsapps-co-founder-on-how-the-iconoclastic-app-got-huge/)

## Voice calls
Internet VOIP

## EJabberd
What Ejabberd?
- erlang jabber (xmpp) daemon (background process)
- message routing, delivery...
- scalability & clustering (for dc)
- high XMPP compliance
- can also communicate with non xmpp IM networks

XMPP - send & receive user to user
- originally Jabber
- open communication protocol for IM - based on XML to enable exchange of structured date almost real time
- not limited here! used in gaming, VoIP.. extensible
" The protocol is decentralized, secure, and flexible. It can be used to transfer messages both in one-on-one context and in group chats."
like HTTP - socket is open as long as you are signed in. once you become active, dedicated connection is established and messages passed
messaging standard
Your device connects to the server, communication takes place through it. Not really distributed
"XMPP does not support Quality of Service (QoS); assured delivery of messages has to be built on top of the XMPP layer"
probably at this point using a derivative of it
Actor model for concurrent computation - actor receives a message & decides what to do
[What is XMPP?](https://youtu.be/GurbaZzwYvU?si=8N8rjU-LooRMHxyW) anything with a text messaging feature can use xmpp!

email but for messaging

# Presentation

WhatsApp uses a ton of languages for front-end - from Jave to Swift & C#.

Before we talk about the solution they came up with, let's talk about their requirements
- handle an immense number of users & messages being passed (scalable)
- handle all these users as real-time as possible (concurent)
- all your messages are going to be sent (reliable)
- your whatsapp is not going to crash is someone else's does (isolation, smooth updates)

Take a second to think about whatsapp's predecessors

whatsapp's creators wanted to provide a cheap alternative to SMS texting - why not let users use their data allocation instead of relying on expensive sms

The dawn of it all - Telephony switching systems!
- concurrent calls
- ability to conference call
- fixing one person's call failing does not affect the whole system
- adapt to a large number of calls

That is, phone network systems were the only systems of the time(80s) to display properties of scalability & reliability

Enter Ericsson
- multinational networking and telecommunications company 
- one of the leaders in 5G, invented bluetooth!
- fast and reliable solutions for voice and data communications 
Built a language to meet a need

Ericsson's solution
https://youtu.be/xrIjfIjssLE?si=9IUt-RSqUMRoYsBw&t=479

Note
- functional, process-based model
- concurrent, independent, self-healing processes create new processes, send messages & modify state (in or out of core)

Back to Whatsapp
- whatsapp's problems fit neatly into erlang's solutions
- out-of the box cpu distribution
- very lightweight processes - hundreds at a time
- built in resilience - allowed to fail

 "It's very easy to write robust systems"
Erlang is particularly well suited to juggling communications from a huge number of users, and it lets engineers deploy new code on the fly. But Mahdavi says that the trick is as much about attitude as technology
smbled across joe armstrong PHD thesis - ['Making reliable distributed systems in the presence of software errors]
"not only does Erlang seem to solve the problems most teams are having- it seems to have a solution to some of the sticky distributed problems I knew I was punting into the future""

What does an Erlang Back-end look like? (speculation)
- OS - FreeBSD - OpenSource OS - devs had experience in Yahoo!.Simply that they had fewer issues FreeBSD has a nicely tuned network stack and extremely good reliability. managing FreeBSD installations to be quite straightforward
- BEAM - runs Erlang - kind of what JVM is to Java - good at orchestration, executes code in erlang runtime system
- Ejabberd - Erlang Jabber Daemon - XMPP server. Device connects to it & send messages - probably at this point using a derivative of it
- YAWS - Yet Another Web Server - Erlang-based web server - used when multimedia data is sent
- Database - Mnesia. why? uses erlang structures so easy, explicit interface. what? Abdul sends message to Bhim. Bhim is not active on whatsapp - queues. Delivered & deleted from the database when Bhim opens

What's XMPP?
- think SMTP but Instant Messaging
- Exchanges XML structured messaging
- can transfer one-one & grouochat messages - base of a lot of IM applications

Now - voice calls - VoIP


# Refined
1
What does a WhatsApp backend need?
- handle an immense number of users & messages being passed (scalable)
- handle all these users as real-time as possible (concurent)
- all your messages are going to be sent (reliable)
- your whatsapp is not going to crash is someone else's does (isolation, smooth updates)

2
Let's turn back time a little..
Telephony Switching systems
Requirements
- concurrent calls
- ability to conference call
- fixing one person's call failing does not affect the whole system
- adapt to a large number of calls

Look familiar?

3
Phone network systems were the only systems of the time(80s) to display properties of scalability & reliability

Enter Ericsson
<\insert logo>
Built a language to meet a need
- hot swapping
- concurrent, independent processes

<https://youtu.be/xrIjfIjssLE?si=9IUt-RSqUMRoYsBw&t=479 8 to 10>

4
Back to WhatsApp. What does Erlang give?
- out-of-the box CPU distribution
- hundreds of very lightweight, concurrent processes
- Built in resilience - allowed to fail

5
What Does an Erlang Back-end look like?
<\insert image with
OS
BEAM
Ejabberd - XMPP
YAWS
Mnesia
\>

XMPP running on BEAM, FreeBSD. Multimedia sent on YAWS.
Very high level:
Abdul send a message to Bhim. This goes to the ejabberd server. Since Bhim is not active, it is queued onto the Mnesia Database.
Bhim comes back online. Messages in queue are sent to Bhim, and deleted from the database.
