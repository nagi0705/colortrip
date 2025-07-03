export type PaletteMeta = {
  id: number;           // 識別用のID
  name: string;         // 都市名（例: "Paris"）
  imagePath: string;    // 画像のパス
  mainColor: string;    // 代表色（例: "#ffcc00"）
};

export const palettes: PaletteMeta[] = [
  {
    id: 1,
    name: "Paris",
    imagePath: "/images/1.paris_appearance.png",
    mainColor: "#E6C3B3",
  },
  {
    id: 2,
    name: "Prague",
    imagePath: "/images/2.prague_appearance.png",
    mainColor: "#B6AFA9",
  },
  {
    id: 3,
    name: "Perth",
    imagePath: "/images/3.perth_appearance.png",
    mainColor: "#B7C9C6",
  },
  {
    id: 4,
    name: "Turkey",
    imagePath: "/images/4.turkey_appearance.png",
    mainColor: "#B6B6B6",
  },
  {
    id: 5,
    name: "Chongqing",
    imagePath: "/images/5.chongqing_appearance.png",
    mainColor: "#B6AFA9",
  },
  {
    id: 6,
    name: "Lijiang",
    imagePath: "/images/6.lijiang_appearance.png",
    mainColor: "#B7C9C6",
  },
  {
    id: 7,
    name: "Tokyo",
    imagePath: "/images/7.tokyo_appearance.png",
    mainColor: "#B6B6B6",
  },
  {
    id: 8,
    name: "Firenze",
    imagePath: "/images/8.firenze_appearance.png",
    mainColor: "#B6AFA9",
  },
  {
    id: 9,
    name: "Xian",
    imagePath: "/images/9.xian_appearance.png",
    mainColor: "#B7C9C6",
  },
  {
    id: 10,
    name: "Yokohama",
    imagePath: "/images/10.yokohama_appearance.png",
    mainColor: "#B6B6B6",
  },
];
