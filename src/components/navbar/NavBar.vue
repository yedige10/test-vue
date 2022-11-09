<template>
    <div class="wrapper">
        <div>Tickets</div>

        <div class="container">
            <div class="userWrapper">
                <button>New Item</button>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    setup() {
        
    },
}
</script>
<style scoped>
.wrapper {
  height: 64px;
  display: flex;
  /* flex-direction: row;
  justify-content: space-between; */
  border: none;
  padding: 0 12px;
  align-items: center;
  /*box-shadow: 0px 1px 2px rgba(145, 158, 171, 0.12);*/
  margin-bottom: 20px;
}

.container{
    margin-left: auto;
}

.userWrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

</style>