<template>
  <div id="frame-bar">
       <div class="frame-text"><span>Sentinel Data Manager</span></div>
       <div class="frame-bar-btns">
          <div v-on:click="minimize" class="frame-bar-btn">
            <i class="fa fa-window-minimize" aria-hidden="true"></i>
          </div>
          <div v-on:click="maximize" class="frame-bar-btn">
            <i class="fa fa-window-maximize" aria-hidden="true"></i>
          </div>
          <div v-on:click="close" class="frame-bar-btn">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
       </div>
  </div>
</template>
<style>
  #frame-bar {
   -webkit-app-region: drag;
   background-color: #BA1725;
   z-index: 1000;
   height: 32px;
   padding-top: 4px;
   padding-bottom: 4px;
   width: 100%;
   margin: 0px;
   display: flex;
   justify-content: space-between;
  }

  .frame-text{
    float: left;
    margin-top: 2px;
    margin-left: 20px;
    color: #fff;
  }

  .frame-bar-btns {
    float: right;
    display: flex;
    justify-content: space-around;
    z-index: 1001;
   -webkit-app-region: no-drag;
  }

  .frame-bar-btn:hover{
    background-color: #ab1a26;
  }

  .frame-bar-btn{
    cursor: pointer;
    transition: background-color 0.2s;
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

  .frame-bar-btn > i{

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
      maximize() { const w = remote.getCurrentWindow(); w.maximize(); },
      minimize() { const w = remote.getCurrentWindow(); w.minimize(); },
    },
  };
</script>
