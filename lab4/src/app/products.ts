export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Dior Addict Lip Maximizer Pink 001 Pink',
    price: 23990,
    image: 'https://www.google.com/https://french-house.kz/upload/ammina.optimizer/jpg-webp/q80/upload/iblock/a35/wzfrjcd2swk6d9jkm0acsmoa70hltvbf.webp',
    description: 'An absolute must-have for makeup artists, Dior Lip Maximizer is the 1st Dior Backstage lip treatment that hydrates lips for instant volume.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-addict-lip-maximizer-blesk-dlja-gub-rozovyi-001-pink-104261020/?c=750000000#!/item',
  },
  {
    id: 2,
    name: 'Dior Sauvage eau de parfum EDP 60 ml',
    price: 44179,
    description: 'is distinguished by a unique, mysterious oriental haze, which, coupled with a fougere aftertaste, creates a truly dizzying effect and makes you feel like a real king at an event of any kind.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h38/66068507459614/dior-sauvage-parfyumernaya-voda-edp-60-ml-17302960-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-sauvage-parfjumernaja-voda-edp-60-ml-17302960/?c=750000000#!/item',
  },
  {
    id: 3,
    name: 'Dior Backstage Glow Face Palette 001 Universal',
    price: 33881,
    description: 'The Dior Backstage Facial Glow Palette is the secret weapon of the Dior makeup artists. With its help, you can add radiance to absolutely any image, controlling its intensity - from natural to the most saturated.',
    image: 'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-001-universal-102958071/?c=750000000',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-001-universal-102958071/?c=750000000#!/item',
  },
  {
    id: 4,
    name: 'Dior Miss Dior Blooming Bouquet EDT 50 ml',
    price: 47995,
    description: 'Dior Miss Dior Cherie Blooming Bouquet is a Chypre Floral fragrance for women. Released in 2011. Top notes are orange and citruses; middle notes are rose and peony; base notes are musk and patchouli.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/h63/31764042612766/dior-miss-dior-cherie-blooming-bouquet-edt-50-ml-17301065-1-Container.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-miss-dior-blooming-bouquet-tualetnaja-voda-edt-50-ml-17301065/?c=750000000#!/item',
  },
  {
    id: 5,
    name: 'Dior Backstage Face Body Foundation',
    price: 30000,
    description: 'Dior Backstage Face & Body Foundation is Diors makeup artists secret weapon for instant flawless complexion. With its help, you can control the intensity of the coverage - from a shining nude to a rich one.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/hbf/49360691593246/backstage-face-body-foundation-104108912-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-backstage-face-body-foundation-tonal-nyi-krem-1-5n-50-ml-104108912/?c=750000000#!/item',
  },
  {
    id: 6,
    name: 'Christian Dior J Adore eau de parfum EDP 50 ml',
    price: 52662,
    description: 'This is a fragrance for the modern resourceful city woman, it will emphasize her self-confidence and sensuality. A pleasant flower bouquet brings with it the joy of life and a charge of optimism. The main notes of the fragrance are rose, orchid and violet combined with fruits and woods.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h75/31938039808030/dior-j-adore-edp-50-ml-17301904-1-Container.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/christian-dior-j-adore-parfjumernaja-voda-edp-50-ml-17301904/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Dior Backstage Rosy Glow blush 001 pink',
    price: 26889,
    description: 'Rosy Glow All-Purpose Blush is the makeup artists secret weapon for creating a natural, radiant blush.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hd4/62012939206686/rumana-dior-backstage-rosy-glow-106212070-2.jpg',
    rating: 5,
    url:'',
  },
  {
    id: 8,
    name: 'Dior Forever Skin Glow foundation №05N 30 ml',
    price: 31400,
    description: 'Its Diors radiant foundation, formulated with 86%* care base to intensely hydrate, breathe and improve skin day after day.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h5c/51086808711198/diorskin-forever-glow-zidkaa-tonalnaa-osnova-s-siausim-effektom-105033657-1.jpg',
    rating: 5,
    url:'',
  },
  {
    id: 9,
    name: 'Dior Homme Cologne EDC M eau de toilette EDT 75 ml',
    price: 42852,
    description: 'Made with Calabrian bergamot, Italian grapefruit & sensual musk. The fragrance gives you a feeling of cleanliness, like a fresh white cotton shirt, and the freshness of the morning that lasts after a soothing shower.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/ha4/65541500338206/dior-homme-cologn-edc-m-tualetnaya-voda-edt-75-ml-100322918-1.jpg',
    rating: 5,
    url:'',
  },
  {
    id: 10,
    name: 'Dior Homme Sport EDT 75 ml',
    price: 42852,
    description: 'Dior Homme Sport Eau de Toilette is a combination of fruity-spicy freshness and sensual woody notes characteristic of Dior Homme. Dior Homme Sport reflects the philosophy of Dior Homme: a combination of vitality and sensuality, energy and elegance.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h07/50022420217886/dior-homme-sport-2017-edt-75-ml-17300588-1-Container.jpg',
    rating: 5,
    url:'',
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/