/* angular-lib-example - 0.0.1
 * Example angular lib project
 * https://your/lib/name/here
 */
(function() {
  angular.module("app", []).directive("helloThere", function() {
    return {
      templateUrl: "helloThere.html"
    };
  });

}).call(this);

angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("helloThere.html",
    "<div>hi</div>\n"
  );

}]);
