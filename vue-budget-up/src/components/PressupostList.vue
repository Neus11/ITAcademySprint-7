<template>
    <div>
        <div v-for="item, index in newList" :key="index">
            <div class="outcome">
                <label> Nombre del presupuesto: </label><span> {{  item.nomPress }} </span><br />
                <label> Nombre del cliente: </label><span> {{  item.nomClient }} </span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Lista',
    props: ['listado'],
    data() {
        return {
            newList: this.listado
            
        }  
    }
}

</script>

<style scoped>
.outcome {
    margin-top: 1rem;
}

label {
    padding: .5rem;
    border-radius: 5px;
    color: gray; 
    font-weight: bolder;
}

span {
    padding: .3rem;
    background-color: aquamarine;
    border-radius: 5px;
    
}

</style>
