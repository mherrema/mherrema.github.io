<html>
<head>
    <link href="calendar.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    </head>
<body>
    
    
        <?php
        date_default_timezone_set('America/New_York');
        parse_str($_SERVER['QUERY_STRING']);
        if($month == "" || $year == ""){
            $year = date('Y');
            $month = date('m');
        }

        $daysInMonth =  cal_days_in_month(CAL_GREGORIAN, $month , $year);
        $startingIndex = date('N',mktime(0, 0, 0, date($month), 1));
        $dayNames = array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        $monthNames = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        $weeks = ceil($daysInMonth/7);
        $currentDay = 1;
        $monthName = $monthNames[$month-1];
        if($month<12 && $month>1){
            $nextMonth = $month+1;
            $lastMonth = $month-1;
            $nextYear = $year;
            $lastYear = $year;
        }
        else if($month==1){
            $nextMonth = $month+1;
            $lastMonth = 12;
            $nextYear = $year;
            $lastYear = $year-1;
        }
        else if($month==12){
            $nextMonth = 1;
            $lastMonth = $month-1;
            $nextYear = $year+1;
            $lastYear = $year;
        }

        echo "<h1 style='text-align:center;'><a class='fa fa-arrow-left' style='padding-right:30px;' href='/calendar.php?month=$lastMonth&year=$lastYear'></a> $monthName $year <a class='fa fa-arrow-right' style='padding-left:30px;' href='/calendar.php?month=$nextMonth&year=$nextYear'></a></h1>";
        echo "<table><tr class='header'>";
        foreach($dayNames as $dayName){
            echo "<th class='heading'>$dayName</th>";
        }
        echo "</tr>";

        echo "<tr>";
        if($startingIndex!=7){
        for ($i = 0; $i<$startingIndex; $i++){
            echo "<td></td>";
        }
        }
        for ($j = $i; $j<7; $j++){
            echo "<td>$currentDay</td>";
            $currentDay++;
        }
        echo "</tr>";
        
        
        while($currentDay<=$daysInMonth){
            echo "<tr>";
            for($l = 0; $l<7; $l++){
                if($currentDay<=$daysInMonth){
                echo "<td>$currentDay</td>";
                $currentDay++;
                }
                else{
                    echo "<td></td>";
                }
            }
            echo "</tr>";
        }
    

        ?>
            
        
    </table>
    
    
    
</body>

</html>