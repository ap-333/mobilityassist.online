/**
 * Site photography. All images are from Unsplash and used under the Unsplash
 * License (free for commercial use, no attribution required). Credits are kept
 * here for our records. People shown are models, not Mobility Assist customers.
 * Avoid photos that show another company's logo, vehicle livery or signage.
 */

export type Photo = { src: string; alt: string; width: number; height: number; credit: string; source: string };

const unsplash = (slug: string) => `https://unsplash.com/photos/${slug}`;

export const photos = {
  vanLift: {
    src: "/images/van-lift.jpg",
    alt: "A man in a wheelchair on the lift of an accessible van while an attendant stands beside him",
    width: 1000,
    height: 1250,
    credit: "@reazonsraj",
    source: unsplash("a-man-sitting-in-a-wheelchair-next-to-a-van-VZ2J246wEqE"),
  },
  vanLiftSquare: {
    src: "/images/van-lift-square.jpg",
    alt: "A wheelchair user seated on a van's wheelchair lift platform, with an attendant nearby",
    width: 1400,
    height: 1400,
    credit: "@reazonsraj",
    source: unsplash("a-man-sitting-in-a-wheelchair-next-to-a-van-VZ2J246wEqE"),
  },
  passengerCar: {
    src: "/images/passenger-car.jpg",
    alt: "A smiling man in a wheelchair opening the door of a car",
    width: 1200,
    height: 800,
    credit: "CDC (@cdc)",
    source: unsplash("a-man-in-a-wheel-chair-next-to-a-car-RhMqVe3ogco"),
  },
  familyHug: {
    src: "/images/family-hug.jpg",
    alt: "An older woman and her adult daughter hugging and smiling",
    width: 1200,
    height: 800,
    credit: "@cjecholsfit",
    source: unsplash("two-women-hugging-each-other-in-a-parking-lot-gikzHDPJmp0"),
  },
  appointment: {
    src: "/images/appointment.jpg",
    alt: "An older man talking with a doctor during an appointment",
    width: 1400,
    height: 933,
    credit: "@silverkblack",
    source: unsplash("doctor-talks-with-an-elderly-patient-on-a-couch-BUNNEclz-yQ"),
  },
  airport: {
    src: "/images/airport.jpg",
    alt: "Cars lined up at an airport pickup area",
    width: 1400,
    height: 933,
    credit: "@kacapic",
    source: unsplash("taxis-lined-up-at-a-modern-transportation-hub-DIorrn_qPdc"),
  },
  caregiverPark: {
    src: "/images/caregiver-park.jpg",
    alt: "A younger woman pushing an older woman in a wheelchair across a park lawn",
    width: 1400,
    height: 933,
    credit: "@reazonsraj",
    source: unsplash("a-woman-in-a-wheelchair-standing-next-to-a-man-in-a-park-UlG-z-Kz_AI"),
  },
  phoneCall: {
    src: "/images/phone-call.jpg",
    alt: "A smiling older man holding a mug and a phone at home",
    width: 1200,
    height: 900,
    credit: "@silverkblack",
    source: unsplash("smiling-senior-man-holding-mug-and-phone-on-couch-Q7YbIt4yNUs"),
  },
  couplePhone: {
    src: "/images/couple-phone.jpg",
    alt: "An older couple looking at a phone together on their sofa",
    width: 1200,
    height: 900,
    credit: "@silverkblack",
    source: unsplash("elderly-couple-looking-at-a-smartphone-together-on-couch-p4NlV4YvUeI"),
  },
  caregiverSunset: {
    src: "/images/caregiver-sunset.jpg",
    alt: "A caregiver pushing a person in a wheelchair across a field at sunset",
    width: 1600,
    height: 900,
    credit: "@the_real_napster",
    source: unsplash("woman-standing-next-to-woman-riding-wheelchair-VUOiQW4OeLI"),
  },
} satisfies Record<string, Photo>;
