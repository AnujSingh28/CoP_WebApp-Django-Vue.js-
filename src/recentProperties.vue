<template>
    <section id="recentPropertiesBox">
        <div id="Recent_properties" >Recently Added:</div>
        <div id="recentProperties">
            <property v-for="(eachProfile,index) in recentProfiles" v-bind:key="index" v-bind:profile="eachProfile"> </property>
        </div>
        <button id="scrollButton" type="button" name="button" @click="rightScroll"><img class="bullet" src='/src/assets/bullet.png' alt="Bullet Arrow"></button>
    </section>
</template>

<script type="text/javascript">
    import property from './property.vue';
    export default{
        name: 'recentProperties'
        components: {
            'property':property
        },
        data: function(){
            return {
                recentProfiles:[
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature - 1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature -1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature - 1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature -1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature - 1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature -1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature - 1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature -1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature - 1", "Feature - 2", "Feature - 3"]
                },
                {
                    imgSource: "/src/assets/propertyDefault.png",
                    location : "Location",
                    price : "2 Cr",
                    linkToMore : "",
                    features : ["Feature -1", "Feature - 2", "Feature - 3"]
                }
                ]
            }
        },
        methods:{
            rightScroll: function(){
                document.getElementById("featuredProperties").scrollLeft +=(document.getElementById("featuredProperties").offsetWidth);
            }
        }
    }

</script>

<style media="screen" scoped>
    *{
        box-sizing: border-box;
    }
    #recentPropertiesBox{
        width: 100%;
        height:520px;
        padding:0px;
        margin:0;
        box-sizing: border-box;
        position: relative;
        top: 170px;
    }
    #Recent_properties {
    		position: absolute;
    		left: 10px;
    		overflow: visible;
    		width: 550px;
    		white-space: nowrap;
    		text-align: left;
    		font-family: Segoe UI;
    		font-style: normal;
    		font-weight: normal;
    		font-size: 60px;
    		color: rgba(238,30,86,0.98);
    	}
    #recentProperties{
        display: inline-block;
        float:left;
        top: 100px;
        position: relative;
        margin:0;
        padding:0;
        height:100%;
        width:95%;
        overflow-y: hidden;
        overflow-x: scroll;
        white-space: nowrap;
        -ms-overflow-style: none;
        box-sizing: border-box;
    }
    #recentProperties::-webkit-scrollbar {
        display: none;
    }
    property{
        display: inline-block;
    }
    #scrollButton{
        float: right;
        display: inline-block;
        position: relative;
        top: 63%;
        height: 10%;
        margin: auto;
        border: none;
        background-color: white;
    }
    .bullet{
        height: 100%;
    }
</style>
