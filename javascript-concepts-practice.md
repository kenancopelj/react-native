# JavaScript Concepts 

This document summarizes key JavaScript concepts and includes a
**practice task for each concept** designed for a **React Native Expo
demo app**.

## Demo App Idea

The Expo app should contain:

-   A **home screen** listing concepts in a **card list**
-   Each card navigates to a **detail screen**
-   Each detail screen includes:
    -   Quick explanation
    -   Documentation link
    -   Video link
    -   A **visible UI demo showing the concept in practice**

------------------------------------------------------------------------

# Prototypical Inheritance

## Quick doc

JavaScript uses **prototypical inheritance**, meaning objects inherit
properties and methods from other objects through a prototype chain.

Example:

``` javascript
const animal = {
  speak() {
    return "Animal speaks"
  }
}

const dog = Object.create(animal)

dog.speak()
```

## Learn more

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

## Video

https://www.youtube.com/watch?v=wstwjQ1yqWQ

## Practice task

Create `animal` with method `speak()`.

Create `dog` using `Object.create(animal)`.

UI: Button: **Make dog speak**

Display result: **Animal speaks**

------------------------------------------------------------------------

# Pass by Value / Reference

## Quick doc

JavaScript passes **primitive values by value** and **objects by
reference**.

Example:

``` javascript
let a = 10
let b = a
b = 20
```

Objects:

``` javascript
let obj1 = { name: "John" }
let obj2 = obj1

obj2.name = "Mike"
```

## Learn more

https://dev-aditya.medium.com/pass-by-value-and-pass-by-reference-in-javascript-7b4b3d59f629

## Video

https://www.youtube.com/watch?v=-hBJz2PPIVE

## Practice task

Show two examples:

Primitive copy vs object reference change.

Display how primitive original remains unchanged while object original
changes.

------------------------------------------------------------------------

# Object configuration (configurable, enumerable, writable...)

## Quick doc

Object properties can be configured using descriptors:

-   writable
-   enumerable
-   configurable

Example:

``` javascript
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false
})
```

## Learn more

https://medium.com/@shrijan00003/javascript-object-properties-writable-enumerable-configurable-eced27378256

## Video

https://www.youtube.com/watch?v=LD1tQEWsjz4

## Practice task

Create a property using `Object.defineProperty` and add UI buttons to:

-   Try modifying the property
-   List keys
-   Delete property

Display the result of each action.

------------------------------------------------------------------------

# Closures & Scope

## Quick doc

A **closure** happens when a function remembers variables from its outer
scope even after the outer function finishes.

Example:

``` javascript
function counter() {
  let count = 0
  return function () {
    count++
    return count
  }
}
```

## Learn more

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

## Video

https://www.youtube.com/watch?v=3a0I8ICR1Vg

## Practice task

Create a closure counter and a button:

**Increment counter**

Each press increases the displayed number.

------------------------------------------------------------------------

# Chainable Methods

## Quick doc

Chainable methods return `this` so multiple methods can be called in
sequence.

Example:

``` javascript
class Calculator {
  constructor() {
    this.value = 0
  }

  add(n) {
    this.value += n
    return this
  }

  multiply(n) {
    this.value *= n
    return this
  }
}
```

## Learn more

https://medium.com/@matt.collins/chainable-methods-in-javascript-7543f07a10d4

## Video

https://www.youtube.com/watch?v=J4YhlDsNqeE

## Practice task

Create a chainable calculator.

Button:

Run calculation

Display each step and final result.

------------------------------------------------------------------------

# Array Methods

## Quick doc

JavaScript arrays provide many built‑in methods.

They fall into two groups:

-   **Immutable methods** → return a new array
-   **Mutable methods** → modify the original array

------------------------------------------------------------------------

## Immutable methods

map, filter, reduce, slice, concat, flat, flatMap

Example:

``` javascript
const numbers = [1,2,3]
const doubled = numbers.map(n => n * 2)
```

------------------------------------------------------------------------

## Mutable methods

push, pop, shift, unshift, splice, sort, reverse

Example:

``` javascript
const arr = [1,2]
arr.push(3)
```

## Learn more

https://www.w3schools.com/js/js_array_methods.asp

## Video

https://www.youtube.com/watch?v=R8rmfD9Y5-c

## Practice task

Initial array:

\[1,2,3,4,5\]

Buttons:

Immutable: - map ×2 - filter \>2 - reduce sum

Mutable: - push - pop - reverse - sort

Show how immutable operations keep original array unchanged while
mutable ones modify it.

------------------------------------------------------------------------

# Currying

## Quick doc

Currying transforms a function with multiple arguments into nested
functions.

Example:

``` javascript
function add(a){
  return function(b){
    return a+b
  }
}
```

Usage:

add(2)(3)

## Learn more

https://javascript.info/currying-partials

## Video

https://www.youtube.com/watch?v=iZLP4qOwY8I

## Practice task

Create buttons:

Create add(5)\
Apply (3)

Display result 8.

------------------------------------------------------------------------

# Event Loop

## Quick doc

JavaScript handles asynchronous tasks using the **event loop**.

Key parts:

-   Call stack
-   Web APIs
-   Callback queue
-   Event loop

## Learn more

https://dev.to/buildwithgagan/javascript-event-loop-explained-a-beginners-guide-with-examples-4kae
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

## Video

https://www.youtube.com/watch?v=8aGhZQkoFbQ

## Practice task

Button:

Run event loop demo

Display execution order of synchronous log, promise, and setTimeout.

------------------------------------------------------------------------

# Iterators

## Quick doc

Iterators define how values are accessed sequentially.

They implement:

next()

Returning:

{ value, done }

## Learn more

https://medium.com/@akashsdas_dev/generators-and-iterators-in-javascript-68e66fa77faa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

## Video

https://www.youtube.com/watch?v=2oU-DfdWM0c

## Practice task

Use `[1,2,3]` iterator.

Button:

Next value

Display iterator result each press.

------------------------------------------------------------------------

# Immutable vs Mutable Data

## Quick doc

Mutable objects can be modified.

Immutable operations create new objects instead.

Example immutable:

``` javascript
const newArr = [...arr, 3]
```

## Learn more

https://developer.mozilla.org/en-US/docs/Glossary/Immutable
https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/#:~:text=Mutability%20refers%20to%20data%20types,still%20access%20in%20the%20memory.

## Video

https://www.youtube.com/watch?v=Wo0qiGPSV-s

## Practice task

Show two panels:

Mutable update\
Immutable update

Display original and new arrays.

------------------------------------------------------------------------

# Hoisting

## Quick doc

JavaScript moves declarations to the top of scope during compilation.

`var` becomes undefined.\
`let` and `const` stay in the **Temporal Dead Zone**.

## Learn more

https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
https://dev.to/hpouyanmehr/hoising-in-javascript-1gp7

## Video

https://www.youtube.com/watch?v=EvfRXyKa_GI

## Practice task

Display results of accessing variables before declaration.

------------------------------------------------------------------------

# IIFE

## Quick doc

IIFE stands for **Immediately Invoked Function Expression**.

Example:

``` javascript
(function(){
 console.log("Runs immediately")
})()
```

## Learn more

https://developer.mozilla.org/en-US/docs/Glossary/IIFE
https://dev.to/onurhandtr/javascript-iife-a-complete-guide-to-immediately-invoked-function-expressions-3ghd

## Video

https://www.youtube.com/watch?v=3cbiZV4H22c

## Practice task

Run an IIFE when screen loads and show the message immediately.

------------------------------------------------------------------------

# Shallow vs Deep Copy

## Quick doc

Shallow copy duplicates only the first level.

Deep copy duplicates the full structure.

Example:

``` javascript
const shallow = {...obj}
const deep = structuredClone(obj)
```

## Learn more

https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

## Video

https://www.youtube.com/watch?v=MzKHrWCymAU

## Practice task

Modify nested object after shallow copy and compare with deep copy
behavior.

------------------------------------------------------------------------

# Higher Order Functions

## Quick doc

A higher‑order function takes another function as argument or returns
one.

Examples include map, filter and reduce.

## Learn more

https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

## Video

https://www.youtube.com/watch?v=BMUiFMZr7vk

## Practice task

Buttons applying different functions to transform text (uppercase,
lowercase, prefix).

------------------------------------------------------------------------

# Recursion

## Quick doc

Recursion occurs when a function calls itself.

Example:

``` javascript
function factorial(n){
 if(n===1) return 1
 return n*factorial(n-1)
}
```

## Learn more

https://developer.mozilla.org/en-US/docs/Glossary/Recursion
https://www.freecodecamp.org/news/recursion-in-javascript/

## Video

https://www.youtube.com/watch?v=rf60MejMz3E

## Practice task

Button:

Calculate factorial(4)

Display recursion steps.

------------------------------------------------------------------------

# Callbacks

## Quick doc

A callback is a function passed into another function and executed
later.

Example:

``` javascript
setTimeout(()=>{
 console.log("Hello")
},1000)
```

## Learn more

https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
https://javascript.info/callbacks

## Video

https://www.youtube.com/watch?v=i2SPq-nb3NQ

## Practice task

Button:

Run callback demo

Display main function then callback execution.

------------------------------------------------------------------------

# Memoization

## Quick doc

Memoization caches expensive function results.

Example:

``` javascript
function memoize(fn){
 const cache={}
 return function(x){
   if(cache[x]) return cache[x]
   const result = fn(x)
   cache[x]=result
   return result
 }
}
```

## Learn more

https://www.freecodecamp.org/news/memoization-in-javascript-and-react/
https://dev.to/jeremydmarx813/create-a-memoized-function-in-javascript-43pi

## Video

https://www.youtube.com/watch?v=TWUV_LRVX24

## Practice task

Call a slow function twice and display whether result was calculated or
loaded from cache.

------------------------------------------------------------------------

# RegExp

## Quick doc

Regular expressions match patterns in text.

Example:

``` javascript
const regex = /hello/i
regex.test("Hello world")
```

## Learn more

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
https://medium.com/@erickzanetti/complete-guide-to-regular-expressions-in-javascript-4f9c0eb248bb
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

## Video

https://www.youtube.com/watch?v=rhzKDrUiJVk

## Practice task

Text input validating pattern (email or numbers) and displaying
valid/invalid.

------------------------------------------------------------------------

# Pure Functions

## Quick doc

Pure functions:

-   Same input → same output
-   No side effects

Example:

``` javascript
function add(a,b){
 return a+b
}
```

## Learn more

https://www.telerik.com/blogs/pure-functions-side-effects-javascript

## Video

https://www.youtube.com/watch?v=fYbhD_KMCOg

## Practice task

Compare pure and impure functions with repeated calls and display
results.
