import { observable, computed, action, decorate } from "mobx";

class NewsStore {
  //tạo quan sát
  newsList = [
    {
      id: 1,
      title: "Halfmoon Betta",
      description:
        "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
      image: "/halfmoon.jpg",
    },
    {
      id: 2,
      title: "Dragon Scale Betta",
      description:
        "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
      image: "/dragonscale.jpg",
    },
    {
      id: 3,
      title: "Crowntail Betta",
      description:
        "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
      image: "/crowntail.jpg",
    },
    {
      id: 4,
      title: "Veiltail Betta",
      description:
        "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
      image: "/veiltail.jpg",
    },
  ];

  //tính toán để trả về
  get getNews() {
    return this.newsList;
  }
}

decorate(NewsStore, {
  newsList: observable,
  getNews: computed,
});

const store = new NewsStore();

export default store;
