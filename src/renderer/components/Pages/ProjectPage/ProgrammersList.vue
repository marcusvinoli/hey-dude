<template>
  <dropdown-list listId="programmer" listName="Programmer" listClass="field" :listArrayObject=programmerTools valueKey="value" optionTextKey="programmer" listPlaceholderText="Select Programming Tool"/>
</template>

<script>
//  import LandingPage from './LandingPage.vue'
import DropdownList from '../../commons/DropdownList.vue'
const programmerTools = require('../../../../config/programmers.json')

export default {
  components: {
    DropdownList
  },
  data () {
    return {
      programmerTools
    }
  }
}
</script>

<style>

</style>