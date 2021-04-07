<template>
    <div>
        <div class="drop-zone" @dragover="dragoverHandler" @dragleave="dragleaveHandler" @drop="dropHandler">
            <div class="drop-icon">
            </div>
            <div class="clickable-file-input-fiel">
                <input class="file-input-field" name="fileInput" type="file" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png"/>
                <label class="file-input-field-label" for="fileInput">
                    Drag and drop here some firmware binary or  <a>click here</a>!
                </label>
            </div>

        </div>
    </div>
</template>

<script>
var firmwareFile = ''

export default {
  data () {
    return {
      firmwareFile
    }
  },
  methods: {
    onChange (event) {
      //    let droppedFiles = event.dataTransfer.files
      let droppedFiles = this.$refs.file.files
      if (!droppedFiles) {
        return
      }
      this.firmwareFile = droppedFiles[0]
      console.log('Dropped file')
      console.log('File: ' + this.firmwareFile.name)
    },
    dragoverHandler (event) {
      event.preventDefault()
      console.log('Draggin over area...')
    },
    dragleaveHandler (event) {
      console.log('Leave Drop Zone')
    },
    dropHandler (event) {
      event.preventDefault()
      this.$refs.file.files = event.dataTransfer.files
      this.onChange()
    }
  }
}
</script>

<style scoped>
.drop-zone {
    width: 100%;
    padding-top: 10px;
}

.drop-icon {
    position:relative;
    display: block;
    height: 400px;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: #9C9C9C;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}

.drop-text {
    margin-top: 20px;
    text-align: center;
    text-decoration: italic;
}

a {
    text-decoration: underline;
}

.clickable-file-input-fiel {
    position: relative;
    width: 100%;
    height: 40px;
}

input[type=file]{
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
}

.file-input-field-label {
    display: block;
    text-align: center;
}

</style>