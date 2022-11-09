<template>
    <div class="wrapper">
        <div class="main">
            <div style="display: flex; justify-content: center; gap: 8px">
                <img alt='logo' src="../../assets/icons/logo.svg" />
                <p>Dashboard</p>
            </div>
            <nav>
                <ul style="list-style-type: none;">
                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/Overview.svg" />
                            <p>fd</p>
                        </div>
                    </li>

                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/tickets.svg" />
                            <p>fdsfds</p>
                        </div>
                    </li>
                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/tickets.svg" />
                            <p>fdsfds</p>
                        </div>
                    </li>
                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/tickets.svg" />
                            <p>fdsfds</p>
                        </div>
                    </li>
                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/tickets.svg" />
                            <p>fdsfds</p>
                        </div>
                    </li>
                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/tickets.svg" />
                            <p>fdsfds</p>
                        </div>
                    </li>
                </ul >
            </nav >
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
  background: #363740;
  padding: 32px 8px 32px 16px;
  display: flex;
  flex-direction: column;
  width: 200px;
}

.main {
    flex-grow: 2;
}

.linkContainer {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 20px auto;
    align-items: center;
    text-align: left;
    gap: 10px;
    padding: 10px;
    border-radius: 8px; 
    background-color:"#cde5f8";
}

.linkContainer >>> p {
    color: #A4A6B3;
}
p {
    color: #A4A6B3
}
</style>