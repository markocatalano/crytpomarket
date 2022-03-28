//Primera Entrega TP Final
//Clase: 30325
//Alumno: Catalano Marco


//Mensaje Bienvenida
alert("!!Bienvenido a CrytpoMarket!!\nAqui usted va a poder comprar Cryptomonedas con Pesos Argentinos")

//Selecion de Crytpo a Comprar
let var1=prompt("Ingrese nombre de cryptomoneda que desea comprar:\nPuede elegir entre algunas de estas opciones: "+ 
"\nBitcoin\nEthereum\nUSDT\nDai ").toLowerCase()
let var2=var1;
while(var2!=""){
    switch(var2){
        case "bitcoin":
            alert("Va a realizar una compra de Bitcoin");
            break;
        case "ethereum":
            alert("Va a realizar una compra de Ethereum");
            break;
        case "usdt":
            alert("Va a realizar una compra de usdt");
            break;
        case "dai":
            alert("Va a realizar una compra de Dai");
            break;
        default:
            alert("Ups! Ha ocurrido un error.\n O no poseemos esa crypto o usted " +
            "ha ingresado un nombre incorrecto")
            break;
        }
    var2=prompt("Ha elegido: "+ var2 + "\nSi es correcto aprete ACEPTAR \nSi es incorrecto vuelva a ingresar "+ 
    "el nombre de la crypto a comprar")
    }

    
//Bucle en el caso que ingrese mal el nombre de la la crypto(Provisorio)
for (let i of var1){
    if (i=="b"){
        var1="bitcoin";
        break;
    }else if(i=="e" ){
        var1="ethereum";
    }else if(i=="s"){
        var1="usdt"
    }else if(i=="a"){
        var1="dai"
    }else{
        var1;
    }   
}

//Monto a comprar:
let var3=prompt("Ingrese el monto que desea comprar en pesos argentinos($): ")
alert("Usted va a comprar "+var1+" utilizando $"+var3+" pesos argentinos\nPrecione Aceptar si es correcto.");

//Cotizaciones de Cryptos:
const cotiBtc=5000000;
const cotiEth=1000000;
const cotiUsdt=210;
const cotiDai=210;

// Funciones para conversiones de fiat a cryptos
const calculo1= (monto,precio1) =>((monto/precio1).toFixed(7));
const calculo2= (monto,precio2) =>((monto/precio2).toFixed(2));

//Calculos 
if (var1=="bitcoin"){
    alert("!Felicitaciones!\nUsted compro: "+ calculo1(var3,cotiBtc) +" btc");
}
else if(var1=="ethereum"){
    alert("!Felicitaciones!\nUsted compro: "+ calculo1(var3,cotiEth) +" Eth");
}
else if(var1=="usdt"){
    alert("!Felicitaciones!\nUsted compro: "+ calculo2(var3,cotiUsdt) +" usdt");
}
else {
    alert("!Felicitaciones!\nUsted compro: "+ calculo2(var3,cotiDai) +" Dai");
}
