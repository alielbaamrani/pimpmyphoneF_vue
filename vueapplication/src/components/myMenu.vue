<template>
    <div class="main-menu" id="menu">
        <input class="menu-btn" type="checkbox" name="" id="menu-btn">
        <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
        </label>
        <ul class="menu clearfix">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"myMenu",

}
</script>
<style scoped>
 
.clearfix::before,
.clearfix::after {

    contain: "";
    display: table;
}
.clearfix:after {
    clear: both;
}

#menu {
    min-height: 50px;
    background-image: linear-gradient(rgba(0, 128, 255, 0.4), rgba(195, 0, 255, 0.4)) !important ;
}

#menu li {
    float: left;
    padding: 15px 7.5% 15px 7.5%;
    border-left: 1px solid #4848b8;
}

#menu li:hover {
    opacity: .5;
}

#menu li a {
    color: #ffffff;
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-btn {
    display: none;
}


@media (max-width: 767.98px ){
    .main-menu {
        width: 100%;
        background-color: #ffffff;
        box-shadow: 1px 1px 4px 0 rgba(red, green, blue, alpha);
        z-index: 3;
    }
        .main-menu ul {
            margin: 0;
            padding: 0;
            list-style: none;
            overflow-x: hidden;
            overflow-y: scroll;
        }

        #menu li {
            padding: 20px 18.5% 4px 14.5%;
            border-left: none;

        }
            .main-menu li a {
                width: 100% !important;
                display: block;
                margin-left: -47px;
                margin-right: 2px;
                padding: 0px 2px 0px 2px;
                text-decoration: none;
            }

            .main-menu li a:hover,
            .main-menu .menu-btn:hover {
                background-color: silver;
            }

            ul>li {
                width: 100%;
            }

            .main-menu .menu-icon{
                cursor:pointer;
                display: inline-block;
                margin-top: 5px;
                padding: 28px 20px;
                position: relative;
                user-select: none;
            }

            .main-menu .menu-icon .navicon{
                background-color: #ffffff;
                content: '';
                display: block;
                height: 2px;
                position: relative;
                transition: background .2s ease-out;
                width: 18px;

            }

        .main-menu .menu-icon .navicon:before,
        .main-menu .menu-icon .navicon:after{
            background-color: #ffffff;
            content: '';
            display: block;
            height: 100%;
            transition: all .2s ease-out;
            position: absolute;
            width: 100%;
        }

        .main-menu .menu-icon .navicon:before{
            top: 5px;
        }

        .main-menu .menu-icon .navicon:after{
            top: -5px;
        }


        .main-menu .menu-btn:checked~.menu{
            max-height: 240px;
        }
        .main-menu .menu-btn:checked~.menu-icon .navicon {
            background: transparent;
        }

        .main-menu .menu-btn:checked~.menu-icon .navicon:before {
            transform: rotate(-45deg);
        }

        .main-menu .menu-btn:checked~.menu-icon .navicon:after {
            transform: rotate(45deg);
        }
        .main-menu .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
        .main-menu .menu-btn:checked~.menu-icon:not(.steps) .navicon:after{
            top:0;
        }
 .menu        .main-menu {
            clear: both;
            max-height: 0;
            transition: max-height .2s ease-out;
            background-color: transparent;
            margin: 0 auto;
        }

}
</style>