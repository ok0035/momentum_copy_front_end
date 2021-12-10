const quotes = [
  {
    quote: "장미꽃은 가시 틈에서 자란다.",
    author: "탈무드",
  },
  {
    quote:
      "최후의 승리는 출발선의 비약이 아니라, 결승점에 이르기까지의 끈기와 노력이다.",
    author: "워나매커",
  },
  {
    quote: "음미되지 않은 인생은 보람이 없다.",
    author: "소크라테스",
  },
  {
    quote: "자기를 아는 것이 최대의 지혜이다.",
    author: "탈무드",
  },
  {
    quote: "불은 쇠를 단련시키고 역경은 강한 사람을 단련시킨다.",
    author: "세네카",
  },
  {
    quote:
      "무엇인가 의논할 때는 과거를 누릴때는 현재를, 무엇인가 할때는 미래를 생각하라.",
    author: "세네카",
  },
  {
    quote: "인내는 희망을 품은 기술이다.",
    author: "시루스",
  },
  {
    quote: "운명은 용감한 자를 사랑한다.",
    author: "버질",
  },
  {
    quote: "만족하게 살고 때때로 웃으며 많은 사람을 사랑한 삶이 성공한다.",
    author: "스탠리",
  },
  {
    quote: "누구나 자기 손아귀에 자기의 운명을 쥐고 있다.",
    author: "시푸스",
  },
  {
    quote:
      "인간의 가장 놀라운 특성의 한 가지는 마이너스를 플러스로 바꾸는 힘이다.",
    author: "아들러",
  },
  {
    quote:
      "만일 지금도 위인만을 계속 쳐다보고 있다면, 그 사람은 아직까지 어린아이의 시선으로 이 세상을 보고 있다는 의미이다.",
    author: "아나이스 닌",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function showQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[index].quote;
  author.innerText = quotes[index].author;
}

showQuote();
setInterval(showQuote, 5000);
