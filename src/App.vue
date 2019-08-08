<template>
  <div
    :style="this.cssProps()"
    id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Config, Color, Shadow, Gradient, Gradient3step, Border, Font, brandingConfig } from '@/branding';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {

    public name = 'app';
    private config: Config = brandingConfig;

    private cssProps() {
      const branding = JSON.parse(localStorage.getItem('branding')!);
      try {
        return this.generateCss(JSON.parse(branding));
      } catch (err) {
        console.log('err', err);
        return this.generateCss(brandingConfig);
      }
    }

    private generateCss(config: any) {
      return {
        '--preparing_title': this.generateFont(config.preparing_title),
        '--preparing_title_transform': config.preparing_title_transform,
        '--preparing_title_spacing': config.preparing_title_spacing,
        '--preparing_title_color': this.hexToRgba(config.preparing_title_color),
        '--preparing_title_background': this.hexToRgba(config.preparing_title_background),
        '--preparing_numbers': this.generateFont(config.preparing_numbers),
        '--preparing_numbers_transform': config.preparing_numbers_transform,
        '--preparing_numbers_spacing': config.preparing_numbers_spacing,
        '--preparing_numbers_color': this.hexToRgba(config.preparing_numbers_color),
        '--preparing_numbers_background': this.hexToRgba(config.preparing_numbers_background),
        '--ready_title': this.generateFont(config.ready_title),
        '--ready_title_transform': config.ready_title_transform,
        '--ready_title_spacing': config.ready_title_spacing,
        '--ready_title_color': this.hexToRgba(config.ready_title_color),
        '--ready_title_background': this.hexToRgba(config.ready_title_background),
        '--ready_numbers': this.generateFont(config.ready_numbers),
        '--ready_numbers_transform': config.ready_numbers_transform,
        '--ready_numbers_spacing': config.ready_numbers_spacing,
        '--ready_numbers_color': this.hexToRgba(config.ready_numbers_color),
        '--ready_numbers_background': this.hexToRgba(config.ready_numbers_background),
        '--ready_numbers_shadow': this.generateShadow(config.ready_numbers_shadow),
      };
    }

    private hexToRgba(value: Color) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value.hex);
      return result ?
        `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${value.opacity})` :
        '';
    }

    private generateFont({ style, weight, size_lineHeight, family }: Font) {
      return `${style} ${weight} ${size_lineHeight} ${family}`;
    }

    private generateBorder({ width, type, color }: Border) {
      return `${width} ${type} ${this.hexToRgba(color)}`;
    }

    private generateShadow({ hOffset, vOffset, blur, spread, color }: Shadow) {
      return `${hOffset} ${vOffset} ${blur} ${spread} ${this.hexToRgba(color)}`;
    }

    private generateGradient({ start,  end, direction }: Gradient) {
      return `linear-gradient(${direction} ${start ? `,${this.hexToRgba(start)} 0% ` : ''}\
        ${end ? `,${this.hexToRgba(end)} 100%` : ''})`;
    }

    private generateGradient3step({ start, middle, end, direction }: Gradient3step) {
      return `linear-gradient(${direction} ${start ? `,${this.hexToRgba(start)} 0% ` : ''}\
        ${middle ? `,${this.hexToRgba(middle)} 50%` : ''}\
        ${end ? `,${this.hexToRgba(end)} 100%` : ''})`;
    }

  }
</script>

