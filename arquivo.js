const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")



function convertvalues() {
   const inputcurrencyvalue = document.querySelector(".input-currency").value
   const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
   const currencyvaluetoconverted = document.querySelector(".currency-value")



   const dolartoday = 6.5
   const eurotoday = 6.3
   const librayoday = 7.8

    

if (currencyselect.value == "Dolar"){
   
   currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(inputcurrencyvalue / dolartoday)




}

if (currencyselect.value == "Euro"){

   currencyvaluetoconverted.innerHTML= new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency:"EUR"
   }).format(inputcurrencyvalue/eurotoday)

   
}

if (currencyselect.value == "Libra"){

   currencyvaluetoconverted.innerHTML= new Intl.NumberFormat("en-GB",{
      style: "currency",
      currency:"GBP"
   }).format(inputcurrencyvalue/librayoday)
}






   currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputcurrencyvalue)



}

function changecurrency(){
const currencyname = document.getElementById("currency-name")
const currencyimg = document.querySelector(".currency-img")



if( currencyselect.value == "Dolar"){
   currencyname.innerHTML = ("Dolar americano")
   currencyimg.src="./assests/estados-unidos (1) 1.png"
   

}

if( currencyselect.value == "Euro"){
   currencyname.innerHTML = ("Euro")
   currencyimg.src="./assests/euro-img.png"
}

if (currencyselect.value == "Libra"){
   currencyname.innerHTML = ("Libra")
   currencyimg.src="./assests/libra 1.png"
}

convertvalues()
}


currencyselect.addEventListener("change" , changecurrency)
convertbutton.addEventListener("click", convertvalues)


