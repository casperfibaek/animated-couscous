<template>
  <div class='empty base'>
  <h6 class="text-bold">Create Sentinel 1 Site</h6>
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
        <input type="date" class="form-input"></input>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label"><span>Geometry</span></label>
      </div>
      <div class="col-9">
        <button type="button" class="form-input btn btn-secondary">
          <span>Create Geometry</span>
        </button>
      </div>
    </div>

    <div class="form-group">
      <div class="col-3"></div>
      <div class="col-9">
        <button class="btn btn-action circle" type="button">
          <i class="icon icon-arrow-down"></i>
        </button>
        <span>Advanced</span>
      </div>
    </div>

      <div class="divider"></div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Producttype</span></label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox">
              <i class="form-icon col-3"></i>
              <span class="col-9">SLC</span>
            </input>
          </label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="col-9">GRD</span>
            </input>
          </label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox">
              <i class="form-icon col-3"></i>
              <span class="col-9">OCN</span>
            </input>
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Polarisation</span></label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="float-left col-9">HH</span>
            </input>
          </label>
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="float-left col-9">VV</span>
            </input>
          </label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="float-left col-9">HV</span>
            </input>
          </label>
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="float-left col-9">VH</span>
            </input>
          </label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="float-left col-9 no-wrap">HH VH</span>
            </input>
          </label>
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="float-left col-9 no-wrap">VV VH</span>
            </input>
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Operational- mode</span></label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox">
              <i class="form-icon col-3"></i>
              <span class="col-9">SM</span>
            </input>
          </label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="col-9">IW</span>
            </input>
          </label>
        </div>
        <div class="col-3">
          <label class="form-checkbox float-left">
            <input type="checkbox">
              <i class="form-icon col-3"></i>
              <span class="col-9">EW</span>
            </input>
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Orbit</span></label>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="col-9">Acending</span>
            </input>
          </label>
        </div>
        <div class="col-4">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked>
              <i class="form-icon col-3"></i>
              <span class="col-9">Decending</span>
            </input>
          </label>
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
    name: 'createSentinel1-page',
    components: {  },
    methods: {
    }
  }
</script>

<style>

</style>
