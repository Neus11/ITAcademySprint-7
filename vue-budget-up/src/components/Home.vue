<template>
  <div class="servicio">
    <p>¿ Que quieres hacer ?</p>
    <p>
      <input type="checkbox"  
      :value="500" 
      v-model="checkedNumbers"
      @change="calculTotal" /> 
      <label>Una página web (500€)</label> 
    </p>
    <div v-if="checkedNumbers.includes(500)">
      <Panell @paginasQty="paginasQty" @idiomasQty="idiomasQty"/>
    </div>
    <p>
      <input type="checkbox"  
      :value="300" 
      v-model="checkedNumbers"
      @change="calculTotal" /> 
      <label>Una consultoria (300€)</label>
    </p> 
    <p>
      <input type="checkbox"  
      :value="200" 
      v-model="checkedNumbers"
      @change="calculTotal" /> 
      <label>Una campaña publi (200€)</label> 
    </p>
    <p>
      Precio: {{ precioTotal }}€
    </p>

    <form @submit="addList">
            <input type="text" v-model="nomPress" name="nomPress" placeholder="Nombre Pressupuesto"><br />
            <input type="text" v-model="nomClient" name="nomPress" placeholder="Nombre Cliente"><br />
            <input type="submit" value="Submit" class="btn-succes">
        </form>
    <PressupostList :listado="list"/>
  </div>
</template>

<script>

import Panell from '@/components/Panell.vue';
import PressupostList from './PressupostList.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Panell,
    PressupostList
  },
  data() {
    return {
      precioTotal: 0,
      checkedNumbers: [],
      numeroPag: 1,
      numeroIdio: 1,
      nomPress: '',
      nomClient: '',
      list: []
    }
  },
  /*computed: {
    sum() {
      return this.checkedNumbers.reduce((a, b) => {
        this.precioTotal = (+a) + (+b);
        return  this.precioTotal + this.servicio;
      }, 0);
    }
  },*/
  methods: {
    calculTotal() {
      this.precioTotal = 0;
      this.precioTotal += this.checkedNumbers.reduce((a,b) => a + b, 0);
      if(this.checkedNumbers.includes(500)) {
          this.precioTotal += (this.numeroPag * this.numeroIdio * 30);
      } else {
        this.numeroPag = 1;
        this.numeroIdio = 1;
      }
    },
    paginasQty(value) {
      this.numeroPag = value;
      this.calculTotal();
       //this.servicio = serv.pag * serv.idio * 30;
    },
    idiomasQty(value) {
      this.numeroIdio = value;
      this.calculTotal();
       //this.servicio = serv.pag * serv.idio * 30;
    },
    addList(e) {
      e.preventDefault(); 
      this.list.push({
        nomPress: (this.nomPress),
        nomClient: (this.nomClient)
      })
      this.nomPress = '',
      this.nomClient = ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.servicio {
  margin: 10%
}
</style>
