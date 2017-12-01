myApp.controller('CreateCtrl', function($scope, $state, $localStorage){
	$scope.values=[];
	if($localStorage.values != null){
		$scope.values=$localStorage.values;
	}
	$scope.countries = {
				'India': {
						'Rajasthan': {
							'text': [],
						},
						'Maharashtra':{
							'text': [],
						},
						'MP': {
							'text': []
						}
				},
				'Australia': {
						'Sydney': {
							'text' : [],
						},
						'Victoria':{
							'text' : [],
						},
						'Melbourne': {
							'text' : []
						}
				},
				'USA': {
						'New York': {
							'text': [],
						},
						'California':{
							'text': [],
						},
						'Arizona': {
							'text': []
						}
				}
			
		};
	
	$scope.createNote = function(){
		$scope.user ={
		selectedCountry: '',
		selectedState: '',
		selectedText: ''
	}

		$scope.user.selectedCountry = $scope.selectedCountry;
		$scope.user.selectedState = $scope.selectedState;
		$scope.user.selectedText = $scope.selectedText;
		$scope.values.push($scope.user);
		$localStorage.values = $scope.values;	
		 $scope.info=true;
	}
})

.controller('UpdateCtrl', function($scope, $state, $localStorage){
	$scope.updatedValue=[];
	if($localStorage.values !== null){
		$scope.updatedValue=$localStorage.values;
	}
	console.log($scope.updatedValue);

	$scope.update = function(index){
	$scope.edit = $scope.updatedValue[index].selectedText;	
	$scope.selectedIndex = index;
	}
	$scope.newText = [];
	$scope.save = function(index){
	console.log($scope.newText[index]);	
	 console.log($localStorage.values[index].selectedText);
	 $scope.updatedValue[index].selectedText = $scope.newText[index];
	 console.log($localStorage.values[index].selectedText);

	}
})
