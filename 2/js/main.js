/* JS ESERCIZIO 2 */
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
    ],

    showAddBtn: true,

    showAddInput: false,

    description:null,

    qty: null,

    price: null,

  },

  methods: {

    deleteItem: function (index) {
      if (this.fruits.length > 0) {
        this.fruits.splice(index, 1);
      }
    },

    changeVisibility: function () {

      this.showAddBtn = !this.showAddBtn;
      this.showAddInput = !this.showAddInput;

    },

    addItem: function () {

      const newItem = {

        description: this.description,
        img: "images/icons/fruit-placeholder.png",
        qta: this.qty,
        price: this.price,

      };

      this.fruits.push(newItem);

    } 

  }
})