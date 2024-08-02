import img1 from '@/assets/Packages/img1.png';
import img2 from '@/assets/Packages/img2.png';
import img3 from '@/assets/Packages/img3.png';
import img4 from '@/assets/Packages/img4.png';
import img5 from '@/assets/Packages/img5.png';
import img6 from '@/assets/Packages/img6.png';


const packages = [
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


    tourPlan: {
        day1: {
            title: "Day 1: Departure",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
            points: ['dont,', 'breakfast', 'lunch', 'dinner']
        },
        day2: {
            title: "Day 2: Visiting Zurich, Geneva and Zermatt",
            description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
            points: ['dont,', 'breakfast', 'lunch', 'dinner']
        },
        day3: {
            title: "Day 3: Rest",
            description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
            points: ['dont,', 'breakfast', 'lunch', 'dinner']
        },
        day4: {
            title: "Day 4: Historical Tour",
            description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
            points: ['dont,', 'breakfast', 'lunch', 'dinner']
        },
        day5: {
            title: "Day 5: Return",
            description: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
        },
    }
}



export { packages, popularPackages, kashmir }