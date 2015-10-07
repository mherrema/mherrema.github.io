angular.module('todoApp', [])
    .controller('MyController', function ($scope, $timeout, focus) {
        $scope.state = {
            status: "view",
            display: "table"
        };

        $scope.extendedFiltersOpen = false;

        $scope.isInState = function (status, display) {
            var statusBool = false;
            var displayBool = false;
            if ($scope.state.status == status || status == "either") {
                statusBool = true;
            }
            if ($scope.state.display == display || display == "either") {
                displayBool = true;
            }
            return (statusBool && displayBool);
        };

        $scope.goToState = function (status, display) {
            if (status != "current") {
                $scope.state.status = status;
            }
            if (display != "current") {
                $scope.state.display = display;
            }
        }

        $scope.currentStudents = [{
                name: "Abdi, Kadija (714222)",
                school: "Allendale",
                gender: "Female",
                ethnicity: "Black",
                frl: "Free",
                specialEd: "Yes",
                migrant: "No",
                lep: "Yes",
                grade: "08"
    },
            {
                name: "Abdi, Yusuf (722088)",
                school: "Allendale",
                gender: "Male",
                ethnicity: "Asian",
                frl: "Reduced",
                specialEd: "No",
                migrant: "No",
                lep: "No",
                grade: "11"
    },
            {
                name: "Abreu, Elizabeth (770230)",
                school: "Caledonia",
                gender: "Female",
                ethnicity: "Hispanic",
                frl: "Free",
                specialEd: "No",
                migrant: "No",
                lep: "No",
                grade: "09"
    },
            {
                name: "Acevedo, Gerzon (730415)",
                school: "Jenison",
                gender: "Male",
                ethnicity: "Hispanic",
                frl: "Free",
                specialEd: "No",
                migrant: "No",
                lep: "Yes",
                grade: "10"
    },
            {
                name: "Agaton, Francisco (728851)",
                school: "Allendale",
                gender: "Female",
                ethnicity: "Black",
                frl: "Free",
                specialEd: "Yes",
                migrant: "No",
                lep: "Yes",
                grade: "08"
    }, ];

        $scope.toggleSearchOpen = function () {
            $scope.searchOpen = !$scope.searchOpen;
            if ($scope.searchOpen) {
                focus("studentSearchInput");
            }
        }

        $scope.headingOptions = [{
            heading: "School",
            options: ["None", "Dutton", "Caledonia", "Allendale", "Jenison"],
            open: false,
            selected: ""
        }, {
            heading: "Gender",
            options: ["None", "Male", "Female"],
            open: false,
            selected: ""
        }, {
            heading: "Ethnicity",
            options: ["None", "Asian", "Black", "Hispanic", "White"],
            open: false,
            selected: ""
        }, {
            heading: "FRL",
            options: ["None", "N/A", "Free", "Reduced"],
            open: false,
            selected: ""
        }, {
            heading: "Special Ed",
            options: ["None", "Yes", "No"],
            open: false,
            selected: ""
        }, {
            heading: "Migrant",
            options: ["None", "Yes", "No"],
            open: false,
            selected: ""
        }, {
            heading: "LEP/ELL",
            options: ["None", "Yes", "No"],
            open: false,
            selected: ""
        }, {
            heading: "Grade",
            options: ["1", "2", "3", "4", "5"],
            open: false,
            selected: ""
        }];

        $scope.openHeading = function (heading) {
            $scope.closeHeadings();
            heading.open = true;
        }

        $scope.closeHeadings = function () {
            angular.forEach($scope.headingOptions, function (value, key) {
                value.open = false;
            });
        }

        $scope.selectHeadingOption = function (heading, option) {
            if (option != "None") {
                heading.selected = option;
            } else {
                heading.selected = "";
            }
            $scope.closeHeadings();
        }

        $scope.areOptionsSelected = function () {
            var optionsSelected = false;
            angular.forEach($scope.headingOptions, function (value, key) {
                if (value.selected != "") {
                    optionsSelected = true;
                }
            });
            return optionsSelected;
        }

        $scope.clearFilters = function () {
            console.log($scope.headingOptions);
            angular.forEach($scope.headingOptions, function (value, key) {
                value.selected = "";
            });
        };

        $scope.setHeadingDropdownWidth = function () {
            $timeout(function () {
                var dropdowns = $(".table-heading-dropdown");
                for (var i = 0; i < dropdowns.length; i++) {
                    $(dropdowns[i]).width($(dropdowns[i]).parent("th").outerWidth());
                }
                var tableActionDropdowns = $(".action-dropdown");
                for (var i = 0; i < tableActionDropdowns.length; i++) {
                    $(tableActionDropdowns[i]).width($(tableActionDropdowns[i]).parent("li").outerWidth());
                }
                var checkboxes = $(".inga-table :checkbox");
                for (var j = 1; j < checkboxes.length; j++) {
                    $(checkboxes[j]).click(function () {
                        $(this).parent().parent().toggleClass("selected");
                    });
                }
            });
        }
    }).factory('focus', function ($timeout, $window) {
        return function (id) {
            // timeout makes sure that it is invoked after any other event has been triggered.
            // e.g. click events that need to run before the focus or
            // inputs elements that are in a disabled state but are enabled when those events
            // are triggered.
            $timeout(function () {
                var element = $window.document.getElementById(id);
                if (element)
                    element.focus();
            });
        };
    })
    .directive('eventFocus', function (focus) {
        return function (scope, elem, attr) {
            elem.on(attr.eventFocus, function () {
                focus(attr.eventFocusId);
            });

            // Removes bound events in the element itself
            // when the scope is destroyed
            scope.$on('$destroy', function () {
                elem.off(attr.eventFocus);
            });
        };
    });