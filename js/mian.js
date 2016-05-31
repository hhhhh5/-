/**
 * Created by Íõ±ë on 2016/5/30.
 */
var list = [{
    height: 475,
    width: 400,
    content: "../images/1.jpg",
},{
    height: 527,
    width: 400,
    content: "../images/2.jpg",
},{
    height: 374,
    width: 600,
    content:"../images/9.jpg"
}];
var islider=new iSlider({
    dom:document.getElementById('banner'),
    data:list,
    isVertical:true,
    duration: 2000,
    animateType: 'card',
    isAutoplay:true,
});

