## 18-12-2023

The web browser’s rendering engine

[https://www.tampermonkey.net/](https://www.tampermonkey.net/)

[https://stackoverflow.com/questions/46950393/programmatically-debug-google-s-v8-engine](https://stackoverflow.com/questions/46950393/programmatically-debug-google-s-v8-engine) 

[https://v8.github.io/tools/head/](https://v8.github.io/tools/head/)

Required reading
[https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) 

Why are HTML interpreters permissive? They quietly attempt to fix issues themselves. It’s so since the internet was built with the aim to be welcoming & open. Also why most protocols are text protocol.

[https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea) 

CSS - way to stylise everything on the page. Best way - attach file.

selector { property: value }

- Browser parses it ensuring the last rules are the ones that take precedence; cascading

>(Git repo - submit commit ids) Take home assignment - table, images, (pretty) - create fan page - images, links with SM icons


“of course, you can SEEK OUT error validation if you like; there are plenty of tools available online which can give you great static insights on your files."[https://www.w3.org/wiki/Validating_your_HTML?TB_iframe=true](https://www.w3.org/wiki/Validating_your_HTML?TB_iframe=true)”

  
## 22-12-2023

HTML has tags for nav and side panel

Semantic tag - purpose matches name. Allows HTML to be transparent & readable. Use to avoid div-itis

[https://devdocs.io/javascript/](https://devdocs.io/javascript/)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) 

DOM - tree-like structure, document object model. Root of the tree - document object  

What are the behaviours of JavaScipt that people find strange?

- Dynamically typed - issues with logical statements - Implicit Type Coercion changes values types even if unintended by dev. 
    
- Equality - == and \=\==; === is the strict comparison operator; == performs type coercion
[https://www.reddit.com/r/learnjavascript/comments/thuc7w/javascript_is_weird_all_explanations_are_in_the/](https://www.reddit.com/r/learnjavascript/comments/thuc7w/javascript_is_weird_all_explanations_are_in_the/) 

This is why we use TypeScript - compiles to JS but is typed.. Is a static typechecker.

>Activities 
- [x] todo list (add task & strike off)
- [ ] Like button    (or)
- [ ] Animation    (or try)
- [ ] Quiz
# Angular

Framework - structure with prewritten components. Takes care of repetitive boiler template to save time & energy.

- Popular architectural pattern - MVC
    
- M - business logic ‘section’ of the framework
    
- View - what we see; controller - middleware

Angular - started out as built on javascript. After a certain version, renamed from ‘AngularJS’ to ‘Angular’ since it started using TypeScript - (stricter typing for simpler debugging

- Brings a template to building applications
    
- Components-based architecture - each can be tested individually
    
`ng new <proj name> [--standalone]`

- ‘Standalone’ imitates project structure of angular 16
- Main.ts - entrypoint into application

`ng serve`
- Build & deploy application

'SPA'
- all components available, just not displayed. 
- No calls to server

>Assignments
- [x] To-do list
- [x] make sense of JS quirks
 - [x] install node, angular
 - [x] create & explore default application.  (ng new --no-standalone; ng serve --open)
 - [ ] go through [Tour of Heroes](https://angular.io/tutorial/tour-of-heroes) tutorial & implement
	 - working in src/app
 - [ ] add a non-trivial extension where ToH ends

## 29-12-2023

`document` property calls DOM tree, has methods s.a `.getElementByID`.  `console.log` is a dev's best friend.

`.trim()` method removes whitespace.

Our to-do list loses the info added on reload. we could use a back-end database, or local storage.

`Array.from(document.querySelectorAll(<selection>)`

`.map(func)` is another useful JS method.
### Local storage
`localStorage.setItem('key', 'val')` set the value to `JSON.stringify(val)`. setItem follows a dictionary-like format.

to get everything back, 
`JSON.parse(localStorage.getItem('val'))` 

> Assignments
- [ ] create AngularJS app, replace dummy data by call to [fake API with dummy data](https://jsonplaceholder.typicode.com)
 - [ ] create javascript form with all sorts of fields & conditions

## 08-01-2024

angular.dev/guide/forms
angular.dev/guide/routing/common-router-tasks
https://angular.dev/guide/signals

## 12-01-2024

Asynchronous blocks of code, i.e, logic that deals with network, user interaction, file access

https://eloquentjavascript.net/ (Chapter 11 - Asynchronous) (interesting, must read)

to make it easier to deal with errors - promises (Angular); a placeholder to be resolved or rejected when a function evaluates. Use callback functions (not very different from them but for the purpose of elegance)

[Event loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
[Web sockets documentation](https://websocket.org/guides/road-to-websockets/) is good though deprecated

[Observables](https://angular.io/guide/observables) - bridge between source and observer -  a subscriber used by http to access messages from client. 

fat arrows (=>) are commonly associated with async code blocks

RSJX library

## 19-01-2024

https://pepa.holla.cz/wp-content/uploads/2016/01/REST-API-Design-Rulebook.pdf read pages 1-6

REST - Representational State Transfer
- must conform to standard - common interface; client-server architecture
- stateless - state maintained (inserted) into request; burden of tracking not on server - reduce load (should the server really keep track of client-side state changes?)
- resource-based architecture style
- principle of idempotence - each request (even duplicate) sent by client (even singular) to be served by server

guide on what the first web designers thought was the most optimal way to build applications

SPRINGboot(?) - framework enables us to build REST API
			- why not nodejs? if you understand this, you'll have reapplicable skills; great learning point
			- core concept - inversion of control; now known as dependency injection (describes how components interact & how)

>angular 12 to 17 -> less boilerplate & increased abstraction

https://martinfowler.com/articles/injection.html read until "Forms of Dependency Injection"

https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/overview.html#overview-core-container - springboot docs (dense) - install. treat reading the docs like reading a research paper - read till 1.2.3 then jump to chapter [5](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/beans.html#beans-beanfactory) 

https://spring.io/guides/gs/guides-with-vscode/

## 22-01-2024
cross-origin request
https://spring.io/guides/gs/rest-service-cors/

build a task manager with task entity. Fields like ID, title, description, task status, date..
perform all CRUD operations on entity tasks. build an angular service to interact with backend API. listing, updating entities. use angular forms to add, edit tasks. 

> Let's build a Task Manager for the take-home exercise. 
- [ ] You need to create an Entity "Task" with atleast the following fields : id, title, description, task status. 
 - [ ] Bonus points if you populate more fields that can be updated from the front end. (Try out dates added etc). 
 - [ ] Construct RESTful API to handle CRUD operations on the Entity "Task". 
 - [ ] Since, the cohort is familiar with the Angular framework for frontend, implement a service to interact with the Spring Boot back end API. 
 - [ ] Create components to list, update, add/delete tasks. You could use Angular forms for adding and updating tasks.

## 29-01-2024

# MongoDB

look at mongodb university

Mongodb - document oriented data model; just a doc not a model
- no fixed schema; it's difficult to update datamodel in relational models
- scalable, flexible
- 'row' - doc, 'table' - collection

postman - middleman b/w database and backend

> Take home
- [x]  install mongodb community edition, compass (for visualization of data), bi (business intelligence) connector (translates all sql queries into mongdb when u have an old project which still uses relational db), postman
 - [x]  look into mongodb atlas 

www.mongodb.com/docs/manual/aggregation

postman - can generate documentation for api

> Take-home
- [ ] add spring web and spring data mongodb to connect to db in spring initializer

good practice to add toString method for all classes and is called implicitly called by the framework
www.mongodb.com/compatibility/spring-boot
spring.io/guides/gs/accessing-data-mongodb/

## 16-02-2024

# Spring Security

https://docs.spring.io/spring-security/reference/servlet/authentication/index.html

Username, pwd or ldap or csa or oauth (now popular) - defined in security filter chain

- **ldap** - lightweight directory access protocol - creates server where username, pwd pairs are stored in .ldif. auth requests go to server instead of db, checks against data there.
- **oauth** - 

interacts with authentication manager - 

authentication provider
- in memory - checks against credentials in app runtime memory - not really for prod
-  database  - checks against credentials in db

Tell the application the mechanism you want to follow. Security context - fills up as people log in and out - stores info of people & access. Keep info of grants - what who has access to (granted authorities)

>Exercise
- Create using springboot initializr, add spring security as dependency to a project, run (details will be added to a file)


https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html The components that interact during lifecycle of the process

**MongoDB**
- we already looked at integrating spring and mongodb
convention - config file for security configurations.

prod apps - don't really fetch from the db ..?

>Assignment
- [ ]  create fake server on your system to imitate behaviour of prod ldap - follow [tutorial](https://spring.io/guides/gs/authenticating-ldap)
- [ ] read about [CAS](https://docs.spring.io/spring-security/reference/servlet/authentication/cas.html)
- [ ] create API to save creds to db - can use postman to make postman api or front-end access point with form. Implement login page (username - pwd credentials)

## 19-02-2024

Making a security filter chain
- creates a security filter chain object, perform filtering & return built object

[OAuth](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html) allows you to to use a token to signify authentication; allows existing account sign-ins

jwt.io/introduction - open source tech used by authentication systems
- Header + payload + signature
- issues the first time an unauthenticated user is authenticated (credentials are verified) 
- JWT is sent every time access required. Expires after timeframe
- compact

what are the differences between sessions and tokens?
Session - server side, dedicated connection; token - up in the air, verification done via signature

access token 
- string used by client to make requests to the resource server
- describes scope and authorisation
- has auth grants & descriptions stored
refresh token
- no need to involve user when token expires. 
- refresh tokens have their own lifespan
- only encodes info to issue new access token

mechanism of how they are used
- access token issued when user authenticated. 
- most implementations invalidate prev refresh token and issue new one when a refresh token is used. Refresh-token-cycle generally continues until user logs out
- access token sent out with every request - more vulnerable. request token only exposed on issue or request - stored on client side; more likely to be valid

third party has access to endpoint where you can login, credentials maintained form there

>Assignment
- [ ] implement sign in, sign up, get method. every use has role attached. various roles can view various endpoints. using JWT 
- [ ] extend above to use refresh token as well
- [ ] OAuth - look up components of the mechanism - 3 main auth flows; Authorisation flow

## 23-02-2024

# OAuth

*Reading time* used [1](https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb),[2](https://www.varonis.com/blog/what-is-oauth)
- Access delegation - provide access to third party without revealing password, uname
- Authorisation not authentication (permission not proving identity)
- valet key example - don't have the full scope
- service provider gives third party request token + secret. Secret is signed onto each request made for verification
- user provides this token to service provider. It is marked as verified 
- verified request tokens are converted to access token by third party
- user can manage third party's permissions through service provider

Look up authorisation flows - auth code grant, implicit grant, resource owner password credential grant. [used](https://frontegg.com/blog/oauth-flows)
- Authorization Code Flow exchanges auth code with token.  - user receives a one time code (by logging in to service provider) and this is passed on to app.
- app then forwards that with client ID and secret to oauth server

>Project
>- project + presentations once Large System Design ends.
>- dates - 18th, 22th, 25th march. (3rd & 4th week)
>- 18th - everyone makes presentation. Teams of 3.
>- Web application - more creative the better
>- template project that we could build up later is good. 
>- E,g for employees management portal
>	- define users and roles
>	- dashboards for each type, maybe a hierarchy
>	- sign up page, credentials. Once admin approves sign up, log in allowed
>	- Role based authorisation to make resources accessible
>	- limits on employees on a project, even business logic
>- interactive fantasy world site - houses, secret keys