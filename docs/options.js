 const possibleOptions = [
    [
        {
            name:"2 digit addition",
            num1Min:2,
            num2Min:2,
            num1Max:2,
            num2Max:2,
            allowedOperators:["+"],
            same:false
        },
        {
            name:"3 digit addition",
            num1Min:3,
            num2Min:3,
            num1Max:3,
            num2Max:3,
            allowedOperators:["+"],
            same:false
        },   
    ],
    [
        {
            name:"2 digit subtraction",
            num1Min:2,
            num2Min:2,
            num1Max:2,
            num2Max:2,
            allowedOperators:["-"],
            same:false
        },   
        {
            name:"3 digit subtraction",
            num1Min:3,
            num2Min:3,
            num1Max:3,
            num2Max:3,
            allowedOperators:["-"],
            same:false
        },  
    ],
    [
        {
            name:"2x1 multiplication",
            num1Min:2,
            num2Min:1,
            num1Max:2,
            num2Max:1,
            allowedOperators:["*"],
            same:false
        },  
        {
            name:"3x1 multiplication",
            num1Min:3,
            num2Min:1,
            num1Max:3,
            num2Max:1,
            allowedOperators:["*"],
            same:false
        },  
        {
            name:"squaring 2 digits",
            num1Min:2,
            num2Min:2,
            num1Max:2,
            num2Max:2,
            allowedOperators:["*"],
            same:true
        },
        {
            name:"2x2 multiplication",
            num1Min:2,
            num2Min:2,
            num1Max:2,
            num2Max:2,
            allowedOperators:["*"],
            same:false
        },    
        {
            name:"multiplication tables",
            num1Min:1,
            num2Min:1,
            num1Max:1,
            num2Max:1,
            allowedOperators:["*"],
            same:false
        },  
    ],

   
    
  
]

export default possibleOptions;