/* JS ESERCIZIO 1 */
const app = new Vue({
  el: '#app',
  data: {
    fruits: [
      {
        description:"Fragola deliziosa",
        img: "images/strawberry.png",
        qta:256,
        price:"2,35",
      },
      {
        description: "Limone succoso",
        img: "images/lemon.png",
        qta: 354,
        price: "1,40",
      },
      {
        description: "Arancia rossa",
        img: "images/oranges.png",
        qta: 0,
        price: "3,75",
      },
      {
        description: "Ananas dal Brasile",
        img: "images/pineapple.png",
        qta: 123,
        price: "10,60",
      },
      {
        description: "Ciliegia Ferrovia",
        img: "images/cherries.png",
        qta: 0,
        price: "1,23",
      }
    ]
  },

  methods: {

    deleteItem: function (index) {
      console.log(index);
      if (this.fruits.length > 0) {
        this.fruits.splice(index, 1);
      }
    },

  }
})