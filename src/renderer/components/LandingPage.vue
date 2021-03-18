<template>
  <div>
    <div class ="title-bar">
        Hey-Dude - Unamed Project
    </div>
    <div class="application-area">
        <div class = "left-menu">
            <ul class = "menu">
                <li class = "menu-item"><div class = "menu-item-icon" id = "menu-item-icon-project"></div>Project</li>
                <li class = "menu-item"><div class = "menu-item-icon" id = "menu-item-icon-firmware"></div>Firmware</li>
                <li class = "menu-item"><div class = "menu-item-icon" id = "menu-item-icon-eeprom"></div>EEPROM</li>
                <li class = "menu-item"><div class = "menu-item-icon" id = "menu-item-icon-fuses"></div>Fuses</li>
                <!-- <li class = "menu-item"><div class = "menu-item-icon" id = "menu-item-icon-help"></div>Help</li> -->
            </ul>
        </div>
        <div class = "right-canvas">
            <!-- TEMPLATES FOR CANVAS RENDERING -->

            <div class = "canvas project-canvas">
                
            </div>

            <div class = "">
                <label class = "file-input-box">
                    <input type="file" id ="firmware-input" aria-label="File browser example">
                </label>
            </div>
        </div>
    </div>
    <div class ="status-bar">
        Ready to go!
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import './Styles/clear-theme.css';
</style>
