<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="formulario">
        <div>
            <label>Número de páginas </label>
            <!-- Ej 2<input v-model.number="paginas" @keyup="passEvent" />-->
            <div class="casillas">
                <NouInput @newQty="paginasQty"/>
                <font-awesome-icon icon="fa-solid fa-circle-info" 
                class="infoIcon" 
                data-bs-toggle="modal" 
                data-bs-target="#pagModal"/>
            </div>
            <div class="modal" id="pagModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body"> Indicar el numero de páginas, porfavor!</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <label>Número de idiomas  </label>
            <!-- Ej 2<input v-model.number="idiomas" @keyup="passEvent" />-->
            <div class="casillas">
                <NouInput @newQty="idiomasQty"/>
                <font-awesome-icon icon="fa-solid fa-circle-info" 
                class="infoIcon" 
                data-bs-toggle="modal" 
                data-bs-target="#langModal"/>
            </div>
            <div class="modal" id="langModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body"> Indicar el numero de idomas, porfavor!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NouInput from '@/components/NouInput.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Panell',
    emits:['paginasQty', 'idiomasQty'],
    components: {
        NouInput
    },
    data() {
        return {
        }
    },
    methods: {
        paginasQty(value){
            this.$emit('paginasQty', value);
        },

        idiomasQty(value){
            this.$emit('idiomasQty', value);
        }
    /*Ej2:passEvent() {
            this.$emit('test', {
                pag: this.paginas,
                idio: this.idiomas
            });
        }*/
    }
}

</script>

<style scoped>
.formulario {
 
    margin-left: 10%;
    padding: 2rem;
    width: 40%;
    border: solid 5px;
    border-radius: 20px;
    margin-bottom: 1rem;
 
}

.infoIcon {
    cursor: pointer;
    margin: auto;
}
.casillas {
    display: flex;
}

.modal-content { 
    width: 100%;
    padding: .1em;
    margin-top: 67vh;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: solid 3px;
}


</style>
