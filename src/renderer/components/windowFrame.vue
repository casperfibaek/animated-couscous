<template>
  <div id="frame-bar">
       <div class="frame-bar-btns">
          <div v-on:click="minimize" class="frame-bar-btn">
            <i class="icon-minus" aria-hidden="true"></i>
          </div>
          <div v-on:click="maximize" class="frame-bar-btn">
            <i class="icon-popup" aria-hidden="true"></i>
          </div>
          <div v-on:click="close" class="frame-bar-btn">
            <i class="icon-cancel" aria-hidden="true"></i>
          </div>
       </div>
       <div class="frame-text"><span>Sentinel Data Manager</span></div>
  </div>
</template>
<style>
  #frame-bar {
    position: absolute;
    -webkit-app-region: drag;
    background-color: #3f5162;
    z-index: 1000;
    height: 32px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 100%;
    margin: 0px;
  }

  .frame-text{
    text-align: center;
    position: absolute;
    margin: 0 auto;
    width: 100%;
    color: #fff;
  }

  .frame-text > span{
    font-size: 0.90em;
    margin-top: 2px;
  }

  .frame-bar-btns {
    float: right;
    display: flex;
    justify-content: space-around;
    z-index: 1002;
   -webkit-app-region: no-drag;
  }

  .frame-bar-btn:hover{
    background-color: #364452;
  }

  .frame-bar-btn{
    cursor: pointer;
    transition: background-color 0.125s;
    z-index: 1002;
    height: 32px;
    width: 32px;
    color: white;
    margin-top: -4px;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame-bar-btn > .icon-minus{
    margin-top: 8px;
  }

</style>

<script>
  /* eslint-env browser, node */
  import electron from 'electron'; // eslint-disable-line
  import { remote } from 'electron';  // eslint-disable-line

  export default {
    name: 'windowFrame',
    methods: {
      close() { const w = remote.getCurrentWindow(); w.close(); },
      maximize() {
        const w = remote.getCurrentWindow();
        if (w.isMaximized()) { w.unmaximize(); } else { w.maximize(); }
      },
      minimize() { const w = remote.getCurrentWindow(); w.minimize(); },
    },
  };
</script>
