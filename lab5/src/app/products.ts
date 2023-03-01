export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  url: string;
  category: string;
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
    categoty: 'Dior',
  },
  {
    id: 2,
    name: 'Dior Sauvage eau de parfum EDP 60 ml',
    price: 44179,
    description: 'is distinguished by a unique, mysterious oriental haze, which, coupled with a fougere aftertaste, creates a truly dizzying effect and makes you feel like a real king at an event of any kind.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h38/66068507459614/dior-sauvage-parfyumernaya-voda-edp-60-ml-17302960-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-sauvage-parfjumernaja-voda-edp-60-ml-17302960/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 3,
    name: 'Dior Backstage Glow Face Palette 001 Universal',
    price: 33881,
    description: 'The Dior Backstage Facial Glow Palette is the secret weapon of the Dior makeup artists. With its help, you can add radiance to absolutely any image, controlling its intensity - from natural to the most saturated.',
    image: 'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-001-universal-102958071/?c=750000000',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-001-universal-102958071/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 4,
    name: 'Dior Miss Dior Blooming Bouquet EDT 50 ml',
    price: 47995,
    description: 'Dior Miss Dior Cherie Blooming Bouquet is a Chypre Floral fragrance for women. Released in 2011. Top notes are orange and citruses; middle notes are rose and peony; base notes are musk and patchouli.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/h63/31764042612766/dior-miss-dior-cherie-blooming-bouquet-edt-50-ml-17301065-1-Container.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-miss-dior-blooming-bouquet-tualetnaja-voda-edt-50-ml-17301065/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 5,
    name: 'Dior Backstage Face Body Foundation',
    price: 30000,
    description: 'Dior Backstage Face & Body Foundation is Diors makeup artists secret weapon for instant flawless complexion. With its help, you can control the intensity of the coverage - from a shining nude to a rich one.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/hbf/49360691593246/backstage-face-body-foundation-104108912-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-backstage-face-body-foundation-tonal-nyi-krem-1-5n-50-ml-104108912/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 6,
    name: 'Christian Dior J Adore eau de parfum EDP 50 ml',
    price: 52662,
    description: 'This is a fragrance for the modern resourceful city woman, it will emphasize her self-confidence and sensuality. A pleasant flower bouquet brings with it the joy of life and a charge of optimism. The main notes of the fragrance are rose, orchid and violet combined with fruits and woods.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h75/31938039808030/dior-j-adore-edp-50-ml-17301904-1-Container.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/christian-dior-j-adore-parfjumernaja-voda-edp-50-ml-17301904/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 7,
    name: 'Dior Backstage Rosy Glow blush 001 pink',
    price: 26889,
    description: 'Rosy Glow All-Purpose Blush is the makeup artists secret weapon for creating a natural, radiant blush.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hd4/62012939206686/rumana-dior-backstage-rosy-glow-106212070-2.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-backstage-rosy-glow-rumjana-001-rozovyi-106212070/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 8,
    name: 'Dior Forever Skin Glow foundation №05N 30 ml',
    price: 31400,
    description: 'Its Diors radiant foundation, formulated with 86%* care base to intensely hydrate, breathe and improve skin day after day.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h5c/51086808711198/diorskin-forever-glow-zidkaa-tonalnaa-osnova-s-siausim-effektom-105033657-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-forever-skin-glow-tonal-nyi-krem-05n-30-ml-105033657/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 9,
    name: 'Dior Homme Cologne EDC M eau de toilette EDT 75 ml',
    price: 42852,
    description: 'Made with Calabrian bergamot, Italian grapefruit & sensual musk. The fragrance gives you a feeling of cleanliness, like a fresh white cotton shirt, and the freshness of the morning that lasts after a soothing shower.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/ha4/65541500338206/dior-homme-cologn-edc-m-tualetnaya-voda-edt-75-ml-100322918-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-homme-cologn-edc-m-tualetnaja-voda-edt-75-ml-100322918/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 10,
    name: 'Dior Homme Sport EDT 75 ml',
    price: 42852,
    description: 'Dior Homme Sport Eau de Toilette is a combination of fruity-spicy freshness and sensual woody notes characteristic of Dior Homme. Dior Homme Sport reflects the philosophy of Dior Homme: a combination of vitality and sensuality, energy and elegance.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h07/50022420217886/dior-homme-sport-2017-edt-75-ml-17300588-1-Container.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dior-homme-sport-tualetnaja-voda-edt-75-ml-17300588/?c=750000000#!/item',
    categoty: 'Dior',
  },
  {
    id: 11,
    name: 'Yves Saint Laurent Black Opium eau de parfum EDP 50 ml',
    price: 49692,
    description: 'Yves Saint Laurent Black Opium is a modern interpretation of the brands famous spicy-oriental creation. This is an explosive take on a classic masterpiece bringing out its most mysterious and magical aspects that make it magical and alluring',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h01/31790623719454/yves-saint-laurent-black-opium-edp-50-ml-17301512-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/yves-saint-laurent-black-opium-parfjumernaja-voda-edp-50-ml-17301512/?c=750000000#!/item',
    categoty: 'YSL',
  },
  {
    id: 13,
    name: 'Yves Saint Laurent Libre EDP 50 ml',
    price:55000,
    description: 'Passionate Manifesto of Freedom. A fragrance that is on the verge between coolness and burning sexuality.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/hbc/32018235260958/yves-saint-laurent-libre-edp-50-ml-100013874-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-50-ml-100013874/?c=750000000#!/item',
    categoty: 'YSL',
  },
  {
    id: 14,
    name: 'GUCCI Flora Gorgeous Gardenia EDP EDP 30 ml',
    price: 54993,
    description: 'The new floral Eau de Parfum Gucci Flora Gorgeous Gardenia with a touch of sweetness appears in a new advertising campaign surrounded by flowers and furry animals.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h31/46341314969630/flora-gorgeous-gardenia-parfumernaa-voda-30-ml-102492296-1.jpg',
    rating: 4.8,
    url:'https://kaspi.kz/shop/p/gucci-flora-gorgeous-gardenia-parfjumernaja-voda-edp-30-ml-102492296/?c=750000000#!/item',
    categoty: 'Gucci',
  },
  {
    id: 15,
    name: 'GUCCI Bloom Profumo di Fiori EDP EDP 30 ml',
    price: 23700,
    description: 'Notes: jasmine, lily of the valley, galbanum, bergamot, musk, sandalwood, lemon, black currant, freesia, tuberose, honeysuckle',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/h3b/33164329418782/gucci-bloom-profumo-di-fiori-edp-30-ml-101099883-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/gucci-bloom-profumo-di-fiori-parfjumernaja-voda-edp-30-ml-101099883/?c=750000000#!/item',
    categoty: 'Gucci',
  },
  {
    id: 16,
    name: 'CHANEL Coco Mademoiselle EDP 35 ml',
    price: 47047,
    description: 'The whole essence of a brave, free woman. A feminine oriental fragrance with character, yet striking in its freshness.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/hf9/32200516534302/chanel-coco-mademoiselle-edp-35-ml-17303003-1.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-35-ml-17303003/?c=750000000#!/item',
    categoty: 'Chanel',
  },
  {
    id: 17,
    name: 'CHANEL Chance Eau Tendre EDP 35 ml',
    price: 54798,
    description: 'Notes: jasmine, rose, grapefruit, quince, white musk',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h00/33615331885086/chanel-chance-eau-tendre-edp-35-ml-100916825-1-Container.jpg',
    rating: 5,
    url:'https://kaspi.kz/shop/p/chanel-chance-eau-tendre-parfjumernaja-voda-edp-35-ml-100916825/?c=750000000#!/item',
    categoty: 'Chanel',
  },
  {
    id: 11,
    name: '',
    price: 8,
    description: '',
    image: '',
    rating: 5,
    url:'',
    categoty: '',
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/