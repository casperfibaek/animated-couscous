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
      <div class="col-4">
        <label class="form-checkbox float-left">
          <input class="form-input" type="checkbox" reference="producttype" value="S2MSI1C">
            <i class="form-icon col-3"></i>
            <span class="col-9">S2MSI1C</span>
          </input>
        </label>
      </div>
      <div class="col-4">
        <label class="form-checkbox float-left">
          <input class="form-input" type="checkbox" reference="producttype" value="S2MSI2Ap" checked>
            <i class="form-icon col-3"></i>
            <span class="col-9">S2MSI2Ap</span>
          </input>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createSentinel2-advanced',
  };
</script>
