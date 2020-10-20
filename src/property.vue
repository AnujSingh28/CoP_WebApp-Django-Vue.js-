<template>
    <div id="propertyContainer">
        <img id="image" v-bind:src="profile.imgSource" alt="Property Image">
        <div id="propertyLocation">{{ profile.location }}</div>
        <div id="propertyPrice">{{profile.price}}</div>
        <div class="propertyFeatures" v-for="feature in profile.features">
            <img class="bullet" src='/src/assets/bullet.png' alt="Bullet Arrow"> {{feature}}
        </div>
        <button id="viewMoreButton" type="button" name="viewMore" @click="">More Details</button>
    </div>
</template>


<script type="text/javascript">
    export default {
        props: ['profile'],
        data : function() {
            return {
            }
        }
    }
</script>

<style media="screen" scoped>
    *{
        box-sizing: border-box;
    }
    #propertyContainer{
        position: relative;
        width:24.3%;
        height:100%;
        display: inline-block;
        border: 1px solid black;
        border-style: outset;
        margin-left: 1px;
        margin-right: 9px;
        box-sizing: border-box;
    }
    #image{
        width: 100%;
        height: 45%;
        position: relative;
        top: 10px;
    }
    #propertyLocation{
        position: absolute;
        left:0;
        top :0;
        max-width:100%;
        display: inline-block;
        overflow: hidden;
        text-align: left;
    		font-family: Segoe UI;
    		font-style: normal;
    		font-weight: bold;
    		font-size: 15px;
    		color: rgba(26,20,67,1);
        z-index: 1;
    }
    #propertyPrice{
        text-align: center;
        height: 10%;
        background-color: white;
    		font-family: Segoe UI;
    		font-style: normal;
    		font-weight: bold;
    		font-size: 25px;
    		color: rgba(26,20,67,1);
    }
    #viewMoreButton{
        text-align: center;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: bold;
        width: 50%;
        font-size: 16px;
        position: relative;
        left: 25%;
        color: rgba(26,20,67,1);
        background-color: rgba(255,255,255,1);
        border-radius: 20px;
    }
    #viewMoreButton:hover {
        align-items: center;
        text-align: center;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: rgba(255,255,255,1);
        background-color: rgba(26,20,67,1);
        border-radius: 20px;
    }
    .propertyFeatures{
        clear: both;
        padding: 2px;
        height: 10%;
        width: 90%;
        margin: auto;
        overflow: hidden;
        vertical-align: middle;
        word-wrap: break-word;
        -webkit-column-width: 150px;
        column-width: 300px;/* just some big number to fill */
        column-gap: 300px;
        text-align: left;
    		font-family: Segoe UI;
    		font-style: normal;
    		font-weight: normal;
    		font-size: 25px;
    		color: rgba(26,20,67,1);
    }
    .bullet{
        float:left;
        width: 15%;
        height: 100%;
        margin-right: 10px;
    }
    .bullet::after{
        content: "  "
    }
    @media screen and (max-width: 992px) {
     #propertyContainer {
        width: 33.3%;
      }
    }
    @media screen and (max-width: 600px) {
     #propertyContainer {
        width: 50%;
      }
    }
    @media screen and (max-width: 450px) {
     #propertyContainer {
        width: 100%;
      }
    }


</style>
