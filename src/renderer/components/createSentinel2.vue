<template>
  <div class='empty base'>
    <h6 class="text-bold">Create Sentinel 2 Site</h6>
    <div class="divider"></div>
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="input-example-1">Name</label>
        </div>
        <div class="col-9">
          <input class="form-input" type="text" id="input-example-1" placeholder="Project name">
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="notes">Notes</label>
        </div>
        <div class="col-9">
          <textarea class="form-input" placeholder="Notes regarding the area" name="notes" rows="3" maxlength="100"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label" for="frequency">Frequency</label>
        </div>
        <div class="col-9">
          <select class="form-select" name="frequency">
            <option>1 hour</option>
            <option>3 hours</option>
            <option>6 hours</option>
            <option selected="selected">12 hours</option>
            <option>24 hours</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label">Download</label>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <label class="form-radio float-left">
            <input type="radio" name="downloadType" checked>
            <i class="form-icon"></i>
            <span style="font-size: 0.99em;">Metadata</span>
          </label>
        </div>
        <div class="col-4">
          <label class="form-radio float-left">
            <input type="radio" name="downloadType">
            <i class="form-icon"></i>
            <span style="font-size: 0.99em;">All files</span>
          </label>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Start date</span></label>
        </div>
        <div class="col-9">
          <input type="date" class="form-input float-left"></input>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Geometry</span></label>
        </div>
        <div class="col-9">
          <button type="button" class="btn btn-secondary float-left col-12">
            <span>Create Geometry</span>
          </button>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Clouds <=</span></label>
        </div>
        <div class="col-9">
          <input type="number" class="form-input" placeholder="10" value="10" max="100" min="1"></input>
        </div>
      </div>
    </form>
    <router-link :to="{ path: '/sites' }">
      <button class="btn btn-primary float-left margin-top" name="close">
        <span>Close</span>
      </button>
    </router-link>
    <button type="button" name="apply" class="btn btn-primary tooltip tooltip-bottom float-right margin-top" data-tooltip="Apply your changes.">
      <span>Apply</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'createSentinel2-page',
    components: {  },
    methods: {
    }
  }
</script>

<style>

</style>
