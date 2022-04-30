<template>
<div>
    <input type="checkbox"
        :id="id"
        :name="name"
        :checked="isChecked"
        @click="updateCheck"
        :disabled="isDisabled">

        <label :for=id>{{title}}</label>
</div>
</template>

<script>
export default{
    props : {
        name : {
            type : String
        },
        id : {
            type : String
        },
        isChecked  :{
            type : Boolean,
            default : false
        },
        isDisabled  :{
            type : Boolean,
            default : false
        },
        title : {
            type : String
        },
        index : {
            type : Number
        }
    },
    setup(props, {emit}) {
        const updateCheck = (e) =>{

            let val = "N"

            e.target.checked ? val =  "Y" : "N"

            const obj = {
                index : props.index,
                type : props.name,
                value : val
            }

            emit('updateCheck',obj)

        }


        return {
            updateCheck
        }
    }

}
</script>