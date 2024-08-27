<script setup>
  import { ref, onMounted } from 'vue';
  
  const currentItem = 'Nutella'
  const shoppingCartItems = ref([])

  const redirectTo = (route) => { 
    window.location.href = `./${route}`
  };

  function PointsRange(p1, p2)
  {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  onMounted(() => {
    const positiveColHex = "#c3ffbf";
    const negativeColHex = "#ffbfc7";

    var card = document.getElementById('FoodCard');
    var isDragging = false;
    var dragStartPos = { x: 0, y: 0 };
    var isValidDrag = false;

    card.addEventListener('mousedown', function(e) {
      isDragging = true;
      isValidDrag = false;
      dragStartPos = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mousemove', function(e) {
      if (isDragging)
      {
        
          card.style.position = "absolute";
          card.style.left = e.clientX + "px";
          card.style.top = e.clientY + "px";
          // console.log(e.clientX + "|" + e.clientY) 
        
          var documentWidth = document.documentElement.clientWidth;
          var centeredDocMousePos = e.clientX - (dragStartPos.x);

          var dragPos = { x: e.clientX, y: e.clientY };
          var dragDistance = PointsRange(dragStartPos, dragPos);
          if (dragDistance > 8 || isValidDrag === true)
          {
            isValidDrag = true;
            if (centeredDocMousePos < 0)
            {
              document.body.style.background = negativeColHex;
            }
            else 
            {
              document.body.style.background = positiveColHex;
            }
          }
          else 
          {
            document.body.style.background = "white";
          } 
       
      }
    })

    document.addEventListener('mouseup', function(e) {

      if (isDragging)
      {
        if (isValidDrag === true)
        {
          var documentWidth = document.documentElement.clientWidth;
          var centeredDocMousePos = e.clientX - (dragStartPos.x);
          if (centeredDocMousePos < 0)
          {
            document.body.style.background = negativeColHex;
          }
          else 
          {
            shoppingCartItems.value.push(currentItem);
            document.body.style.background = positiveColHex;
          } 
        }
      }
      
      isDragging = false;
      card.style.position = "";
      document.body.style.background = "white";
    });
  })
</script>

<template>
  <div class="box">
    <div class="inner">
      <div class="centerBox" id="FoodCard">
        <img src="https://placehold.co/500x600.png" draggable="false">
        <h1 id="ProductName">Nutella</h1>
      </div>

      <div class="bottomBar">
        <div class="item"><i class="fa-solid fa-hand-point-left"></i></div>
          <div @click="redirectTo('cart')" class="item">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="notification">{{shoppingCartItems.length}}</span>
          </div>
        <div class="item"><i class="fa-solid fa-hand-point-right"></i></div>
      </div>
    </div>
  </div>
</template>