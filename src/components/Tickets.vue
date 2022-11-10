<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="tickets"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.title`]="{ item }">
        <v-text-field 
          v-model="editedItem.title" 
          :hide-details="true" 
          dense single-line 
          :autofocus="true" 
          v-if="item.id === editedItem.id"
        >
        </v-text-field>

        <span v-else>{{item.title}}</span>
      </template>
      
      <template v-slot:[`item.description`]="{ item }">
        <v-text-field 
          v-model="editedItem.description" 
          :hide-details="true" 
          dense single-line 
          v-if="item.id === editedItem.id" 
        >
        </v-text-field>

        <span v-else>{{item.description}}</span>
      </template>

      <template  v-slot:[`item.image_path`]="{ item }">
        <div style="padding: 8px 0px">
          <ImageCell 
            :item='item' 
            @imageChange="handleImageChange"
          />
        </div>
      </template>
      
      <template v-slot:[`item.actions`]="{ item }">
        <div v-if="item.id === editedItem.id">
          <v-icon 
            color="red" 
            class="mr-3" 
            @click="close"
          >
            mdi-window-close
          </v-icon>

          <v-icon 
            color="green"  
            @click="saveItem"
          >
            mdi-content-save
          </v-icon>
        </div>

        <div v-else>
          <v-icon 
            color="green" 
            class="mr-3" 
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
        </div>
      </template>
    </v-data-table>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import ImageCell from './ImageCell.vue'

export default {
  components:{
    ImageCell
  },

  data() {
    return {
      editedItem: '',
      headers: [
        { 
          text: "ID", 
          value: "id" 
        },
        {
          text: "Title",
          value: "title",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "Image", 
          value: "image_path"
        },
        { 
          text: 'Actions', 
          value: 'actions', 
          width: "100px"
        }
      ],
    };
  },

  computed: mapGetters(["tickets"]),

  methods: {
    editItem(item) {
      this.editedItem = {...item}
    },

    close(){
      this.editedItem = ''
    },

    saveItem(){
      alert('функция для сохранение не написано')
    },

    handleImageChange(image) {
      let formData = new FormData()
      formData.append('file', image)
      this.$store.dispatch('uploadImageOfTicket', formData)
      alert('функция дальше должен сохранить фото')
      /* uploadImageOfTicket not exists */
    }
  },
  
  created() {
    this.$store.dispatch("getTickets");
  },
};
</script>
