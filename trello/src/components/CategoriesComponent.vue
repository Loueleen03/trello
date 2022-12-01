<script>
import { ref } from "vue";
import WPAPI from "wpapi";
export default {
  props: ['id','draggable'],
  data: () => {
    return {
      name: "",
      countC: 0,
      categories: [],
    };
  },
  mounted() {
    var wp = new WPAPI({
      endpoint: "http://localhost:8888/wordpress/wp-json",
      // This assumes you are using basic auth, as described further below
      username: "loueleen.billard@epitech.eu",
      // email: "alexandrebecretnyc@gmail.com",
      password: "d4$dZt&6k&XU3o(Lw4BoZ$b(",
      // "oodXz51cC%jx#qcdMm"
    });
    wp.categories().then((response) => {
      this.categories = response;
      console.log(response);
    });
    // .then((response) => {
    // });
  },
  methods: {
    dragStart: e =>{
const target = e.target;

e.dataTransfer.setData('card_id', target.id);

setTimeout(() => {
target.style.display = "none";
},0)
    },
    incrementC() {
      this.countC++;
      this.categories.push({ name: this.name, id: this.countC });
      console.log(this.categories);
      var wp = new WPAPI({endpoint: "http://localhost:8888/wordpress/wp-json",
        // This assumes you are using basic auth, as described further below
        username: "loueleen.billard@epitech.eu",
        // email: "alexandrebecretnyc@gmail.com",
        password: "d4$dZt&6k&XU3o(Lw4BoZ$b(",
        // "oodXz51cC%jx#qcdMm"
      });
      wp.categories()
        .create({
          // "name", "email" and "password" are the only required properties
          name: this.name,
          // Users will be created as a draft by default if a specific "status"
          // is not specified
          status: "publish",
        })
        .then(function (response) {
          // "response" will hold all properties of your newly-created post,
          // including the unique `id` the post was assigned on creation
          console.log(response.id);
        });
    },
    updateC(id, name) {
      // console.log(category);
      // this.categories = this.categories.filter((t) => t.id !== category.id);
      var wp = new WPAPI({
        endpoint: `http://localhost:8888/wordpress/wp-json`,
        // This assumes you are using basic auth, as described further below
        username: "loueleen.billard@epitech.eu",
        // email: "alexandrebecretnyc@gmail.com",
        password: "d4$dZt&6k&XU3o(Lw4BoZ$b(",
        // "oodXz51cC%jx#qcdMm"
      }); console.log(id, name);
      wp.categories()
        .id(id)
        .update({
          // "name", "email" and "password" are the only required properties
          name: name,
          // Users will be created as a draft by default if a specific "status"
          // is not specified
          status: "publish",
        })
        .then(function (response) {
          // "response" will hold all properties of your newly-created post,
          // including the unique `id` the post was assigned on creation
          console.log(response);
        });
    },
    deleteC(id) {
      // console.log(category);
      // this.categories = this.categories.filter((t) => t.id !== category.id);
      var wp = new WPAPI({
        endpoint: `http://localhost:8888/wordpress/wp-json/`,
        parameter: `?force=true`,
        // This assumes you are using basic auth, as described further below
        username: "loueleen.billard@epitech.eu",
        // email: "alexandrebecretnyc@gmail.com",
        password: "d4$dZt&6k&XU3o(Lw4BoZ$b(",
        // "oodXz51cC%jx#qcdMm"
      });
      console.log(id);
      wp.categories().id(id).delete({
        id: this.category,
      }).then(() => window.locat.reload());
    },setup() {
      const items = ref([
        {
          id: 0,
          content: "On en peux plus de loueleen, que Dieu nous vienne en aide",
          list: 1,
        },
        { id: 1, content: "item 2", list: 2 },
        { id: 2, content: "item 3", list: 3 },
        { id: 3, content: "item 4", list: 3 },
      ]);
      const getList = (list) => {
        return items.value.filter((item) => item.list == list);
      };
      const startDrag = (event, item) => {
        console.log(item);
        event.dataTransfer.dropEffect = "move";
        // event.dataTransfert.effectAllowed = 'move'
        event.dataTransfer.setData("itemID", item.id);
      };
      const onDrop = (event, list) => {
        const itemID = event.dataTransfer.getData("itemID");
        const item = items.value.find((item) => item.id == itemID);
        item.list = list;
      };
      return { getList, startDrag, onDrop };
    },
  },
};</script>

<template>
  <body>
    <div class="card">
      <form class="formadd" id="form" @submit.prevent="incrementC">
        <div class="mb-3">
          <label for="name" class="form-label">Category name:</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="name"
            placeholder="Category name"
          />
        </div>
        <button @click="incrementC" id="incrementC" class="btnaddc">
          Add a new category | +
        </button></form>
    </div>
    <div class="cardcontainer">
      <form class="formupdate" id="form" @submit.prevent="updateC, deleteC">
        <div v-for="category in categories" :key="category.id">
          <div class="card mb-3" style="max-width: 18rem; min-width: 18rem">
            <div class="card-header">
              <input class="columntitle" v-model="category.name" />
              <h4>{{ category.id }}</h4>
              <button
                type="button"
                class="btnadd"
                data-bs-toggle="modal"
                data-bs-target="#modaladd"
              >
                <img
                  src="https://i.goopics.net/l0g0ob.png"
                  alt="add"
                  class="addicon"
                />
              </button>
            </div>
            <div
              class="card-body"
              @drop="onDrop($event, countC)"
              @dragover.prevent
              @dragenter.prevent
            ><div
                v-for="item in getList"
                :key="item.id"
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
              >
                {{ item.content }}
              </div>
            </div>
            <div class="card-footer">
              <button
                @click="updateC(category.id, category.name)"
                class="btnsavC"
              >
                Save change
              </button>
              <button @click="deleteC(category.id)" class="btndelC">
                <img
                  src="https://i.goopics.net/gv9xpo.png"
                  alt="bin"
                  class="delicon"
                />
              </button>
            </div>
          </div>
        </div>
      </form></div>
  </body>
  <div 
  :id="id"
  class="card"
  :draggable="draggable"
  @dragstart="dragStart"
  @dragover.stop
  >
  <slot></slot>
  </div>
</template>