<style>
    .article .mint-cell-wrapper{
        padding-bottom: 0.2rem;
    }
</style>
<template>
    <div>
        <div class="article">
            <mt-cell
             v-for=" x in 6"
             :key="x"
             to="/login"
             is-link
            >
                <img slot="icon"  src="../../images/67.jpg" style="margin-top: 10px;" height="60" width="60"/>
                震惊！！！李岳群居然是这样的人···
            </mt-cell>
        </div>
    </div>
</template>
<script>

</script>
