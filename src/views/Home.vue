<template>
    <div v-if="!load" class="d-flex orders" >
            <div class="orders__preparing" >
                <div class="orders__preparing__title">
                    <h2>Preparing</h2>
                </div>
                <div class="orders__preparing__list d-flex wrap column">
                    <span>001</span>
                    <span>001</span>
                    <span>768</span>
                    <span>456</span>
                    <span>001</span>
                    <span>453</span>
                    <span>782</span>
                    <span>001</span>
                </div>
            </div>
            <div class="orders__pickup">
                <div class="orders__pickup__title">
                    <h2>Ready for pickup</h2>
                </div>
                <div class="orders__pickup__list d-flex wrap column">
                    <span>001</span>
                    <span>002</span>
                    <span>031</span>
                    <span>044</span>
                    <span>345</span>
                    <span>345</span>
                    <span>345</span>
                    <span>345</span>
                    <span>001</span>
                    <span>002</span>
                    <span>031</span>
                </div>
            </div>
        </div>
    <div class="button-container" v-else>
        <div class="input-wrapper">
            <input type="file" id="token" name="file-token" />
            <span id="token-file-name"></span>
        </div>
        <div class="input-wrapper d-flex column">
            <input type="file" id="branding" name="file-branding" />
            <span id="branding-file-name"></span>
        </div>
    </div>
</template>


<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component({})
  export default class Home extends Vue  {

      private load: boolean = true;

      private readFile(e: any) {
          console.log('e', e);
          const file = e.target.files[0];
          document.getElementById(`${e.target.id}-file-name`)!.innerHTML = e.target.files[0].name;
          if (!file) {
              return;
          }
          const reader = new FileReader();
          reader.onload = ( el: any) => {
              // const info = JSON.parse(el.target.result);
              const info = el.target.result;
              localStorage.setItem(e.target.id, info);
              this.checkAllFiles();
          };
          reader.readAsText(file);
      }

      private checkFile(e: any) {
          const element = document.getElementById(e);
          if (!!element) {
              element.addEventListener('change', this.readFile, false);
          }
      }

      private checkAllFiles() {
          if (localStorage.getItem('token') === null || localStorage.getItem('branding') === null ) {
              this.checkFile('token');
              this.checkFile('branding');
              console.log('files');
          } else {
              this.load = false;
              console.log('no');
          }
      }

      private updateFiles() {
          document.onkeydown = (e) => {
              e = e || window.event;
              if (e.ctrlKey && e.which === 66) {
                  localStorage.removeItem('token');
                  localStorage.removeItem('branding');
                  document.location!.reload(true);
              }
          };
      }

      private mounted() {
          this.checkAllFiles();
          this.updateFiles();
      }

  }
</script>
