<template>
     <main class="main--one-column">
        <aside>

        </aside>
        <article class="main__article">
            <section class="article__section--anima">
                <div>
                    <h5>Save Up to 40%</h5>
                    <a href="sanpham.html"><p>Shop All Our New Markdowns</p></a>
                </div>
            </section>
            <section class="article__section--intro">
                <img src="../assets/images/trangchu/section_intro.jpg" alt="">
            </section>
            <h1>Cộng đồng của Force</h1>
            <section class="article__section">
                <div><img width="100%" src="../assets/images/trangchu/section__communities1.webp" alt="" srcset="">
                    <h3>
                        Memphis Jookin
                    </h3>
                    <p>
                        Mỗi foot vuông vỉa hè là một sàn nhảy cho cộng đồng gắn bó và phát triển này.
                    </p>
                    <button>Xem</button>
                </div>
                <div><img width="100%" src="../assets/images/trangchu/section__communities2.webp" alt="" srcset="">
                    <h3>
                        RIEHATATOKYO
                    </h3>
                    <p>
                        Hãy xem cách mà phi hành đoàn này kết hợp với nhau để thể hiện Nhật Bản - và thế giới - cách họ
                        thể hiện bản thân.
                    </p>
                    <button>Xem</button>
                </div>
                <div><img width="100%" src="../assets/images/trangchu/section__communities3.webp" alt="" srcset="">
                    <h3>
                        Học viện khiêu vũ So Dope
                    </h3>
                    <p>
                        Học viện khiêu vũ So Dope
                        Tạo cơ hội cho thế hệ vũ công tiếp theo, Tarryn Alberts và So Dope đang tạo ra sự khác biệt ở
                        Johannesburg.
                    </p>
                    <button>Xem</button>
                </div>
                
            </section >
            <h1>Cửa hàng Air Force 1</h1>
            <section class="article__section">
            <div>
                <img src="../assets/images/trangchu/section__shop1.webp" alt="" srcset="">
                <h3>Nam</h3>

            </div>
            <div>
                <img src="../assets/images/trangchu/section__shop2.webp" alt="" srcset="">
                <h3>Nữ</h3>

            </div>
            <div>
                <img src="../assets/images/trangchu/section__shop3.webp" alt="" srcset="">
                <h3>Trẻ em</h3>

            </div>
           
                
            </section>
            
            <section class="article__section--classis">
                <img src="../assets/images/trangchu/1chiecgiay.webp" alt="">
                <h3>Một cổ điển kể từ năm 1982</h3>
                <p>Được thiết kế bởi Bruce Kilgore và được giới thiệu vào năm 1982, Air Force 1 là đôi giày bóng rổ đầu tiên sử dụng công nghệ Nike Air, cách mạng hóa trò chơi và văn hóa giày thể thao mãi mãi. Hơn ba thập kỷ kể từ lần phát hành đầu tiên, Lực lượng Không quân 1 vẫn đúng với nguồn gốc của nó trong khi vẫn giữ vị thế là một món đồ thời trang chủ lực cho các mùa giải tới.</p>
            </section>
            <h1>Lịch sử của Air Force 1</h1>
            <section class="article__section">
                <div>
                    <img src="../assets/images/trangchu/section__history1.webp" alt="" srcset="">
                    <h3>2022: Kỷ niệm 40 năm</h3>
                    <p>
                        2022: Kỷ niệm 40 năm
                        Để kỷ niệm 40 năm Lực lượng, Gói Tham gia Lực lượng và chiến dịch nêu bật không chỉ các chi tiết mang tính biểu tượng của bốn thập kỷ AF-1 mà còn cả các cộng đồng đã đưa Lực lượng vươn xa hơn những gì chúng ta có thể mơ ước.
                        
                        </p>
                </div>
                <div>
                    <img src="../assets/../assets/images/trangchu/section__history2.webp" alt="" srcset="">
                    <h3> 2017: Kỷ niệm 35 năm</h3>
                    <p>
                        2017: Kỷ niệm 35 năm
                        Kêu gọi năm cộng tác viên tạo lại AF-1 trắng trên nền trắng, Bộ sưu tập AF-100 mang đến năm thiết kế AF-100 được yêu thích ngay lập tức. Trong số đó có một bức ảnh độc đáo của Virgil Abloh, người đã tạo ra một bản lặp lại của AF-1 được phát hành lần đầu tiên như một phần của Bộ sưu tập Mười.
                        
                        </p>
                </div>
                <div>
                    <img src="../assets/images/trangchu/section__history3.webp" alt="" srcset="">
                   <h3> 2012: Đổ bộ Mặt Trăng</h3>
                    <p>
                        2012: Đổ bộ Mặt Trăng
                        Ba thập kỷ sau phiên bản gốc, Lunar Force 1 xuất hiện với lớp đệm Lunarlon nhẹ được tích hợp vào thiết kế mang tính biểu tượng của Lực lượng Không quân 1.
                        
                        </p>
                </div>
            </section>
            
        </article>

    </main>
 
</template>

<script>

import InputSearch from "@/components/InputSearch.vue";
import ProductOverViewCard from "@/components/ProductOverViewCard.vue";
import ProductManagerCard from "@/components/ProductManagerCard.vue";
import ProductService from "@/services/product.service";


export default {
    components: {
       
        InputSearch,
        ProductOverViewCard,
        ProductManagerCard
    },
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
            token:0,

        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        producttrings() {
            return this.products.map((contact) => {
                const { name, email, address, phone } = contact;
                return [name, email, address, phone].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredProduct() {
            return this.products;

        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredproduct[this.activeIndex];
        },
        filteredproductCount() {
            return this.filteredproduct.length;
        },
    },
    methods: {
        async retrieveproduct() {
            try {
                this.products = await ProductService.getAll();// lay du lieu 

            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveproduct();
            this.activeIndex = -1;
            //  console.log(this.products); 
        },
        async removeAllproduct() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await productervice.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
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
        this.refreshList();
        this.check_login();
        console.log("odngodgnodgnognd");
    },

};
</script>

<style scoped>
/*header , body và footer*/
body {
  display: grid;
  margin: auto;
  padding: 0px 5px 0px 5px;
  width: 80%;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  grid-template-areas:
    "header-cell"
    "main-cell"
    "footer-cell";
}
header {
  grid-area: header-cell;
}
.main--one-column {
  grid-area: main-cell;
  display: grid;
  grid-template-areas:
    "asideL-cell"
    "article-cell"
    "asideR-cell";
}
footer {
  grid-area: footer-cell;
}
article {
  grid-area: article-cell;
}
.asideL {
  grid-area: asideL-cell;
}
.asideR {
  grid-area: asideR-cell;
}

.header__nav {
  display: flex;
  flex-direction: row;
}

header {
  margin-bottom: 2px;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
  height: auto;
}
.nav__logo {
  width: 25%;
}

.nav__link {
  width: 50%;
  text-align: center;
  margin-top: 15px;
}
.nav__link > a {
  border: 1px solid rgb(55, 53, 53);
  text-decoration: none;
  margin: 0px 5px 0px 5px;
  padding: 5px;
  border-radius: 3px;
  color: black;
}
.nav__link > a:hover:not(.active) {
  color: white;
  background-color: rgba(0, 0, 0, 0.814);
  border: 1px solid white;
}
.nav__link > a.active {
  color: white;
  background-color: rgba(0, 0, 0, 0.814);
  font-size: larger;
}
.nav__search {
  width: 25%;
  text-align: right;
  margin-top: 15px;
  font-size: larger;
}
.nav__search__input {
  background-color: white;
  color: black;
  border: 1px solid rgb(55, 53, 53);
}
.nav__search__input:hover {
  background-color: #ddd;
  color: black;
  border: 1px solid white;
}
.fa-magnifying-glass {
  color: rgba(0, 0, 0, 0.814);
}
.fa-magnifying-glass:hover {
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.814);
}
.fa-cart-shopping {
  color: rgba(0, 0, 0, 0.814);
}
.fa-cart-shopping:hover {
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.814);
}


footer {
  margin-top: 3px;
  padding: 0px 5px 0px 5px;
  border: 1px solid #e7e7e7;
  color: white;
  display: flex;
  flex-direction: column;
}
.footer__section1 {
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.814);
  padding-left: 5px;
}

.footer__section1 > div {
  width: 50%;
}
.footer__section1 > div > a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.532);
}
.section1--social > a {
  font-size: larger;
}
.footer__section1 > div > a > p:hover {
  color: white;
  font-weight: 500;
}
.footer__section1 > div > a > p > i:hover {
  color: white;
}
.footer__section2 {
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.814);
  padding-left: 5px;
}
.footer__section2 > div {
  width: 50%;
}
.section2__div__p > a {
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.532);
  text-decoration: none;
}
.section2__div__p > a > span:hover {
  color: white;
  font-weight: 500;
}

main {
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}



/*Trang chu*/

.main__article{
  display: flex;
  flex-direction: column;

}
.main__article>section.article__section{
  display: flex;
  flex-direction: row;
}
.article__section--anima{
  height: 70px;
  text-align: center;
}

.article__section--anima>div{
  position: absolute;
  animation: article__section--anima 13s infinite  cubic-bezier(0,1,1,0);

}
.article__section--anima>div>h5{
margin: 5px 0px 0px 0px;
}
.article__section--anima>a{
  margin-top: 0px 0px 5px 0px;
}
@keyframes article__section--anima{
from{
  left: -35%;
}
to{
  left: 120%;
}
}
.article__section--intro{
  padding: 0px 5px 0px 5px;
}
.article__section--intro>img{
  width: 100%;

}
.article__section>div{
 width: 33%;
 margin-right: 5px;
 margin-left: 5px;

}
.article__section>div>button{
  background-color:rgba(0, 0, 0, 0.814);
  color:  rgba(255, 255, 255, 0.532);
  border-radius: 15px;
  padding: 5px 10px 5px 10px;

 bottom: -15px;

}
.article__section>div>button:hover{
  background-color:rgba(0, 0, 0, 0.814);
  color: white;

 

}
.article__section>div>img{
  width: 100%;
}

.article__section--classis{
  width: 100%;
  text-align: center;

}
.article__section--classis>img{
  width: 100%;
}

.article__section--logo-article>img{
  text-align: center;
  width: 100%;

}

/* Dang nhap, Dang ky*/
.nike{
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(12, 12, 12);
  width: 500px;
  padding: 30px;
  
}
#form-login{
  max-width: 400px;
  flex-grow: 1;
  padding: 30px 30px 40px;
  box-shadow: 0px 0px 17px 2px rgba(213, 40, 40, 0.8);
  opacity: 0.9;
  
  

}
.form-register{
  max-width: 400px;
  flex-grow: 1;
  padding: 30px 30px 40px;
  box-shadow: 0px 0px 17px 2px rgba(210, 13, 138, 0.8);
  opacity: 0.9;
  background:black;

}
.form-heading{
  font-size: 25px;
  color: #f5f5f5;
  text-align:center;
  margin-bottom: 30px; 
}
.form-group{
  border-bottom: 1px solid #fff;
  top: 10px;
  margin: 10px;
}
.form-input{
  background: transparent;
  border: 0;
  outline: 0;
  color: #f5f5f5;
  flex-grow: 1;
  
}
.form-input::placeholder{
  color :#f5f5f5;
}
.form-submit{
  background: transparent;
  border: 1px solid #f5f5f5;
  color: #fff;
  width:100%;
  text-transform: uppercase;
  padding: 6px 10px;
  transition: 0.25s ease-in-out;
  margin-top:20px;
  cursor: pointer;
}
.form-submit:hover{
  border: 1px solid rgb(118, 37, 51);
}

.form-heading{
  top:50px;
}
.article--form{
  padding: 0px 50px 50px 50px;
  justify-content: center;
  align-items: center;
  
}

/* San pham*/
.article__section--product{
  display: flex;
  flex-wrap: wrap;
}
.article__section--product>div{
  width: 24%;
  margin: 0.5%;
}

.float-left{
  float: left;
  clear: left;
}
.float-right{
  float: right;
  clear:right;
}
.cost--product{
  margin-top: 7px;
}
.name--product{
  margin-top: 5px;
  font-size: medium;
}

.add--product{
  width: 30%;
  border: black solid 2px;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 30px;
}
.add--product:hover{
  color: white;
  background-color: black;
} 
.input--product{
  width: 20%;
  height: 30px;
}
.input--product:hover{
  background-color: black;
  color: white;
}

/* Dơn hàng*/
table, th, td {
  border: 1px solid black;
}
table{
  width: 100%;
  text-align: center;
}
td{
  height: 50px;
}
.delete--product:hover{
  background-color: black;
  color: white;
}
tfoot{
  text-align: start;
}
button.order--confirm{
  height: 30px;
}
button.order--confirm:hover{
  background-color: black;
  color: white;
}



/*Responsive and Fluid layout*/
@media (max-width: 1280px) {
  .nav__logo {
    width: 15%;
  }
  .nav__link {
    width: 50%;
    font-size: small;
  }
  .nav__search {
    width: 35%;
  }
  footer {
    font-size: small;
  }
  *{
    font-size: small;
  }
  .article__section--product>div{
    width: 32%;
  }
  
}
@media (max-width: 1100px) {

}
@media (max-width: 950px) {
  *{
    font-size: small;
  }
  .header__nav {
    flex-direction: column;
  }
  .nav__logo {
    text-align: center;
    width: 100%;
  }
  .nav__link {
    width: 100%;
    font-size: small;
  }
  .nav__search {
    width: 100%;
    text-align: center;
  }
  @keyframes article__section--anima{
    from{
      left: -45%;
    }
    to{
      left: 120%;
    }
    }
  .footer__section2 {
    font-size: x-small;
  }
  .article__section--product>div{
    width: 49%;
  }
  .nike{
    width: 400px;
  }
}
@media (max-width: 550px) {
 
  *{
    font-size: x-small;
  }
  .footer__section1 > div {
    width: 60%;
  }
  .footer__section2 {
    flex-direction: column;
  }
  .footer__section2 > div {
    width: 100%;
  }
  .article__section--product>div{
    width: 100%;
  }
  .nike{
    width: 270px;
  }
}</style>
