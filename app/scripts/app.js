  'use strict';
  angular.module('confusionApp',[])
<<<<<<< HEAD
   .controller('MenuController',['$scope', function($scope){
    $scope.tab = 1 ;
    $scope.filttext = "";
    $scope.showDetails=false;
    
=======
   .controller('MenuController' , ['$scope', function($scope){
    $scope.tab = 1 ;
    $scope.filttext = "";
    $scope.showDetails = false;

>>>>>>> bc60343dd5c5b3b8601f3e416b5c334075f8d5a9
    $scope.dishes=[
    {
      name:'Uthapizza',
      image: 'images/uthapizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: ''
   },
   {
      name:'Zucchipakoda',
      image: 'images/zucchipakoda.png',
      category: 'appetizer',
      label:'',
      price:'1.99',
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
      comment: ''
   },
   {
      name:'Vadonut',
      image: 'images/vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
      comment: ''
   },
   {
      name:'ElaiCheese Cake',
      image: 'images/elaicheesecake.png',
      category: 'dessert',
      label:'',
      price:'2.99',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      comment: ''
   }
   ]
<<<<<<< HEAD
=======

>>>>>>> bc60343dd5c5b3b8601f3e416b5c334075f8d5a9
   $scope.select = function(setTab){
     $scope.tab = setTab;

     if (setTab === 2)
              $scope.filtText = "appetizer";
          else if (setTab === 3)
              $scope.filtText = "mains";
          else if (setTab === 4)
              $scope.filtText = "dessert";
          else
              $scope.filtText = "";
   };

   $scope.isSelected = function (checkTab) {
     return($scope.tab === checkTab);
<<<<<<< HEAD
=======

   };
>>>>>>> bc60343dd5c5b3b8601f3e416b5c334075f8d5a9

   $scope.toggleDetails = function(){
     $scope.showDetails = !$scope.showDetails;
   };

<<<<<<< HEAD
   $scope.toggleDetails = function(){
     $scope.showDetails = !$scope.showDetails;
   }


 }]);
=======
 }])


 .controller('ContactController', ['$scope', function($scope){
   $scope.feedback = {mychannel:"", firstname:"", lastname:"", agree:false, email:""};

 }])

 .controller('FeedbackController', ['$scope', function($scope){

 }])

;
>>>>>>> bc60343dd5c5b3b8601f3e416b5c334075f8d5a9
