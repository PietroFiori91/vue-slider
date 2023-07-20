// const slides = [
//   {
//     image: "img/01.webp",
//     title: "Marvel's Spiderman Miles Morale",
//     text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
//   },
//   {
//     image: "img/02.webp",
//     title: "Ratchet & Clank: Rift Apart",
//     text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
//   },
//   {
//     image: "img/03.webp",
//     title: "Fortnite",
//     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//   },
//   {
//     image: "img/04.webp",
//     title: "Stray",
//     text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
//   },
//   {
//     image: "img/05.webp",
//     title: "Marvel's Avengers",
//     text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//   },
// ];

// console.log(slides);

Vue.createApp({
  data() {
    return {
      currentIndex: 0,
      images: [
        {
          src: "img/01.webp",
          alt: "Spiderman",
          title: "Spiderman",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          src: "img/02.webp",
          alt: "Ratchet & Clank",
          title: "Ratchet & Clank",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          src: "img/03.webp",
          alt: "Fortnite",
          title: "Fortnite",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          src: "img/04.webp",
          alt: "Stray",
          title: "Stray",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          src: "img/05.webp",
          alt: "Avengers",
          title: "Avengers",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
      ],
    };
  },
  methods: {
    showImage(index) {
      this.currentIndex = index;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
}).mount("#app");
