<template>
  <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container settingsContainer">
      <div class="modal-header">
        <div class="modal-title text-center h6">Settings</div>
        <div class="divider"></div>
      </div>
      <div class="modal-body">
        <div class="content">
          <form class="form-horizontal">
            <div class="form-group height-32">
              <label class="col-7 form-text">Only metadata</label>
              <label class="col-5 form-switch">
                <input type="checkbox" checked>
                <i class="form-icon"></i>
              </label>
            </div>
            <div class="form-group">
              <label class="col-7 form-text">Frequency</label>
              <select class="col-5 form-select">
                <option>1 hour</option>
                <option>3 hours</option>
                <option>6 hours</option>
                <option selected="selected">12 hours</option>
                <option>24 hours</option>
              </select>
            </div>
            <div class="form-group">
              <label class="col-7 form-text" for="folder">Storage folder: </label>
              <button name="folder" type='button' class="btn btn-secondary col-5">
                <span>Change</span>
              </button>
            </div>
            <div class="form-group">
              <label class="col-7 form-text" for="folder">Default script: </label>
              <button name="folder" type='button' class="btn btn-secondary col-5">
                <span>Change</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <button v-on:click="setModal({ modal: 'settings', status: false });" class="btn btn-primary float-left" name="close">
          <span>Close</span>
        </button>
        <button v-on:click="setModal({ modal: 'settings', status: false });" type="button" name="apply" class="btn btn-primary tooltip tooltip-bottom" data-tooltip="Apply your changes.">
          <span>Apply</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings-modal',
    methods: {
      setModal(options) { this.$store.commit('setModal', options); },
    },
  };
</script>

<style>

</style>
