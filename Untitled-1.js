let p = fetch("https://api.chucknorris.io/jokes/random")
p.then((value1)=>{
    return value1.json();
}).then((value2)=>{
    console.log(value2);
})
