// প্রোডাক্টে ক্লিক করলে পপ-আপ ওপেন করার ফাংশন
function openDetails(name, imgSrc, weight, price, company) {
    const modal = document.getElementById("productModal");
    
    // মডালের ভেতরের ডেটা পরিবর্তন করা
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("modalWeight").innerText = weight;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalCompany").innerText = company;
    
    // মডালটি স্ক্রিনে দেখানো (flex এর মাধ্যমে সেন্টারে আসবে)
    modal.style.display = "flex";
}

// ক্রস (X) চিহ্নে ক্লিক করলে পপ-আপ বন্ধ করার ফাংশন
function closeDetails() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
}

// পপ-আপ বক্সের বাইরে ফাঁকা জায়গায় ক্লিক করলেও যাতে বন্ধ হয়ে যায়
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}