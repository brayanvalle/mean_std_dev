$(document).ready(function() {

    var _data = []
    var i = 0
    $('#calculate').click(function() {
         data = $('#input_numbers').val()
         calculate(data)
    });

    $('#exc_test').click(function(){
        
        test();
    });


    function calculate(data){
       
        _data = separateData(data)
        if (_data.length > 3) {
            mean = calculateMean(_data)
            std_deviation = calculateStandardDeviation(_data)

            result = ({
                'count': _data.length,
                'mean': mean,
                'std_deviation': std_deviation
            });     

            if (result.mean != 'NaN' && result.std_deviation != 'NaN') {
                addResult(result)
                $('.messages').html("")
            } else {
                $('.messages').html("There was an error")
                cleanUp()
            }
        } else {
            $('.messages').html("Error: Enter at least 4 values")
            cleanUp()
        }
    }

    function cleanUp() {
        $('#result_count').html("")
        $('#result_mean').html("")
        $('#result_std_deviation').html("")
    }

    function addResult(result) {
        $('#result_count').html(result.count)
        $('#result_mean').html(result.mean)
        $('#result_std_deviation').html(result.std_deviation)
    }



    function calculateMean(_data) {
        return (_data.reduce((a, b) => a + b, 0) / _data.length).toFixed(2)
    }

    function calculateStandardDeviation(_data) {

        var sum = 0
        mean = calculateMean(_data)
        _data.forEach(number => {
            sum += Math.pow(number - mean, 2)
        });

        std = Math.sqrt(sum / (_data.length - 1))
        return std.toFixed(2)
    }


    function separateData(data) {
        if (data == null || data == undefined || data == "empty")
            return 0
        else
            return data.split(",").map(Number)
    }


    function test()
    {
        var data1 = '160,591,114,229,230,270,128,1657,624,1503';
        var data2 = '15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2';
        var data3 = '186,699,132,272,291,331,199,1890,788,1601';
        _test = [
            data1,
            data2,
            data3
        ]        
        $('#input_numbers').val(_test[i])
        calculate(_test[i])
        if(i < (_test.length - 1 ))
            i++
        else 
            i = 0
    }



});