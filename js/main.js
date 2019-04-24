class PowerPlant {
  constructor(name, multiplier) {
    this.buildings = 0;
    this.level = 0;
    this.multiplier = multiplier;
    this.name = name;
    this.price = 5;
  }

  production = () => {
    if (this.buildings === 0) { return 0; }
    else return (this.buildings * (this.level + 1) * this.multiplier) / 100;
  };

  buildPrice = () => {
    if (this.buildings === 0) { return this.price * this.multiplier; }
    else return (this.price + this.buildings * 3) * this.multiplier;
  };

  build = (m) => {
    if (m >= this.buildPrice()) {
      money = Number((money - this.buildPrice()).toFixed(5));
      this.buildings++;
    } else alert("You need more money!");
  };

  upgradePrice = () => {
    if (this.level === 0) { return this.price * 10 * this.multiplier; }
    else return this.level * 50 * this.price * this.multiplier;
  };

  upgrade = (m) => {
    if (m >= this.upgradePrice()) {
      money = Number((money - this.upgradePrice()).toFixed(5));
      this.level++;
    } else alert("You need more money!");
  };

  // getStorage = () => {
  //   this.level = Number(localStorage.getItem(this.name + 'Level'));
  //   this.buildings = Number(localStorage.getItem(this.name + 'Buildings'));
  // };
  //
  // updateStorage = () => {
  //   localStorage.setItem(this.name + 'Level', this.level);
  //   localStorage.setItem(this.name + 'Buildings', this.buildings);
  // }
}

Vue.component('stats', {
  props: ['stats'],
  template: '' +
    '       <div class="topStat">\n' +
    '            <div class="columns">\n' +
    '                <div class="money">Money: {{ stats.money }}</div>\n' +
    '                <div class="priceElectricty">Electricy price: {{ stats.electrictyPrice }}</div>\n' +
    '                <div class="priceGreenCer">Green price: {{ stats.greenPrice }}</div>\n' +
    '            </div>\n' +
    '            <div class="columns">\n' +
    '                <div class="electricty">Electricity: {{ stats.electricty }}</div>\n' +
    '                <button class="sellElectricty">Sell</button>\n' +
    '            </div>\n' +
    '            <div class="columns">\n' +
    '                <div class="greenCer">Certs: {{ stats.greenCertification }}</div>\n' +
    '                <button class="sellgreenCer">Sell</button>\n' +
    '            </div>\n' +
    '        </div>'
});

Vue.component('building', {
  props: ['building'],
  template: '' +
    '                <div class="columns">\n' +
    '                    <div v-bind:class="[building.name]">\n' +
    '                        <div class="building"></div>\n' +
    '                        <div class="stat"><span>Buildings: </span><span class="buildings">{{ building.buildings }}</span></div>\n' +
    '                        <div class="stat"><span>Level: </span><span class="level">{{ building.level }}</span></div>\n' +
    '                        <div class="stat"><span>Production: </span><span class="production">{{ building.production() }}</span></div>\n' +
    '                        <div class="stat"><span>Build price: </span><span class="buildPrice">{{ building.buildPrice() }}</span></div>\n' +
    '                        <div class="stat"><span>Upgrade price: </span><span class="upgradePrice">{{ building.upgradePrice() }}</span></div>\n' +
    '                        <div class="stat"><button class="build">Build</button><button class="upgrade">Upgrade</button></div>\n' +
    '                    </div>\n' +
    '                </div>'
});

var app = new Vue({
  el: '#app',
  data: {
    stats: {
      money: 5,
      electricty: 0,
      greenCertification: 0,
      electrictyPrice: 0,
      greenPrice: 0,
    },
    buildings: [
      new PowerPlant('wind', 1),
      new PowerPlant('solar', 10),
    ]
  }
});