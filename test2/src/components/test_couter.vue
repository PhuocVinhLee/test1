<template>
    <div class="row">
        <div class="col">
            <button @click="update">tang</button>
            <button @click="updateN">tang N lan</button>
        </div>

    </div>
</template>

<script>


export default {

    data() {

    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.

    },
    computed: {
        result() {
            // return this.$store.state.result;
        }
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.

    },
    methods: {
        update() {
            this.$store.state.user++;
        },
        updateN() {
            this.$store.commit('tangN',30);
        }

    },
    mounted() {


    },
}
</script>