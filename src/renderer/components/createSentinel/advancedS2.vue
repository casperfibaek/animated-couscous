<template>
  <div class="advanced">
    <div class="divider"></div>
    <div class="form-group">
      <label class="form-label">Producttype</label>
      <div class="content">

        <div class="popover">
          <label class="form-checkbox float-left" for="form-S2MSI1C">
            <input class="form-input" type="checkbox" reference="producttype" value="S2MSI1C" id="form-S2MSI1C">
              <i class="form-icon"></i>
              <span>1C</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Processing level 1C</div>
                <div class="card-subtitle text-gray">Sentinel-2</div>
              </div>
              <div class="card-body">
                <span>The Level-1C product is composed of 100x100 km2 tiles (ortho-images in UTM/WGS84 projection). The Level-1C product results from using a Digital Elevation Model (DEM) to project the image in cartographic geometry. Per-pixel radiometric measurements are provided in Top Of Atmosphere (TOA) reflectances along with the parameters to transform them into radiances.</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-2 level 1C product <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/product-types/level-1c">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-S2MSI2Ap">
            <input class="form-input" type="checkbox" reference="producttype" value="S2MSI2Ap" checked id="form-S2MSI2Ap">
              <i class="form-icon"></i>
              <span>2A</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Processing level 2A</div>
                <div class="card-subtitle text-gray">Sentinel-2</div>
              </div>
              <div class="card-body">
                <span>The Level-2A product provides Bottom Of Atmosphere (BOA) reflectance images derived from the associated Level-1C products. Each Level-2A product is composed of 100x100 km2 tiles in cartographic geometry (UTM/WGS84 projection).</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-2 level 2A product <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/product-types/level-2a">here</a>.</span>
              </div>
            </div>
          </div>
        </div>        



      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createSentinel2-advanced',
  };
</script>
