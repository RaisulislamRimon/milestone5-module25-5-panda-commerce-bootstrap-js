// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।

const allH2Tags = document.getElementsByTagName("h2");

for (const h2Tag of allH2Tags) {
  h2Tag.style.color = "lightblue";
}
