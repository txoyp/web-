<template>
    <div class="about-US">
        <div class="intro">
            <img src="http://www.webqd.org/68dd28e972c49ffc16a6d070daa31251.jpg" alt="">
            <p>唯创网讯是黑龙江省内最早最专业最权威的WEB全栈培训机构,自2012年以来培养了大批高质量学员，我们不断努力，不断创造奇迹，我们每一年都培养出大量的优秀高新就业学员，平均每年有超过72%~80%的学生都就业于互联网企业，平均工资超过14万，在省内拥有超高的口碑。</p>
        </div>

        <div class="teacher">
            <h2>金牌导师阵容</h2>
            <div class="list">
                <div class="detail" v-for="(val,index) in list" :key="index">
                    <div class="circle" :style="'border-color:'+val.color">
                        <img :src="val.photo" alt="">
                    </div>
                    <h3 class="name">{{val.name}}</h3>
                    <span class="line" :style="'border-color:'+val.color"></span>
                    <div class="experience">
                        {{val.experience}}
                    </div>
                    <div class="more" @click="show(index)">更多资历→</div>

                </div>
                <div id="hidden-container" @click="back">
                    <div class="hidden">
                        <div class="photo">
                            <img src="" alt="">
                        </div>
                        <div class="name"></div>
                        <div class="line"></div>
                        <div class="experience"></div>
                    </div>
                </div>
            </div>


        </div>
        
        <div class="contact">
            <img src="http://www.webqd.org/35eb2d392e5b5eaa7f957b169fd811b1.png" alt="">
            <div class="inner">
                <div>
                    <p>学府总校：学府书城写字楼822室内</p>
                    <p>咨询热线/微信</p>
                    <p>18545859788 18545857988</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

    export default {
        name: "Abuout-US",
        components: {
        },
        data() {
            return{
                list:[{
                    photo:'http://www.webqd.org/1227a4cfc90108f192f79a6d98e16a81.jpg',
                    name:'单老师',
                    experience:'2003年毕业，从事程序开发15年，骨灰级程序员，高级讲师，培养过大量优秀开发人才，主要从事Web程序开发和移动App开发。掌握技术：在Web前端方向有非常深的造诣，是国内最早从事前端开发的一批工程师；几乎所有Java方向涉及的相关技术，包括各种主流框架（SSH、SSI等），熟悉各种应用服务器（Weblogic、JBoss、Tomcat等）；熟悉各种数据库（Oracle、SQLServer、MySQL、MongoDB等）；熟悉Linux系统；熟悉PHP开发；熟悉Node.js开发。',
                    color:'rgb(236,145,112)'
                },{
                    photo:'http://www.webqd.org/d6cecd26ae1f836199bfcd825d9e82cc.jpg',
                    name:'吴老师',
                    experience:'前美国泰克和IBM工程师，2005年东北林业大学机电学院毕业，硕士，互联网老兵，有10多年互联网开发经验。擅长编程语言：C，C++，PHP，Python 技能：全栈开发、系统架构、运维与运营',
                    color:'rgb(81,161,211)'
                },{
                    photo:'http://www.webqd.org/ed99a394f302ea8d44ca71381793d7e1.jpg',
                    name:'谢老师',
                    experience:'曾就职于杭州海康威视数字技术股份有限公司六年有余，担任高级项目经理和金牌内训讲师。个人主导了多个重大项目的开发工作，如江苏省公安厅平安城市项目、绍兴市公安局视频侦查项目、辽阳市公安局视频联网项目等。在Java、NodeJS、JavaScript、HTML5、CSS3、AngularJs、VueJs、ReactJs、前端工程化、前端架构等方面均有建树。',
                    color:'rgb(111,113,250)'
                },{
                    photo:'http://www.webqd.org/2ad1cf7cb504b2dbb3fa5a56e232863d.jpg',
                    name:'小吴老师',
                    experience:'从事Web全栈开发多年，曾任职于用友集团和海尔集团，掌握各种前后端流行框架和技术。曾担任大型项目主管，在web前端、java、php等技术上都有丰富的开发经验。参与过“NC6.x 供应链-进出口管理 “项目的研发，支持多种操作系统， 多种数据库。为上线产品的做支持维护， 为NC客户提供了几百个需求功能及解决方案，高效完成项目中的问题',
                    color:'rgb(192,152,161)'
                },{
                    photo:'http://www.webqd.org/6b4c760496827bf1df8f595b79207292.jpg',
                    name:'董老师',
                    experience:'六年前端开发经验，曾任职聚美优品高级前端工程师，京东商城技术部、服饰家居事业部资深web前端工程师，期间主导了商城的重构以及负责大促首页前端项目，工作中积累了丰富的各种Web开发技术的实战经验。对前端理论知识有深入理解，熟练使用CSS3、 HTML5等技术，深入研究前端es6、 Vue.js、Vuex等新技术及前端框架，掌握丰富的实战编程及教学经验',
                    color:'rgb(236,145,112)'
                },{
                    photo:'http://www.webqd.org/0a6db0a0140339ea2d8e0e3df5345baa.jpg',
                    name:'冯老师',
                    experience:'有着多年的互联网工作及授课经验，曾就业于滴滴等多家互联网公司，也曾先后有过两次的创业经历，创业团队均来自IBM、腾讯、去哪、等国内外知名科技网公司。主导过公司线上购物类及外卖o2o等多个产品，同时也有着多年的技术经验，让你能在授课过程中收获更为全面及扩展性知识。',
                    color:'rgb(81,161,211)'
                },{
                    photo:'http://www.webqd.org/188a3cc853a30d8a4d71cb2e2be09df6.png',
                    name:'Shan Luo',
                    experience:'直通硅谷课程总监,负责数据结构与算法及数据科学课程的质量监督。原哈佛大学计算机视觉领域博士后,美国麻省理工学院 MIT 计算机科学和人工智能实验室(CSAIL)访问学者, 机器人世界一流实验室 smARTLab 负责人,曾在知名顶级学术会议,机器人与自动化会议(ICRA) 和国际智能机器人与系统大会(IROS)中发表多篇论文,曾辅导数百名同学拿到机器学习领域的顶级offer。',
                    color:'rgb(111,113,250)'
                },{
                    photo:'http://www.webqd.org/188a3cc853a30d8a4d71cb2e2be09df6.png',
                    name:'William Liu',
                    experience:'直通硅谷职业咨询规划师,南加州大学维特比学院研究生毕业。3D计算机视觉领域 专家,实时相机系统总架构师,硅谷顶级科技公司资深面试官,曾指导并帮助上千人拿到硅谷顶级科技公司 offer。',
                    color:'rgb(192,152,161)'
                },],


            }

        },
        methods: {
            back(){
                var oContainer = document.getElementById('hidden-container');
                var oHidden = document.getElementsByClassName('hidden')[0];
                oContainer.style.display = 'none';
                oHidden.style.display = 'none';
            },
            show(index){
                var oHidden = document.getElementsByClassName('hidden')[0];
                var oPhoto = oHidden.getElementsByClassName('photo')[0];
                var oImg = oPhoto.getElementsByTagName('img')[0];
                var oName = oHidden.getElementsByClassName('name')[0];
                var oLine = oHidden.getElementsByClassName('line')[0];
                var oExperience = oHidden.getElementsByClassName('experience')[0];
                var oContainer = document.getElementById('hidden-container');
                oContainer.style.display = 'block';
                oHidden.style.display = 'block';
                oPhoto.style.borderColor =  this.list[index].color;
                oImg.src = this.list[index].photo;
                oName.innerHTML = this.list[index].name;
                oLine.style.backgroundColor = this.list[index].color;
                oExperience.innerHTML = this.list[index].experience;
            }
        }
    }
</script>

<style scoped>
    #hidden-container{
        display: none;
        position: fixed;
        top:0;
        left: 0;
        width: 1980px;
        background-color: rgba(0,0,0,.3);
        z-index: 10;
        height: 100%;
    }
    .about-US{
        margin: 0 auto;
        width: 1200px;
    }
    .about-US .intro{
        margin: 10px auto;
        width: 1160px;
        padding: 20px;
        background-color: white;
    }
    .about-US .intro>img,.about-US .contact>img{
        width: 100%;
    }
    .about-US .intro>p{
        margin-top: 12px;
        font-size: 18px;
        font-weight: 400;
        height: 54px;
        line-height: 30px;
    }
    .about-US .teacher{
        margin: 30px auto;
        background-color: rgb(249,250,254);
    }
    .about-US .teacher h2{
        margin: 0 auto;
        text-align: center;
    }
    .about-US .teacher .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .about-US .teacher .list .hidden{
        display: none;
        background-color: white;
        border: 1px solid #f8fafc;
        border-radius: 15px;
        width: 500px;
        /*height: 200px;*/
        position: fixed;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 30;
    }
    .about-US .teacher .list .hidden .photo{
        border: 2px solid;
        border-radius: 50%;
        height: 100px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
        top: -50px;
        width: 100px;
    }
    .about-US .teacher .list .hidden .photo>img{
        width: 100%;
    }
    .about-US .teacher .list .hidden .name{
        color: #333;
        font-size: 24px;
        text-align: center;
        position: relative;
        top:-40px;
    }
    .about-US .teacher .list .hidden .line{
        height: 2px;
        margin: 0 auto;
        width: 100px;
        position: relative;
        top:-28px;
    }
    .about-US .teacher .list .hidden .experience{
        color: #333;
        font-size: 16px;
        margin: 17px 35px;
        position: relative;
        top: -22px;
    }
    .about-US .teacher .list .detail{
        background-color: white;
        margin-top: 14px;
        width: 24%;
        height: 400px;
        border: 1px solid rgb(223,224,226);
    }
    .about-US .teacher .list .detail .circle{
        margin:25px auto 0;
        border: 2px solid black;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
    }
    .about-US .teacher .list .detail .circle>img{
        width: 100%;
    }
    .about-US .teacher .list .detail .name{
        font-size: 22px;
        font-weight: 400;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .about-US .teacher .list .detail .line{
        border: 1px solid ;
        display: block;
        width: 128px;
        margin: 20px auto;
    }
    .about-US .teacher .list .detail .experience{
        height: 115px;
        overflow: hidden;
        padding: 10px;
        text-indent: 25px;
        font-size: 14px;
        line-height: 1.8;
    }
    .about-US .teacher .list .detail .more{
        float: right;
        position: relative;
        top: 20px;
        right: 10px;
        font-size: 14px;
        color: rgb(82,157,227);
        cursor:pointer;

    }
    .about-US .contact{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        width: 1160px;
        padding: 20px;
        background-color: white;

    }
    .about-US .contact .inner{
        background: #fff;
        position: absolute;
        height: 85%;
        opacity: .8;
        width: 93%;
    }
    .about-US .contact .inner>div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .about-US .contact .inner>div>p{
        text-align: center;
        color: black;
        font-size: 18px;
        font-weight: 700;
    }

</style>