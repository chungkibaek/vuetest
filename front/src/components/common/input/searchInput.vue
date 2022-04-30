<template>
    <input type="type"
    class="inpt"
    style="width:100%"
    :value="modelValue"
    :placeholder="placeholder"
    @input="updateInput"
    >
</template>
<script>
export  default{
    props:{
        type : {
            type : String,
            default : 'text'
        },
        modelValue : {
            type : String,
            default : ''
        },
        placeholder : {
            type : String,
            default : ''
        }
    },
    setup(props, {emit}){

        const updateInput = (e) => {
            console.log(e.target.value)
            emit('update:modelValue' , e.target.value)
        }

        return {
            updateInput
        }

    }
}
</script>