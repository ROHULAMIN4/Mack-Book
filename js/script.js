


function basicBalance(defoultMemory){
    const basic=document.getElementById(defoultMemory);
    defoultMemory.innerText=0;
   return basic;
}
// update ba;ance for extra equipment 
/* function UpdateBalance(extraMemoryCost,extraStorageCost,lastMemoryCost,paidShip){
    const basic=document.getElementById(extraMemoryCost);
   
    extraMemoryCost.innerText=180;
    const secondStorage=document.getElementById(extraStorageCost);
    extraStorageCost.innerText=100;

    const TerabiteSsdCost=document.getElementById(lastMemoryCost);
    lastMemoryCost.innerText=180;

    const paidShpCost=document.getElementById(paidShip);
    paidShip.innerText=20;
    return paidShip()

} */
   const storage=document.getElementById('extrastorage')

function totalCost(){

    const memoryCostText=document.getElementById('extra-memory');
    const memoryCost=parseFloat(memoryCostText.innerText);

    const storageCostText=document.getElementById('extrastorage')
    const storageCost=parseFloat(storageCostText.innerText);
    const deliveryCostText=document.getElementById('delivery-charge')
    const deliveryCost=parseFloat(deliveryCostText.innerText);
    const total=document.getElementById('totallSum');
     total.innerText=memoryCost+storageCost+deliveryCost+1299;
    return total;

}
function pomo(){
    const totallText=document.getElementById('totallSum');
    const totallamound=parseFloat(totallText.innerText) ;
    console.log(totallamound)
    const pomo=document.getElementById('CoponCode');
    const pomoAmond=parseFloat(pomo.innerText);
    pomo.innerText=totallamound;
    console.log(pomoAmond)
}

// 8 Gb memory button 
document.getElementById('8gb-memory').addEventListener('click',function(){
    const defoultMemory=document.getElementById('extra-memory');
    
    basicBalance(defoultMemory)
    totalCost()
    pomo()
    
})
// 16 Gb Memory button 
document.getElementById('16gb-memory').addEventListener('click',function(){
    const extraMemoryText=document.getElementById('extra-memory');
    // UpdateBalance(extraMemoryCost);
    const  extraMemoryCost=extraMemoryText.innerText;
    extraMemoryText.innerText=180;
    console.log(extraMemoryCost)
    totalCost()
    pomo()
})


// 256Gb SSD button 
document.getElementById('250-SSD').addEventListener('click',function(){
    const defoultMemory=document.getElementById('extrastorage');
    basicBalance(defoultMemory)
    totalCost()
    pomo()
})
// 512 GB SSD  button 
document.getElementById('512-SSD').addEventListener('click',function(){
    const extraStorageText=document.getElementById('extrastorage');
    const extraStorageCost=extraStorageText.innerText;
    extraStorageText.innerText=100;
    console.log(extraStorageCost);

  
    totalCost()
    pomo()
})
// 1TB SSD BUtton 
document.getElementById('1-TB').addEventListener('click',function(){
   
   const teraBiteStorageText=document.getElementById('extrastorage');
   const  teraBiteStorageCost=teraBiteStorageText.innerText;
   teraBiteStorageText.innerText=180;
   console.log(teraBiteStorageCost)
   totalCost()
   pomo()

})

// freeShipping cost button 
document.getElementById('free-Shipping-Cost').addEventListener('click',function(){
    const defoultMemory=document.getElementById('delivery-charge');
    basicBalance(defoultMemory);
    totalCost()
    pomo()
    
})
// paid shipping delivery
document.getElementById('paid-shipping').addEventListener('click',function(){
    const paidShipText=document.getElementById('delivery-charge');
    const paidShipCost=paidShipText.innerText;
    paidShipText.innerText=20;
    console.log(paidShipCost)
   
    totalCost()
    pomo()
    
    
})
document.getElementById('submit').addEventListener('click',function(){
  const coponPomo=document.getElementById('CoponCode');
  const coponAmound=parseFloat( coponPomo.innerText);
  const inputField=document.getElementById('copon-id').value;
  if(inputField=='stevekaku'){
    coponPomo.innerText=coponAmound-(coponAmound/5);
  }
  inputField=document.getElementById('copon-id').value=''
})
