<template>
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
</template>

<script>
import MicrocontrollersList from './ProjectPage/MicrocontrollersList'
import ProgrammersList from './ProjectPage/ProgrammersList'

export default {
  components: {
    MicrocontrollersList,
    ProgrammersList
  }
}
</script>

<style>

</style>