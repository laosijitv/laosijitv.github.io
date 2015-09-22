/**
 * Created by sunqi on 15/9/4.
 */
$(function(){
    var jsonUrl = 'http://7xlknn.com1.z0.glb.clouddn.com/' + $('#jsonUrl').val() + '?now=' + new Date().getTime();
    console.log(jsonUrl)
    $.get(TEMPLATE_URL, function(template) {
        console.log('获得模板')
        $.getJSON(jsonUrl,function(pageData){
            var rendered = Mustache.render(template,pageData);
            $('#mainContent').html(rendered);

            $('#mainContent .pos-rlt img').eq(0).load(function(){
                console.log('load success')
                var imgHeight = $('#mainContent .pos-rlt img').height();
                console.log('height:' + imgHeight);
                $('#mainContent .pos-rlt img').height(imgHeight);
            });
            $("#mainContent .pos-rlt img").error(function(){
                console.log($(this).index());
                console.log('图片加载出错');
                //var _src = $(this).attr('src');
                //$(this).attr('src','');
                //$(this).attr('src',_src);
            });
            //var imgHeight = $('#mainContent .pos-rlt img').height();
            //$('#mainContent .pos-rlt img').height(imgHeight);
        })
        //$.ajax({
        //  type: "GET",
        //  url: jsonUrl,
        //  dataType: "json",
        //  error: function (XMLHttpRequest,textStatus,errorThrown) {
        //    console.log("error");
        //    console.log(XMLHttpRequest);
        //    console.log(textStatus);
        //    console.log(errorThrown);
        //  }
        //});
    });
})