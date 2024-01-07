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


“of course, you can SEEK OUT error validation if you like; there are plenty of tools available online which can give you great static insights on your files. [https://www.w3.org/wiki/Validating_your_HTML?TB_iframe=true](https://www.w3.org/wiki/Validating_your_HTML?TB_iframe=true)”

  
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

Activities   - todo list (add task & strike off)

- Like button
    
- Animation
    
- Quiz
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
> - To-do list
> - make sense of JS quirks
> - install node, angular
> - create & explore default application. 
> - go through [Tour of Heroes](https://angular.io/tutorial/tour-of-heroes) tutorial & implement
> - add a non-trivial extension where ToH ends

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
> - create AngularJS app, replace dummy data by call to [fake API with dummy data](https://jsonplaceholder.typicode.com)
> - create javascript form with all sorts of fields & conditions