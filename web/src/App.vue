<template>
  <div id="app">
    <HeaderInfo/>
    <div id="layoutSidenav">
      <sidebar/>
      <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4">
              <router-view/>
            </div>
        </main>
          <FooterInfo/>
      </div>
  </div>
  </div>
</template>
<script>
import HeaderInfo from '@/layout/HeaderInfo'
import FooterInfo from '@/layout/FooterInfo'
import sidebar from '@/layout/sidebar'
export default {
  name: 'app',
  components: {
      HeaderInfo,
      sidebar,
      FooterInfo
    }

}
</script>
<style>

  @import "style/style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

</style>
