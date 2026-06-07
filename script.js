const Services = [
    {
        name: "Netflix",
        price: 10,
        desc: "Enjoy unlimited movies, TV shows, and anime in Ultra HD 4K resolution on any device.",
        color: "#E50914",
        tags: ["Movies & TV"],
        logo: "N",
        logoColor: "#E50914"
    },
    {
        name: "YouTube Premium",
        price: 10,
        desc: "Enjoy YouTube and YouTube Music ad-free, offline, and in the background.",
        color: "#B80006",
        tags: ["Movies & TV", "Music"],
        logo: "YouTube",
        logoColor: "#E7000B"
    },
    {
        name: "Disney+",
        price: 10,
        desc: "Experience original series, blockbusters from Marvel, Star Wars, Pixar, and Disney in 4K.",
        color: "#113CC0",
        tags: ["Movies & TV"],
        logo: "Disney+",
        logoColor: "#4EACFC"
    },
    {
        name: "Amazon Prime Video",
        price: 10,
        desc: "Access to a vast library of movies, TV shows, and Amazon Originals. Included with Amazon Prime.",
        color: "#00A8E1",
        tags: ["Movies & TV"],
        logo: "Prime",
        logoColor: "#00A8E1"
    },
    {
        name: "Amazon Gift Card",
        price: null, // Varies by denomination
        desc: "The most popular gift card for shopping millions of products on Amazon.com.",
        color: "#FF9900",
        tags: ["Gift Cards"],
        logo: "Amazon",
        logoColor: "#FF9900"
    },
    {
        name: "Spotify Premium",
        price: 10,
        desc: "Ad-free music, podcasts, and offline listening with unlimited skips.",
        color: "#1DB954",
        tags: ["Music"],
        logo: "Spotify",
        logoColor: "#1DB954"
    },
    {
        name: "Hulu",
        price: 10,
        desc: "Stream current season TV shows, hit movies, and Hulu Originals. Options for Live TV available.",
        color: "#1CE783",
        tags: ["Movies & TV"],
        logo: "Hulu",
        logoColor: "#1CE783"
    },
    {
        name: "HBO Max",
        price: 10,
        desc: "Stream iconic series, blockbuster movies, and new originals from HBO, DC, and Warner Bros.",
        color: "#672DD8",
        tags: ["Movies & TV"],
        logo: "HBO Max",
        logoColor: "#672DD8"
    },
    {
        name: "App Store & iTunes Gift Card",
        price: null, // Varies by denomination
        desc: "For apps, games, music, movies, TV shows, iCloud, and more on Apple devices.",
        color: "#A2AAAD",
        tags: ["Gift Cards"],
        logo: "Apple",
        logoColor: "#A2AAAD"
    },
    {
        name: "Apple Music",
        price: 10,
        desc: "Over 100 million songs, ad-free. Listen offline, discover new music, and enjoy spatial audio.",
        color: "#FC3C44",
        tags: ["Music"],
        logo: "Apple Music",
        logoColor: "#FC3C44"
    },
    {
        name: "Xbox Game Pass Ultimate",
        price: 10,
        desc: "Hundreds of high-quality games, including new releases, for console, PC, and cloud gaming. Includes Xbox Live Gold and EA Play.",
        color: "#107C10",
        tags: ["Gaming"],
        logo: "Xbox",
        logoColor: "#107C10"
    },
    {
        name: "PlayStation Plus Premium",
        price: 10,
        desc: "Hundreds of games from PlayStation catalogs, classic titles, game trials, and cloud streaming access.",
        color: "#003087",
        tags: ["Gaming"],
        logo: "PS",
        logoColor: "#003087"
    },
    {
        name: "Visa Gift Card",
        price: null, // Varies by denomination
        desc: "A versatile gift card accepted anywhere Visa debit cards are, for ultimate flexibility.",
        color: "#1A2E70",
        tags: ["Gift Cards"],
        logo: "Visa",
        logoColor: "#1A2E70"
    },
    {
        name: "Google Play Gift Card",
        price: null, // Varies by denomination
        desc: "Access to millions of apps, games, movies, TV shows, books, and more on the Google Play Store.",
        color: "#4285F4",
        tags: ["Gift Cards"],
        logo: "Google Play",
        logoColor: "#4285F4"
    },
    {
        name: "Target Gift Card",
        price: null,
        desc: "Shop for groceries, electronics, home goods, apparel, and more at Target stores and online.",
        color: "#CC0000",
        tags: ["Gift Cards"],
        logo: "Target",
        logoColor: "#CC0000"
    },
    {
        name: "Walmart Gift Card",
        price: null,
        desc: "Shop for groceries, electronics, home goods, apparel, and more at Walmart stores and online.",
        color: "#007DC5",
        tags: ["Gift Cards"],
        logo: "Walmart",
        logoColor: "#007DC5"
    },
    {
        name: "Starbucks Gift Card",
        price: null,
        desc: "Enjoy coffee, tea, food, and merchandise at Starbucks locations worldwide.",
        color: "#036635",
        tags: ["Gift Cards"],
        logo: "Starbucks",
        logoColor: "#036635"
    },
    {
        name: "Steam Gift Card",
        price: null,
        desc: "Access to thousands of PC games, software, and hardware on the Steam platform.",
        color: "#1B2838",
        tags: ["Gift Cards", "Gaming"],
        logo: "Steam",
        logoColor: "#C7D5E0"
    },
    {
        name: "Paramount+",
        price: 10,
        desc: "Exclusive originals, hit movies, and live sports from CBS, BET, Comedy Central, MTV, Nickelodeon, and Smithsonian Channel.",
        color: "#0064FF",
        tags: ["Movies & TV", "Sports"],
        logo: "P+",
        logoColor: "#0064FF"
    },
    {
        name: "Discovery+",
        price: 10,
        desc: "Real-life entertainment with exclusive originals, true crime, paranormal, and nature documentaries from Discovery, HGTV, Food Network, and more.",
        color: "#E20074",
        tags: ["Movies & TV"],
        logo: "D+",
        logoColor: "#E20074"
    },
    {
        name: "Peacock Premium",
        price: 10,
        desc: "Stream current NBC shows, movies, live sports, and Peacock Originals.",
        color: "#000000",
        tags: ["Movies & TV", "Sports"],
        logo: "Peacock",
        logoColor: "#00B6CC"
    },
    {
        name: "ESPN+",
        price: 10,
        desc: "Live sports, exclusive originals, and an on-demand library from the world of ESPN.",
        color: "#CD252C",
        tags: ["Sports"],
        logo: "ESPN+",
        logoColor: "#CD252C"
    },
    {
        name: "Nintendo Switch Online + Expansion Pack",
        price: 10,
        desc: "Online play, a library of NES, SNES, N64, and Genesis games, cloud saves, and DLC for select games.",
        color: "#E60012",
        tags: ["Gaming"],
        logo: "Switch",
        logoColor: "#E60012"
    },
    {
        name: "Crunchyroll",
        price: 10,
        desc: "The world's largest library of anime, manga, and Asian dramas.",
        color: "#FF5E00",
        tags: ["Movies & TV"],
        logo: "CR",
        logoColor: "#FF5E00"
    },
    {
        name: "Pandora Premium",
        price: 10,
        desc: "Ad-free personalized radio with on-demand music, custom playlists, and offline listening.",
        color: "#00A0B0",
        tags: ["Music"],
        logo: "Pandora",
        logoColor: "#00A0B0"
    },
    {
        name: "Shahid VIP",
        price: 10,
        desc: "The leading Arabic streaming platform with exclusive series, movies, and live TV.",
        color: "#CC0000",
        tags: ["Movies & TV"],
        logo: "Shahid",
        logoColor: "#CC0000"
    },
    {
        name: "NordVPN",
        price: 10,
        desc: "Secure and private internet access with advanced encryption and a vast server network.",
        color: "#2C405A",
        tags: ["VPN & Privacy"],
        logo: "NordVPN",
        logoColor: "#2C405A"
    },
    {
        name: "ExpressVPN",
        price: 10,
        desc: "High-speed, secure, and anonymous VPN service with servers in 94 countries.",
        color: "#E3121F",
        tags: ["VPN & Privacy"],
        logo: "ExpressVPN",
        logoColor: "#E3121F"
    }
];

const container = document.getElementById('card-container');
const whatsappPhoneNumber = "96171239913"; // REPLACE WITH YOUR ACTUAL PHONE NUMBER
const defaultWhatsappMessage = "Hello, I'm interested in your services!";

function CreateCard(service) {
    const card = document.createElement('div');
    card.classList.add('service-card');

    const banner = document.createElement('div');
    banner.classList.add('card-banner');
    banner.style.backgroundColor = service.color;

    const leftCol = document.createElement('div');
    leftCol.classList.add('banner-left');


    const tagsWrapper = document.createElement('div');
    tagsWrapper.classList.add('tags-wrapper');

    service.tags.forEach(tagText => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tagText;
        tagsWrapper.appendChild(tagElement);
    });

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.innerText = service.name;

    leftCol.appendChild(tagsWrapper);
    leftCol.appendChild(title);

    const rightCol = document.createElement('div');
    rightCol.classList.add('banner-right');

    const badge = document.createElement('div');
    badge.classList.add('brand-badge');
    badge.innerText = service.logo;
    badge.style.color = service.logoColor;

    rightCol.appendChild(badge);

    banner.appendChild(leftCol);
    banner.appendChild(rightCol);

    const content = document.createElement('div');
    content.classList.add('card-content');

    const desc = document.createElement('p');
    desc.classList.add('card-desc');
    desc.innerText = service.desc;

    const priceText = document.createElement('p');
    priceText.classList.add('card-price');
    priceText.innerText = `$${service.price}/mo`;

    const whatsappLink = document.createElement('a');
    whatsappLink.classList.add('card-btn'); 
    whatsappLink.innerText = "Contact us on Whatsapp";

    const message = encodeURIComponent(`Hi, I'm interested in the ${service.name}.`);
    whatsappLink.href = `https://wa.me/${whatsappPhoneNumber}?text=${message}`;
    whatsappLink.target = "_blank"; // Open in a new tab

    content.appendChild(desc);
    content.appendChild(priceText);
    content.appendChild(whatsappLink);

    card.appendChild(banner);
    card.appendChild(content);

    return card;
}

function renderCards(filteredServices) {
    if (!container) return;
    container.innerHTML = "";

    filteredServices.forEach(service => {
        container.appendChild(CreateCard(service));
    });
}


const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active')?.classList.remove('active');
        button.classList.add('active');
        const rawText = button.textContent || button.innerText;
        const selectedFilter = rawText.trim();
        let filteredServices = [];

        // Determine which services to render based on the button's text
        if (selectedFilter === "All Services") {
            filteredServices = Services;
        } else if (selectedFilter === "Movies & TV") {
            filteredServices = Services.filter(s => s.tags.includes("Movies & TV"));
        } else if (selectedFilter === "Music") {
            filteredServices = Services.filter(s => s.tags.includes("Music"));
        } else if (selectedFilter === "Gaming") {
            filteredServices = Services.filter(s => s.tags.includes("Gaming"));
        } else if (selectedFilter === "Sports") {
            filteredServices = Services.filter(s => s.tags.includes("Sports"));
        } else if (selectedFilter === "VPN & Privacy") {
            filteredServices = Services.filter(s => s.tags.includes("VPN & Privacy"));
        } else if (selectedFilter === "Gift Cards") {
            filteredServices = Services.filter(s => s.tags.includes("Gift Cards"));
        } else {
            // Fallback 
            console.warn(`No specific filter rule for "${selectedFilter}". Falling back to rendering all services.`);
            filteredServices = Services;
        }

        renderCards(filteredServices);
    });
});

renderCards(Services);


if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}
