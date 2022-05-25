import type { Shoe } from "src/types/types";

const shoes: Shoe[] = [
    {
        name: 'BlueBolt',
        price: 104.95,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Sei schnell wie der Blitz mit BlueBolt!',
        img: 'blue/blue.jpg'
    },
    {
        name: 'GreenGait',
        price: 84.99,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Für jeden der die Natur liebt, Green Gait!',
        img: 'green/green.jpg'
    },
    {
        name: 'OceanOctave',
        price: 99.95,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Rennen am Strand mit OceanOctave!',
        img: 'greenblue/greenblue.jpg'
    },
    {
        name: 'OrangeOpportunity',
        price: 73.81,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Nutze jede Gelegenheit mit OrangeOpportunity!',
        img: 'orange/orange.png'
    },
    {
        name: 'ThunderingTornado',
        price: 63.63,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Renne jedem Sturm davon mit ThunderingTornado!',
        img: 'orangeblue/orangblue.jpg'
    },
    {
        name: 'PinkPassion',
        price: 74.99,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Zeige deine Leidenschaft mit PinkPassion!',
        img: 'pink/pink.jpg'
    },
    {
        name: 'RedRider',
        price: 124.95,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Schneller als jedes Pferd, RedRider!',
        img: 'red/red.jpg'
    },
    {
        name: 'SilverSpeeder',
        price: 99.95,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Durchbrich die Schallmauer mit SilverSpeeder!',
        img: 'silver/silver.jpg'
    },
    {
        name: 'SnowSlider',
        price: 60.00,
        shoesize: [
            { size: 42 },
            { size: 43 },
            { size: 44 }],
        description:
            'Gleite durch den Schnee mit SnowSpeeder!',
        img: 'white/white.jpg'
    },
]

export async function get() {
    return {
        body: shoes
    }
    
}