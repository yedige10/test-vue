<template>
    <div class="wrapper">
        <div class="main">
            <div class="logoContainer">
                <img alt='logo' src="../../assets/icons/logo.svg" />

                <p>Dashboard</p>
            </div>

            <nav style="marginTop: 24px">
                <ul style="list-style-type: none;">
                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/Overview.svg" />
                            <p>Overview</p>
                        </div>
                    </li>

                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/tickets.svg" />
                            <p>Tickets</p>
                        </div>
                    </li>

                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/Idea.svg" />
                            <p>Ideas</p>
                        </div>
                    </li>

                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/Contact.svg" />
                            <p>Contacts</p>
                        </div>
                    </li>

                    <li>
                        <div class="linkContainer">
                            <img src="../../assets/icons/Agent.svg" />
                            <p>Agent</p>
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
    background-color:"#cde5f8";
}

p {
    color: #A4A6B3
}

.logoContainer {
    display: flex; 
    justify-content: flex-start;
    gap: 8px; 
    align-items: center;
    /*padding: 5px*/
}



</style>