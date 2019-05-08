<template>
    <div class="course">
        <div class="image">
            <img src="../assets/weichuang.jpg" alt="">
            <div class="image-top">
                唯创网讯
            </div>
            <p class="image-center">
                省内最早最权威最专业的WEB前端培训
            </p>
            <p class="image-footer">
                一站式解决零基础就业
            </p>
        </div>
        <div class="star_container">
            <p class="star">
                明星学员
            </p>
            <p class="border-blue"></p>
            <ul class="studentList">
                <li v-for="val in studentList">
                    <img :src="val.path" alt="">
                    <div>
                        {{val.introductions}}
                    </div>
                    <p>
                        <span>
                            {{val.name}}
                        </span>|
                        <span>
                            {{val.school}}
                        </span>|
                        <span>
                            {{val.company}}
                        </span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="employmentList">
            <p class="star">高薪就业榜</p>
            <p class="border-blue"></p>
            <ul class="employmentList_header">
                <li>
                    <p>
                        {{employ.offer_count_week}}
                    </p>
                    <p>
                        每周OFFER
                    </p>
                </li>
                <li>
                    <p>
                        {{employ.employ_rate}}
                    </p>
                    <p>
                        就业率
                    </p>
                </li>
                <li>
                    <p>
                        {{employ.salary}}
                    </p>
                    <p>
                        平均薪酬
                    </p>
                </li>
                <li>
                    <p>
                        {{employ.offer_number}}
                    </p>
                    <p>
                        累计OFFER
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CourseDetails",
        data(){
            return{
                studentList:[
                    {
                        name:'张三',
                        school:'黑大',
                        company:'百度',
                        path:'star1.png',
                        introductions:'感谢学校和唯创的老师们对我的培养，\n' +
                        '                        我认为学习编程语言除了需要具备基础的知识外，\n' +
                        '                        更重要的是能够熟练运用的经验。\n' +
                        '                        在学校学习的知识没有无用的，\n' +
                        '                        不论c还是数据库sql，\n' +
                        '                        或者软件工程思想都会在工作中....'
                    },
                    {
                        name:'李四',
                        school:'林大',
                        company:'腾讯',
                        path:'star2.jpeg',
                        introductions:'感谢学校和唯创的老师们对我的培养，\n' +
                        '                        我认为学习编程语言除了需要具备基础的知识外，\n' +
                        '                        更重要的是能够熟练运用的经验。\n' +
                        '                        在学校学习的知识没有无用的，\n' +
                        '                        不论c还是数据库sql，\n' +
                        '                        或者软件工程思想都会在工作中....'
                    },
                    {
                        name:'王二',
                        school:'工程',
                        company:'阿里',
                        path:'star3.jpg',
                        introductions:'感谢学校和唯创的老师们对我的培养，\n' +
                        '                        我认为学习编程语言除了需要具备基础的知识外，\n' +
                        '                        更重要的是能够熟练运用的经验。\n' +
                        '                        在学校学习的知识没有无用的，\n' +
                        '                        不论c还是数据库sql，\n' +
                        '                        或者软件工程思想都会在工作中....'
                    }
                ],
                employ: {
                        offer_count_week:'20+',
                        employ_rate:'80%',
                        salary:'13.5k',
                        offer_number:'2000+'
                    },
            }
        },
    }
</script>

<style scoped>
    .course{
        margin: 0 auto;
        width: 1200px;
    }
    .image{
        position: relative;
        width: 100%;
    }
    .image-top{
        position: absolute;
        top: 8%;
        left: 50%;
        transform:translate(-50%,0);
        color: #fff;
        font-size: 75px;
        letter-spacing: 5px;

    }
    .image-center{
        background: hsla(0,0%,100%,.5);
        border-radius: 30px;
        color: gold;
        font-size: 29px;
        left: 50%;
        letter-spacing: 3px;
        padding: 10px 20px;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .image-footer{
        position: absolute;
        top: 70%;
        left: 50%;
        color: #fff;
        letter-spacing: 3px;
        font-size: 30px;
        transform:translate(-50%,0)
    }
    .star{
        text-align: center;
        margin: 15px 0;
        font-size: 35px;
        color: #000;
        letter-spacing: 3px;
    }
    .border-blue{
        width: 80px;
        padding: 1px;
        background: blue;
        margin: 0 auto;
    }
    .studentList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0 0 0;
        padding: 0;
        width: 100% ;
    }
    .studentList li{
        list-style: none;
        /*flex: 1;*/
        width: 31%;
        /*margin-right: 20px;*/
        /*height: 359px;*/
        border: solid 1px grey;
    }
    .studentList li img{
        width: 100%;
        height: 200px;
    }
    .studentList li div {
        font-size: 16px;
        letter-spacing: 3px;
        /*overflow: hidden;*/
        /*padding: 10px 10px 0;*/
        text-align: left;
        text-indent: 35px;
        width: 100%;
        height: 108px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
    .studentList li p{
        font-size: 18px;
        text-align: left;
        margin: 20px 0;
        color: grey;
    }
    .studentList li p span{
        letter-spacing: 3px;
        padding: 0 10px;
    }
    .employmentList_header{
        display: flex;
        border:solid 1px grey;
    }
    .employmentList_header li{
        float: left;
        list-style: none;
        flex: 1;
        margin-left: 20px;
        font-size: 23px;
    }
</style>