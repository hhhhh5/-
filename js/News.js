/**
 * Created by Administrator on 2016/6/4.
 */
var qsData = {  'cb': 'ShowNews' };
$.ajax({
    url:'http://apis.baidu.com/txapi/keji/keji',
    type:"GET",
    data:{
        'num':10,
        'page':1
    },
    headers:{
        'apikey':'63a182180e3265a2b9c6f15322179606'
    },
    success:success,
    error:function(err){
        alert(err.Msg)
    }
});
function success(data){
    console.log(data);
    for(var i=0;i<data.newslist.length;i++){
        $(".news").first().parent().clone().appendTo($(".text1").first());
        if(data.newslist[i].picUrl==""){
            $(".news").last()[0].children[0].src="../images/logoForNull.png";
        }
        else{
            $(".news").last()[0].children[0].src=data.newslist[i].picUrl;
        }
        
        $(".news").last().find(".news_title")[0].innerText=data.newslist[i].title;
        $(".news").last().find(".news_text")[0].innerText=data.newslist[i].description;
        $(".news").last().find(".news_time")[0].innerText=data.newslist[i].ctime;
        $(".news").last().parent()[0].href=data.newslist[i].url;
    }
    $(".news").first().parent().css("display","none");
}