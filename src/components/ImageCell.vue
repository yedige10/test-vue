<template>
  <div class="image-cropper">
    <img 
      :src="choosenImageURL ?? imagePath" 
      class="image" 
    />

    <div class="middle">
      <input
        :id="'fileUpload' + item.id"
        type="file"
        hidden
        accept="image/*"
        @change="selectedImage($event)"
      />

      <button 
        class="ft-12" 
        v-if="choosenImageURL" 
        type="button" 
        @click="saveImage()"
      >
        Save
      </button>

      <button 
        class="ft-12" 
        v-else 
        type="button" 
        @click="chooseImage()"
      >
        Change
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],

  data() {
    return {
      image: null,
      choosenImageURL: null
    };
  },
  
  computed: {
    imagePath: function () {
      return 'https://test-api.mybimiboo.dev/' + this.item.image_path 
    }
  },

  methods: {
    chooseImage() {
      document.getElementById("fileUpload" + this.item.id).click();
    },

    selectedImage(event) {
      this.image = event.target.files[0];
      this.choosenImageURL = URL.createObjectURL(event.target.files[0])
    },

    saveImage(){
      this.$emit('imageChange', this.image)
    }
  }
};
</script>

<style scoped>
.image-cropper {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
}

img {
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
}

.middle {
  padding: 4px;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  text-align: center;
}

.image-cropper:hover .middle {
  background: rgba(0, 0, 0);
  color: #ffffff;
  opacity: 0.8;
}

.ft-12{
  font-size: 12px;
}
</style>
