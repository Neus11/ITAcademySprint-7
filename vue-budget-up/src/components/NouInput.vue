<template>
    <div>
        <form>
            <button @click="add">+</button>
            <input v-model.number="quantity"/>
            <button @click="substract">-</button>    
        </form>
    </div>
</template>

<script>
export default {
    name: 'NouInput',
    emits: ['newQty'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        add() {
            if(this.quantity < 1) {
                this.quantity = 1;
            } else {
                this.quantity++;
            }
        },
        substract() {
            if (this.quantity > 1) {
                this.quantity--;
            } else {
                (this.quantity = 1);
            }
        },
        emitQty() {
            this.$emit('newQty', this.quantity);
        }
    },
    watch: {
        quantity: function() {
            if (this.quantity >= 1) {
                this.emitQty();
            } else {
                alert('Uy! Algo ha pasado, revisa');
            }
        }
    }
}
</script>

<style scoped>

input {
    border: none;
    border-radius: 4px;
    width: 30px;
    margin-left: 1rem;
}

button {
    border: none;
    padding: 10px 20px 10px 20px;
    background-color: rgb(225, 160, 114);
    color: white;
    border-radius: 10px;
    font-size: large;
    font-weight: bolder;
}

</style>

