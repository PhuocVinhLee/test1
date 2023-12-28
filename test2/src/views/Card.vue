<template>
   <div v-if="this.token">
    <section v-if="this.orders == [] || this.orders == null || this.orders == undefined">
        <h1 class="text-center">Bạn chưa có bất kỳ sản phẩm nào</h1>
    </section>
    <section v-else class="container">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <div class="col-5">
                        <h6>Sản phẩm</h6>
                    </div>
                    <div class="col-2">
                        <h6>Giá</h6>
                    </div>
                    <div class="col-3">
                        <h6>Số lượng</h6>
                    </div>

                    <div class="col-2">
                        <h6>Tạm tính</h6>
                    </div>
                </div>

                <div class="row" v-for="(products_order, index) in products_orders" :key="products_order.product._id">
                    <div method="POST" class="col-5">
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                            :data-bs-target="'#' + 'exampleModal' + index">
                            Xoá
                        </button>

                        <div class="modal fade" :id="'exampleModal' + index" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 " id="exampleModalLabel">Giỏ hàng cho biết</h1>
                                    </div>
                                    <div class="modal-body">
                                        <p class="text-start">Bạn có muốn xóa sản phẩm <span class="h5">{{
                                            products_order.product.name }}</span> ra khỏi giỏ hàng</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button @click="delete_product(products_order.product._id)" type="button"
                                            class="btn btn-primary" data-bs-dismiss="modal">Oke</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="btn-group mx-1 ">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                data-bs-auto-close="true" aria-expanded="false">
                                {{ products_order.product.name }}
                            </button>
                            <ul class="dropdown-menu">

                                <router-link :to="{
                                    name: 'product_over_view_detail',
                                    params: { id: products_order.product._id },
                                }">
                                    <li><a><img :src=products_order.product.image_url alt=""
                                                style="width: 200px; height: 200px;"></a>
                                    </li>
                                </router-link>


                            </ul>
                        </div>
                    </div>
                    <div class="col-2">
                        <span class=""> {{ products_order.product.price }}đ </span>
                    </div>
                    <div class="col-3">

                        <span class="" style="width: 10px; font-size: 10px;"><input style="width: 50px; font-size: px;"
                                name="soluong" class="w-40" type="number" min="1" v-model=products_order.quantity></span>
                        <button type="" class="btn btn-primary mx-1"
                            @click="update_product(products_order.product._id, products_order.quantity)">
                            Cập nhật

                        </button>
                    </div>

                    <div class="col-2">
                        <p> {{ products_order.quantity * products_order.product.price }}đ</p>
                    </div>
                </div>



            </div>
            <div class="col-4 border border-end-0 border-bottom-0 border-right border-top-0 border-dark">
                <div class="row">
                    <h6 class="text-center">Chi tiết giỏ hàng</h6>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>Tạm tính:</h6>
                    </div>
                    <div class="col text-end"> {{ total_price }}đ </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>Giao hàng:</h6>
                    </div>
                    <div class="col text-end">Giao hàng miễn phí</div>
                </div>
                <div class="row">
                    <div class="col">
                        <h6>Tổng: </h6>
                    </div>
                    <div class="col text-end"> {{ total_price }}đ</div>
                </div>
                <div class="row text-end ">
                    <form name="frm" id="frm" action="" method="GET" class="col text-center col-md-offset-3  was-validated">
                        <!-- Button trigger modal -->
                        <button type="button" class="text-white text-center btn btn-secondary btn-outline-primary"
                            data-bs-toggle="modal" data-bs-target="#exampleModal111">
                            Thanh toán
                        </button>


                        <div class="modal fade" id="exampleModal111" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                     Sản phẩm đã được đặt thành công
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Lose</button>
                                        <button @click="thantoan()" type="submit" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    </section>
   </div>
   <div v-else>
        <h3 class="text-danger text-center">Bạn chưa đăng nhập</h3>
    </div>
</template> 
<script>

import productService from "@/services/product.service";
export default {
    components: {


    },
    data() {
        return {
            orders: [],
            product: null,
            products: [],
            products_orders: [],
            total_price: 0,
            token : 0
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        // this.orders,

    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.

    },
    methods: {
        async retrieveOrders() {
            try {
                this.orders = await JSON.parse(localStorage.getItem("order"));
                
                if (this.orders.length != 0) {
                    this.orders.forEach(async (value, index) => {
                        this.product = await productService.get(value._id);
                        //  console.log(this.product);
                        if (this.product != null) {
                            this.total_price = this.total_price + (this.product.price * value.quantity)
                            this.products_orders.push({
                                product: this.product,
                                quantity: value.quantity
                            });
                            // this.products_orders
                            // this.products.push(this.product);
                        }
                    });
                }
                else if (this.orders.length == 0) {
                    return localStorage.removeItem("order");
                }
            } catch (error) {
                console.log(error);
            }
        },
        async update_product(product_id, quantity) {
            try {
                if (this.orders != null) {
                    this.orders.forEach((value, index) => {
                        if (product_id == value._id) {
                            value.quantity = quantity;
                            localStorage.setItem("order", JSON.stringify(this.orders));
                            this.products_orders = [];
                            this.total_price = 0;
                            return this.retrieveOrders()
                        }
                    });
                }


            } catch (error) {
                console.log(error);
            }
        },
        async delete_product(product_id) {
            try {
                if (this.orders != null) {
                    this.orders.forEach((value, index) => {
                        if (product_id == value._id) {
                            this.orders = this.orders.filter(item => item._id !== product_id)

                            localStorage.setItem("order", JSON.stringify(this.orders));
                            this.products_orders = [];
                            this.total_price = 0;
                            return this.retrieveOrders()
                        }
                    });
                }

            } catch (error) {
                console.log(error);
            }
        },

        async thantoan(){
            return localStorage.removeItem("order");
        },


        async check_login() {
            this.token = localStorage.getItem("token");
           // console.log(token)
            if (this.token == null || this.token == 0 || this.token == undefined) {
                return this.token = false;
            }
            else {
                return this.token =true;
            }
        }



    },
    mounted() {
        this.retrieveOrders();
        this.check_login()
        console.log(this.orders)

        // this.check_order();

    },

};
</script>

<style scoped>
* {
   
}
</style>
