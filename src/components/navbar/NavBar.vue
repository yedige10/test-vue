<template>
    <div class="wrapper">
        <h2>Tickets</h2>

        <div class="userContainer">
            <div class="userWrapper">
                <button class="button-primary">NEW ITEM</button>

                <img src="../../assets/icons/Search.svg" />

                <img src="../../assets/icons/Notification.svg" />

                <v-divider
                    vertical
                ></v-divider>

                <div class="userProfile">
                    <span>Jones Ferdinand</span>

                    <img src="../../assets/images/user.png" />
                </div>
                
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
  flex-direction: row;
  justify-content: space-between; 
  border: none;
  padding: 0 12px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 20px;
}


.userContainer{
    margin-left: auto;
}

.userWrapper {
  display: flex;
  align-items: center;
  gap: 24px;
}

.button-primary {
    background: #3751FF;
    border-radius: 100px;
    padding: 8px 16px;
    color: #ffffff
}

.userProfile{
    display: flex;
    align-items: center;
    gap:8px
}

</style>