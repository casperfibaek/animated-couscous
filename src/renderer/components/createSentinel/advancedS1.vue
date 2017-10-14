<template>
  <div class="advanced">
    <div class="divider"></div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">
          <span>Producttype</span>
        </label>
      </div>
      <div class="col-1"></div>
      <div class="col-2">
        <label class="form-checkbox float-left">
          <input class="form-input" type="checkbox" reference="producttype" value="SLC">
            <i class="form-icon col-3"></i>
            <span class="col-9">SLC</span>
          </input>
        </label>
      </div>
      <div class="col-2">
        <label class="form-checkbox float-left">
          <input class="form-input" type="checkbox" checked reference="producttype" value="GRD">
            <i class="form-icon col-3"></i>
            <span class="col-9">GRD</span>
          </input>
        </label>
      </div>
      <div class="col-2">
        <label class="form-checkbox float-left">
          <input class="form-input" type="checkbox" reference="producttype" value="OCN">
            <i class="form-icon col-3"></i>
            <span class="col-9">OCN</span>
          </input>
        </label>
      </div>
      <div class="col-2">
        <label class="form-checkbox float-left">
          <input class="form-input" type="checkbox" reference="producttype" value="RAW">
            <i class="form-icon col-3"></i>
            <span class="col-9">RAW</span>
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
          <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HH">
          <i class="form-icon col-3"></i>
          <span class="float-left col-9">HH</span>
        </input>
      </label>
      <label class="form-checkbox float-left">
        <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VV">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9">VV</span>
      </input>
    </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left">
        <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HV">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9">HV</span>
      </input>
    </label>
    <label class="form-checkbox float-left">
      <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VH">
      <i class="form-icon col-3"></i>
      <span class="float-left col-9">VH</span>
    </input>
    </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left">
        <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HH+HV">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9 no-wrap">HH VH</span>
      </input>
    </label>
    <label class="form-checkbox float-left">
      <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VV+VH">
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
          <input class="form-input" type="checkbox" reference="sensoroperationalmode" value="SM">
          <i class="form-icon col-3"></i>
          <span class="col-9">SM</span>
        </input>
      </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left">
        <input class="form-input" type="checkbox" checked reference="sensoroperationalmode" value="IW">
        <i class="form-icon col-3"></i>
        <span class="col-9">IW</span>
      </input>
    </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left">
        <input class="form-input" type="checkbox" reference="sensoroperationalmode" value="EW">
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
          <input class="form-input" type="checkbox" checked reference="orbitdirection" value="Ascending">
          <i class="form-icon col-3"></i>
          <span class="col-9">Ascending</span>
        </input>
      </label>
    </div>
    <div class="col-4">
      <label class="form-checkbox float-left">
        <input class="form-input" type="checkbox" checked reference="orbitdirection" value="Decending">
        <i class="form-icon col-3"></i>
        <span class="col-9">Decending</span>
      </input>
    </label>
    </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'createSentinel1-advanced',
  };
</script>
