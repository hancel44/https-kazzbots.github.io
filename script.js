function runBot() {
    alert("Bots zimeanza kufanya kazi!");
    
    // Mfano wa bot ya Instagram
    console.log("Inafanya like kwa posts...");
    console.log("Inafollow watu...");
    
    // Ongeza matangazo hapa
    showAds();
}

function showAds() {
    // Hii ni mfano wa matangazo
    const ads = [
        "Ununue Bundles kwa 50% punguzo!",
        "Pata mkopo wa haraka leo!",
        "Jiunge na mafunzo yetu ya online!"
    ];
    
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    document.querySelector(".ad-space").innerHTML = `
        <h3>MATANGAZO</h3>
        <p>${randomAd}</p>
    `;
}
