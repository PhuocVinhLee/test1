<template>
    <Form @submit="submitproduct" :validation-schema="productFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" type="text" class="form-control" v-model="productLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="quantity">Số lượng</label>
            <Field name="quantity" type="number" class="form-control" v-model="productLocal.quantity" />
            <ErrorMessage name="quantity" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="image_url">Image URL</label>
            <Field name="image_url" type="text" class="form-control" v-model="productLocal.image_url" />
            <ErrorMessage name="image_url" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="price">Giá</label>
            <Field name="price" type="number" class="form-control" v-model="productLocal.price" />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="type_id">Loại sản phẩm</label>
            <Field name="type_id" type="text" class="form-control" v-model="productLocal.type_id" />
            <ErrorMessage name="type_id" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="describe">Mô tả sản phẩm</label>
            <Field name="describe" type="text" class="form-control" v-model="productLocal.describe" />
            <ErrorMessage name="describe" class="error-feedback" />
        </div>

        <div class="form-group mt-3">
            <button class="btn btn-primary me-3">Lưu</button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:product", "delete:product"],
    props: {
        product: { type: Object, required: true }
    },
    data() {
        const productFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            image_url: yup
                .string()
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                    'Vui lòng nhập URL hợp lệ!'
                )
                .required('Vui lòng điền URL'),
            price: yup
                .number()
                .min(50000, "Giá tối thiểu 50.000 nghìn.")
                .max(5000000, "Giá tối đa 5.000.000 triệu."),
            quantity: yup
                .number()
                .min(1, "Số lượng tối thiểu 1")
                .required("Số lượng phải có giá trị.")
                .max(500, "Số luông tối đa 500"),
            address: yup.string().max(100, "Địa chỉ tối đa 300 ký tự."),


        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // productLocal để liên kết với các input trên form
            productLocal: this.product,
            productFormSchema,

        };
    },
    methods: {
        submitproduct() {
            this.$emit("submit:product", this.productLocal);
        },
        deleteproduct() {
            this.$emit("delete:product", this.productLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>