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

Day 2 log---

Fixing the Previous project from yesterday in the morning. I couldnt just leave it as it was so i woke up and fixed it before going to my institute..., at evening i have completed day 2 project as well but even then i was thinking of making atleast 2 project but couldnt get much time from assignments...

Today's Build-
This thing was built to polish my-
1. Props/parameters being passed to components and other functions.
(What i understood was we need to destructure the parameters being passed like this function({parameter1, parameter2}); if we are passing multiple parameters from a component like <component parameter={this} parameter2={that}/>)
2. Connection of value of a input to a state.
(What i need to do is pass the state as a value/parameter in the component like <component value={state} />and when we do event.target.value where event is the event being triggered target is the element that triggers the event and the value being the current value of the input.)

Side Quests
(I used to think that every negative number is a falsy value as like a truthy value like 1,true,value etc but it turns out it isn't... the falsy values are limited to only 0, -0, null, NaN, undefined, '' maybe i forgot or i just assumed that it works like that instead of actually trying to go through it to check)
(Turns out we cant really put a Gradient color as a color of a border. I think a workaround is using ::before and ::after but a colored gradient border would be so cool and easy to implement if it existed...)

Today feels a lot chill and peacefull than yesterday.
I dont really know if i learnt anything good today. I made this fairly easily as compared to the struggle yesterday i guess i overcomplicated stuff in the previous project.
As it is i think building this made my mental model of react and useState improved.

The tomorrows goal. Make lots of stuff... like seriously tommorow is my leave i cant mess it up. Good luck me!
Definetely coming tomorrow as well.