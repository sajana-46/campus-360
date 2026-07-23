var app = angular.module("Campus360", []);

app.controller("dashboardController", function ($scope) {

    $scope.collegeName = "Campus360";
    $scope.totalStudents = 1000;
    $scope.totalFaculty = 100;

    $scope.showDashboard = true;
    $scope.showStudentList = false;

    console.log("Dashboard Controller Loaded Successfully");

    $scope.students = [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Emily Davis",
        "William Brown"
    ];

    $scope.departments = [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Business Administration"
    ];

    $scope.addStudent = function () {
        console.log("Before:", $scope.totalStudents, typeof $scope.totalStudents);

        $scope.totalStudents++;

        console.log("After:", $scope.totalStudents, typeof $scope.totalStudents);
    };
    $scope.removeStudent = function () {
        if ($scope.totalStudents > 0) {
            $scope.totalStudents--;
        }
    }


    $scope.fees = 25000;
    $scope.today = new Date();
    $scope.selectedDepartment = "Computer Science";
   $scope.isDisabled = true;

    $scope.allowAdmission = function () {
        $scope.isDisabled = false;
    };

    $scope.isReadOnly=true;
    $scope.toggleReadOnly = function () {

        $scope.isReadOnly = !$scope.isReadOnly;
    };

    $scope.student = {};


    $scope.student = {};


$scope.departmentList = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Business Administration"
];


$scope.genderList = [
    "Male",
    "Female"
];


    $scope.disableAdmission = function () {
        $scope.isDisabled = true;
    };

});