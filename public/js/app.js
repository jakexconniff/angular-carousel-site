angular.module('routerApp', ['routerRoutes', 'ngAnimate'])
// Controller for entire site
.controller('mainController', function() {
  var vm = this;
})

// Home page Controller
.controller('homeController', function($interval, $timeout) {
  var vm = this;
  vm.currentBox = 0;
  vm.boxes = [
    {id: 0, 'bgColor': 'green', 'bgUrl': 'https://i.ytimg.com/vi/_5lHYEjuSg0/maxresdefault.jpg', 'fontColor': 'white', 'headerMessage': 'The most swagged out programmer this side of the Mississippi.', 'subMessage': 'Matter of fact, both sides of the Mississippi!'},
    {id: 1, 'bgColor': 'red', 'bgUrl': 'http://widewallpaper.info/wp-content/uploads/2016/03/Doge-wallpaper-2880x1800-12.jpg', 'fontColor': 'black', 'headerMessage': 'The most swaggertastic Sushi Man there ever was.', 'subMessage': 'Let me show you how I swag out.'},
    {id: 2, 'bgColor': 'blue' , 'bgUrl': 'https://i.ytimg.com/vi/nqfNzH9wuP0/maxresdefault.jpg', 'fontColor': 'white', 'headerMessage': 'I know how to count aaaall the way to schfifty five!', 'subMessage': 'And I can tell you what it schwas!'}

  ];

  vm.carouselSelector = function(index) {
    if (index == vm.currentBox)
      return true;
    else {
      return false;
    }
  }

  vm.homeBoxColor = function(index) {
    return vm.boxes[index].bgColor;
  };

  vm.homeBoxImg = function(index) {
    var path = "{background-image: url( " + vm.boxes[index].bgUrl + ");}";
    console.log(path);
    return path;
    return vm.boxes[index].bgUrl;
  }

  vm.homeIconColor = function(index) {
    console.log(vm.boxes[index].fontColor);
    return vm.boxes[index].fontColor;
  }

  vm.runCarousel = function() {
    if (vm.currentBox == (vm.boxes.length - 1)) {
      vm.currentBox = 0;
    } else {
      vm.currentBox++;
    }

    $timeout(vm.runCarousel, 10000);
  };

  vm.runCarousel();

})

// About page controller
.controller('aboutController', function() {
  var vm = this;
  vm.message = 'I have more swagger with one sushi roll than your whole family ever will.';
})

// Contact page controller
.controller('contactController', function() {
  var vm = this;

  vm.message = 'Contact me at www.sushimanondeck.com';
});
