angular.module('app.directives.searchPage', [])
.directive('searchPage', function ()
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                var a = 0;
             $(elm).click(function(){
                 $(elm).parents().siblings("#searchPage").css({

                     'display' : 'block'
                 });
                 a = 1;
             });
             $(elm).parents().siblings("#searchPage").find("#close").click(function(){
                 console.log('as', a);
                 if(a == 1){
                     $(elm).parents().siblings("#searchPage").css({
                         'display' : 'none'
                     });
                 }
                 a++;
             });
            }
        };
});
