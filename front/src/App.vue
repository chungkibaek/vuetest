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
  


  <teleport to="#defaultPop">
  <AlterPopup v-if="isAlterPopup">
  </AlterPopup>

  <ConfirmPopup v-if="isConfirmPopup"></ConfirmPopup>
</teleport>

  </div>

</template>
<script>
import HeaderInfo from '@/layout/HeaderInfo'
import FooterInfo from '@/layout/FooterInfo'
import sidebar from '@/layout/sidebar'


import AlterPopup from '@/layout/popup/alterPop'
import ConfirmPopup from '@/layout/popup/confirmPop'

import {computed, toRefs, onBeforeMount} from 'vue'
import {useStore}  from 'vuex'

export default {
  name: 'app',
  components: {
      HeaderInfo,
      sidebar,
      FooterInfo,
      AlterPopup,
      ConfirmPopup
  },
  setup(){
    const store = useStore()

    const {
      isAlterPopup,
      isConfirmPopup
    } = toRefs(store.state.temp)

    return {
      isAlterPopup,
      isConfirmPopup
    }
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
