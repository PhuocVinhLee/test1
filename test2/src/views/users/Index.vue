<template>
    <aside id="aside" class="px-4 mt-4 mb-4" style="width:100%">
<h2 class="display-6 text-center m-4">Dashboard</h2>

    <div class="row  row-cols-1 row-cols-md-4 mb-4 mt-4 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">laSNLAnslNSLa</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">Tổng số lớp học</h3>
            <ul class="list-unstyled mt-3 mb-4">
            </ul>
            <a href="total_study_class.php"> <button type="button" class="w-100 btn btn-lg btn-outline-primary">Xem</button></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">sdahdosa</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">Lớp học đã tham gia</h3>
            <ul class="list-unstyled mt-3 mb-4">
      
   
            </ul>
            <a href="total_study_class_joined.php"> <button type="button" class="w-100 btn btn-lg btn-outline-primary">Xem</button></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">skadao</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">Kỳ thi đã hoàn thành</h3>
            <ul class="list-unstyled mt-3 mb-4">
              
   
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">em</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">0</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">Kỳ thi đang diễn ra</h3>
            <ul class="list-unstyled mt-3 mb-4">
              
   
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Xem</button>
          </div>
        </div>
      </div>
      
      
      
    </div>

    <router-view></router-view>

    

</aside>
</template>

<script setup></script>