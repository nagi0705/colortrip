export type Question = {
  id: number;         // 質問のID
  text: string;       // 質問文
  yesScore: number[]; // Yesを選んだときに加点するパレットIDの配列
  noScore: number[];  // Noを選んだときに加点するパレットIDの配列
};

export const questions: Question[] = [
  {
    id: 1,
    text: "明るくてやさしいパステルカラーが好きですか？",
    yesScore: [1, 7, 8], // Paris, Tokyo, Firenze
    noScore: [2, 3, 4, 5, 6, 9, 10], // Prague, Perth, Turkey, Chongqing, Lijiang, Xian, Yokohama
  },
  {
    id: 2,
    text: "落ち着いたアースカラーやブラウン系が似合うと感じますか？",
    yesScore: [2, 6, 8, 9, 10], // Prague, Lijiang, Firenze, Xian, Yokohama
    noScore: [1, 3, 4, 7], // Paris, Perth, Turkey, Tokyo
  },
  {
    id: 3,
    text: "華やかで鮮やかな色合いに惹かれますか？",
    yesScore: [1, 3, 4, 5, 7], // Paris, Perth, Turkey, Chongqing, Tokyo
    noScore: [2, 6, 8, 9, 10], // Prague, Lijiang, Firenze, Xian, Yokohama
  },
  {
    id: 4,
    text: "クールなブルーやグリーン系の色が好きですか？",
    yesScore: [3, 6], // Perth, Lijiang
    noScore: [1, 2, 4, 5, 7, 8, 9, 10], // その他
  },
  {
    id: 5,
    text: "ピンクやコーラルなど、可愛らしい色味をよく選びますか？",
    yesScore: [1, 4, 7, 8, 10], // Paris, Turkey, Tokyo, Firenze, Yokohama
    noScore: [2, 3, 5, 6, 9],   // Prague, Perth, Chongqing, Lijiang, Xian
  },
  {
    id: 6,
    text: "ゴールドやシルバーなど、きらめきのある色を使うのが好きですか？",
    yesScore: [1, 4, 5, 7, 8], // Paris, Turkey, Chongqing, Tokyo, Firenze
    noScore: [2, 3, 6, 9, 10], // Prague, Perth, Lijiang, Xian, Yokohama
  },
  {
    id: 7,
    text: "シックで大人っぽい雰囲気の色合いが好みですか？",
    yesScore: [2, 4, 6, 8, 9], // Prague, Turkey, Lijiang, Firenze, Xian
    noScore: [1, 3, 5, 7, 10], // Paris, Perth, Chongqing, Tokyo, Yokohama
  },
  {
    id: 8,
    text: "ナチュラルで肌なじみの良い色を選ぶことが多いですか？",
    yesScore: [2, 6, 7, 8, 9, 10], // Prague, Lijiang, Tokyo, Firenze, Xian, Yokohama
    noScore: [1, 3, 4, 5],         // Paris, Perth, Turkey, Chongqing
  },
  {
    id: 9,
    text: "個性的で他にはないユニークな配色に惹かれますか？",
    yesScore: [1, 3, 4, 5, 6], // Paris, Perth, Turkey, Chongqing, Lijiang
    noScore: [2, 7, 8, 9, 10], // Prague, Tokyo, Firenze, Xian, Yokohama
  },
];
