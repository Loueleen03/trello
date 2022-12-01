<script>
//import { createToaster } from "@meforma/vue-toaster";
//const toaster = createToaster({});
// import { Script } from "vm";
import WPAPI from "wpapi";
import { ref } from "vue";

export default {
  
  data() {
    return {
      // name: "",
      countC: 0,
     post: [],
      forma: {
        title: "",
        description: "",
        activity: "",
      },
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

    incrementC() {
      this.countC++;
      this.post.push({ name: this.title, id: this.countC });
      console.log(this.post);
      var wp = new WPAPI({endpoint: "http://localhost:8888/wordpress/wp-json",
        // This assumes you are using basic auth, as described further below
        username: "loueleen.billard@epitech.eu",
        // email: "alexandrebecretnyc@gmail.com",
        password: "d4$dZt&6k&XU3o(Lw4BoZ$b(",
        // "oodXz51cC%jx#qcdMm"
      });
      wp.posts()
        .create({
          // "name", "email" and "password" are the only required properties
          name: this.title,
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
      wp.posts()
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
      wp.posts().id(id).delete({
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
  },}
  </script>
//   methods: {
  
//     added() {
//       toaster.show("Added");
//       console.log(title);
//     },
//     onSubmit() {
//       let formcontent = {
//         title: this.title,
//         description: this.description,
//         activity: this.activity,
//       };
//       console.log(this.title);
//     },
//   },
// };
<template>
  <form class="review-form" @submit.prevent="incrementC">
    <div
      class="modal fade"
      id="modaladd"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add card</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title" class="form-label">Title :</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Add title..."
                v-model="forma.title"
              />
              {{ forma.title }}
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description :</label>
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder=" Add more detailed description..."
                v-model="forma.description"
              />
            </div>
            <div class="mb-3">
              <label for="activity" class="form-label">Activity :</label>
              <input
                type="text"
                class="form-control"
                id="activity"
                placeholder=" Write a comment..."
                v-model="forma.activity"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-primary btn-modal"
              @click="incrementC"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>

</template>