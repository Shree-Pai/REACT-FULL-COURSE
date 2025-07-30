function minCoinsToMakeAmount(n,coins,amount){
    count=0;
    for(let i=0;i<=n-1;i++){
        for(let j=i+1;j<=n-1;j++){
            if(coins[i]<coins[j]){
                let temp=coins[i];
                coins[i]=coins[j];
                coins[j]=temp;
            }
        }   
    }
    for(let i=0;i<=n-1;i++){
        while(amount>=coins[i]){
            amount-=coins[i];
            count++;
        }
    }
    return amount === 0 ? count : -1;
}
console.log(minCoinsToMakeAmount(2,[5,10],34)); 
console.log(minCoinsToMakeAmount(3,[1,2,5],6)); 