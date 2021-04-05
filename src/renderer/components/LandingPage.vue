<template>
  <div>
    <div class ="title-bar">
        Hey-Dude - Unamed Project
    </div>
    <div class="application-area">
        <div class = "left-menu-bar">
            <button class = "menu-item-button" onclick="console.log('A')"><div class = "menu-item-icon" id = "menu-item-icon-project"></div>Project</button>
            <button class = "menu-item-button" onclick="console.log('B')"><div class = "menu-item-icon" id = "menu-item-icon-firmware"></div>Firmware</button>
            <button class = "menu-item-button" onclick="console.log('C')"><div class = "menu-item-icon" id = "menu-item-icon-eeprom"></div>EEPROM</button>
            <button class = "menu-item-button" onclick="console.log('D')"><div class = "menu-item-icon" id = "menu-item-icon-fuses"></div>Fuses</button>
        </div>
        <div class="right-canvas" id="page-canvas">
            <ProjectPage/>
        </div>
    </div>
    <div class ="status-bar">
        Ready to go!
    </div>
  </div>
</template>

<script>
import ProjectPage from './Pages/ProjectPage'

export default {
  components: {
    ProjectPage
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import './Styles/clear-theme.css';
</style>
