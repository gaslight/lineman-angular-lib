describe "helloThere directive", ->
  beforeEach ->
    module("app")

  beforeEach inject( ($compile, $rootScope) ->
    @scope = $rootScope.$new()
    @compile = $compile
    @element = @compile("<div hello-there></div>")(@scope);
    @scope.$digest()
  )

  it "should work", ->
    expect(@element.html()).toMatch /hi/
