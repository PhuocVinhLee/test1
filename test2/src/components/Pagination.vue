<template>
    <div class="text-center">
        <nav aria-label="Page navigation example">
            <ul class="pagination">

                <li @click="emit_page(parseInt(router.query.page) - 1)" class="page-item" :class="{ disabled: parseInt(router.query.page) <= 1 }"><a
                        class="page-link" href="#">Previous</a></li>
                <li v-for="page in Math.ceil(parseFloat(props.lenght / 9))" class="page-item "
                    :class="{ active: page == router.query.page }" @click="emit_page(page)">
                    <!-- <router-link class="page-link" :to="{

                        query: { page: page }
                    }"> -->
                       <span class="page-link">  {{ page }}</span>
                    <!-- </router-link> -->
                </li>
                <li @click="emit_page(parseInt(router.query.page) + 1)" class="page-item"
                    :class="{ disabled: parseInt(router.query.page) >= Math.ceil(parseFloat(props.lenght / 9)) }"><a class="page-link"
                        href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const router = useRoute();// 

const route = useRouter();// dung trong fution
const props = defineProps({
    lenght: { type: Number, required: true, default: 3 },
});

const emit = defineEmits(['page']);

function emit_page(page) { 
    if (parseInt(page) >= 1 && (parseInt(page) <= Math.ceil(parseFloat(props.lenght / 9)))) {
      
        emit('page', parseFloat(page));

    }


    // function next_pre_page(page){
    //     emit('page', parseFloat(page));

    // }
}
// async function next_pre_page(page) {
//     if (page == 1) {
//         if (parseInt(router.query.page) >= 1 && parseInt(router.query.page) < Math.ceil(parseFloat(props.lenght / 9))) {
//             await route.replace({ query: { page: (parseFloat(router.query.page) + parseFloat(page)) } })
//             emit('page', parseFloat(router.query.page));
//         }
//     }
//     else {
//         if (parseInt(router.query.page) > 1 && parseInt(router.query.page) <= Math.ceil(parseFloat(props.lenght / 9))) {
//             await route.replace({ query: { page: (parseFloat(router.query.page) + parseFloat(page)) } })
//             emit('page', parseFloat(router.query.page));
//         }
//     }


// }

watchEffect(() => {
   // router.query.page;
   // props.lenght// khi action exam thi no truyen vao length// thi nó phat hien leght thay doi no se emit page moi
    //console.log(props.lenght)
    //emit_page(page);

})

onMounted(() => {
    // emit_page();

})
</script> 