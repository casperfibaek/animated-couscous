<template>
  <div class="advanced">
    <div class="divider"></div>
    <div class="form-group">
      <label class="form-label">Producttype</label>
      <div class="content">

        <div class="popover">
          <label class="form-checkbox float-left" for="form-SLC">
            <input class="form-input" type="checkbox" reference="producttype" value="SLC" id="form-SLC">
              <i class="form-icon"></i>
              <span>SLC</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Single Look Complex</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>Level-1 Single Look Complex (SLC) products consist of focused SAR data, geo-referenced using orbit and attitude data from the satellite, and provided in slant-range geometry.</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 dataproducts <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/product-types-processing-levels/level-1">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-GRD">
            <input class="form-input" type="checkbox" checked reference="producttype" value="GRD" id="form-GRD">
              <i class="form-icon"></i>
              <span>GRD</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Ground Range Detected</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>Level-1 Ground Range Detected (GRD) products consist of focused SAR data that has been detected, multi-looked and projected to ground range using an Earth ellipsoid model such as WGS84.</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 dataproducts <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/product-types-processing-levels/level-1">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-OCN">
            <input class="form-input" type="checkbox" reference="producttype" value="OCN" id="form-OCN">
              <i class="form-icon"></i>
              <span>OCN</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Ocean Products</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>Level-2 Ocean (OCN) products for wind, wave and currents applications may contain the following geophysical components derived from the SAR data:</span>
                <ul>
                  <li>Ocean Wind field (OWI)</li>
                  <li>Ocean Swell spectra (OSW)</li> 
                  <li>Surface Radial Velocity (RVL)</li> 
                </ul>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 dataproducts <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/product-types-processing-levels/level-2">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-RAW">
            <input class="form-input" type="checkbox" reference="producttype" value="RAW" id="form-RAW">
              <i class="form-icon"></i>
              <span>RAW</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Raw capture</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>The SAR Level-0 products consist of compressed and unfocused SAR raw data. Level-0 products are the basis from which all other high level products are produced.</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 dataproducts <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/product-types-processing-levels/level-0">here</a>.</span>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><span>Polarisation</span></label>
      <div class="content">
        
        <div class="popover">
          <label class="form-checkbox float-left" for="form-HH">
            <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HH" id="form-HH">
              <i class="form-icon"></i>
              <span class="float-left">HH</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Polarisationmode</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Single Operation</span><br>
                <span>Horisontal - Horisontal</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 polarisationsmodes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-VV">
            <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VV" id="form-VV">
              <i class="form-icon"></i>
              <span class="float-left">VV</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Polarisationmode</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Single Operation</span><br>
                <span>Vertical - Vertical</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 polarisationsmodes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-HV">
              <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HV" id="form-HV">
                <i class="form-icon"></i>
                <span class="float-left">HV</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Polarisationmode</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Single Operation</span><br>
                <span>Horisontal - Vertical</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 polarisationsmodes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-VH">
            <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VH" id="form-VH">
              <i class="form-icon"></i>
              <span class="float-left">VH</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Polarisationmode</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Single Operation</span><br>
                <span>Vertical - Horisontal</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 polarisationsmodes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>        

        <div class="popover">
          <label class="form-checkbox float-left" for="form-HHVH">
            <input class="form-input" type="checkbox" checked reference="polarisationmode" value="HH+HV" id="form-HHVH">
              <i class="form-icon"></i>
              <span class="float-left no-wrap">HH VH</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Polarisationmode</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Dual Operation</span><br>
                <span>Horisontal - Horisontal</span><br>
                <span>Vertical - Horisontal</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 polarisationsmodes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-VVVH">
            <input class="form-input" type="checkbox" checked reference="polarisationmode" value="VV+VH" id="form-VVVH">
              <i class="form-icon"></i>
              <span class="float-left no-wrap">VV VH</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Polarisationmode</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Dual Operation</span><br>
                <span>Vertical - Vertical</span><br>
                <span>Vertical - Horisontal</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 polarisationsmodes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>            
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><span>Operational- mode</span></label>
      <div class="content">

        <div class="popover">
          <label class="form-checkbox float-left" for="form-SM">
            <input class="form-input" type="checkbox" reference="sensoroperationalmode" value="SM" id="form-SM">
              <i class="form-icon"></i>
              <span>SM</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Stripmap</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>Stripmap mode acquires data with an 80 km swath at 5 m by 5 m spatial resolution (single look). The ground swath is illuminated by a continuous sequence of pulses while the antenna beam is pointing to a fixed azimuth angle and an approximately fixed off-nadir angle.</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 operational modes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes/stripmap">here</a>.</span>
              </div>
            </div>
          </div>
        </div>        

        <div class="popover">
          <label class="form-checkbox float-left" for="form-IW">
            <input class="form-input" type="checkbox" checked reference="sensoroperationalmode" value="IW" id="form-IW">
              <i class="form-icon"></i>
              <span>IW</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Interferometric Wide Swath</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>The Interferometric Wide swath mode is the main acquisition mode over land and satisfies the majority of service requirements. It acquires data with a 250 km swath at 5 m by 20 m spatial resolution (single look).</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 operational modes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes/interferometric-wide-swath">here</a>.</span>
              </div>
            </div>
          </div>
        </div> 

        <div class="popover">
          <label class="form-checkbox float-left" for="form-EW">
            <input class="form-input" type="checkbox" reference="sensoroperationalmode" value="EW" id="form-EW">
              <i class="form-icon"></i>
              <span>EW</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Extra Wide Swath</div>
                <div class="card-subtitle text-gray">Sentinel-1</div>
              </div>
              <div class="card-body">
                <span>Similar to the IW mode, the Extra Wide swath mode employs the TOPSAR technique to acquire data over a much wider area using five sub-swaths. EW mode acquires data over a 400 km swath at 20 m by 40 m spatial resolution.</span>
              </div>
              <div class="card-footer">
                <span>Read more about the Sentinel-1 operational modes <a href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes/extra-wide-swath">here</a>.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><span>Orbit</span></label>
      <div class="content">

        <div class="popover">
          <label class="form-checkbox float-left" for="form-decending">
            <input class="form-input" type="checkbox" checked reference="orbitdirection" value="Decending" id="form-decending">
              <i class="form-icon"></i>
              <span>Daytime</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Daytime</div>
                <div class="card-subtitle text-gray">Sentinel-1 and Sentinel-2</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Decending</span><br>
                <span>The ascending node (or south node) is where the orbiting object moves south through the plane of reference</span>
              </div>
              <div class="card-footer">
                <span>Read more about ascending and decending nodes <a href="https://landsat.usgs.gov/how-do-i-search-and-download-ascending-nighttime-scenes">here</a>.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="popover">
          <label class="form-checkbox float-left" for="form-ascending">
            <input class="form-input" type="checkbox" checked reference="orbitdirection" value="Ascending" id="form-ascending">
              <i class="form-icon"></i>
              <span>Nighttime</span>
            </input>
          </label>
          <div class="popover-container">
            <div class="card">
              <div class="card-header">
                <div class="card-title h5">Nighttime</div>
                <div class="card-subtitle text-gray">Sentinel-1 and Sentinel-2</div>
              </div>
              <div class="card-body">
                <span class="font-bold">Ascending</span><br>
                <span>The ascending node (or north node) is where the orbiting object moves north through the plane of reference</span>
              </div>
              <div class="card-footer">
                <span>Read more about ascending and decending nodes <a href="https://landsat.usgs.gov/how-do-i-search-and-download-ascending-nighttime-scenes">here</a>.</span>
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
    name: 'createSentinel1-advanced',
  };
</script>
