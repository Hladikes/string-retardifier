//    A little hint of how I've accomplished different outputs using interpunctional characters.
//    Yes, I am aware of the fact that some of these outputs can be produced with lesser amount of
//    characters, but that's not my goal.
//
//    'undefined'         => ({}[(+[])]+[])
//    'NaN'               => ((+!![])-(''+{})+[])
//    'true'              => (!!(+!![])+[])
//    'false'             => (!(+!![])+[])
//    'function'          => (typeof(()=>{}))
//    '[object Object]'   => ({}+[])
//    'number'            => (typeof(+[]))
//    'string'            => (typeof([]+[]))
//    'Infinity'          => (((+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![]))**((+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![]))+[])
//    0                   => (+[])
//    1                   => (+!![])
//    2                   => (+!![])<<(+!![])
//    4                   => (+!![])<<(+!![])<<(+!![])
//    8                   => (+!![])<<(+!![])<<(+!![])<<(+!![])
//    16                  => (+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])
//    32                  => (+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])
//
//    'TypeError: Cannot read property '0' of undefined'
//      => ((()=>{try{({})[0][0]}catch(e){return[]+e}})())
//
//    'ReferenceError: q is not defined'
//      => ((()=>{try{eval(q)}catch(e){return[]+e}})())
//
//    'SyntaxError: Unexpected end of input'
//      => ((()=>{try{eval('[')}catch(e){return[]+e}})())

const retardedDictionary = {
  'a': [
    "(+!![]-([]+{})+[])[+!![]]",
    "(![]+[])[+!+[]]"
  ],
  'b': "({}+[])[+!![]+!![]]",
  'c': "({}+[])[+!![]+!![]+!![]+!![]+!![]]",
  'd': "({}[+[]]+[])[+!![]+!![]]",
  'e': "(!!(+!![])+[])[+!![]+!![]+!![]]",
  'f': [
    "(!+!![]+[])[+[]]",
    "(![]+[])[+[]]"
  ],
  'g': "(typeof([]+[]))[(+!![]<<!![]<<!![])+!![]]",
  'h': "((()=>{try{h}catch(e){return[]+e}})())[+!![]<<!![]<<!![]<<!![]<<!![]]",
  'i': [
    "({}[+[]]+[])[+!![]+!![]+!![]+!![]+!![]]",
    "([![]]+[][[]])[+!+[]+[+[]]]"
  ],
  'j': "({}+[])[+!![]+!![]+!![]]",
  'k': "((()=>{try{k}catch(e){return[]+e}})())[+!![]<<!![]<<!![]<<!![]<<!![]]",
  'l': [
    "(!+!![]+[])[+!![]+!![]]",
    "(![]+[])[!+[]+!+[]]"
  ],
  'm': "(typeof(+[]))[+!![]<<!![]]",
  'n': "(typeof(()=>{}))[+!![]+!![]]",
  'o': "({}+[])[+!![]]",
  'p': "((()=>{try{({})[+[]][+[]]}catch(e){return[]+e}})())[+!![]<<!![]]",
  'q': "((()=>{try{q}catch(e){return[]+e}})())[+!![]<<!![]<<!![]<<!![]<<!![]]",
  'r': "(!!+!![]+[])[+!![]]",
  's': "(typeof([]+[]))[+[]]",
  't': "(!!+!![]+[])[+[]]",
  'u': "({}[+[]]+[])[+[]]",
  'v': "((()=>{try{v}catch(e){return[]+e}})())[+!![]<<!![]<<!![]<<!![]<<!![]]",
  'w': "((()=>{try{w}catch(e){return[]+e}})())[+!![]<<!![]<<!![]<<!![]<<!![]]",
  'x': "((()=>{try{eval('[')}catch(e){return[]+e}})())[(+!![]<<!![]<<!![])+!![]]",
  'y': "((+!![]<<!![]<<!![]<<!![]<<!![])**(+!![]<<!![]<<!![]<<!![]<<!![]<<!![]<<!![]<<!![]<<!![])+[])[(+!![]<<!![]<<!![]<<!![])-!![]]",
  'z': "((()=>{try{z}catch(e){return[]+e}})())[+!![]<<!![]<<!![]<<!![]<<!![]]",

  'S': "((()=>{try{eval('[')}catch(e){return[]+e}})())[(+[]+[])]",
  'C': "((()=>{try{({})[(+[]+[])][(+[]+[])]}catch(e){return[]+e}})())[+((!![]<<!![]<<!![]<<!![])+!![]+[])+(+((!![]<<!![])+[]))]",

  '.': "(+!![]/(+!![]<<!![])+[])[+!![]]",
  ',': "([[],[]]+[])",
  ' ': "({}+[])[(+!![]<<!![]<<!![]<<!![])-!![]]",
  '-': "(-+!![]+[])[+[]]",
  '\'': "((()=>{try{({})[+[]][+[]]}catch(e){return[]+e}})())[(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])<<(+!![])]",
  '\"': "\'\\\"\'",
  '\n': "\'\\n\'",
  '[': "({}+[])[+[]]",
  ']': "({}+[])[(!![]<<!![]<<!![]<<!![]<<!![])-(!![]+!![])]",
  '(': "((()=>{})+[])[+[]]",
  ')': "((()=>{})+[])[+!![]]",
  '=': "((()=>{})+[])[!![]<<!![]]",
  '>': "((()=>{})+[])[(!![]<<!![])+!![]]",
  '{': "((()=>{})+[])[!![]<<!![]<<!![]]",
  '}': "((()=>{})+[])[(!![]<<!![]<<!![])+!![]]",
  '0': "(+[]+[])",
  '1': "(+!![]+[])",
  '2': "((!![]<<!![])+[])",
  '3': "((!![]<<!![])+!![]+[])",
  '4': "((!![]<<!![]<<!![])+[])",
  '5': "((!![]<<!![]<<!![])+!![]+[])",
  '6': "((!![]<<!![]<<!![])+!![]+!![]+[])",
  '7': "((!![]<<!![]<<!![]<<!![])-!![]+[])",
  '8': "((!![]<<!![]<<!![]<<!![])+[])",
  '9': "((!![]<<!![]<<!![]<<!![])+!![]+[])",
}

const getRandomItem = (arr) => arr[Math.floor((Math.random() * arr.length))]

const retardifyChar = (c) => {
  if (!(c in retardedDictionary)) return

  const selection = retardedDictionary[c]

  if (selection.constructor === String) {
    return selection
  }

  if (selection.constructor === Array) {
    return getRandomItem(selection)
  }
}

const retardifyUnknownChar = (c, globalContext = 'globalThis') => {
  const charCode = c.charCodeAt(0) + ''
  const retardedCharCode = retardifyString(charCode)
  const retardedStringConstructor = retardifyString('String')
  const retardedFromCharCodeFn = retardifyString('fromCharCode')

  // console.log({
  //   charCode,
  //   retardedCharCode,
  //   retardedStringConstructor,
  //   retardedFromCharCodeFn
  // })

  return `${globalContext}[${retardedStringConstructor}][${retardedFromCharCodeFn}](+(${retardedCharCode}))`
}

const retardifyString = (str) => {
  return [...str].map(char => {
    let retardedChar = retardifyChar(char)

    if (!retardedChar) {
      retardedChar = retardifyUnknownChar(char)
    }

    return `(${retardedChar})`
  }).join('+')
}