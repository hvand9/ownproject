<template>
  <div class="about">
    <h1>This is the product page</h1>
    <h2>Welcome to the product page</h2>
    <p>We sell T-shirts on our shop, soon we will expand it by having shoes aswell</p>

<div class="row">
  <div class="column">
    <img src="../assets/tshirt.jpg" alt="Snow" style="width:100%">
  </div>
  <div class="column">
    <img src="../assets/tshirt.jpg" alt="Forest" style="width:100%">
  </div>
  <div class="column">
    <img src="../assets/tshirt.jpg" alt="Mountains" style="width:100%">
  </div>
</div>
  </div>
</template> 

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: antiquewhite;
}

#nav {
  padding: 30px;
  font-size: 100px;
 

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
    box-sizing: border-box;
  }
  
  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }
  
  /* Clearfix (clear floats) */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>