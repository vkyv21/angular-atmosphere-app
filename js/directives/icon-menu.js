angular.module('app.directives.iconMenu', [])
.directive('iconMenu', function ()
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                var a = 0;
             $(elm).click(function(){
                 $(elm).parents("#home").css({

                     '-webkit-transform': 'translate3d(40%, 0, 0) scale3d(0.85, 0.85, 1)',
                     '-moz-transform': 'translate3d(40%, 0, 0) scale3d(0.85, 0.85, 1)',
                     '-ms-transform': 'translate3d(40%, 0, 0) scale3d(0.85, 0.85, 1)',
                     '-o-transform': 'translate3d(40%, 0, 0) scale3d(0.85, 0.85, 1)',
                     'transform': 'translate3d(40%, 0, 0) scale3d(0.85, 0.85, 1)',
                     'transition': 'transform 0.6s ease-in'
                 });
                 a = 0;
             });

                 $(elm).parents("#home").click(function(){
                     if(a == 1){
                         console.log("s");
                         $(elm).parents("#home").css({
                             '-webkit-transform': 'translate3d(0,0,0) scale3d(1,1,1)',
                             '-moz-transform': 'translate3d(0,0,0) scale3d(1,1,1)',
                             '-ms-transform': 'translate3d(0,0,0) scale3d(1,1,1)',
                             '-o-transform': 'translate3d(0,0,0) scale3d(1,1,1)',
                             'transform': 'translate3d(0,0,0) scale3d(1,1,1)',
                             'transition': 'transform 0.6s ease-in'
                         });
                     }
                     a++;
                 });

            }
        };
});
