// ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?

// connected to index.html

// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।

const allH2Tags = document.getElementsByTagName("h2");

for (const h2Tag of allH2Tags) {
  h2Tag.style.color = "lightblue";
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।

const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "tomato";

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা

const allCards = document.getElementsByClassName("card");

for (const card of allCards) {
  card.style.borderRadius = "30px";
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

const pandaBtnBuyNowAll = document.getElementsByClassName("btn-remove");
console.log(pandaBtnBuyNowAll);

for (const pandaBtnBuyNow of pandaBtnBuyNowAll) {
  pandaBtnBuyNow.addEventListener("click", function () {
    // alert("Thank you for buying Panda!");
    // pandaBtnBuyNow.innerHTML = "Thank you for buying Panda!";
    // pandaBtnBuyNow.parentElement.innerHTML = "Thank you for buying Panda!";
    pandaBtnBuyNow.parentNode.parentNode.parentNode.remove();
  });
}

/* 
const pandaBtnBuyNowAll = document.getElementsByClassName("panda-btn-buy-now");

// console.log(pandaBtnBuyNowAll);

for (const pandaBtnBuyNow of pandaBtnBuyNowAll) {
  console.log(pandaBtnBuyNow.innerText);
  /* if (pandaBtnBuyNow.innerHTML === "Buy Now\n") {
    console.log("Buy Now");
  } */
/*   pandaBtnBuyNow.addEventListener("click", function (event) {
    // console.log("panda-btn-buy-now");
    document
      .getElementById("main-section")
      .addEventListener("click", function (event) {
        // finding the parentNode of the clicked button
        // console.log(event.target.parentNode.parentNode.parentNode);
        // method to remove the element
        event.target.parentNode.parentNode.parentNode.remove();
      });
  }); */
// } */
/* 
// successfully removed the element from the DOM 
document
  .getElementById("main-section")
  .addEventListener("click", function (event) {
    // finding the parentNode of the clicked button
    // console.log(event.target.parentNode.parentNode.parentNode);
    /* // 1st method to remove the element
    event.target.parentNode.parentNode.parentNode.remove(); */
// }); */
/* 
document
  .getElementById("main-section")
  .addEventListener("click", function (event) {
    // console.log("You clicked on the main section");
    // console.log(event.target);
    // event.target.parentNode.removeChild(event.target);
    // event.target.parentNode.remove();
    /* const removeChild = event.target.parentNode.removeChild(event);
    console.log(removeChild); */
// /*
// // not working
//     if (event.target.innerHTML === "Buy Now") {
//   alert("You have bought the product");
// } */
//   });
//  */
// const allBuyNowButtons = document.getElementsByTagName("button");

// for (const buyNowButton of allBuyNowButtons) {
//   //   console.log("buy now");
//   buyNowButton.addEventListener("click", function () {
//     console.log("buy now");
//   });
// }

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।
