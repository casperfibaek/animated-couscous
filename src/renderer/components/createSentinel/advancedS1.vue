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
        <label class="form-checkbox float-left" for="form-SLC">
          <input class="form-input" type="checkbox" reference="producttype" value="SLC" id="form-SLC">
            <i class="form-icon col-3"></i>
            <span class="col-9">SLC</span>
          </input>
        </label>
      </div>
      <div class="col-2">
        <label class="form-checkbox float-left" for="form-GRD">
          <input class="form-input" type="checkbox" checked reference="producttype" value="GRD" id="form-GRD">
            <i class="form-icon col-3"></i>
            <span class="col-9">GRD</span>
          </input>
        </label>
      </div>
      <div class="col-2">
        <label class="form-checkbox float-left" for="form-OCN">
          <input class="form-input" type="checkbox" reference="producttype" value="OCN" id="form-OCN">
            <i class="form-icon col-3"></i>
            <span class="col-9">OCN</span>
          </input>
        </label>
      </div>
      <div class="col-2">
        <label class="form-checkbox float-left" for="form-RAW">
          <input class="form-input" type="checkbox" reference="producttype" value="RAW" id="form-RAW">
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
        <label class="form-checkbox float-left" for="form-HH">
          <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HH" id="form-HH">
          <i class="form-icon col-3"></i>
          <span class="float-left col-9">HH</span>
        </input>
      </label>
      <label class="form-checkbox float-left" for="form-VV">
        <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VV" id="form-VV">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9">VV</span>
      </input>
    </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left" for="form-HV">
        <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HV" id="form-HV">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9">HV</span>
      </input>
    </label>
    <label class="form-checkbox float-left" for="form-VH">
      <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VH" id="form-VH">
      <i class="form-icon col-3"></i>
      <span class="float-left col-9">VH</span>
    </input>
    </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left" for="form-HHVH">
        <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HH+HV" id="form-HHVH">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9 no-wrap">HH VH</span>
      </input>
    </label>
    <label class="form-checkbox float-left" for="form-VVVH">
      <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VV+VH" id="form-VVVH">
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
        <label class="form-checkbox float-left" for="form-SM">
          <input class="form-input" type="checkbox" reference="sensoroperationalmode" value="SM" id="form-SM">
          <i class="form-icon col-3"></i>
          <span class="col-9">SM</span>
        </input>
      </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left" for="form-IW">
        <input class="form-input" type="checkbox" checked reference="sensoroperationalmode" value="IW" id="form-IW">
        <i class="form-icon col-3"></i>
        <span class="col-9">IW</span>
      </input>
    </label>
    </div>
    <div class="col-3">
      <label class="form-checkbox float-left" for="form-EW">
        <input class="form-input" type="checkbox" reference="sensoroperationalmode" value="EW" id="form-EW">
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
        <label class="form-checkbox float-left" for="form-ascending">
          <input class="form-input" type="checkbox" checked reference="orbitdirection" value="Ascending" id="form-ascending">
          <i class="form-icon col-3"></i>
          <span class="col-9">Ascending</span>
        </input>
      </label>
    </div>
    <div class="col-4">
      <label class="form-checkbox float-left" for="form-decending">
        <input class="form-input" type="checkbox" checked reference="orbitdirection" value="Decending" id="form-decending">
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
