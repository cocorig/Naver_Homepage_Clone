const newsDescriptions = [
  {
      title: '연합뉴스TV',
      description: '연합뉴스TV에 대한 설명입니다.연합뉴스TV에 대한 설명입니다.연합뉴스TV에 대한 설명입니다.'
  },
  {
      title: 'SBS',
      description: 'SBS에 대한 설명입니다. SBS에 대한 설명입니다.SBS에 대한 설명입니다.SBS에 대한 설명입니다.'
  },
  {
    title: 'YTN',
    description: 'YTN에 대한 설명입니다. YTN에 대한 설명입니다.YTN에 대한 설명입니다.YTN에 대한 설명입니다.'
  }
];

const newstandDescs = document.querySelectorAll('.newstand-desc');
const newsTitle = document.querySelectorAll('.news-title');
let currentIndex = 0;

function updateSlide() {

 for (let i = 0; i < newstandDescs.length; i++) {
  newsTitle[i].textContent = newsDescriptions[(currentIndex + i) % newsDescriptions.length].title;
  newstandDescs[i].textContent = newsDescriptions[(currentIndex + i) % newsDescriptions.length].description;
}


currentIndex = (currentIndex + 1) % newsDescriptions.length;

}

setInterval(updateSlide, 3000); // 2초 간격으로 슬라이드 업데이트
