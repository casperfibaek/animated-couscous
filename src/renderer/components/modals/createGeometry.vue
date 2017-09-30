<template>
  <div class="modal active">
    <div class="modal-overlay"></div>
    <div class="modal-container settingsContainer">
      <div class="modal-header">
        <div class="modal-title text-center h6 text-bold">Create Gemetry</div>
        <div class="divider"></div>
      </div>
      <div class="modal-body">
        <div class="content">
          <div id="createMap">
            <!-- <script></script> -->
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="divider">
          <button class="btn btn-primary float-left margin-top" name="close">
            <span>Close</span>
          </button>
          <button type="button" name="apply" class="btn btn-primary tooltip tooltip-bottom float-right margin-top" data-tooltip="Apply your changes.">
            <span>Apply</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'createGeometry-modal',
    // components: { SystemInformation },
    methods: {
    }
  }
</script>

<style>

</style>
