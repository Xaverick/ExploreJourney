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
        title: "Himachal Tour",
        img: img4,
        description: "The Tour offers a scenic journey through the Himalayas, combining modern city life in Chandigarh with the colonial charm of Shimla and the natural beauty of Manali.",
        days: '6 Nights & 7 Days',
    },
    {
        title: "Central India Tour",
        img: img5,
        description: "The Central India Tour explores rich cultural heritage and wildlife, featuring destinations like Khajuraho’s temples, and the wildlife reserves of Kanha and Bandhavgarh.",
        days: '10 Nights & 11 Days',
    },
    {
        title: "Beautiful Nepal Tour",
        img: img6,
        description: "The Beautiful Nepal Tour combines Kathmandu’s rich heritage with Pokhara’s scenic beauty, offering temple visits and stunning Himalayan views.",
        days: '6 Nights & 7 Days',
    },
]


const popularPackages = [
 {
        title: "Kerala Tour",
        img: img3,
        description: "The Kerala Tour showcases serene backwaters, lush green landscapes, beaches, and hill stations. Known as \"God's Own Country\"",
        days: '4 Nights & 5 Days',
    },
    {
        title: "Himachal Tour",
        img: img4,
        description: "The Tour offers a scenic journey through the Himalayas, combining modern city life in Chandigarh with the colonial charm of Shimla and the natural beauty of Manali.",
        days: '6 Nights & 7 Days',
    },
    {
        title: "Central India Tour",
        img: img5,
        description: "The Central India Tour explores rich cultural heritage and wildlife, featuring destinations like Khajuraho’s temples, and the wildlife reserves of Kanha and Bandhavgarh.",
        days: '10 Nights & 11 Days',
    },
    {
        title: "Beautiful Nepal Tour",
        img: img6,
        description: "The Beautiful Nepal Tour combines Kathmandu’s rich heritage with Pokhara’s scenic beauty, offering temple visits and stunning Himalayan views.",
        days: '6 Nights & 7 Days',
    },
]


const detailedIteneray = [
    {
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
    },
    
    {
        title: "Golden Triangle Tour",
        description: "Experience the magnificent Golden Triangle tour covering Delhi, Agra, and Jaipur over 4 nights and 5 days. Explore the rich cultural heritage, historical monuments, and vibrant markets of North India's most iconic cities.",
        
        details: [
            {
                key: "Duration",
                value: "4 Nights and 5 Days"
            },
            {
                key: "Destinations",
                value: "Delhi-Agra-Jaipur"
            },
            {
                key: "Departure",
                value: "Delhi"
            },
            {
                key: "Return",
                value: "Delhi"
            }
        ],
    
        included: [
            "Accommodation on twin sharing basis",
            "Daily breakfast at hotels",
            "All transfers in AC vehicles",
            "Cycle rickshaw ride in Delhi & Jaipur",
            "Tonga ride for Taj Mahal visit",
            "Elephant/jeep ride at Amber fort",
            "All applicable taxes"
        ],
    
        notIncluded: [
            "Monument entrance fees",
            "Lunches and dinners",
            "Local guide services",
            "International/Domestic flights",
            "Visa charges & Airport taxes",
            "Camera fees",
            "Tips and gratuities",
            "Personal expenses",
            "Travel insurance"
        ],
    
        gallery: [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6
        ],
    
        tourPlan: {
            "itinerary": [
                {
                    "heading": "Day 1 - Arrival in Delhi",
                    "content": <>
                        <p>On Arrival in Delhi Airport (in morning), meet and greet by our representative and followed by transfer to hotel.</p>
                        
                        <p><b>DELHI:</b> one of India's fastest growing cities has spread far beyond the "seven cities" created between the 13th and the 17th centuries. It has sprawled over the west bank of the Yamuna and now straddles the river. Remnants of the past survive cheek-by-jowl with skyscrapers, residential colonies and bustling commercial complexes. Delhi has some of the finest museums in the country. Its boutiques and shopping arcades offer access to a wealth of traditional and contemporary crafts from all over the country. It has specialty restaurants to please the gourmet, open parks and gardens ablaze with flowers, and in the winter months particularly, a variety of cultural events. Its many-layered existence is tantalizing and can entice the curious traveler into a fascinating journey of discovery</p>
    
                        <p>Upon arrival at hotel, check-in at the hotel.</p>
    
                        <p><b>Later leave for sightseeing tour of Old & New Delhi</b></p>
    
                        <p>Jama Masjid (Friday mosque), drive past the Red Fort, Raj Ghat, India Gate (the war memorial dedicated to the martyr's of World War – 1), The President's House -formerly the Viceroy's Palace, Parliament House and the Secretariat buildings -an interesting blend of the Victorian and 20th century architecture. Qutab Minar etc…</p>
    
                        <p><b>Enjoy the cycle Rickshaw ride at Chandni Chowk market</b> - In the heart of Old Delhi, Chandni Chowk is a busy shopping area with markets full of spices, dried fruit, silver jewelry and vivid saris, while the narrow side streets are crowded with tiny shops selling essential oils, stationery and traditional Indian sweets. Nearby, the vast Mughal-era Red Fort now houses a museum complex, and the 17th-century Jama Masjid is a huge red-sandstone mosque with towering minarets.</p>
    
                        <p>Overnight stay at hotel.</p>
                    </>,
                    "move": false,
                    "open": false
                },
                {
                    "heading": "Day 2 - Delhi – Agra (204 kms / 4 ½ hrs)",
                    "content": <>
                        <p><b>Morning after breakfast proceed to drive for Agra.</b></p>
    
                        <p><b>Agra</b>, is famous as the home to one of the Seven Wonders of the World – Taj Mahal. The architectural splendour of the mausoleums, the fort and the palaces in Agra is a vivid reminder of the opulence of the legendary Mughal Empire. Agra is known for its superb inlay work on marble and soapstone by artisans who are hereditary craft persons.</p>
    
                        <p>Upon arrival at hotel, check-in at the hotel.</p>
    
                        <p><b>Afternoon leave for visit - Agra Red Fort</b> - built by three generations of Mughal Emperors starting from Akbar the Great in 1565 AD, which is a masterpiece of design and construction. It housed both the residential Palaces of the Royal family and the military quarters and offers other formidable views of the Taj Mahal from across the river.</p>
    
                        <p><b>Taj Mahal</b> - (the seventh wonder of world), built by Shah Jahan as a memorial to his wife Mumtaz Mahal by the bank's river Yamuna. After her untimely death, Shah Jahan had her mortal remains buried in this mausoleum. And after his own demise he was placed to rest next to his beloved queen in the same mausoleum The Taj has been called the most extravagant monument ever built for the sake of love. The great monument took almost 22 years to build and was completed in 1653. (The Taj Mahal is closed on Fridays)</p>
    
                        <p><b>Evening free for shopping at local bazar of Agra</b> - Various small shops in Agra sell handicrafts and stone products such as jewelry boxes, and plaques. Leather goods of good quality are also available in the markets. Most products have some dedication to the Taj Mahal.</p>
    
                        <p>Overnight stay at hotel.</p>
                    </>,
                    "move": false,
                    "open": false
                },
                {
                    "heading": "Day 3 - Agra – Fatehpur Sikri – Jaipur (235 kms / 4 ½ hrs)",
                    "content": <>
                        <p>Morning breakfast at hotel and proceed to leave for Jaipur, en-route visiting Fatehpur Sikri</p>
    
                        <p><b>Fatehpur Sikri</b> – an extraordinary city built by Akbar the Great in 1569 AD in red sandstone, with its forts, palaces, mosques and was abandoned 14 years after its creation due to political reasons.</p>
    
                        <p>Continue drive to Jaipur……</p>
    
                        <p><b>Jaipur</b>, is the bustling capital city and a business centre with all the trapping of modern metropolis but yet flavored strongly with an age-old charm that never fails to surprise a traveler. Founded in AD 1727 by Sawai Jai Singh II, Jaipur the capital of Rajasthan is popularly known as the Pink City with broad avenues and spacious gardens. The capital of Rajasthan, Jaipur is steeped in history and culture</p>
    
                        <p>Upon arrival at hotel, check-in at the hotel.</p>
    
                        <p>Overnight stay at hotel.</p>
                    </>,
                    "move": false,
                    "open": false
                },
                {
                    "heading": "Day 4 - Jaipur",
                    "content": <>
                        <p>Morning after breakfast and leave for sightseeing tour of Jaipur.</p>
    
                        <p><b>Visit:</b> Amber Fort, Hawa Mahal, City Palace, Jantar Mantar Observatory etc.</p>
    
                        <p><b>City Palace</b> – the former royal residence built in a blend of the Rajasthani and Mughal styles which now houses a museum with a superb collection of Rajasthani costumes and armoury of the Mughals and Rajputs and the adjacent Jantar Mantar - an astronomical and astrological Observatory built by Maharja Jai Singh in 18th century to measure everything from altitude to time, and map the movement of the planets and the stars, which remarkable for its accuracy even at the present times on the way stopping for a photo at Hawa Mahal (Palace of Winds)</p>
    
                        <p><b>Optional:</b> Enjoy a cycle rickshaw ride or a guided walk through the bustling and colorful bazaars of the "Pink City" famous for Rajasthani jewellery, fabric and shoes (jutties), possess a timeless quality and are surely a treasure-trove for the shoppers.</p>
    
                        <p>Evening return to hotel.</p>
    
                        <p>Overnight stay.</p>
                    </>,
                    "move": false,
                    "open": false
                },
                {
                    "heading": "Day 5 - Jaipur – Delhi (270 kms / 6 hrs) - Depart",
                    "content": <>
                        <p>Morning after breakfast and proceed to drive to Delhi.</p>
    
                        <p>On arrival in Delhi transfer to International Airport to connect onward flight connection.</p>
    
                        <p><b>Tour End</b></p>
                    </>,
                    "move": false,
                    "open": false
                }
            ],
            inclusion: [
                "Accommodation based on double/twin sharing room for 4 Nights",
                "Daily breakfast at all hotels",
                "All transfers and sightseeing by AC vehicles",
                "Cycle Rickshaw ride in Delhi & Jaipur",
                "Tonga Ride for Taj Mahal visit in Agra",
                "Elephant/jeep ride at Amber fort"
            ],
            exclusion: [
                "Any services other than mentioned above",
                "Lunches and dinners",
                "Monument entrance fees",
                "Local guide services",
                "International/Domestic flights",
                "Personal expenses and tips"
            ]
        }
    },

    {
        title: "Rajasthan Tour",
        description: "Experience the magnificent Rajasthan tour covering Delhi, Mandawa, Bikaner, Jaisalmer, Jodhpur and more over 13 nights and 15 days. Explore the rich cultural heritage, historical monuments, and vibrant markets of India's most colorful state.",
        
        details: [
            {
                key: "Duration",
                value: "13 Nights and 15 Days"
            },
            {
                key: "Destinations",
                value: "Delhi-Mandawa-Bikaner-Jaisalmer-Jodhpur-Ranakpur-Udaipur-Pushkar-Jaipur-Agra"
            },
            {
                key: "Departure",
                value: "Delhi"
            },
            {
                key: "Return",
                value: "Delhi"
            }
        ],
    
        included: [
            "Accommodation on twin sharing basis",
            "Daily breakfast at hotels",
            "All transfers in AC vehicles",
            "Cycle rickshaw ride in Delhi",
            "Tuk-tuk ride in Bikaner",
            "Camel ride at Sam Sand Dunes in Jaisalmer",
            "All applicable taxes"
        ],
    
        notIncluded: [
            "Monument entrance fees",
            "Lunches and dinners",
            "Local guide services",
            "International/Domestic flights",
            "Visa charges & Airport taxes",
            "Camera fees",
            "Tips and gratuities",
            "Personal expenses",
            "Travel insurance"
        ],

        
        gallery: [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6
        ],
    
        tourPlan: {
            itinerary: [
                {
                    heading: "Day 1 - Arrival in Delhi",
                    content: <>
                                <p>On Arrival in Delhi Airport, meet and greet by our representative and followed by transfer to hotel.</p>
                                <p><b>DELHI:</b> one of India's fastest growing cities has spread far beyond the \"seven cities\" created between the 13th and the 17th centuries. It has sprawled over the west bank of the Yamuna and now straddles the river. Remnants of the past survive cheek-by-jowl with skyscrapers, residential colonies and bustling commercial complexes. Delhi has some of the finest museums in the country. Its boutiques and shopping arcades offer access to a wealth of traditional and contemporary crafts from all over the country.</p>
                                <p>Upon arrival at hotel, check-in at the hotel.</p><p>Overnight stay at hotel.</p>
                            </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 2 - Delhi",
                    content: <>
                                <p>Morning after breakfast leave for sightseeing tour of Delhi.</p><p><b>Visit:</b> Old & New Delhi – Jama Masjid, Red Fort, Raj Ghat, India Gate, President's House, Parliament House, Qutab Minar & Akshardham Temple.</p>
                                <p><b>Enjoy cycle rickshaw ride at Chandni Chowk:</b> Experience the narrow streets of 
                                famous Chandni Chowk market with its spice markets, jewelry shops, and traditional sweets.</p>
                                <p>Late afternoon visit to Akshardham Temple - a spiritual-cultural campus showcasing millennia of traditional and modern Hindu culture.</p>
                                <p>Overnight stay at hotel.</p>
                            </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 3 - Delhi – Mandawa (260 kms / 6½ hrs)",
                    content: <>
                                <p>Morning breakfast at hotel and proceed to drive to Mandawa.</p><p><b>Mandawa:</b> Part of Shekhawati region, established in the 17th and 18th century, known for its beautiful decorated havelis and open art gallery.</p><p>Upon arrival, check-in to the hotel.</p>
                                <p>Afternoon visit to Shekhawati region - Explore the Havelis of Mandawa and Open Art Gallery.</p>
                                <p>Overnight stay at hotel.</p>
                            </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 4 - Mandawa - Bikaner (190 kms / 3½ hrs)",
                    content: <>
                                <p>Morning breakfast at hotel and proceed to drive to Bikaner.</p><p><b>Bikaner:</b> A city known for the 16th-century Junagarh Fort and unique Karni Mata Temple.</p><p>Upon arrival, check-in at the hotel.</p><p>Afternoon sightseeing tour including Junagarh Fort, Karni Mata Temple, Rampuria Haveli and Camel Breeding farm.</p><p>Enjoy Tuk-Tuk ride to explore local market.</p><p>Overnight stay at hotel.</p>
                        </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 5 - Bikaner - Jaisalmer (330 kms / 6½ hrs)",
                    content: <>
                        <p>Morning breakfast and drive to Jaisalmer.</p><p><b>Jaisalmer:</b> The 'golden city', an ancient trading centre known for its strategic location on camel trade routes. The city features exquisitely carved yellow sandstone havelis and the magnificent Jaisalmer Fort.</p>
                        <p>Upon arrival, check-in at hotel.</p><p>Rest of the day free for relaxation.</p><p>Overnight stay at hotel.</p>
                    </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 6 - Jaisalmer",
                    content: <><p>Morning sightseeing tour of Jaisalmer including:</p><p>- Jaisalmer Fort</p><p>- Jain temples (12th to 15th centuries)</p><p>- Patwon ki Haveli</p><p>- Salim Singh and Nathmalji ki Haveli</p><p>- Gadi Sagar Lake</p><p>- Vyas Chattri</p><p>Late afternoon visit to Sam Sand Dunes (42 kms) for camel ride and sunset view.</p><p>Overnight stay at hotel.</p>
                    </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 7 - Jaisalmer - Jodhpur (280 kms / 5½ hrs)",
                    content: <><p>Morning drive to Jodhpur.</p><p><b>Jodhpur:</b> Founded by Rajput Chief Rao Jodha in 1459, known for its mighty Mehrangarh Fort and blue-painted houses.</p><p>Upon arrival, check-in at hotel.</p><p>Afternoon sightseeing including:</p><p>- Mehrangarh Fort</p><p>- Jaswant Thada</p><p>- Umaid Bhawan Palace Museum</p><p>Evening return to hotel.</p><p>Overnight stay at hotel.</p></>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 8 - Jodhpur – Udaipur (265 kms / 5 hrs)",
                    content: <><p>Morning after breakfast proceed to leave for Udaipur en-route visiting Ranakpur Jain Temple.</p><p><b>RANAKPUR:</b> The magnificent 15th century Jain temples situated in the deep secluded valley of the Aravalli Hills. Though over 500 years old, the temples are superbly preserved.</p><p>Later continue drive to Udaipur.</p><p><b>UDAIPUR:</b> Founded in 1568, by Maharaja Udai Singh, as capital of old Mewar state, the city has one of the largest palace complexes in the world, the City Palace and gleaming lakes with islands and is popularly known as the \"lake-city\" of Rajasthan.</p><p>Upon arrival at hotel, check-in at the hotel.</p><p>Overnight at the hotel.</p></>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 9 - Udaipur",
                    content: <><p>Morning after breakfast proceed to leave for sightseeing of Udaipur.</p><p>Visit the magnificent City Palace - an assemblage of not one but four separate palaces covering some four acres of area & exceeding all other palaces for colossal grandeur. Also, visit Jagdish temple, Saheliyon ki Bari (garden of Maids of Honor).</p><p>Evening experience boat ride at Lake Pichola.</p><p>Rest day at leisure and Overnight at the hotel.</p></>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 10 - Udaipur - Pushkar (280 kms / 5½ hrs)",
                    content: <><p>Morning after breakfast proceed to leave for Pushkar.</p><p><b>Pushkar:</b> A town bordering the Thar Desert, set on Pushkar Lake, a sacred Hindu site with 52 ghats where pilgrims bathe. The town has hundreds of temples, including 14th-century Jagatpita Brahma Mandir.</p><p>It is also famous for Pushkar Fair - the holy site hosts a colorful annual fair during Kartik Poornima (full moon) in November each year, attracting up to 200,000 traders and 50,000 cattle.</p><p>Upon arrival at hotel, check-in at the hotel.</p><p>Later visit Brahma Temple and sacred Pushkar Lake.</p><p><b>Jagatpita Brahma Mandir:</b> One of very few existing temples dedicated to the Hindu creator-god Brahma in India.</p><p>Overnight at the hotel.</p></>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 11 - Pushkar – Ajmer – Jaipur (145 kms / 3½ hrs)",
                    content: <><p>Morning after breakfast proceed to leave for Jaipur, en-route visit Ajmer.</p><p><b>Ajmer:</b> One of the major and oldest cities in Rajasthan, home to the Ajmer Sharif shrine. The city was established as \"Ajayameru\" (Invincible Hills) and is surrounded by the Aravalli Mountains.</p><p>Later continue drive to Jaipur.</p><p><b>Jaipur:</b> The bustling capital city known as the Pink City, founded in AD 1727 by Sawai Jai Singh II. The city features broad avenues and spacious gardens, steeped in history and culture.</p><p>Upon arrival at hotel, check-in at the hotel.</p><p>Overnight at the hotel.</p></>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 12 - Jaipur",
                    content: <><p>Morning after breakfast and leave for sightseeing tour of Jaipur.</p><p><b>Visit:</b> Amber Fort, Hawa Mahal, City Palace, Jantar Mantar Observatory.</p><p><b>City Palace:</b> The former royal residence built in a blend of Rajasthani and Mughal styles, housing a museum with Rajasthani costumes and Mughal-Rajput armoury.</p><p><b>Jantar Mantar:</b> An astronomical and astrological Observatory built by Maharaja Jai Singh in 18th century.</p><p>Enjoy a cycle rickshaw ride through the bustling and colorful bazaars of the \"Pink City\" famous for Rajasthani jewellery, fabric and shoes.</p><p>Evening experience the Bollywood movie show at ancient cinema \"Raj Mandir\" - a historic movie theatre opened in 1976, known for its meringue-shaped auditorium.</p><p>Evening return to hotel.</p><p>Overnight at the hotel.</p></>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 13 - Jaipur – Fatehpur Sirki – Agra (235 kms / 4½ hrs)",
                    content: <>
                        <p>Morning breakfast at hotel and proceed to leave for Agra en-route visiting Fatehpur Sikri.</p>
                        <p><b>Fatehpur Sikri:</b> An extraordinary city built by Akbar the Great in 1569 AD in red sandstone, with its forts, palaces, mosques and was abandoned 14 years after its creation due to political reasons.</p>
                        <p>Continue drive to Agra...</p>
                        <p><b>Agra:</b> Famous as the home to one of the Seven Wonders of the World – Taj Mahal. The architectural splendour of the mausoleums, the fort and the palaces in Agra is a vivid reminder of the opulence of the legendary Mughal Empire. Agra is known for its superb inlay work on marble and soapstone by artisans who are hereditary craft persons.</p>
                        <p>Upon arrival at hotel, check-in at the hotel.</p>
                        <p>Afternoon leave for visit:</p>
                        <p><b>Agra Red Fort:</b> Built by three generations of Mughal Emperors starting from Akbar the Great in 1565 AD, which is a masterpiece of design and construction. It housed both the residential Palaces of the Royal family and the military quarters and offers other formidable views of the Taj Mahal from across the river.</p>
                        <p>Evening free for shopping at local bazar of Agra - Various small shops in Agra sell handicrafts and stone products such as jewelry boxes, and plaques. Leather goods of good quality are also available in the markets. Most products have some dedication to the Taj Mahal.</p>
                        <p>Overnight at the hotel.</p>
                    </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 14 - Agra – Delhi (204 kms / 4½ hrs)",
                    content: <>
                        <p>Early morning (sunrise view of Taj Mahal)</p>
                        <p><b>Taj Mahal:</b> (The seventh wonder of world), built by Shah Jahan as a memorial to his wife Mumtaz Mahal by the bank's river Yamuna. After her untimely death, Shah Jahan had her mortal remains buried in this mausoleum. And after his own demise he was placed to rest next to his beloved queen in the same mausoleum. The Taj has been called the most extravagant monument ever built for the sake of love. The great monument took almost 22 years to build and was completed in 1653. (The Taj Mahal is closed on Fridays)</p>
                        <p>Return back to hotel for breakfast and after proceed for leave for Delhi en-route visit Itmad-ud-Daulah.</p>
                        <p><b>Itmad-ud-Daulah:</b> The Tomb is a Mughal mausoleum in the city of Agra. Often described as a "jewel box", sometimes called the "Bachcha Taj" or the "Baby Taj", the tomb of I'timād-ud-Daulah is often regarded as a draft of the Taj Mahal.</p>
                        <p>Continues drive to Delhi...</p>
                        <p>On arrival in Delhi transfer to International Airport to connect onward flight connection.</p>
                        <p>Overnight at the hotel.</p>
                    </>,
                    move: false,
                    open: false
                },
                {
                    heading: "Day 15 - Delhi – Depart",
                    content: <>
                        <p>Final Departure from Delhi.</p>
                    </>,
                    move: false,
                    open: false
                }
            ],

            inclusion: [
                "TBA"
            ],
            exclusion: [
                "Any services other than the mentioned above",
                "Any lunches or dinners (other than mentioned above)",
                "Any International / Domestic flights",
                "Visa charges & Airport taxes",
                "Any extras like table drinks, telephone calls, any tips, laundry etc. or any other personal expense",
                "Still camera or video camera fees",
                "Any tips to drive/guide/escort",
                "Any travel / medical insurance",
                "Any tips at restaurant /to guide/ driver etc.",
                "Any increase in costs beyond our control such as fuel and air fares increase, additional Governments levies and taxes etc."
            ]
        }
    }
            
]






export { packages, popularPackages, detailedIteneray }