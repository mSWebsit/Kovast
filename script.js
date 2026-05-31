// 1. Data Source Array
const Services = [
    {
        name: "Netflix",
        price: 10,
        desc: "Enjoy unlimited movies, TV shows, and anime in Ultra HD 4K resolution on any device.",
        color: "#E50914",
        tags: ["video"],
        logo: "N",
        logoColor: "#E50914"
    },
    {
        name: "Disney+",
        price: 10,
        desc: "Experience original series, blockbusters from Marvel, Star Wars, Pixar, and Disney in 4K.",
        color: "#113CC0",
        tags: ["video"],
        logo: "Disney+",
        logoColor: "#4EACFC"
    },
    {
        name: "YouTube Premium",
        price: 10,
        desc: "Enjoy YouTube and YouTube Music ad-free, offline, and in the background.",
        color: "#B80006",
        tags: ["video", "music"],
        logo: "YouTube",
        logoColor: "#E7000B"
    },
    {
        name: "Spotify Premium",
        price: 10,
        desc: "Enjoy unlimited movies, TV shows, and anime in Ultra HD 4K resolution on any device.",
        color: "#00C144",
        tags: ["music"],
        logo: "Spotify",
        logoColor: "#00BC7D"
    },
];


const container = document.getElementById('card-container');


function CreateCard(service) {
    const card = document.createElement('div');
    card.classList.add('service-card');

    const banner = document.createElement('div');
    banner.classList.add('card-banner');
    banner.style.backgroundColor = service.color;

    const leftCol = document.createElement('div');
    leftCol.classList.add('banner-left');

    // Container box grouping multiple tags inline
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

    const button = document.createElement('button');
    button.classList.add('card-btn');
    button.innerText = "Contact us on Whatsapp";

    content.appendChild(desc);
    content.appendChild(priceText);
    content.appendChild(button);

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
        const selectedText = rawText.replace(/[^\x00-\x7F]/g, "").trim().toUpperCase();

        // Evaluate conditions against standard tag strings
        if (selectedText === "ALL SERVICES") {
            renderCards(Services);
        } else if (selectedText.includes("MOVIES") || selectedText.includes("TV")) {
            const videoCards = Services.filter(s => s.tags.includes("video"));
            renderCards(videoCards);
        } else if (selectedText.includes("MUSIC")) {
            const musicCards = Services.filter(s => s.tags.includes("music"));
            renderCards(musicCards);
        } else {
            // Precise fallback configuration check mapping directly to literal string match
            const generalFilter = Services.filter(s => s.tags.includes(selectedText));
            renderCards(generalFilter);
        }
    });
});
// 5. Initial App Lifecycle Run
renderCards(Services);

// Check if Lucide script exists on window global namespace before initializing
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}
