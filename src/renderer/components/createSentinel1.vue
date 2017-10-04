<template>
  <div class='empty base'>
  <h6 class="text-bold">Create Sentinel 1 Site</h6>
  <div class="divider"></div>
  <form class="form-horizontal" onsubmit="return false">
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">Name</label>
      </div>
      <div class="col-9">
        <input class="form-input" type="text" placeholder="Project name" ref="sitename" required>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label" for="notes">Notes</label>
      </div>
      <div class="col-9">
        <textarea class="form-input" placeholder="Notes regarding the area" rows="3" maxlength="100" ref="notes" required></textarea>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label">Frequency</label>
      </div>
      <div class="col-9">
        <select class="form-select" ref="frequency">
          <option>1</option>
          <option>3</option>
          <option>6</option>
          <option selected="selected">12</option>
          <option>24</option>
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
          <input type="radio" checked ref="downloadtype_metadata" value="metadata">
          <i class="form-icon"></i>
          <span style="font-size: 0.99em;">Metadata</span>
        </label>
      </div>
      <div class="col-4">
        <label class="form-radio float-left">
          <input type="radio" ref="downloadtype_files" value="files">
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
        <input type="date" class="form-input" ref="startDate"></input>
      </div>
    </div>
    <div class="form-group">
      <div class="col-3">
        <label class="form-label"><span>Geometry</span></label>
      </div>
      <div class="col-9">
        <button v-on:click="toggleModal('modalsCreateGeometry')" type="button" class="form-input btn btn-secondary" v-bind:class="{
          'is-success': geometryAdded
        }">
          <span v-if="!geometryAdded">Create Geometry</span>
          <span v-if="geometryAdded">Geometry Attached</span>
        </button>
      </div>
    </div>

    <div class="form-group">
      <div class="col-3"></div>
      <div class="col-9">
        <button v-on:click="displayAdvanced" class="btn btn-action circle" type="button">
          <i class="icon icon-arrow-down"></i>
        </button>
        <span>Advanced</span>
      </div>
    </div>

    <section v-show="showAdvanced">
      <div class="divider"></div>
      <div class="form-group">
        <div class="col-3">
          <label class="form-label"><span>Producttype</span></label>
        </div>
        <div class="col-1"></div>
        <div class="col-2">
          <label class="form-checkbox float-left">
            <input type="checkbox" ref="producttype_SLC" value="SLC">
              <i class="form-icon col-3"></i>
              <span class="col-9">SLC</span>
            </input>
          </label>
        </div>
        <div class="col-2">
          <label class="form-checkbox float-left">
            <input type="checkbox" checked ref="producttype_GRD" value="GRD">
              <i class="form-icon col-3"></i>
              <span class="col-9">GRD</span>
            </input>
          </label>
        </div>
        <div class="col-2">
          <label class="form-checkbox float-left">
            <input type="checkbox" ref="producttype_OCN" value="OCN">
              <i class="form-icon col-3"></i>
              <span class="col-9">OCN</span>
            </input>
          </label>
        </div>
        <div class="col-2">
          <label class="form-checkbox float-left">
            <input type="checkbox" ref="producttype_RAW" value="RAW">
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
            <input type="checkbox" checked ref="polarisationmode_HH" value="HH">
            <i class="form-icon col-3"></i>
            <span class="float-left col-9">HH</span>
          </input>
        </label>
        <label class="form-checkbox float-left">
          <input type="checkbox" checked ref="polarisationmode_VV" value="VV">
          <i class="form-icon col-3"></i>
          <span class="float-left col-9">VV</span>
        </input>
      </label>
      </div>
      <div class="col-3">
        <label class="form-checkbox float-left">
          <input type="checkbox" checked ref="polarisationmode_HV" value="HV">
          <i class="form-icon col-3"></i>
          <span class="float-left col-9">HV</span>
        </input>
      </label>
      <label class="form-checkbox float-left">
        <input type="checkbox" checked ref="polarisationmode_VH" value="VH">
        <i class="form-icon col-3"></i>
        <span class="float-left col-9">VH</span>
      </input>
      </label>
      </div>
      <div class="col-3">
        <label class="form-checkbox float-left">
          <input type="checkbox" checked ref="polarisationmode_HHVH" value="HH+HV">
          <i class="form-icon col-3"></i>
          <span class="float-left col-9 no-wrap">HH VH</span>
        </input>
      </label>
      <label class="form-checkbox float-left">
        <input type="checkbox" checked ref="polarisationmode_VVVH" value="VV+VH">
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
            <input type="checkbox" ref="sensoroperationalmode_SM" value="SM">
            <i class="form-icon col-3"></i>
            <span class="col-9">SM</span>
          </input>
        </label>
      </div>
      <div class="col-3">
        <label class="form-checkbox float-left">
          <input type="checkbox" checked ref="sensoroperationalmode_IW" value="IW">
          <i class="form-icon col-3"></i>
          <span class="col-9">IW</span>
        </input>
      </label>
      </div>
      <div class="col-3">
        <label class="form-checkbox float-left">
          <input type="checkbox" ref="sensoroperationalmode_EW" value="EW">
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
            <input type="checkbox" checked ref="orbitdirection_ascending" value="Ascending">
            <i class="form-icon col-3"></i>
            <span class="col-9">Ascending</span>
          </input>
        </label>
      </div>
      <div class="col-4">
        <label class="form-checkbox float-left">
          <input type="checkbox" checked ref="orbitdirection_decending" value="Decending">
          <i class="form-icon col-3"></i>
          <span class="col-9">Decending</span>
        </input>
      </label>
      </div>
      </div>
    </section>

  </form>
  <router-link :to="{ path: '/sites' }">
    <button class="btn btn-primary float-left margin-top" name="close">
      <span>Close</span>
    </button>
  </router-link>
  <button v-on:click="createSite" type="submit" name="apply" class="btn btn-primary tooltip tooltip-bottom float-right margin-top" data-tooltip="Apply your changes.">
    <span>Apply</span>
  </button>
  </div>
</template>

<script>
  import db from '../database';

  export default {
    name: 'createSentinel1-page',
    data: function () {
      return {
        showAdvanced: false,
      }
    },
    computed: {
      geometryAdded: function() {
        return this.$store.getters.geometryAdded;
      },
    },
    methods: {
      toggleModal: function (modal) {
        this.$store.commit('toggleModal', modal);
      },
      displayAdvanced: function() {
        this.$data.showAdvanced = !this.$data.showAdvanced;
      },
      setCurrentlyLoading: function (boolean) {
        this.$store.commit('setCurrentlyLoading', boolean);
      },
      createSite: function() {
        if (this.$refs.sitename.value.length === 0) {
          this.$refs.sitename.focus();
          this.$refs.sitename.classList.add('is-error');
        } else if (this.$refs.notes.value.length === 0) {
          this.$refs.notes.focus();
          this.$refs.sitename.classList.remove('is-error');
          this.$refs.notes.classList.add('is-error');
        } else if (!this.$refs.startDate.value) {
          this.$refs.sitename.classList.remove('is-error');
          this.$refs.notes.classList.remove('is-error');
          this.$refs.startDate.focus();
          this.$refs.startDate.classList.add('is-error');
        } else if (!this.$store.getters.geometryAdded) {
          this.$store.commit('errorStatusToggleOn');
          this.$store.commit('errorSetMessage', 'Please attach geometry');
        } else {
          this.$store.commit('setCurrentlyLoading', true);
          this.$store.commit('setLoadingMessage', 'Adding site to local DB');

          this.$refs.sitename.classList.remove('is-error');
          this.$refs.notes.classList.remove('is-error');
          this.$refs.startDate.classList.remove('is-error');
          const form = {
            sitename: this.$refs.sitename.value,
            notes: this.$refs.notes.value,
            frequency: Number(this.$refs.frequency.value),
            startDate: new Date(this.$refs.startDate.value).toISOString(),
            producttype: [],
            polarisationmode: [],
            sensoroperationalmode: [],
            orbitdirection: [],
          };

          form.downloadtype = (this.$refs.downloadtype_metadata.checked) ? 'metadata' : 'files';

          const producttypeBoxes = [
            this.$refs.producttype_SLC,
            this.$refs.producttype_GRD,
            this.$refs.producttype_OCN,
            this.$refs.producttype_RAW,
          ];
          producttypeBoxes.forEach((box) => {
            if(box.checked) { form.producttype.push(box.value); }
          });
          form.producttype = form.producttype.toString();

          const polarisationmodeBoxes = [
            this.$refs.polarisationmode_HH,
            this.$refs.polarisationmode_VV,
            this.$refs.polarisationmode_HV,
            this.$refs.polarisationmode_VH,
            this.$refs.polarisationmode_HHVH,
            this.$refs.polarisationmode_VVVH,
          ];
          polarisationmodeBoxes.forEach((box) => {
            if(box.checked) { form.polarisationmode.push(box.value); }
          });
          form.polarisationmode = form.polarisationmode.toString();

          const sensoroperationalmodeBoxes = [
            this.$refs.sensoroperationalmode_SM,
            this.$refs.sensoroperationalmode_IW,
            this.$refs.sensoroperationalmode_EW,
          ];
          sensoroperationalmodeBoxes.forEach((box) => {
            if(box.checked) { form.sensoroperationalmode.push(box.value); }
          });
          form.sensoroperationalmode = form.sensoroperationalmode.toString();

          const orbitdirectionBoxes = [
            this.$refs.orbitdirection_ascending,
            this.$refs.orbitdirection_decending,
          ];
          orbitdirectionBoxes.forEach((box) => {
            if(box.checked) { form.orbitdirection.push(box.value); }
          });
          form.orbitdirection = form.orbitdirection.toString();

          form.footprint = this.$store.getters.geometry;
          form.footprint = JSON.stringify(form.footprint).replace(/"/g, "'");
          form.satellite = 'Sentinel-1';
          const userID = this.$store.getters.credentials.userID;
          form.userID = userID;

          const vm = this;

          db.insertInto('sites', form)
            .then(() => {
              console.log(form);

              // TODO: route to sites and start checking images
              vm.$router.push({ path: 'sites' });
            })
            .catch(err => console.log(err))
            .then(() => {
              this.$store.commit('setGeometryAdded', false);
              this.$store.commit('setGeometry', null);
              this.$store.commit('setCurrentlyLoading', false);
              this.$store.commit('setLoadingMessage', '');
            });
        }
      },
    }
  }
</script>
