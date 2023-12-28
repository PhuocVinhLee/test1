

<script>
import { ref } from "vue";
import axios from "axios"
import {useRouter} from "vue-router";
export default {

    setup() {
        const router = useRouter();
       localStorage.removeItem('token');
       localStorage.removeItem('token_admin');
       router.push("/login");

        }
        //fgdg
    
}
</script>