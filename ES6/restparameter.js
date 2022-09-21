//rest parameter come in view to pass many values for little parameters while function calling
function mera(...args){
    console.log(args)
    let result = 0;
    for (let index = 0; index < args.length; index++) {
        result +=args[index];
        
    }
    console.log(result)
}
mera(3,5,7,8)