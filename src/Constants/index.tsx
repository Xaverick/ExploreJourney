import img1 from '@/assets/Packages/img1.png';
import img2 from '@/assets/Packages/img2.png';
import img3 from '@/assets/Packages/img3.png';
import img4 from '@/assets/Packages/img4.png';
import img5 from '@/assets/Packages/img5.png';
import img6 from '@/assets/Packages/img6.png';


const packages = [
    {
        title: "Golden Triangle Tour",
        img: img1,
        description: "The Golden Triangle Tour in India covers Delhi, Agra, and Jaipur, showcasing iconic landmarks like the Taj Mahal, Jaipur’s palaces, and Delhi’s historic sites",
        days: '4 Nights and 5 Days',
    },
    {
        title: "Rajasthan Tour",
        img: img2,
        description: "The Rajasthan Tour explores majestic forts, palaces, and desert landscapes, highlighting cities like Jaipur, Udaipur, Jodhpur, and Jaisalmer. ",
        days: '13 Nights & 15 Days',
    },
    {
        title: "Kerala Tour",
        img: img3,
        description: "The Kerala Tour showcases serene backwaters, lush green landscapes, beaches, and hill stations. Known as \"God's Own Country\"",
        days: '4 Nights & 5 Days',
    },
    {
        title: "Torronto",
        img: img4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
    {
        title: "Baku",
        img: img5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
    {
        title: "Dubai",
        img: img6,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
]


const popularPackages = [
    {
        title: "Switzerland",
        img: img1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
    {
        title: "Maldives",
        img: img2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
    {
        title: "Berlin",
        img: img3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
    {
        title: "Torronto",
        img: img4,  
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
        days: 5,
    },
]



const kashmir = {
    title: "Kashmir",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",

    details: [
        {
            key: 'Destination', 
            value: "Kashmir"
        },
        {
            key: 'Departure', 
            value: "New Delhi"
        },
        {
            key: 'Departure Time', 
            value: "10:00 AM"
        },
        {
            key: 'Return Time', 
            value: "10:00 PM"
        },

    ],
    included: ["lunch", "breakfast", "dinner"],

    notIncluded: ["airport pick-up", "airport drop"],
    
    gallery : [
        img1, img2, img3, img4, img5, img6
    ],


    // tourPlan: {
    //     day1: {
    //         title: "Day 1: Departure",
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
    //         points: ['dont,', 'breakfast', 'lunch', 'dinner']
    //     },
    //     day2: {
    //         title: "Day 2: Visiting Zurich, Geneva and Zermatt",
    //         description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
    //         points: ['dont,', 'breakfast', 'lunch', 'dinner']
    //     },
    //     day3: {
    //         title: "Day 3: Rest",
    //         description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
    //         points: ['dont,', 'breakfast', 'lunch', 'dinner']
    //     },
    //     day4: {
    //         title: "Day 4: Historical Tour",
    //         description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
    //         points: ['dont,', 'breakfast', 'lunch', 'dinner']
    //     },
    //     day5: {
    //         title: "Day 5: Return",
    //         description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
    //     },
    // }
    tourPlan: {
        itinerary: [
            {       
                heading: "Day 1 - Arrival in Delhi",
                content: <p>
                    On Arrival in Delhi Airport (in morning), meet and greet by our representative and and followed by transfer to hotel.

                    DELHI: one of India's fastest growing cities has spread far beyond the "seven cities" created between the 13th and the 17th centuries. It has sprawled over the west bank of the Yamuna and now straddles the river. Remnants of the past survive cheek -by-jowl with skyscrapers, residential colonies and bustling commercial complexes. Delhi has some of the finest museums in the country. Its boutiques and shopping arcades offer access to a wealth of traditional and contemporary crafts from all over the country. It has specialty restaurants to please the gourmet, open parks and gardens ablaze with flowers, and in the winter months particularly, a variety of cultural events. Its many-layered existence is tantalizing and can entice the curious traveler into a fascinating journey of discovery

                    Upon arrival at hotel, check -in at the hotel.

                    Later leave for sightseeing tour of Old & New Delhi

                    Jama Masjid (Friday mosque), drive past the Red Fort, Raj Ghat, India Gate (the war memorial dedicated to the martyr’s of World War – 1) , The President's House -formerly the Viceroy's Palace, Parliament House and the Secretariat buildings -an interesting blend of the Victorian and 20th century architecture. and the Secretariat buildings -an interesting blend of the Victorian and 20th century architecture. Qutab Minar etc…

                    Enjoy the cycle Rickshaw ride at nororw street of famour Chadni Chowk market - In the heart of Old Delhi, Chandni Chowk is a busy shopping area with markets full of spices, dried fruit, silver jewelry and vivid saris, while the narrow side streets are crowded with tiny shops selling essential oils, stationery and tradit ional Indian sweets. Nearby, the vast Mughal-era Red Fort now houses a m useum complex, and the 17th-century Jama Masjid is a huge red-sandstone mosque with towering minarets.

                    Overnight stay at hotel.
                </p>,
                move: false,
                open: false
            },
            {
                heading: "Day 2 - Delhi – Agra (204 kms / 4 ½ hrs)",
                content: <p>
                    <b>Morning after breakfast poceed to drive for Agra.</b>
                    <br />
                    Agra, is famous as the home to one of the Seven Wonders of the World – Taj Mahal. The architectural splendour of the mausoleums, the fort and the palaces in Agra is a vivid reminder of the opulence of the legendary Mughal Empire. Agra is known for its superb inlay work on marble and soapstone by artisans who are hereditary craft persons.
                    <br />
                    <br />
                    Upon arrival at hotel, check -in at the hotel.
                    <br />
                    Affernoon leave for visit - Agra Red Fort - built by three generations of Mughal Emperors starting from Akbar the Great in 1565 AD, which is a masterpiece of design and construction. It housed both the residential Palaces of the Royal family and the military quarters and offers other formidable views of the Taj Mahal from across the river.
                    <br />
                    Taj Mahal - (the seventh wonder of world), built by Shah Jahan as a memorial to his wife Mumtaz Mahal by the bank’s river Yamuna. After her untimely death, Shah Jahan had her mortal remains buried in this mausoleum. And after his own demise he was placed to rest next to his beloved queen in the same mausoleum The Taj has been called the most extravagant monument ever built for the sake of love. The great monument took almost 22 years to build and was completed in 1653. (The Taj Mahal is closed on Fridays)
                    <br />
                    Evening free for shopping at local bazar of Agra - Various small shops in Agra sell handicrafts and stone products such as jewelry boxes, and plaques. Leather goods of good quality are also available in the markets. Most products have some dedication to the Taj Mahal.
                    <br />
                    Overnight stay at hotel.
                </p>,
                move: false,
                open: false
            },
            {
                heading: "Day 3 - Agra – Fatehpur Sirki – Jaipur (235 kms / 4 ½ hrs)",
                content: <p>
                    Morning breakfast at hotel and proceed to leave for Jaipur, en-route visiting Fatehpur Sikri

                    Fatehpur Sikri – an extraordinary city built by Akbar the Great in 1569 AD in red sandstone, with its forts, palaces, mosques and was abandoned 14 years after its creation due to political reasons.

                    Continue drive to Jaipur……

                    Jaipur, is the bustling capital city and a business centre with all the trapping of modern metropolis but yet flavored strongly with an age-old charm that never fails to surprise a traveler. Founded in AD 1727 by Sawai Jai Singh II, Jaipur the capital of Rajasthan is popularly known as the Pink City with broad avenues and spacious gardens. The capital of Rajasthan, Jaipur is steeped in history and culture

                    Upon arrival at hotel, check -in at the hotel.

                    Overnight stay at hotel.
                </p>,
                move: false,
                open: false
            }

        ],
        inclusion: [
            <p>
                Accommodation based on double / twin sharing room for 06 Nights with base category of rooms as mentioned above or similar at hotels.
            </p>,
            <p>
                Meal Plan: Breakfast only at all the hotels.
            </p>,
            <p>
                Cycle Rickshaw ride in Delhi & Jaipur.
            </p>,
            <p>
                Tonga Ride for Taj Mahal visit in Agra.
            </p>
        ],
        exclusion: [
            <p>
               Any services other than the mentioned above.
            </p>,
            <p>
                 Any lunches or dinners (other than mentioned above)
            </p>
        ]
    }
}




export { packages, popularPackages, kashmir }