Day 1 log---

This thing took a whole day... Im Speachless on my Failure, I planned to make multiple things on my first day but well it is what it is.
Lets see what i learnt today.

1. Hooks can ONLY be used in a react COMPONENT at the TOP like its being hoisted.
2. We can define when useEffect runs like if we put [] at the end of it as a second parameter the function only runs ONE time on Load. if given a value or data it runs the call back function it was given only when the changes happen in that data.
3. useRef Hook enables us to actually get a DOM from our element although its not good to use DOM for doing stuff react can already do like rendering UI it can help with accessing specific DOMS for things react cant do like getting an active state of an Input or Select Tag. Also that we can store a data inside useRef hook by doing useRef(data) now that data is stored as long as the compoent it was created in exists and can SURVIVE reRenders caused by setState on the component.
4. useState() this is the most usefull one.
 The way it works is like a callback, it gives us two things 1st the value we want to track and 2nd the function we want to use to change the value it gave. why its special? because if we use that specific function and change the data of the value then the react see it and RERENDERS it on its own. NO MANUAL RENDERIG!

The thing is When we change the value using that function react re runs the entire component in which data is used or it exists.

Basically just change state and page LISTENS. This reRender can be a pain as well if we are using a function inside it which changes the state... then we are asking for trouble since its going to create a infinite loop...(all my hours spent figuring out... T-T).

5. I also found out we dont even need to connect or link css to HTML any more we can just link it to our jsx file and the styles will be applied! WOW!

In the end i couldnt even Complete the thing and well its a regret. The unused Emoji is a proof of that...

Ending with a promise to come back again tomorrow and actually try to make atleast 2 things... i hope i can.
