// Store the wallet amount to your local storage with key "amount"




let get = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText=get;
function add(){
  let ad = document.getElementById("amount").value;
  // arr.push(ad);
  // console.log(arr);

  localStorage.setItem("amount",JSON.stringify(+ad))
  window.location.reload();
}





