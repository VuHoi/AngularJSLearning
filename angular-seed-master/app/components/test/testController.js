'use strict';


    
angular.module('login',[])
.run(function(){
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
})

.directive('datePickerPopup',function(){
return {
    restrict:'E',
    scope:{
        // selectedDate:'='
    },
    templateUrl:"./components/test/dateTime.html",
   
    link:function(scope,element,attrs){
        scope.monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        scope.monthNames1 = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        scope.switchMonth=true;
        scope.selectedDate= new Date();
        scope.today=new Date();
        scope.dates=[];
        scope.month=(scope.selectedDate).getMonth();
        scope.year=(scope.selectedDate).getFullYear();
        scope.isOpen=false;
        scope.toggle=function(){
            scope.isOpen=!scope.isOpen;
        };
        scope.toggleMonth=function(){
            scope.switchMonth=!scope.switchMonth;
        }

        scope.selectedMonth=function (month) {
            scope.month=month;
            scope.toggleMonth();
            addDates(scope.month,scope.year);
        }
        scope.selected=function(date){
            scope.selectedDate=date;
            scope.toggle();
        };
        scope.next=function () {
           if(scope.month===11){
               scope.month=0;
               scope.year=scope.year+1;
           }
           else{
               scope.month=scope.month+1;
           }
            addDates(scope.month,scope.year);

        }

        scope.prev=function () {
            if(scope.month===0){
                scope.month=11;
                scope.year=scope.year-1;
            }
            else{
                scope.month=scope.month-1;
            }
            addDates(scope.month,scope.year);

        }

        function addDates(month,year){
            scope.dates=[];
            var firstDateOfMonth=new Date(year,month,1)
            let dateOfWeek=firstDateOfMonth.getDay();
            firstDateOfMonth =firstDateOfMonth.addDays(-dateOfWeek);
            var startDate=firstDateOfMonth;

            for(let i=0;i<42;i++){
                scope.dates.push(startDate);
                startDate= startDate.addDays(1);
            }

        }

        addDates(scope.month,scope.year)
    }
}

})


 .controller('test', function($scope,$rootScope) {
    $scope.date="sss"
    console.log($scope.date)
 })


