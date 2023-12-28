<template>
    <nav class="navbar navbar-expand-lg bg-light mt-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nike</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home' }" class="nav-link">
                            <i class="fa-solid fa-house"></i>

                            Trang chủ
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="user_prop">
                        <router-link :to="{ name: 'product_manager' }" class="nav-link">
    
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                            Quản lý sản phẩm
                        </router-link>
                    </li>

                    <li @click="modelValue_null" class="nav-item" v-if="user_prop">
                        <router-link :to="{ name: 'product_over_view' }" class="nav-link">
                            <i class="fa-solid fa-list"></i>
                            Sản phẩm
                           
                        </router-link>
                    </li>

                    <li v-if="user_prop" class="nav-item">
                        <router-link :to="{ name: 'login' }" class="nav-link">
                        <a @click="logout()" >
                            <i class="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
                            Đăng xuất
                        </a>
                    </router-link>
                    


                    </li>
                    <li v-else  class="nav-item">
                        <router-link :to="{ name: 'login' }" class="nav-link">
                            <i class="fa fa-sign-in" ></i>
                            Đăng nhập

                          
                        </router-link>

                    </li>
                   
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                    </li>
                    <li v-if="user_prop" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Đơn hàng
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link :to="{ name: 'order' }">
                                    <span class="dropdown-item">Đơn hành đã đặt</span>
                                </router-link>
                            </li>
                            <li><a class="dropdown-item" href="#">Đơn hành đã đặt</a></li>
                            <li><a class="dropdown-item" href="#">Đơn hành đã giao</a></li>
                            <li><a class="dropdown-item" href="#"></a></li>


                        </ul>
                    </li>

                </ul>
                <div class="d-flex" role="search">
                    <input :value="modelValue" @input="updateModelValue" class="form-control me-2" type="search"
                        placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
                <div class="" v-if="user_prop">
                    <router-link :to="{
                        name: 'card'

                    }">
                        <button type="button" class="btn  position-relative">
                            <span><a><i class=" text-primary fs-3 fa-solid fa-cart-shopping"></i></a></span>

                            <span
                                class="position-absolute top-0 fs-8 start-105 translate-middle badge rounded-pill bg-danger">
                                4
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>

                    </router-link>



                </div>
            </div>
        </div>
    </nav>
</template>
<script>

import userService from "@/services/user.service";
export default {
    props: {
        user_prop: { type: Object, required: true },
        modelValue: { type: String, default: "" },
    },
    data() {
        return {
            check_login1: 0,
            token: 0,
            token_admin:0,
            user: null
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.

    },
    computed: {

    },
    methods: {
        modelValue_null(){
            this.$emit("update:modelValue", "");
        },
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
            console.log(e.target.value);
        },
      
        async logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('token_admin');
            this.$router.push({
                name: "login",
            });

            // location.reload();
        },
       

    },
    mounted() {
       // console.log("oke roi ne")
///console.log(this.user_prop);

    //this.user =  this.user_prop;
    },
}
</script>


    