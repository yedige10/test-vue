<template>
  <div class="image-cropper">
    <img :src="'https://test-api.mybimiboo.dev/' + path" class="image" />
    <div class="middle">
      <button>Change</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["path"],
  data() {
    return {};
  },
  setup() {},
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
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.image-cropper:hover .middle {
  background: #000000;
  color: #ffffff;
  opacity: 1;
}
</style>
