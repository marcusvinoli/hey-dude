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
          <div id="project-page">
              <div class="field-box project-name-field">
                  <label for="project-name">Project Name</label>
                  <input class="field" type="text" id="project-name" name="project-name">
              </div>

              <div class="field-box mcu-part-field">
                  <MicrocontrollersList/>
              </div>

              <div class="field-box programmer-field">
                  <ProgrammersList/>
              </div>

              <div class="field field-buttons">
                  <button class="generic-button">Open</button>
                  <button class="generic-button">Save New Project</button>
              </div>

          </div>

        </div>
    </div>
    <div class ="status-bar">
        Ready to go!
    </div>
  </div>
</template>

<script>
  //  import SystemInformation from './LandingPage/SystemInformation'
  import MicrocontrollersList from './MicrocontrollersList'
  import ProgrammersList from './ProgrammersList'

  export default {
    components: {
      MicrocontrollersList,
      ProgrammersList
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import './Styles/clear-theme.css';
</style>
