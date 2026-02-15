export const DATA = {
    profile: {
        name: "Abdallah Alfayoumi (AQABAWI)",
        displayName: "Abdallah Alfayoumi🎬",
        username: "aqabwi",
        bio: "Photography Videography العقباوي Filmmaker/Freediver/Photographer Aqaba 🇯🇴",
        roles: [
            "Filmmaker",
            "Photographer",
            "Videographer",
            "Editor",
            "Freediver",
            "Water Lifeguard"
        ],
        location: "Aqabawi, Amman, Jordan",
        availability: "Available now for freelance and full-time work, willing to relocate",
        memberSince: "August 11, 2018"
    },
    social: {
        instagram: "https://www.instagram.com/aqabwi",
        behance: "https://www.behance.net/aqabawi",
        extraHandles: [
            "@3aqabawi",
            "@aqabwi on Threads"
        ]
    },
    behanceStats: {
        projectViews: 1216,
        appreciations: 72,
        followers: 17,
        following: 3
    },
    instagramStats: {
        posts: 38,
        followers: 2743,
        following: 2115
    },
    clients: [
        "Universal Import & Export",
        "Special Operation Force Exhibition and Conference",
        "Arab E-Sports Championship",
        "GIZ",
        "Transport Middle East 2025",
        "JEG",
        "Samsung",
        "Saraya Aqaba Beach Club",
        "Hilton Hotel Group",
        "Al Manara, a Luxury Collection Hotel",
        "Gamarde",
        "Almond Coffee Shop",
        "Coffee House",
        "Mokha Coffee"
    ]
} as const;

export type DataType = typeof DATA;
