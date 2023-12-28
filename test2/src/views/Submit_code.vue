
<template>
    <aside class="" style="width: 100% ;">
<div class="border border-primary phantram"> <h1>sjdald</h1> </div>



    </aside>
</template>



<script setup >
import { onMounted } from 'vue';
onMounted(() => {
   
})

</script>
<style scoped>
.phantram{
   height: ;
}
aside {
    position: relative
}

.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.active,
.accordion:hover {
    background-color: #ccc;
}

.panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
}

.botton-0 {
    position: absolute;
    bottom: 0px;

}
</style>
