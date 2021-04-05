<template>
    <div>
        <label :for="listName">{{listName}}</label>
        <select :id="listId" :class="listClass" type="text" :name="listName">
            <option disabled="" value="" selected data-default>{{listPlaceholderText}}</option>
            <option v-for="item in arrayItems" :value="item[valueKey]" :key="item.id">{{item[optionTextKey]}}</option>
        </select>
    </div>
</template>

<script>
export default {
  props: ['listId', 'listName', 'listClass', 'listArrayObject', 'valueKey', 'optionTextKey', 'listPlaceholderText'],
  computed: {
    optionText: function () {
      return 'item.' + this.optionTextKey
    },
    valueText: function () {
      return 'item.' + this.valueKey
    }
  },
  data () {
    return {
      arrayItems: this.listArrayObject
    }
  }
}
</script>

<style>

</style>