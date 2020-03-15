// Event Object Properties // read only

bubbles // true or false  wether or not this event bubbles up to the parent or not
cancelable // wether or not we can cancel some propagation
currentTarget // what is the current dom element
defaultPrevented // was prevented ?
detail // hold info about the event
evenPhase // 1,2, or 3  1 means it's at the capture phase, 2 : we are at the target, 3: we are in the process of bubbling
preventDefault // prevent the default behavior of an event
stopPropagation() // stop event capture and bubbling
stopImmediatePropagation() // also makes sure that no more handler get called
target // is set to the original button for exemple
trusted // true : event comes from browser, false : event comes from a javascript code
type // name of the event, for exemple : click





