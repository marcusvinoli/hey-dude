<template>
  <dropdown-list listId="microcontroller" listName="Microcontroller" listClass="field" :listArrayObject=microcontrollers valueKey="value" optionTextKey="partnumber" listPlaceholderText="Select MCU part number"/>
</template>

<script>
//  import LandingPage from './LandingPage.vue'
import DropdownList from '../../Commons/DropdownList'
const microcontrollers = require('../../../../config/microcontrollers.json')

export default {
  components: {
    DropdownList
  },
  data () {
    return {
      microcontrollers
    }
  }
}
</script>

<style>

</style>